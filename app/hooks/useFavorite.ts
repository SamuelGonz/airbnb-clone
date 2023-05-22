import { MouseEvent, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";
import { useLoginModal } from "./useLoginModal";

interface IUseFavorite {
   listingId: string;
   currentUser?: SafeUser | null;
}

export const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
   const router = useRouter();
   const loginModal = useLoginModal();

   const hasFavorited = useMemo(() => {
      const list = currentUser?.favoriteIds || [];

      return list.includes(listingId);
   }, [currentUser, listingId]);

   const toggleFavorite = useCallback(
      async (e: MouseEvent<HTMLDivElement>) => {
         e.stopPropagation();

         if (!currentUser) {
            loginModal.onOpen();
            return false;
         }

         try {
            let request;
            if (hasFavorited) {
               request = () => axios.delete(`/api/favorites/${listingId}`);
            } else {
               request = () => axios.post(`/api/favorites/${listingId}`);
            }

            const resp = await request();
            if (resp.status === 200) {
               router.refresh();
               toast.success("Success");
               return true;
            } else {
               toast.error("Somtething went wrong");
               return false;
            }
         } catch (error) {
            toast.error("Something went wrong.");
            return false;
         }
      },
      [currentUser, hasFavorited, listingId, router, loginModal]
   );

   return { hasFavorited, toggleFavorite };
};
