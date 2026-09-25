// When the user clicks RELEASE on /confirmar-saque or /back-redirect, redirect straight to
// the Vendepay checkout. No back-redirect history push.
(function () {
  if (window.__checkoutEmbedVersion === 14) return;
  window.__checkoutEmbedVersion = 14;

  var CHECKOUT_URL = "https://checkout.vendepay.com/a840e80d-25b8-4cd4-a9a1-c0d246e846a0";

  function onEmbedRoute() {
    return window.location.pathname === "/confirmar-saque" ||
           window.location.pathname === "/back-redirect";
  }

  function buildCheckoutURL() {
    try {
      if (typeof window.forwardParamsToCheckout === "function") {
        var url = window.forwardParamsToCheckout(CHECKOUT_URL);
        if (url) return url;
      }
    } catch (e) {}
    if (window.location.search) {
      return CHECKOUT_URL + (CHECKOUT_URL.indexOf("?") >= 0 ? "&" : "?") + window.location.search.slice(1);
    }
    return CHECKOUT_URL;
  }

  document.addEventListener(
    "click",
    function (event) {
      if (!onEmbedRoute()) return;
      var target = event.target;
      if (!target || !target.closest) return;
      var btn = target.closest("button");
      if (!btn) return;
      var text = (btn.textContent || "").trim();
      if (!/^RELEASE\s*£[\d.,]++/i.test(text)) return;
      event.preventDefault();
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === "function") {
        event.stopImmediatePropagation();
      }
      window.location.href = buildCheckoutURL();
    },
    true
  );
})();
