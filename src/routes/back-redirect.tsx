import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/back-redirect")({
  head: () => routeMeta("Release Reward | Task Partners", "Continue securely to release your Task Partners reward."),
  component: BackRedirect,
});

function BackRedirect() {
  // The cloned app renders the actual back-redirect offer screen into #cloned-root.
  // This TanStack route must stay mounted and do nothing so that screen is not replaced by a blank redirect.
  return null;
}
