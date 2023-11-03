import { Inter } from "next/font/google";
import { Test } from "./testferian";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Lets start from here!</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <p>wakakaakakaka</p>
    </main>
  );
}
