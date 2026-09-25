import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/upsell-5")({
  head: () => routeMeta("Task Partners Offer Five", "Review your fifth Task Partners member offer."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
