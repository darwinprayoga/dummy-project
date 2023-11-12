import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`bg-white sticky top-0 z-50 ${inter.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
