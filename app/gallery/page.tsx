import type { Metadata } from "next";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: "Portacabin & Fabrication Project Gallery | WISLUCK",
  description:
    "Browse completed WISLUCK projects — welding & fabrication, portacabin and modular installations, interior fit-outs, and technical builds across Nigeria.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Project Gallery | WISLUCK Global Industrial Services",
    description:
      "Browse completed WISLUCK projects — welding & fabrication, portacabin and modular installations, interior fit-outs, and technical builds across Nigeria.",
    url: "/gallery",
    images: ["/images/image_22.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
