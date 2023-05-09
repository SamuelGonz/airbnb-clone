"use client";

import { FC, MouseEvent } from "react";
import { IconType } from "react-icons";

interface Props {
   label: string;
   onClick: (e: MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   outline?: boolean;
   small?: boolean;
   icon?: IconType;
}

export const Button: FC<Props> = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
         ${outline ? "bg-white" : "bg-rose-500"}
         ${outline ? "border-black" : "border-rose-500"}
         ${outline ? "text-black" : "text-white"}
         ${small ? "py-1" : "py-3"}
         ${small ? "text-sm" : "text-md"}
         ${small ? "font-light" : "font-semibold"}
         ${small ? "border" : "border-2"}
      `}
      >
         {Icon && <Icon size={small ? 12 : 24} className="absolute left-4 top-1/2 -translate-y-1/2" />}
         {label}
      </button>
   );
};
