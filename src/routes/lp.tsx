import { createFileRoute } from "@tanstack/react-router";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/lp")({
  head: () => routeMeta("Task Partners Access", "Get access to the Task Partners productivity and review workspace."),);

function LpRoute() {
  return (
    <iframe
      src="/lp-page/index.html"
      title="Task Partners"
      style={{ width: "100%", minHeight: "100dvh", border: 0, display: "block", background: "#F8FAFC" }}
    />
  );
}
