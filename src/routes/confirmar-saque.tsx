import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/confirmar-saque")({
  head: () => routeMeta("Confirm Withdrawal | Task Partners", "Confirm your Task Partners withdrawal in pounds sterling."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
