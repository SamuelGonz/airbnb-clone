import { ReactNode } from "react";
import { Nunito } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import ClienteOnly from "./components/ClientOnly";
import { RegisterModal } from "./components/modals/RegisterModal";

import "./globals.css";

export const metadata = {
   title: "AirBnb Clone",
   description: "Practice nextjs",
};

const font = Nunito({
   subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <body className={font.className}>
            <ClienteOnly>
               <RegisterModal />
               <Navbar />
            </ClienteOnly>
            {children}
         </body>
      </html>
   );
}
