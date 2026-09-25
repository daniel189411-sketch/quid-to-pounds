import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeMeta } from "@/lib/seo";

export const Route = createFileRoute("/desbloquear-saque")({
  head: () => routeMeta("Unlock Withdrawal | Task Partners", "Continue to confirm your Task Partners withdrawal."),
  component: UnlockScreen,
});

function UnlockScreen() {
  useEffect(() => {
    window.location.replace("/confirmar-saque" + window.location.search);
  }, []);

  return null;
}
