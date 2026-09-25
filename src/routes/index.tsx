import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TikTok Rewards" },
      { name: "description", content: "Claim your TikTok reward and get paid instantly to PayPal, Faster Payments, Revolut, or your UK bank." },
      { property: "og:title", content: "TikTok Rewards" },
      { property: "og:description", content: "Claim your TikTok reward and get paid instantly to PayPal, Faster Payments, Revolut, or your UK bank." },
    ],
  }),
  component: Index,
});

function Index() {
  return null;
}
