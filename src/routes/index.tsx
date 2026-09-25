import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => routeMeta("TikTok Rewards UK", "Claim your TikTok reward in pounds and receive payment through supported UK payout methods."),
  component: Index,
});

function Index() {
  return null;
}
