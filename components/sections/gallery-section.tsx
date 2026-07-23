"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    // Fabrication & Engineering Standards - Proof of custom craftsmanship & safety
    { src: "/images/image_27.jpg", alt: "High-detail welding arc shot - Proof of custom craftsmanship", category: "Fabrication & Engineering" },
    { src: "/images/image_26.jpg", alt: "Crew in full PPE mounting structural steel roof beams - Proof of safety & field execution", category: "Fabrication & Engineering" },
    { src: "/images/image_21.jpg", alt: "Heavy-duty steel doors and rugged metal shell - Proof of industrial durability", category: "Fabrication & Engineering" },
    { src: "/images/image_9.jpg", alt: "Structural welding and fabrication - Engineering precision", category: "Fabrication & Engineering" },
    { src: "/images/image_10.jpg", alt: "Metal assembly and component fabrication", category: "Fabrication & Engineering" },
    { src: "/images/image_11.jpg", alt: "Structural components assembly and quality control", category: "Fabrication & Engineering" },
    
    // Exterior Designs & Site Deployment - Proof of scalability & finish quality
    { src: "/images/image_19.jpg", alt: "Multi-unit site layout on concrete block piers - Proof of scalability", category: "Exterior Designs" },
    { src: "/images/image_22.jpg", alt: "Sleek, fully completed white sandwich-panel module - Proof of clean exterior finish", category: "Exterior Designs" },
    { src: "/images/image_17.jpg", alt: "Low-angle exterior highlighting drainage, AC piping, and level foundation - Proof of civil engineering detail", category: "Exterior Designs" },
    { src: "/images/image_3.jpg", alt: "Completed portacabin unit with professional exterior finish", category: "Exterior Designs" },
    { src: "/images/image_4.jpg", alt: "Exterior deployment on reinforced foundation system", category: "Exterior Designs" },
    { src: "/images/image_23.jpg", alt: "Completed mobile unit with clean panel integration", category: "Exterior Designs" },
    
    // Interior Comfort & Accommodation - Warmth and residential feel
    { src: "/images/image_16.jpg", alt: "Full-room double-occupancy layout with zebra blinds - Warmth and residential feel", category: "Interior Comfort" },
    { src: "/images/image_20.jpg", alt: "Modern executive suite layout with AC and en-suite access - High-end comfort", category: "Interior Comfort" },
    { src: "/images/image_15.jpg", alt: "High-focus shot on wood-grain wardrobes and bunk beds - Space optimization", category: "Interior Comfort" },
    { src: "/images/image_18.jpg", alt: "Key-locked storage units - Occupant security and organization", category: "Interior Comfort" },
    { src: "/images/image_2.jpg", alt: "Interior furnishing and accommodation design", category: "Interior Comfort" },
    { src: "/images/image_5.jpg", alt: "Residential accommodation with modern amenities", category: "Interior Comfort" },
    
    // Technical Specs & Utilities - Electrical readiness & structural integrity
    { src: "/images/image_28.jpg", alt: "Clean insulated wall panels and routed surface wiring pathways - Turnkey electrical readiness", category: "Technical Specs" },
    { src: "/images/image_24.jpg", alt: "Bare steel box skeleton framework - Structural integrity proof", category: "Technical Specs" },
    { src: "/images/image_25.jpg", alt: "Steel framework structure and support system integrity", category: "Technical Specs" },
    { src: "/images/image_6.jpg", alt: "Infrastructure and mechanical systems installation", category: "Technical Specs" },
    { src: "/images/image_7.jpg", alt: "Technical utility components and electrical systems", category: "Technical Specs" },
    { src: "/images/image_8.jpg", alt: "Utility installations and system integration", category: "Technical Specs" },
    
    // General Portfolio - Showcase projects
    { src: "/images/image_1.jpg", alt: "WISLUCK completed portable cabin project - Client showcase", category: "Portfolio" },
    { src: "/images/image_12.jpg", alt: "WISLUCK mobile facility deployment", category: "Portfolio" },
    { src: "/images/image_13.jpg", alt: "WISLUCK custom accommodation solution", category: "Portfolio" },
    { src: "/images/image_14.jpg", alt: "WISLUCK site delivery and positioning", category: "Portfolio" },
  ];

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return;
    
    const rect = galleryRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = galleryRef.current.offsetHeight;
    
    // Calculate scroll progress through the section
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  const isLastImage = images.length - 1;
  
  // Calculate fullscreen progress for the last image - more gradual
  // Start expanding when last image is 80% stacked, finish at end of section
  const fullscreenStartProgress = 0.6; // Start earlier for smoother transition
  const fullscreenProgress = Math.max(0, Math.min(1, (scrollProgress - fullscreenStartProgress) / (1 - fullscreenStartProgress)));
  
  // Ease out cubic for smoother animation
  const easedFullscreenProgress = 1 - Math.pow(1 - fullscreenProgress, 3);

  return (
    <section 
      id="gallery"
      ref={galleryRef}
      className="relative bg-black"
      style={{ minHeight: `${(images.length + 1) * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]">
          {images.map((image, index) => {
            const isLast = index === isLastImage;
            
            // Calculate stacking progress for each image
            const imageProgress = (scrollProgress * images.length) - index;
            const stackProgress = Math.max(0, Math.min(1, imageProgress));
            
            // Images start below and move up to stack
            let translateY = (1 - stackProgress) * 100; // 100% to 0%
            let scale = 0.8 + (stackProgress * 0.2); // 0.8 to 1
            let opacity = stackProgress;
            
            // Last image expands to fullscreen smoothly
            if (isLast) {
              // Blend between normal scale and expanded scale
              const normalScale = 0.8 + (stackProgress * 0.2);
              const expandedScale = 1 + (easedFullscreenProgress * 0.8); // 1 to 1.8
              scale = normalScale + (Math.max(0, stackProgress - 0.8) * 5) * (expandedScale - normalScale);
            }
            
            // Calculate z-index so later images appear on top
            const zIndex = index;
            
            // Remove border radius on last image when expanding - gradual transition
            const borderRadius = isLast && easedFullscreenProgress > 0.3 ? (1 - easedFullscreenProgress) * 16 : undefined;
            
            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex,
                  transform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  WebkitTransform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  opacity,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform, opacity',
                  WebkitFontSmoothing: 'antialiased',
                }}
              >
                <div 
                  className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"
                  style={{
                    borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
