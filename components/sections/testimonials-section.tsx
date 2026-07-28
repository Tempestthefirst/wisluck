"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* About Image with Text Overlay */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/image_19.jpg"
          alt="Multi-unit WISLUCK site deployment showing scale and reach"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - dark at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <p className="eyebrow mb-6 text-primary">07 — Trusted Across Africa</p>
          <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug text-center">
            Trusted by construction companies and enterprises across Africa — WISLUCK delivers robust, affordable mobile accommodations for every challenge.
          </p>
        </div>
      </div>
    </section>
  );
}
