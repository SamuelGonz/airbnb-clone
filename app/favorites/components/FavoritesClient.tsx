import { Container } from "@/app/components/Container";
import { Heading } from "@/app/components/Heading";
import { ListingCard } from "@/app/components/listings/ListingCard";
import { SafeListing, SafeUser } from "@/app/types";
import { FC } from "react";

interface Props {
   listings: SafeListing[];
   currentUser?: SafeUser | null;
}

export const FavoritesClient: FC<Props> = ({ listings, currentUser }) => {
   return (
      <Container>
         <Heading title="Favorites" subTitle="List of places you have favorited!" />
         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => (
               <ListingCard key={listing.id} data={listing} currentUser={currentUser} />
            ))}
         </div>
      </Container>
   );
};
