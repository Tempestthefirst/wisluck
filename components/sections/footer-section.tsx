"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Mobile Offices", href: "#products" },
    { label: "Mobile Homes", href: "#products" },
    { label: "Mobile Toilets", href: "#products" },
    { label: "Gallery", href: "#gallery" },
  ],
  about: [
    { label: "About WISLUCK", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Team", href: "#" },
  ],
  service: [
    { label: "Custom Solutions", href: "#" },
    { label: "Installation", href: "#" },
    { label: "Support", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="#hero" className="text-lg font-medium text-foreground">
              WISLUCK
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium mobile accommodations engineered for durability and rapid deployment. Portacabins, mobile homes, and modular solutions worldwide.
            </p>
            <div className="mt-4 text-xs space-y-1 text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> wisluckgis2025@gmail.com</p>
              <p><strong className="text-foreground">Phone:</strong> 09012135995 | 08033388032</p>
              <p className="mt-2"><strong className="text-foreground">Address:</strong></p>
              <p>No.6 City Ward Church Close, off Odani Road, Elelenwo Port Harcourt Rivers state.</p>
              <p><strong className="text-foreground">MD:</strong> Engr. Sunny Ajuzie</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 WISLUCK GLOBAL INDUSTRIAL SERVICES LTD. All rights reserved.
          </p>

          

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
