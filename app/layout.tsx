import { ReactNode } from "react";
import { Nunito } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import ClienteOnly from "./components/ClientOnly";
import { Modal } from "./components/modals/Modal";

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
               <Modal isOpen />
               <Navbar />
            </ClienteOnly>
            {children}
         </body>
      </html>
   );
}
