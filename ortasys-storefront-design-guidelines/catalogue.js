(() => {
  "use strict";
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  const elements = [...document.querySelectorAll("[data-reveal]")];
  const revealed = new WeakSet();
  const running = new Map();
  const artwork = document.querySelector(".hero-art");
  let observer;

  function configureMotion() {
    observer?.disconnect();
    for (const animation of running.values()) animation.cancel();
    artwork?.classList.remove("is-in-view");
    if (
      preference.matches ||
      !("IntersectionObserver" in window) ||
      !Element.prototype.animate
    )
      return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target;
          if (element === artwork)
            element.classList.toggle("is-in-view", entry.isIntersecting);
          if (!entry.isIntersecting || revealed.has(element)) continue;
          revealed.add(element);
          if (element !== artwork) observer.unobserve(element);
          const animation = element.animate(
            [
              { opacity: 0, transform: "translateY(22px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 720,
              delay: Number(element.dataset.reveal) || 0,
              easing: "cubic-bezier(.22,1,.36,1)",
              fill: "backwards",
            },
          );
          running.set(element, animation);
          animation.onfinish = animation.oncancel = () =>
            running.delete(element);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -16px 0px" },
    );
    for (const element of elements) {
      if (!revealed.has(element) || element === artwork)
        observer.observe(element);
    }
  }

  // Keyboard focus must never wait for a reveal animation to finish.
  document.addEventListener("focusin", (event) => {
    const element = event.target.closest("[data-reveal]");
    if (!element) return;
    revealed.add(element);
    if (element !== artwork) observer?.unobserve(element);
    running.get(element)?.cancel();
  });
  preference.addEventListener("change", configureMotion);
  configureMotion();
})();
