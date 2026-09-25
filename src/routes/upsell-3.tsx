import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/upsell-3")({
  head: () => routeMeta("Task Partners Offer Three", "Review your third Task Partners member offer."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
