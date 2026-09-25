import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/upsell-1")({
  head: () => routeMeta("Task Partners Offer One", "Review your first Task Partners member offer."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
