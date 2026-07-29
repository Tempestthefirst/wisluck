"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "@/components/magnetic";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "18%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-8 md:px-12 lg:px-20">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="mb-6 inline-flex items-center gap-2 border border-border px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
            <span className="eyebrow text-foreground/70">Port Harcourt · Modular Fabrication</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
            className="font-display text-[13vw] font-black leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-6xl lg:text-7xl"
          >
            Portable solutions,
            <br />
            <span className="text-primary">built for the field.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: EASE_PREMIUM }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Welding, fabrication, portacabins, and modular units engineered for durability and rapid deployment — delivered anywhere in Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: EASE_PREMIUM }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                className="inline-block border border-foreground bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-transparent hover:text-foreground"
              >
                Get a Quote
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/gallery"
                className="inline-block border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                View Our Work
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_PREMIUM }}
          className="relative"
        >
          <div className="bracket-frame bracket-visible relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
            <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
              <Image
                src="/images/image_22.jpg"
                alt="Completed WISLUCK portacabin unit"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Floating spec card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE_PREMIUM }}
            className="absolute -bottom-6 -left-6 hidden border border-border bg-background px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:block"
          >
            <p className="font-display text-3xl font-black text-primary">28+</p>
            <p className="eyebrow mt-1 text-muted-foreground">Completed Projects</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
