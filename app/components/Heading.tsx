"use client";

import { FC } from "react";

interface Props {
   title: string;
   subTitle?: string;
   center?: boolean;
}

export const Heading: FC<Props> = ({ title, subTitle, center }) => {
   return (
      <div className={`${center ? "text-center" : "text-start"}`}>
         <div className="text-2xl font-bold">{title}</div>
         <div className="font-white text-neutral-500 mt-2">{subTitle}</div>
      </div>
   );
};
