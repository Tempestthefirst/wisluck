"use client";

import Link from "next/link";
import { trackContactClick } from "@/lib/gtag";

const footerLinks = {
  explore: [
    { label: "Welding & Fabrication", href: "/services" },
    { label: "Portacabins & Mobile Homes", href: "/services" },
    { label: "Container Offices & Mobile Toilets", href: "/services" },
    { label: "Sandwich Panel Supply", href: "/services" },
  ],
  about: [
    { label: "About WISLUCK", href: "/#products" },
    { label: "Our Services", href: "/services" },
    { label: "Projects", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  service: [
    { label: "Get a Quote", href: "/contact" },
    { label: "Installation", href: "/services" },
    { label: "Support", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function FooterSection() {
  return (
    <footer className="border-t-2 border-primary bg-background">
      {/* Main Footer Content */}
      <div className="border-b border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 bg-primary" aria-hidden="true" />
              <span className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                Wisluck
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Welding, fabrication, and portacabin manufacturing engineered for durability and rapid deployment. Sandwich panels supplied nationwide.
            </p>
            <div className="mt-6 space-y-1.5 text-xs text-muted-foreground">
              <p>
                <span className="eyebrow text-foreground/60">Email </span>
                <a href="mailto:infoteam@wisluck.com" onClick={() => trackContactClick("email")} className="rule-accent text-foreground">infoteam@wisluck.com</a>
              </p>
              <p>
                <span className="eyebrow text-foreground/60">Phone </span>
                <a href="tel:+2349012135995" onClick={() => trackContactClick("phone")} className="text-foreground">09012135995 | 08033388032</a>
              </p>
              <p className="pt-2">
                <span className="eyebrow block text-foreground/60">Address</span>
                No.6 City Ward Church Close, off Odani Road, Elelenwo Port Harcourt Rivers state.
              </p>
              <p className="pt-2">
                <span className="eyebrow text-foreground/60">MD </span>
                <span className="text-foreground">Engr. Sunny Ajuzie</span>
              </p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow mb-4 text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="eyebrow mb-4 text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="eyebrow mb-4 text-foreground">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="eyebrow text-muted-foreground">
            2026 WISLUCK Global Industrial Services Ltd. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="eyebrow text-muted-foreground transition-colors hover:text-primary"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="eyebrow text-muted-foreground transition-colors hover:text-primary"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="eyebrow text-muted-foreground transition-colors hover:text-primary"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
