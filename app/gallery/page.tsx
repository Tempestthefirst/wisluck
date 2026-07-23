'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('fabrication');

  const categories = [
    {
      id: 'fabrication',
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
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl leading-relaxed opacity-90">
            Explore our portfolio of completed projects showcasing our fabrication expertise, professional installations, comfortable interiors, and technical excellence.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 py-12 md:px-12 lg:px-20 bg-accent/5 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-foreground text-background'
                    : 'bg-background text-foreground border border-border hover:border-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Description */}
      {activeTab && (
        <section className="px-6 py-12 md:px-12 lg:px-20 bg-background">
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{activeTab.name}</h2>
            <p className="text-lg text-muted-foreground">{activeTab.description}</p>
          </div>

          {/* Images Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab.images.map((image, idx) => (
                <div key={idx} className="group rounded-lg overflow-hidden bg-accent/5 hover:shadow-lg transition-shadow">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{image.caption}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Stats */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">28+</p>
              <p className="opacity-90">Completed Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="opacity-90">Units Deployed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">4</p>
              <p className="opacity-90">Product Categories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="opacity-90">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
