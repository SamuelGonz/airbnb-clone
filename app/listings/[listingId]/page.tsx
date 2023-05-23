import React from "react";

import getListingById from "@/app/actions/getListingById";
import { EmptyState } from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentuser";
import { ListingClient } from "./components/ListingClient";

interface IParams {
   listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
   const listing = await getListingById(params);
   const currentUser = await getCurrentUser();

   if (!listing) {
      return (
         <>
            <EmptyState />
         </>
      );
   }
   return (
      <>
         <ListingClient listing={listing} currentUser={currentUser} />
      </>
   );
};

export default ListingPage;
