import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Mobile Offices",
      description: "Fully equipped portable office spaces for remote work, site management, and field operations.",
      features: [
        "Customizable layouts",
        "Built-in workstations",
        "Climate controlled",
        "Electrical systems pre-installed",
      ],
      specs: {
        "Installation Time": "2-5 Days",
        "Dimensions": "3m × 6m - 4m × 12m",
        "Load Capacity": "Up to 15 tons",
        "Temperature Range": "-40°C to +60°C",
      },
      image: "/images/image_20.jpg",
    },
    {
      id: 2,
      title: "Mobile Homes",
      description: "Comfortable residential cabins with full amenities, modern interiors, and flexible customization.",
      features: [
        "Double & single occupancy",
        "En-suite bathrooms",
        "Kitchen facilities",
        "Thermal insulation",
      ],
      specs: {
        "Installation Time": "3-7 Days",
        "Dimensions": "3m × 6m - 4m × 14m",
        "Occupancy": "1-8 persons per unit",
        "Amenities": "Full utilities included",
      },
      image: "/images/image_16.jpg",
    },
    {
      id: 3,
      title: "Mobile Toilets",
      description: "Hygienic sanitation solutions for construction sites, events, and remote field locations.",
      features: [
        "Self-contained units",
        "Water & waste systems",
        "Ventilation included",
        "Easy maintenance",
      ],
      specs: {
        "Installation Time": "1-2 Days",
        "Dimensions": "1.2m × 2m",
        "Capacity": "Up to 500 uses/day",
        "Features": "Biodegradable systems",
      },
      image: "/images/image_23.jpg",
    },
    {
      id: 4,
      title: "Storage Solutions",
      description: "Secure, weatherproof storage cabins for equipment, materials, and inventory management.",
      features: [
        "Heavy-duty construction",
        "Key-locked doors",
        "Ventilation options",
        "Stackable design",
      ],
      specs: {
        "Installation Time": "1-3 Days",
        "Dimensions": "2m × 3m - 3m × 6m",
        "Load Capacity": "Up to 20 tons",
        "Security": "Industrial-grade locks",
      },
      image: "/images/image_18.jpg",
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
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl leading-relaxed opacity-90">
            WISLUCK delivers premium portable accommodations engineered for durability, rapid deployment, and infinite customization. Each solution is built to withstand extreme conditions while providing comfort and reliability.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">Core Products</h2>

          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="bg-accent/10 p-6 rounded-lg mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Technical Specifications:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(service.specs).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">{key}</p>
                          <p className="text-foreground font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-foreground text-background hover:bg-muted-foreground">
                    Learn More
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative h-64 md:h-96 rounded-lg overflow-hidden ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Proof Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Quality Assurance</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Every WISLUCK product meets stringent fabrication and engineering standards, backed by our commitment to safety, durability, and excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricationProof.map((item, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Custom Solution?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact our team to discuss your specific requirements and get a customized quote.
          </p>
          <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg">
            Get in Touch
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
