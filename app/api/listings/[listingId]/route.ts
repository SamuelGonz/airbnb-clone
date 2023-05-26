import getCurrentUser from "@/app/actions/getCurrentuser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
   listingId?: string;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
   const currentUser = await getCurrentUser();
   if (!currentUser) return new Response(null, { status: 301 });

   const { listingId } = params;
   if (!listingId || typeof listingId !== "string") throw new Error("Invalid ID");

   const listing = await prisma.listing.deleteMany({
      where: {
         id: listingId,
         userId: currentUser.id,
      },
   });

   return NextResponse.json(listing);
}
