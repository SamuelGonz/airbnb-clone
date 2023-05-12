import { ReactNode } from "react";
import { Nunito } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import ClienteOnly from "./components/ClientOnly";

import { RegisterModal } from "./components/modals/RegisterModal";
import { LoginModal } from "./components/modals/LoginModal";

import { ToasterProvider } from "./providers/ToasterProvider";

import "./globals.css";
import getCurrentUser from "./actions/getCurrentuser";

export const metadata = {
   title: "AirBnb Clone",
   description: "Practice nextjs",
};

const font = Nunito({
   subsets: ["latin"],
});

export default async function RootLayout({ children }: { children: ReactNode }) {
   const currentUser = await getCurrentUser();

   return (
      <html lang="en">
         <body className={font.className}>
            <ClienteOnly>
               <ToasterProvider />
               <RegisterModal />
               <LoginModal />
               <Navbar currentUser={currentUser} />
            </ClienteOnly>
            {children}
         </body>
      </html>
   );
}
