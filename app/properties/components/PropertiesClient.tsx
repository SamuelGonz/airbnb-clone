"use client";
import { FC, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-hot-toast";

import type { SafeListing, SafeUser } from "@/app/types";

import { Container } from "@/app/components/Container";
import { Heading } from "@/app/components/Heading";
import { ListingCard } from "@/app/components/listings/ListingCard";

interface Props {
   currentUser?: SafeUser | null;
   listings: SafeListing[];
}

export const PropertiesClient: FC<Props> = ({ currentUser, listings }) => {
   const router = useRouter();
   const [deletingId, setDeletingId] = useState("");

   const onCancel = useCallback(
      (id: string) => {
         setDeletingId(id);
         axios
            .delete(`/api/listings/${id}`)
            .then(() => {
               toast.success("Listings deleted");
               router.refresh();
            })
            .catch((e) => toast.error(e?.response?.data?.error))
            .finally(() => setDeletingId(""));
      },
      [router]
   );

   return (
      <Container>
         <Heading title="Properties" subTitle="List of your properties" />
         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => (
               <ListingCard
                  key={listing.id}
                  data={listing}
                  actionId={listing.id}
                  onAction={onCancel}
                  disabled={deletingId === listing.id}
                  actionLabel="Delete property"
                  currentUser={currentUser}
               />
            ))}
         </div>
      </Container>
   );
};
