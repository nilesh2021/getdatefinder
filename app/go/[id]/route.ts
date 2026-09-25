import { notFound, redirect } from "next/navigation";
import { getOfferById } from "@/lib/offers";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/** Cloak the affiliate URL. The browser only ever sees /go/[id]. */
export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const offer = getOfferById(id);

  if (!offer) {
    notFound();
  }

  redirect(offer.url);
}
