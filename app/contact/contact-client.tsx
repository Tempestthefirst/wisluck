'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Magnetic } from "@/components/magnetic";
import { trackLeadSubmit, trackContactClick } from "@/lib/gtag";

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/infoteam@wisluck.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "—",
          subject: formData.subject,
          message: formData.message,
          _subject: `WISLUCK enquiry: ${formData.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      setStatus("success");
      trackLeadSubmit("contact_page");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't send your message right now. Please email us directly at infoteam@wisluck.com or call us."
      );
    }
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'infoteam@wisluck.com',
      href: 'mailto:infoteam@wisluck.com',
    },
    {
      label: 'Phone',
      value: '09012135995 | 08033388032',
      href: 'tel:+2349012135995',
    },
    {
      label: 'Address',
      value: 'No.6 City Ward Church Close, off Odani Road, Elelenwo Port Harcourt Rivers state.',
      href: '#',
    },
    {
      label: 'Managing Director',
      value: 'Engr. Sunny Ajuzie',
      href: '#',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-foreground px-6 pb-16 pt-32 text-background md:px-12 md:pb-24 md:pt-40 lg:px-20">
        <ScrollReveal className="max-w-4xl" y={16} stagger={0.1}>
          <p className="eyebrow mb-6 text-primary">Start a Project</p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Get in Touch
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-background/70 md:text-xl">
            Have a project in mind? Contact WISLUCK for custom portable solutions tailored to your needs. Our team is ready to assist you.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <p className="eyebrow mb-3 text-foreground/50">Contact Information</p>
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground">Reach the team directly</h2>

            <ScrollReveal className="border border-border" y={12} stagger={0.06}>
              {contactInfo.map((info, idx) => (
                <div key={idx} className={`px-5 py-4 ${idx !== contactInfo.length - 1 ? "border-b border-border" : ""}`}>
                  <p className="eyebrow mb-2 text-foreground/40">{info.label}</p>
                  {info.href !== '#' ? (
                    <a
                      href={info.href}
                      onClick={() => trackContactClick(info.href.startsWith("tel:") ? "phone" : "email")}
                      className="font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              ))}
            </ScrollReveal>

            {/* Business Hours */}
            <div className="mt-10">
              <p className="eyebrow mb-4 text-foreground/50">Business Hours</p>
              <div className="space-y-2 text-foreground">
                <p className="flex justify-between border-b border-border pb-2"><span>Monday – Friday</span><span className="font-mono text-muted-foreground">8:00 – 17:00</span></p>
                <p className="flex justify-between border-b border-border pb-2"><span>Saturday</span><span className="font-mono text-muted-foreground">9:00 – 14:00</span></p>
                <p className="flex justify-between"><span>Sunday</span><span className="font-mono text-muted-foreground">Closed</span></p>
              </div>
            </div>

            {/* Services Available */}
            <div className="mt-10">
              <p className="eyebrow mb-4 text-foreground/50">What We Offer</p>
              <ul className="space-y-2.5 text-foreground">
                {["Welding & Fabrication", "Portacabins & Modular Units", "Container Offices & Mobile Toilets", "Sandwich Panel Supply (Nationwide)"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-3 text-foreground/50">Project Enquiry</p>
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground">Send us a message</h2>

            {status === "success" && (
              <div className="mb-6 border border-primary bg-primary/5 p-4">
                <p className="font-medium text-primary">Thank you — we&apos;ll get back to you shortly.</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 border border-destructive bg-destructive/5 p-4">
                <p className="font-medium text-destructive">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="eyebrow mb-2 block text-foreground/60">Full Name*</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-none"
                  />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-foreground/60">Email*</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="eyebrow mb-2 block text-foreground/60">Phone*</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full rounded-none"
                  />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-foreground/60">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="eyebrow mb-2 block text-foreground/60">Subject*</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Portacabin Quote"
                  required
                  className="w-full rounded-none"
                />
              </div>

              <div>
                <label className="eyebrow mb-2 block text-foreground/60">Message*</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  required
                  className="w-full min-h-48 rounded-none"
                />
              </div>

              <Magnetic strength={0.12} className="block w-full">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-none border border-foreground bg-foreground py-6 text-lg font-medium text-background transition-colors duration-300 hover:bg-transparent hover:text-foreground disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              </Magnetic>

              <p className="text-sm text-muted-foreground">
                * Required fields. We&apos;ll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose WISLUCK */}
      <section className="border-t border-border bg-foreground px-6 py-20 text-background md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4 text-primary">Why WISLUCK</p>
          <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">Built to earn the next order</h2>

          <ScrollReveal
            className="grid grid-cols-1 gap-px overflow-hidden border border-background/10 bg-background/10 md:grid-cols-4"
            y={20}
          >
            {[
              {
                title: 'Custom Solutions',
                description: 'Every project tailored to your specific needs and requirements.',
              },
              {
                title: 'Rapid Deployment',
                description: 'Installation completed in 2-7 days depending on specifications.',
              },
              {
                title: 'Quality Assured',
                description: 'Industrial-grade materials and precision engineering guarantee durability.',
              },
              {
                title: 'Expert Team',
                description: 'Experienced professionals managing every phase of your project.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-foreground p-6">
                <p className="eyebrow mb-3 text-primary">{String(idx + 1).padStart(2, "0")}</p>
                <h3 className="mb-3 font-bold text-background">{item.title}</h3>
                <p className="text-sm text-background/60">{item.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
