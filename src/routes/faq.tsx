import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => routeMeta("Help and FAQs | Task Partners", "Find answers about Task Partners rewards, reviews and UK payments."),
  component: CloneRoute,
});

function CloneRoute() {
  return null;
}
