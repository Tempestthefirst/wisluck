"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const word = "WISLUCK";

const sideImages = [
  {
    src: "/images/image_22.jpg",
    alt: "Completed WISLUCK sandwich-panel cabin with clean exterior finish",
    position: "left",
    span: 1,
  },
  {
    src: "/images/image_19.jpg",
    alt: "Multi-unit WISLUCK site layout showing scalable deployment",
    position: "left",
    span: 1,
  },
  {
    src: "/images/image_26.jpg",
    alt: "WISLUCK crew in full PPE mounting structural steel roof beams",
    position: "right",
    span: 1,
  },
  {
    src: "/images/image_3.jpg",
    alt: "Completed WISLUCK portacabin unit with professional exterior finish",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  
  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations - More balanced distribution
  // Desktop: 5 columns at full expansion (20% each). Mobile: capped at 3
  // columns (one image per side) so photos stay legible instead of
  // shrinking into ~75px unrecognizable slivers.
  const centerWidth = isMobile ? 100 - (imageProgress * 60) : 100 - (imageProgress * 80); // mobile 100%->40%, desktop 100%->20%
  const centerHeight = 100; // Always 100% height
  const sideWidth = isMobile ? imageProgress * 30 : imageProgress * 40; // mobile 0%->30% (1 image), desktop 0%->40% (2 images)
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = 0; // No border radius
  const gap = imageProgress * 8; // 0px to 8px
  
  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 15); // Move up by 15% when fully expanded

  const leftImages = sideImages.filter((img) => img.position === "left").slice(0, isMobile ? 1 : 2);
  const rightImages = sideImages.filter((img) => img.position === "right").slice(0, isMobile ? 1 : 2);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* Fixed corner marks — top-left eyebrow, bottom-right coordinates */}
        <div
          className="pointer-events-none absolute left-6 top-24 z-20 md:left-12 lg:left-20"
          style={{ opacity: textOpacity }}
        >
          <p className="eyebrow text-foreground/60">
            Port Harcourt<br />Modular Fabrication
          </p>
        </div>
        <div
          className="pointer-events-none absolute bottom-32 right-6 z-20 md:right-12 lg:right-20"
          style={{ opacity: textOpacity }}
        >
          <p className="eyebrow text-right text-foreground/60">
            Est. Nigeria<br />
            <span className="text-primary">Steel &amp; Panel</span>
          </p>
        </div>

        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            
            {/* Left Column */}
            <div 
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {leftImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              {/* Text Behind - Fades out first */}
              <div 
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ opacity: textOpacity, transform: 'translateY(-200px)' }}
              >
                <h1 className="whitespace-nowrap text-[clamp(2.75rem,15vw,9rem)] font-black leading-[0.8] tracking-tight text-foreground">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: 'all 1.5s',
                        transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
              
              <Image
                src="/images/Wisluck landing.jpg"
                alt="WISLUCK steel-frame portacabin under construction on site"
                fill
                className="absolute inset-0 z-10 object-cover"
                priority
              />
            </div>

            {/* Right Column */}
            <div 
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {rightImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Tagline Section - Fixed at bottom */}
      <div 
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20"
        style={{ opacity: textOpacity }}
      >
        <p className="mx-auto max-w-2xl text-center text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Portable solutions,
          <br />
          <span className="text-primary">built for the field.</span>
        </p>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />
    </section>
  );
}
