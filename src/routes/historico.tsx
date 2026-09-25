import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/historico")({
  head: () => routeMeta("Reward History | Task Partners", "View your Task Partners review and reward history in pounds."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
