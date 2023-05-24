"use client";
import { FC } from "react";

import { Range } from "react-date-range";
import { Calendar } from "./Calendar";
import { Button } from "@/app/components/Button";
interface Props {
   price: number;
   totalPrice: number;
   onChangeDate: (value: Range) => void;
   dateRange: Range;
   onSubmit: () => void;
   disabled?: boolean;
   disabledDates: Date[];
}

export const ListingReservation: FC<Props> = ({
   dateRange,
   disabled,
   disabledDates,
   onChangeDate,
   onSubmit,
   price,
   totalPrice,
}) => {
   return (
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
         <div className="flex flex-row items-center gap-1 p-4">
            <div className="text-2xl font-semibold">$ {price}</div>
            <div className="font-light text-neutral-600">night</div>
         </div>
         <hr />
         <Calendar
            value={dateRange}
            disabledDates={disabledDates}
            onChange={(value) => onChangeDate(value.selection)}
         />
         <hr />
         <div className="p-4">
            <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
         </div>
         <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
            <div>Total</div>
            <div>${totalPrice}</div>
         </div>
      </div>
   );
};
