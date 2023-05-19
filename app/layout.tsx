import { ReactNode } from "react";
import { Nunito } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import ClienteOnly from "./components/ClientOnly";

// Modals
import { RegisterModal } from "./components/modals/RegisterModal";
import { LoginModal } from "./components/modals/LoginModal";
import { RentModal } from "./components/modals/RentModal";

import { ToasterProvider } from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentuser";

import "./globals.css";

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
            {/* <ClienteOnly> */}
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
            {/* </ClienteOnly> */}
            <div className="pb-20 pt-28">{children}</div>
         </body>
      </html>
   );
}
