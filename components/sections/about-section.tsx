'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export function AboutSection() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-4">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              About Home Care
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Nursing Sarathi is a trusted partner in empowering wellness. We ensure that quality healthcare is always within reach with our comprehensive and compassionate approach to care.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Our skilled professionals deliver hospital-standard protocols in the comfort of your home, making recovery and ongoing care more personal and convenient.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-4 transition-all group"
            >
              Read More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal delay={0.08} className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 p-5 sm:p-12 border border-primary/10 min-h-[300px] sm:h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block mb-6">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-5xl">🏥</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Professional Healthcare at Home
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Hospital-standard care delivered with compassion by trained professionals
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
