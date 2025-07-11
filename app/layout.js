import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "../public/ARJ.png"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Areej Abumuhfouz | Portfolio",
  description: "Welcome to the official portfolio of Areej Abumuhfouz — a full-stack web developer specializing in modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" type="image/png" href="/ARJ.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
     
  );
}
