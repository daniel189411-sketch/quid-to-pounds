import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/resgatar")({
  head: () => routeMeta("Redeem Rewards | Task Partners", "Redeem your Task Partners rewards in pounds sterling."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
