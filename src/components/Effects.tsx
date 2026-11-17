"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Reveal-on-scroll, including nodes streamed in after navigation. */
function useReveal() {
  const pathname = usePathname();
  const first = useRef(true);
  const fromHistory = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io =
      reduce || !("IntersectionObserver" in window)
        ? null
        : new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  io?.unobserve(entry.target);
                }
              }
            },
            { rootMargin: "0px 0px -6% 0px", threshold: 0 },
          );

    const scan = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
        if (io) io.observe(el);
        else el.classList.add("is-visible");
      });
      root.querySelectorAll<HTMLElement>("[data-scroll-end]").forEach((el) => {
        el.scrollLeft = el.scrollWidth;
      });
    };
    scan(document);

    // Fallback: React may reset the class after the observer fired.
    let pending = 0;
    const sweep = () => {
      pending = 0;
      const limit = window.innerHeight * 0.94;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < limit && (r.bottom > 0 || r.top < 0)) el.classList.add("is-visible");
      });
    };
    const schedule = () => {
      if (!pending) pending = requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    const mo = new MutationObserver((records) => {
      schedule();
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches("[data-reveal]:not(.is-visible)")) {
            if (io) io.observe(node);
            else node.classList.add("is-visible");
          }
          scan(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    const onPop = () => {
      fromHistory.current = true;
    };
    window.addEventListener("popstate", onPop);

    return () => {
      io?.disconnect();
      mo.disconnect();
      if (pending) cancelAnimationFrame(pending);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  // Links open at the top; back/forward keeps the position.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (fromHistory.current) {
      fromHistory.current = false;
      return;
    }
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
}

/** Reveal-on-scroll and scroll restoration; no visual layer of its own. */
export function Effects() {
  useReveal();
  return null;
}
