import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { CounterContextProvider } from "@/context/counter.context";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WOOKIES MOVIES",
  description: "Generated wookies movies next app",
  icons: {
    icon:[
      '/logo.jpg'
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterContextProvider>
          <Header />
          {children}
          <Footer/>
        </CounterContextProvider>
      </body>
    </html>
  );
}
