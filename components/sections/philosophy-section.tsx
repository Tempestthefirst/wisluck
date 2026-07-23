"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const titles = [
  "Modular Excellence.",
  "Durable Solutions.",
  "Built to Last.",
];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [titleOpacity, setTitleOpacity] = useState(0);
  const [descriptionProgress, setDescriptionProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Title rotates through 3 texts based on scroll progress
    setTitleOpacity(progress);

    // Description word animation
    if (descriptionRef.current) {
      const descRect = descriptionRef.current.getBoundingClientRect();
      const descTop = descRect.top;
      const descHeight = descRect.height;
      
      // Start animation when element enters viewport
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;
      
      if (descTop < startTrigger && descTop > endTrigger - descHeight) {
        const descProgress = Math.max(0, Math.min(1, (startTrigger - descTop) / (startTrigger - endTrigger)));
        setDescriptionProgress(descProgress);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="products" className="bg-background">
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl px-4">
            {/* Title - centered with 3D rotation */}
            <div 
              className="flex items-center justify-center pointer-events-none"
              style={{ 
                perspective: '1000px',
              }}
            >
              <div className="relative w-full" style={{ transformStyle: 'preserve-3d', minHeight: '150px' }}>
                {titles.map((title, index) => {
                  // Last text "Built to last" stays visible at the end
                  const isLastText = index === titles.length - 1;
                  
                  // Calculate which text should be visible based on scroll progress
                  const segmentSize = 1 / titles.length;
                  const startProgress = index * segmentSize;
                  const endProgress = (index + 1) * segmentSize;
                  
                  let rotateX = 0;
                  let opacity = 0;
                  
                  if (titleOpacity >= startProgress && titleOpacity < endProgress) {
                    // Active text - rotating in
                    const localProgress = (titleOpacity - startProgress) / segmentSize;
                    rotateX = (1 - localProgress) * 90;
                    opacity = localProgress;
                  } else if (titleOpacity >= endProgress) {
                    // Text that has passed - last text stays visible
                    if (isLastText) {
                      rotateX = 0;
                      opacity = 1;
                    } else {
                      rotateX = -90;
                      opacity = 0;
                    }
                  } else {
                    // Text that hasn't appeared yet
                    rotateX = 90;
                    opacity = 0;
                  }
                  
                  return (
                    <h2 
                      key={index}
                      className="absolute inset-0 flex items-center justify-center text-[8vw] sm:text-[7vw] font-medium leading-tight tracking-tighter text-foreground md:text-[6vw] lg:text-[5vw] text-center px-4"
                      style={{
                        transform: `rotateX(${rotateX}deg) translateZ(0)`,
                        opacity,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        willChange: 'transform, opacity',
                        WebkitFontSmoothing: 'antialiased',
                      }}
                    >
                      {title}
                    </h2>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description - Feature Cards */}
      <div ref={descriptionRef} className="px-6 pt-8 pb-20 md:px-12 md:pt-12 md:pb-28 lg:px-20 lg:pt-16 lg:pb-36">
        <div className="mx-auto max-w-6xl">
          {/* Intro Text */}
          <p className="text-center text-sm md:text-base text-muted-foreground mb-12 leading-relaxed">
            WISLUCK delivers engineered solutions that stand the test of time and terrain.
          </p>
          
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {/* Card 1 */}
            <div 
              className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-all duration-300"
              style={{
                opacity: Math.max(0, Math.min(1, descriptionProgress - 0)),
                transform: `translateY(${Math.max(0, (1 - descriptionProgress) * 20)}px)`,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <div className="text-2xl font-bold text-foreground mb-2">Modular Design</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infinite customization options tailored to your exact specifications and site requirements.
              </p>
            </div>
            
            {/* Card 2 */}
            <div 
              className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-all duration-300"
              style={{
                opacity: Math.max(0, Math.min(1, descriptionProgress - 0.15)),
                transform: `translateY(${Math.max(0, (1 - Math.max(0, descriptionProgress - 0.15)) * 20)}px)`,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <div className="text-2xl font-bold text-foreground mb-2">Durability First</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reinforced steel frames and premium weatherproofing engineered to endure extreme conditions.
              </p>
            </div>
            
            {/* Card 3 */}
            <div 
              className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-all duration-300"
              style={{
                opacity: Math.max(0, Math.min(1, descriptionProgress - 0.3)),
                transform: `translateY(${Math.max(0, (1 - Math.max(0, descriptionProgress - 0.3)) * 20)}px)`,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <div className="text-2xl font-bold text-foreground mb-2">Rapid Deployment</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Installation completed in days, not weeks. Ready-to-use mobile solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
