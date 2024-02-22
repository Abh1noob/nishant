"use client"

import { usePathname } from "next/navigation";
import "@/styles/globals.css";
import SideNav from "@/components/sidenav";
import { Inter } from "next/font/google";
import ProfileBar from "@/components/profilebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSignInRoute = pathname === "/sign-up" || pathname === "/login";

  return (
    <html lang="en">
      <body className={`flex font-sans bg-[#F9F9FC] ${inter.variable}`}>
        {!isSignInRoute && <SideNav />}
        <div className="h-full w-full bg-[#F9F9FC]">
          {!isSignInRoute && <ProfileBar />}
          {children}
        </div>
      </body>
    </html>
  );
}
