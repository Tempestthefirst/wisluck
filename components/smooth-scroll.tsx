"use client";

import { useEffect, useRef, useState } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const update = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const onScroll = () => ScrollTrigger.update();
    lenisRef.current?.lenis?.on("scroll", onScroll);

    // ScrollTrigger positions are calculated from layout as it exists at
    // the moment each trigger is created. Images loading after that (very
    // common — this site is image-heavy) shift the page height and can
    // leave trigger start/end points stale, which can strand
    // scroll-revealed content at opacity: 0 permanently. Recalculate once
    // everything has actually finished loading, and again shortly after
    // as a second pass for any late-loading assets.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const fallbackRefresh = setTimeout(refresh, 1500);

    return () => {
      gsap.ticker.remove(update);
      lenisRef.current?.lenis?.off("scroll", onScroll);
      window.removeEventListener("load", refresh);
      clearTimeout(fallbackRefresh);
    };
  }, [reduceMotion]);

  // Respect prefers-reduced-motion: skip smoothing entirely and let the
  // browser's native (instant) scroll take over.
  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        autoRaf: false,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
