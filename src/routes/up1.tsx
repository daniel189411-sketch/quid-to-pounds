import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/up1")({
  head: () => routeMeta("Task Partners Special Offer", "Review the current Task Partners special offer."),);

function Up1Redirect() {
  useEffect(() => {
    window.location.replace(`/up1/index.html${window.location.search}${window.location.hash}`);
  }, []);

  return (
    <main className="grid min-h-dvh place-items-center bg-white px-5 text-center text-slate-950">
      <p className="text-sm font-bold">Loading...</p>
    </main>
  );
}
