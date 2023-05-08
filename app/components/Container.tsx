"use client";

import { FC, ReactNode } from "react";

interface Props {
   children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
   return <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</div>;
};
