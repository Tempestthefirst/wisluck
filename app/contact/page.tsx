import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Get a Portacabin & Fabrication Quote | WISLUCK Contact",
  description:
    "Get a quote for welding & fabrication, portacabins, modular units, or nationwide sandwich panel supply. Based in Port Harcourt, Rivers State — serving all of Nigeria.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | WISLUCK Global Industrial Services",
    description:
      "Get a quote for welding & fabrication, portacabins, modular units, or nationwide sandwich panel supply. Based in Port Harcourt, Rivers State — serving all of Nigeria.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
