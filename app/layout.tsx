import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner";
import NavbarWrapper from "@/components/NavbarWrapper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM - SpikeChallenge",
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
          "h-svh box-content bg-gray-100 font-sans antialiased flex w-screen overflow-hidden",
          fontSans.variable
        )}
      >
        <div className="flex-col flex sm:flex-row sm:py-8 sm:pl-4 pr-0 sm:gap-x-8 flex-1 w-full">
          <NavbarWrapper></NavbarWrapper>
          <div className="flex h-full overflow-hidden w-full">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
