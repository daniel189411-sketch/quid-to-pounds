import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/inicio")({
  head: () => routeMeta("TikTok Rewards UK", "Review creator content and track your rewards in pounds sterling."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
