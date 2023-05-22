import { FC, MouseEvent, useState } from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "../hooks";
import { useRouter } from "next/navigation";

interface Props {
   listingId: string;
   currentUser: SafeUser | null;
}

export const HeartButton: FC<Props> = ({ listingId, currentUser }) => {
   const [isFavorite, setIsFavorite] = useState(!!currentUser?.favoriteIds.find((id) => id === listingId));
   const router = useRouter();
   const { hasFavorited, toggleFavorite } = useFavorite({ currentUser, listingId });

   const handleToglle = async (e: MouseEvent<HTMLDivElement>) => {
      setIsFavorite(!isFavorite);
      const res = await toggleFavorite(e);
      if (!res) {
         setIsFavorite(!isFavorite);
         router.refresh();
      }
   };

   return (
      <div onClick={handleToglle} className="relative hover:opacity-80 transition cursor-pointer">
         <AiOutlineHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]" />
         <AiFillHeart size={24} className={`${isFavorite ? "fill-rose-500" : "fill-neutral-500/70"}`} />
      </div>
   );
};
