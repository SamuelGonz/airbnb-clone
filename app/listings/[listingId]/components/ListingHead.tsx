import { FC } from "react";
import Image from "next/image";

import { Heading } from "@/app/components/Heading";
import { useCountries } from "@/app/hooks";
import { SafeUser } from "@/app/types";
import { HeartButton } from "@/app/components/HeartButton";

interface Props {
   title: string;
   imageSrc: string;
   locationValue: string;
   id: string;
   currentUser?: SafeUser | null;
}

export const ListingHead: FC<Props> = ({ id, imageSrc, locationValue, title, currentUser }) => {
   const { getByValue } = useCountries();
   const location = getByValue(locationValue);

   return (
      <>
         <Heading title={title} subTitle={`${location?.region}, ${location?.label}`} />
         <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
            <Image alt="Image" src={imageSrc} fill className="object-cover w-full" />
         </div>
         <div className="absolute top-5 right-5">
            <HeartButton listingId={id} currentUser={currentUser || null} />
         </div>
      </>
   );
};
