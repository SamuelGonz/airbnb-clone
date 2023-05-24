import React from "react";

import { ListingClient } from "./components/ListingClient";
import { EmptyState } from "@/app/components/EmptyState";

import getListingById from "@/app/actions/getListingById";
import getCurrentUser from "@/app/actions/getCurrentuser";
import getReservations from "@/app/actions/getReservations";

interface IParams {
   listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
   const listing = await getListingById(params);
   const reservations = await getReservations(params);
   const currentUser = await getCurrentUser();

   if (!listing) {
      return <EmptyState />;
   }
   return (
      <>
         <ListingClient listing={listing} currentUser={currentUser} reservations={reservations} />
      </>
   );
};

export default ListingPage;
