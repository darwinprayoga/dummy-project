import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  const urlToCapture = Array.isArray(url) ? url[0] : url;

  let browser;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1200 });
    await page.goto(urlToCapture);

    const screenshotBuffer = await page.screenshot({ type: "png" });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", `attachment; filename=screenshot.png`);

    res.status(200).send(screenshotBuffer);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
