import { EmptyState } from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentuser";
import { getFavoriteListigns } from "../actions/getFavoriteListings";
import { FavoritesClient } from "./components/FavoritesClient";

const FavoritePage = async () => {
   const currentUser = await getCurrentUser();
   const listings = await getFavoriteListigns();

   if (listings.length === 0)
      return <EmptyState title="No favorites found" subtitle="Looks like you have no favorite listing" />;

   return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default FavoritePage;
