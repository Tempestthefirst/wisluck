'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'wisluckgis2025@gmail.com',
      href: 'mailto:wisluckgis2025@gmail.com',
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
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl leading-relaxed opacity-90">
            Have a project in mind? Contact WISLUCK for custom portable solutions tailored to your needs. Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx}>
                  <p className="text-sm font-semibold text-muted-foreground uppercase mb-2">{info.label}</p>
                  {info.href !== '#' ? (
                    <a
                      href={info.href}
                      className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg text-foreground">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-muted-foreground uppercase mb-4">Business Hours</p>
              <div className="space-y-2 text-foreground">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Services Available */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-muted-foreground uppercase mb-4">What We Offer</p>
              <ul className="space-y-2 text-foreground">
                <li>✓ Mobile Offices</li>
                <li>✓ Mobile Homes</li>
                <li>✓ Mobile Toilets</li>
                <li>✓ Custom Solutions</li>
                <li>✓ Installation & Delivery</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-600 font-medium">Thank you! We&apos;ll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name*</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email*</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone*</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject*</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Mobile Office Quote"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message*</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  required
                  className="w-full min-h-48"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-muted-foreground py-3 text-lg font-medium"
              >
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground">
                * Required fields. We&apos;ll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose WISLUCK */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Why Choose WISLUCK</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={idx} className="bg-background p-6 rounded-lg border border-border hover:border-foreground transition-colors">
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
