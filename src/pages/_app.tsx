import "@/styles/globals.css";

import { getCookie } from "cookies-next";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const theme = getCookie('theme')

export default function App({ Component, pageProps }: AppProps) {
  const theme = getCookie('theme')
  useEffect(() => {
    if (theme == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
