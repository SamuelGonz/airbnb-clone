"use client";
import { FC, useCallback, useMemo } from "react";
import type { MouseEvent } from "react";
import { Listing, Reservation } from "@prisma/client";
import { format } from "date-fns";

import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCountries } from "@/app/hooks";
import Image from "next/image";
import { HeartButton } from "../HeartButton";
import { Button } from "../Button";

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

   const price = useMemo(() => {
      //   if (reservation) return reservation.total;
      //   return data.price;
      return reservation ? reservation.total : data.price;
   }, [reservation, data.price]);

   const reservationDate = useMemo(() => {
      if (!reservation) return null;

      const start = new Date(reservation.startDate);
      const end = new Date(reservation.endDate);

      return `${format(start, "PP")} - ${format(end, "PP")}`;
   }, [reservation]);

   return (
      <div onClick={() => router.push(`/listings/${data.id}`)} className="col-span-1 cursor-pointer group">
         <div className="flex flex-col gap-2 w-full">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
               <Image
                  src={data.imageSrc}
                  alt="Listing"
                  className="object-cover h-full w-full group-hover:scale-110 transition"
                  fill
               />
               <div className="absolute top-3 right-3">
                  <HeartButton listingId={data.id} currentUser={currentUser || null} />
               </div>
            </div>
            <div className="font-semibold text-lg ">
               {location?.region}, {location?.label}
            </div>
            <div className="font-light text-neutral-500">{reservationDate || data.category}</div>
            <div className="flex flex-row items-center gap-1">
               <div className="font-semibold">$ {price}</div>
               {!reservation && <div className="font-light">night</div>}
            </div>
            {onAction && actionLabel && <Button disabled={disabled} small label={actionLabel} onClick={handleCancel} />}
         </div>
      </div>
   );
};
