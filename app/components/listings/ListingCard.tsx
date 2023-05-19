"use client";
import { FC, useCallback } from "react";
import type { MouseEvent } from "react";
import { Listing, Reservation } from "@prisma/client";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCountries } from "@/app/hooks";

interface Props {
   actionId?: string;
   actionLabel?: string;
   currentUser?: SafeUser | null;
   data: Listing;
   disabled?: boolean;
   onAction?: (id: string) => void;
   reservation?: Reservation;
}

export const ListingCard: FC<Props> = ({
   actionId = "",
   actionLabel,
   currentUser,
   data,
   disabled,
   onAction,
   reservation,
}) => {
   const router = useRouter();
   const { getByValue } = useCountries();

   const location = getByValue(data.locationValue);

   const handleCancel = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
         e.stopPropagation();
         if (disabled) return;

         onAction?.(actionId);
      },
      [onAction, actionId, disabled]
   );

   return <div>ListingCard</div>;
};
