"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const specs = [
  { label: "Installation Time", value: "2-7 Days" },
  { label: "Weather Rating", value: "-40 to +60°C" },
  { label: "Load Capacity", value: "Up to 15T" },
  { label: "Customization", value: "100%" },
];

export function EditorialSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return;
    
    const rect = videoRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate when video enters and exits viewport
    const videoTop = rect.top;
    const videoBottom = rect.bottom;
    
    // Progress from 0 (entering viewport) to 1 (exiting viewport)
    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress = 1 - (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateParallax]);

  // Parallax effect: video moves up as you scroll down
  const parallaxY = (scrollProgress - 0.5) * 20; // subtle drift range

  return (
    <section className="bg-background">
      {/* On-Site Video - shown in its native portrait format rather than */}
      {/* force-cropped into a wide banner, so none of the footage is lost */}
      <div className="bg-foreground px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-center text-xs uppercase tracking-widest text-background/60">
            On Site With WISLUCK
          </p>
          <div
            ref={videoRef}
            className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl md:max-w-md"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                transform: `scale(1.08) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
                WebkitTransform: `scale(1.08) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
              src="/videos/wisluck-onsite.mp4"
            />
          </div>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-5xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
