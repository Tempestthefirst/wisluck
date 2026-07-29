import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Magnetic } from "@/components/magnetic";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | WISLUCK Global Industrial Services",
  description:
    "Welding & fabrication, portacabin and modular unit manufacturing, container offices, mobile toilets, and nationwide sandwich panel supply — Port Harcourt, Nigeria.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | WISLUCK Global Industrial Services",
    description:
      "Welding & fabrication, portacabin and modular unit manufacturing, container offices, mobile toilets, and nationwide sandwich panel supply — Port Harcourt, Nigeria.",
    url: "/services",
    images: ["/images/image_24.jpg"],
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      code: "WF-01",
      title: "Welding & Fabrication",
      description: "All kinds of welding and fabrication jobs — structural steel, custom metalwork, and industrial fabrication carried out to spec by an experienced crew.",
      features: [
        "Structural & industrial welding",
        "Custom metal fabrication",
        "On-site and workshop jobs",
        "Full PPE & safety compliance",
      ],
      specs: {
        "Turnaround": "Scoped per job",
        "Materials": "Mild & stainless steel",
        "Capacity": "Structural to light fabrication",
        "Standards": "Full safety compliance",
      },
      image: "/images/image_27.jpg",
    },
    {
      id: 2,
      code: "PC-02",
      title: "Portacabins & Modular Units",
      description: "Fabrication and installation of all types and sizes of portacabins using PUF or Polystyrene prefabricated sandwich panels — including modular units and house boat accommodation cabins.",
      features: [
        "PUF & polystyrene sandwich panels",
        "Any type or size, made to order",
        "Modular units",
        "House boat accommodation cabins",
      ],
      specs: {
        "Installation Time": "2-7 Days",
        "Panel Types": "PUF / Polystyrene",
        "Dimensions": "Any size, made to order",
        "Weather Rating": "-40°C to +60°C",
      },
      image: "/images/image_24.jpg",
    },
    {
      id: 3,
      code: "CT-03",
      title: "Container Offices & Mobile Toilets",
      description: "Repurposed and custom-built container offices alongside self-contained mobile toilet units for construction sites, events, and remote field locations.",
      features: [
        "Container office conversions",
        "Self-contained mobile toilets",
        "Water & waste systems",
        "Rapid site deployment",
      ],
      specs: {
        "Installation Time": "1-5 Days",
        "Unit Types": "Office & sanitation",
        "Deployment": "Site-ready on delivery",
        "Maintenance": "Low-upkeep systems",
      },
      image: "/images/image_19.jpg",
    },
    {
      id: 4,
      code: "SP-04",
      title: "Sandwich Panel Supply",
      description: "Supply of any kind of sandwich panels to any part of the country — for builders, fabricators, and contractors sourcing insulated panel material directly.",
      features: [
        "PUF & polystyrene core panels",
        "Nationwide supply & delivery",
        "Bulk & custom orders",
        "Direct from fabricator",
      ],
      specs: {
        "Coverage": "Nationwide",
        "Panel Types": "PUF / Polystyrene",
        "Order Type": "Bulk or custom",
        "Sourcing": "Direct from fabricator",
      },
      image: "/images/image_28.jpg",
    },
  ];

  const fabricationProof = [
    {
      title: "Precision Welding",
      description: "High-detail fabrication ensuring structural integrity",
      image: "/images/image_27.jpg",
    },
    {
      title: "Safety Standards",
      description: "Full PPE compliance during all installation work",
      image: "/images/image_26.jpg",
    },
    {
      title: "Industrial Durability",
      description: "Heavy-duty steel construction for harsh environments",
      image: "/images/image_21.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative border-b border-border bg-foreground px-6 pb-16 pt-32 text-background md:px-12 md:pb-24 md:pt-40 lg:px-20">
        <ScrollReveal className="max-w-4xl" y={16} stagger={0.1}>
          <p className="eyebrow mb-6 text-primary">What We Build</p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Fabricated to spec.<br />Deployed in days.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-background/70 md:text-xl">
            WISLUCK delivers welding and fabrication, portacabins and modular units, container conversions, and sandwich panel supply — engineered for durability, rapid deployment, and infinite customization.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4 text-foreground/50">Core Products</p>
          <h2 className="mb-16 font-display text-3xl font-bold text-foreground md:text-4xl">
            Four product lines, one fabrication standard.
          </h2>

          <div className="divide-y divide-border border-y border-border">
            {services.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:gap-16"
                y={32}
                stagger={0.15}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <p className="eyebrow mb-3 text-primary">{service.code}</p>
                  <h3 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">{service.title}</h3>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <p className="eyebrow mb-3 text-foreground/60">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs — spec plate */}
                  <div className="border border-border">
                    <p className="eyebrow border-b border-border px-5 py-3 text-foreground/60">Technical Specifications</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {Object.entries(service.specs).map(([key, value], i) => (
                        <div
                          key={key}
                          className={`px-5 py-4 ${i % 2 === 0 ? "sm:border-r" : ""} ${i < Object.entries(service.specs).length - 2 ? "border-b" : ""} border-border`}
                        >
                          <p className="eyebrow text-foreground/40">{key}</p>
                          <p className="mt-1 font-mono font-medium text-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`bracket-frame relative h-64 overflow-hidden md:h-full md:min-h-[420px] ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Proof Section */}
      <section className="border-t border-border bg-foreground px-6 py-20 text-background md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal y={16}>
            <p className="eyebrow mb-4 text-primary">Quality Assurance</p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Every unit meets the same standard.</h2>
            <p className="mb-12 max-w-2xl text-lg text-background/70">
              Every WISLUCK product meets stringent fabrication and engineering standards, backed by our commitment to safety, durability, and excellence.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 gap-px overflow-hidden border border-background/10 bg-background/10 md:grid-cols-3" y={28}>
            {fabricationProof.map((item, idx) => (
              <div key={idx} className="group bg-foreground">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-2 text-primary">{String(idx + 1).padStart(2, "0")}</p>
                  <h3 className="mb-2 text-lg font-bold text-background">{item.title}</h3>
                  <p className="text-background/60">{item.description}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center md:px-12 lg:px-20">
        <ScrollReveal className="mx-auto max-w-3xl" y={16}>
          <p className="eyebrow mb-4 text-foreground/50">Start a Project</p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">Ready for a custom solution?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Contact our team to discuss your specific requirements and get a customized quote.
          </p>
          <Magnetic strength={0.3} className="inline-block">
            <Button asChild className="rounded-none border border-foreground bg-foreground px-8 py-6 text-lg text-background hover:bg-transparent hover:text-foreground">
              <a href="/contact">Get in Touch</a>
            </Button>
          </Magnetic>
        </ScrollReveal>
      </section>

      <FooterSection />
    </main>
  );
}
