"use client";

import { FC } from "react";

interface Props {
   onClick: () => void;
   label: string;
}

export const MenuItem: FC<Props> = ({ onClick, label }) => {
   return (
      <div
         onClick={onClick}
         className="px-4 
         py-3 
         hover:bg-neutral-100
         transition
         font-semibold
   "
      >
         {label}
      </div>
   );
};
