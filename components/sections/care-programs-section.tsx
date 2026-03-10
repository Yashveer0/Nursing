'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=700&fit=crop',
    title: 'Stroke Rehabilitation Program',
    description:
      'Stroke stands as a significant contributor to disability in India, demanding a comprehensive multidisciplinary approach to address its intricate challenges at home.',
    tag: 'REHABILITATION',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=700&fit=crop',
    title: 'Elder Care program',
    description:
      'The people you love the most deserve the best care. Our elder care program offers personalised attention from experts, driven by protocols inspired by Medanta.',
    tag: 'ELDER CARE',
  },
];

export function CareProgramsSection() {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
            Programs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Our Care Programs
          </h2>
        </ScrollReveal>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">

          {/* LEFT IMAGE CARD */}
          <ScrollReveal>
          <Card className="rounded-[28px] overflow-hidden border-none shadow-sm bg-white hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col h-full">
              <div className="h-[220px] sm:h-[300px] overflow-hidden">
                <img
                  src={programs[0].image}
                  alt={programs[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <span className="text-xs tracking-widest text-muted-foreground mb-3">
                  {programs[0].tag}
                </span>

                <h3 className="text-xl font-bold mb-4">
                  
                  {programs[0].title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {programs[0].description}
                </p>

                <Link
                  href="/programs"
                  className="mt-auto inline-flex items-center gap-3 text-sm font-semibold"
                >
                  Know more
                  <span className="h-8 w-8 rounded-full bg-red-500 text-white flex items-center justify-center">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </Card>
          </ScrollReveal>

          {/* RIGHT CLEAN INFO CARD */}
          <ScrollReveal delay={0.08}>
          <Card className="rounded-[28px] bg-white border border-border/20 shadow-sm p-5 sm:p-10 flex flex-col justify-center hover:-translate-y-1 transition-transform duration-300">
          <div className="h-[220px] sm:h-[300px] overflow-hidden">
                <img
                  src={programs[0].image}
                  alt={programs[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            <span className="text-xs tracking-widest text-muted-foreground mb-3">
              {programs[1].tag}
            </span>

            <h3 className="text-xl font-bold mb-4">
              {programs[1].title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              {programs[1].description}
            </p>

            <Link
              href="/programs"
              className="inline-flex items-center gap-3 text-sm font-semibold w-fit"
            >
              Know more
              <span className="h-8 w-8 rounded-full bg-red-500 text-white flex items-center justify-center">
                →
              </span>
            </Link>
          </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
