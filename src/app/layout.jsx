import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ceylon Wild Escapes",
    template: "%s | Ceylon Wild Escapes"
  },
  description: "Premium wildlife tours and photography expeditions in Sri Lanka.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* ⬅️ This appears on every page */}
        <main>{children}</main>
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
