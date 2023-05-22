import { FC } from "react";
import { IconType } from "react-icons";
import { Avatar } from "@/app/components/Avatar";

import { useCountries } from "@/app/hooks";
import { SafeUser } from "@/app/types";

import { ListingCategory } from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/Map"), {
   ssr: false,
});

type Icon = {
   icon: IconType;
   label: string;
   description: string;
};

interface Props {
   bathroomCount: number;
   category: Icon | undefined;
   description: string;
   guestCount: number;
   locationValue: string;
   roomCount: number;
   user: SafeUser;
}

export const ListingInfo: FC<Props> = ({
   bathroomCount,
   category,
   description,
   guestCount,
   locationValue,
   roomCount,
   user,
}) => {
   const { getByValue } = useCountries();

   const coordinates = getByValue(locationValue)?.latlng;

   return (
      <div className="col-span-4 flex flex-col gap-8">
         <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold flex flex-row items-center gap-2">
               <div>Hosted by {user?.name}</div>
               <Avatar src={user?.image} />
            </div>
            <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
               <div>{guestCount} guests</div>
               <div>{roomCount} rooms</div>
               <div>{bathroomCount} bathrooms</div>
            </div>
         </div>
         <hr />
         {category && (
            <ListingCategory icon={category.icon} label={category.label} description={category.description} />
         )}

         <hr />

         <div className="text-lg font-light text-neutral-500">{description}</div>

         <hr />
         <Map center={coordinates} />
      </div>
   );
};
