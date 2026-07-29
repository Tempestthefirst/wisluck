'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('fabrication');

  const categories = [
    {
      id: 'fabrication',
      code: '01',
      name: 'Fabrication & Engineering',
      description: 'Proof of custom craftsmanship, safety standards, and industrial durability',
      images: [
        {
          src: '/images/image_27.jpg',
          alt: 'High-detail welding arc shot - Proof of custom craftsmanship',
          caption: 'Precision Welding',
        },
        {
          src: '/images/image_26.jpg',
          alt: 'Crew in full PPE mounting structural steel roof beams',
          caption: 'Safety & Field Execution',
        },
        {
          src: '/images/image_21.jpg',
          alt: 'Heavy-duty steel doors and rugged metal shell',
          caption: 'Industrial Durability',
        },
        {
          src: '/images/image_9.jpg',
          alt: 'Structural welding and fabrication',
          caption: 'Structural Welding',
        },
        {
          src: '/images/image_10.jpg',
          alt: 'Metal assembly and component fabrication',
          caption: 'Component Assembly',
        },
        {
          src: '/images/image_11.jpg',
          alt: 'Structural components assembly',
          caption: 'Quality Control',
        },
      ],
    },
    {
      id: 'exterior',
      code: '02',
      name: 'Exterior Designs & Deployment',
      description: 'Scalability proof, clean finishes, and civil engineering excellence',
      images: [
        {
          src: '/images/image_19.jpg',
          alt: 'Multi-unit site layout on concrete block piers',
          caption: 'Multi-Unit Scalability',
        },
        {
          src: '/images/image_22.jpg',
          alt: 'Sleek, fully completed white sandwich-panel module',
          caption: 'Clean Exterior Finish',
        },
        {
          src: '/images/image_17.jpg',
          alt: 'Low-angle exterior with drainage and AC piping',
          caption: 'Civil Engineering Detail',
        },
        {
          src: '/images/image_3.jpg',
          alt: 'Completed unit with clean finish',
          caption: 'Professional Finish',
        },
        {
          src: '/images/image_4.jpg',
          alt: 'Exterior deployment',
          caption: 'Site Deployment',
        },
        {
          src: '/images/image_23.jpg',
          alt: 'Completed unit exterior',
          caption: 'Panel Integration',
        },
      ],
    },
    {
      id: 'interior',
      code: '03',
      name: 'Interior Comfort & Accommodation',
      description: 'Residential warmth, high-end comfort, and space optimization',
      images: [
        {
          src: '/images/image_16.jpg',
          alt: 'Full-room double-occupancy with zebra blinds',
          caption: 'Double Occupancy Setup',
        },
        {
          src: '/images/image_20.jpg',
          alt: 'Modern executive suite with AC and en-suite',
          caption: 'Executive Suite',
        },
        {
          src: '/images/image_15.jpg',
          alt: 'Wood wardrobes and bunk beds',
          caption: 'Space Optimization',
        },
        {
          src: '/images/image_18.jpg',
          alt: 'Key-locked storage units',
          caption: 'Secure Storage',
        },
        {
          src: '/images/image_2.jpg',
          alt: 'Interior furnishing',
          caption: 'Modern Interiors',
        },
        {
          src: '/images/image_5.jpg',
          alt: 'Residential accommodation',
          caption: 'Residential Layout',
        },
      ],
    },
    {
      id: 'technical',
      code: '04',
      name: 'Technical Specs & Utilities',
      description: 'Electrical readiness and structural integrity proof',
      images: [
        {
          src: '/images/image_28.jpg',
          alt: 'Insulated wall panels and wiring pathways',
          caption: 'Electrical Systems',
        },
        {
          src: '/images/image_24.jpg',
          alt: 'Bare steel box skeleton framework',
          caption: 'Structural Framework',
        },
        {
          src: '/images/image_25.jpg',
          alt: 'Steel framework structure',
          caption: 'Support System',
        },
        {
          src: '/images/image_6.jpg',
          alt: 'Infrastructure and mechanical systems',
          caption: 'Mechanical Systems',
        },
        {
          src: '/images/image_7.jpg',
          alt: 'Technical utility components',
          caption: 'Utility Systems',
        },
        {
          src: '/images/image_8.jpg',
          alt: 'Utility installations',
          caption: 'System Integration',
        },
      ],
    },
  ];

  const activeTab = categories.find(cat => cat.id === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-foreground px-6 pb-16 pt-32 text-background md:px-12 md:pb-24 md:pt-40 lg:px-20">
        <ScrollReveal className="max-w-4xl" y={16} stagger={0.1}>
          <p className="eyebrow mb-6 text-primary">The Record</p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Project Gallery
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-background/70 md:text-xl">
            Our portfolio of completed projects — fabrication expertise, professional installations, comfortable interiors, and technical execution.
          </p>
        </ScrollReveal>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 px-6 py-6 backdrop-blur-md md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`eyebrow flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                activeCategory === cat.id
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className={activeCategory === cat.id ? "text-primary" : "text-foreground/30"}>{cat.code}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Category Description */}
      {activeTab && (
        <section className="bg-background px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto mb-12 max-w-6xl">
            <p className="eyebrow mb-3 text-primary">{activeTab.code} — {activeTab.name}</p>
            <p className="max-w-2xl text-lg text-muted-foreground">{activeTab.description}</p>
          </div>

          {/* Images Grid */}
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" y={24}>
              {activeTab.images.map((image, idx) => (
                <div key={idx} className="bracket-frame group border border-border">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-border p-4">
                    <h3 className="font-semibold text-foreground">{image.caption}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{image.alt}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Portfolio Stats */}
      <section className="border-t border-border bg-foreground px-6 py-20 text-background md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4 text-center text-primary">Track Record</p>
          <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">Numbers from the field</h2>
          <ScrollReveal className="grid grid-cols-2 divide-x divide-y divide-background/10 border border-background/10 md:grid-cols-4 md:divide-y-0" y={20}>
            {[
              { value: "28+", label: "Completed Projects" },
              { value: "500+", label: "Units Deployed" },
              { value: "4", label: "Product Categories" },
              { value: "100%", label: "Quality Guaranteed" },
            ].map((stat) => (
              <div key={stat.label} className="p-8 text-center">
                <p className="font-display text-4xl font-black text-primary md:text-5xl">{stat.value}</p>
                <p className="eyebrow mt-2 text-background/60">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
