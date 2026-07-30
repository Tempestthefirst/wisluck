"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollRevealProps {
  children: ReactNode;
  /** CSS selector (scoped to this container) for the elements to stagger-reveal.
   *  Defaults to direct children. */
  targets?: string;
  className?: string;
  /** Delay between each staggered child, in seconds. Keep small — the skill's
   *  own guidance caps this around 0.08s and warns against staggering more
   *  than ~8 items. */
  stagger?: number;
  y?: number;
}

/**
 * Fades + lifts content in as it enters the viewport. Built from the
 * "Scroll Reveal / Standard" pattern: opacity 0 -> 1, y 24 -> 0, power2.out,
 * ScrollTrigger start 'top 85%', scoped to the container so it doesn't
 * re-scan the whole page.
 */
export function ScrollReveal({
  children,
  targets,
  className,
  stagger = 0.08,
  y = 24,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const els = targets
        ? containerRef.current?.querySelectorAll(targets)
        : containerRef.current?.children;

      if (!els || els.length === 0) return;

      const tween = gsap.from(els, {
        opacity: 0,
        y,
        duration: 0.5,
        stagger: Math.min(stagger, 0.1),
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Failsafe: this animation starts elements at opacity 0 and relies on
      // ScrollTrigger to reveal them. If the trigger never fires for any
      // reason (a miscalculated position, a layout race, anything) real
      // content — contact info, form fields — would be stuck invisible
      // with no way for a visitor to know it's there. Watch for the
      // container actually entering the viewport and, if it's still
      // hidden shortly after, force full visibility. Gated on actual
      // visibility (not a blind timer) so this never fires early and
      // wrongly reveals content that's legitimately still below the fold.
      let failsafeTimer: ReturnType<typeof setTimeout> | null = null;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            failsafeTimer = setTimeout(() => {
              if (gsap.getProperty(els[0], "opacity") === 0) {
                gsap.set(els, { opacity: 1, y: 0 });
              }
            }, 800);
          }
        },
        { threshold: 0 }
      );
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (failsafeTimer) clearTimeout(failsafeTimer);
        observer.disconnect();
        tween.scrollTrigger?.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
