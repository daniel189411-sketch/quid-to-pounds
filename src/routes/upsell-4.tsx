import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/upsell-4")({
  head: () => routeMeta("Task Partners Offer Four", "Review your fourth Task Partners member offer."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
