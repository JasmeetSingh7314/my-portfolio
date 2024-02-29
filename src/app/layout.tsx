import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi!👋",
  description: "Welcome to my profile!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${urbanist.className}  `}>
      <body className=" ">
        <div className=" md:px-16 px-4 py-2 lg:px-12 xl:px-20 2xl:px-24 extra:px-48 h-screen justify-between  flex flex-col ">
          <NavbarComponent />
          <div className="cursor pointer-events-none hidden md:block fixed left-0 top-0 transition transform bg-opacity-40 bg-white w-[15px] h-[15px] z-50 rounded-full"></div>

          <Providers>{children}</Providers>

          <Footer />
        </div>
      </body>
    </html>
  );
}
