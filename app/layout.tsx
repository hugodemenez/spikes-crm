import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen box-content bg-gray-100 font-sans antialiased flex",
          fontSans.variable
        )}
      >
        <div className="flex p-12 gap-x-8 flex-1">
          <Navbar></Navbar>
          <div className="h-full overflow-hidden w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
