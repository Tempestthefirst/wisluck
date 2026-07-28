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

      gsap.from(els, {
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
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
