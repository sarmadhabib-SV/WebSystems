/* Shared JS used across pages */
(function () {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Navbar active link
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav] a.nav-link").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("/").pop();
    if (href === here) a.classList.add("active");
  });

  // Tiny scroll affordance: show back-to-top after scrolling a bit
  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    const onScroll = () => {
      backToTop.style.opacity = window.scrollY > 320 ? "1" : "0";
      backToTop.style.pointerEvents = window.scrollY > 320 ? "auto" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();

