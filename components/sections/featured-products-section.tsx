"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    image: "/images/image_1.jpg",
    alt: "Completed WISLUCK portable cabin project delivered to client",
    span: "col-span-2 row-span-2", // Large
  },
  {
    image: "/images/image_9.jpg",
    alt: "Precision structural welding during fabrication",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/image_17.jpg",
    alt: "Exterior detail showing drainage, AC piping and level foundation",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/image_16.jpg",
    alt: "Double-occupancy interior with wardrobes and residential finish",
    span: "col-span-1 row-span-2", // Tall
  },
  {
    image: "/images/image_24.jpg",
    alt: "Bare steel box skeleton framework proving structural integrity",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/image_4.jpg",
    alt: "Exterior deployment on a reinforced foundation system",
    span: "col-span-2 row-span-1", // Wide
  },
  {
    image: "/images/image_11.jpg",
    alt: "Structural components assembly and quality control",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/image_5.jpg",
    alt: "Residential accommodation with modern amenities",
    span: "col-span-1 row-span-2", // Tall
  },
  {
    image: "/images/image_23.jpg",
    alt: "Completed mobile unit with clean panel integration",
    span: "col-span-2 row-span-1", // Wide
  },
  {
    image: "/images/image_18.jpg",
    alt: "Key-locked storage units for occupant security",
    span: "col-span-1 row-span-1", // Small
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        <p className="eyebrow mb-8 text-foreground/50 md:mb-12">02 — Fieldwork</p>
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bracket-frame relative overflow-hidden rounded-lg border border-border ${feature.span}`}
            >
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
