import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/upsell-2")({
  head: () => routeMeta("Task Partners Offer Two", "Review your second Task Partners member offer."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
