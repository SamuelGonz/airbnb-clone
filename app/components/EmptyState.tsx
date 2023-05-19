"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
import { Button } from "./Button";

interface Props {
   title?: string;
   subtitle?: string;
   showReset?: boolean;
}

export const EmptyState: FC<Props> = ({
   showReset,
   subtitle = "Try changing or removing some of your filters",
   title = "No exact matches",
}) => {
   const router = useRouter();

   return (
      <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
         <Heading title={title} subTitle={subtitle} center />
         <div className="w-48 mt-4 ">
            {showReset && <Button outline label="Remove all filters" onClick={() => router.push("/")} />}
         </div>
      </div>
   );
};
