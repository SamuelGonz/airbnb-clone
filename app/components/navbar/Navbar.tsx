"use client";

import { Container } from "../Container";
// import { Logo, Search, Categories } from "./";
import UserMenu from "./UserMenu";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Categories } from "./Categories";

import type { SafeUser } from "@/app/types";

interface Props {
   currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: Props) => {
   return (
      <div className="fixed w-full bg-white z-10 shadow-sm">
         <div className="py-4 border-b-[1px]">
            <Container>
               <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
                  <Logo />
                  <Search />
                  <UserMenu currentUser={currentUser} />
               </div>
            </Container>
         </div>
         <Categories />
      </div>
   );
};

export default Navbar;
