"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const specs = [
  { label: "Installation Time", value: "2-7", unit: "Days" },
  { label: "Weather Rating", value: "-40 / +60", unit: "°C" },
  { label: "Load Capacity", value: "15", unit: "Tonnes" },
  { label: "Customization", value: "100", unit: "%" },
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
          <p className="eyebrow mb-10 text-center text-background/50">
            06 — On Site With WISLUCK
          </p>
          <div
            ref={videoRef}
            className="bracket-frame bracket-visible relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden shadow-2xl md:max-w-md"
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

      {/* Spec Plate — nameplate-style readout of the numbers that actually
          differentiate a fabricated steel unit from a generic cabin */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec, i) => (
          <div
            key={spec.label}
            className="group relative border-b border-r border-border p-8 text-center last:border-r-0 even:border-r-0 md:border-b-0 md:even:border-r"
          >
            <span className="eyebrow absolute left-3 top-3 text-foreground/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="eyebrow mb-3 text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-display text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-primary">{spec.value}</span>
              <span className="ml-1 font-mono text-lg font-medium text-muted-foreground md:text-xl">
                {spec.unit}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
