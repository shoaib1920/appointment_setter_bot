/*
 * Appointment setter widget — add to ANY existing website with one line before </body>:
 *   <script src="https://YOUR-HOST/embed.js" defer></script>
 * It loads index.html?embed=1 in a small iframe in the bottom-right corner and resizes it
 * as the chat opens and closes, so it never blocks the host page or clashes with its CSS.
 */
(function () {
  if (window.__gpWidget) return;
  window.__gpWidget = true;

  var script = document.currentScript;
  var base = script ? script.src.replace(/[^\/]*$/, "") : "";
  var mobile = function () { return window.innerWidth < 640; };

  var frame = document.createElement("iframe");
  frame.src = base + "index.html?embed=1&pw=" + window.innerWidth;
  frame.title = "Book a consultation";
  frame.setAttribute("allowtransparency", "true");
  var s = frame.style;
  s.position = "fixed"; s.right = "0"; s.bottom = "0"; s.border = "0";
  s.background = "transparent"; s.colorScheme = "normal"; s.zIndex = "2147483000";
  s.width = "110px"; s.height = "110px"; s.maxWidth = "100vw"; s.maxHeight = "100vh";

  var size = function (state) {
    s.borderRadius = "0"; s.boxShadow = "none"; s.right = "0"; s.bottom = "0";
    if (state === "open") {
      if (mobile()) { s.width = "100vw"; s.height = "100vh"; }
      else {
        s.width = "400px"; s.height = "min(680px, calc(100vh - 48px))";
        s.right = "24px"; s.bottom = "24px"; s.borderRadius = "24px";
        s.boxShadow = "0 30px 80px -20px rgba(10,26,58,.55)";
      }
    } else if (state === "peek") { s.width = "320px"; s.height = "260px"; }
    else { s.width = "110px"; s.height = "110px"; }
  };

  window.addEventListener("message", function (e) {
    if (e.source !== frame.contentWindow || !e.data || e.data.type !== "gp-widget") return;
    size(e.data.state);
  });

  var mount = function () { document.body.appendChild(frame); };
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
