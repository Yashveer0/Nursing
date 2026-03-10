'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

const services = [
  {
    type: 'image',
    category: 'NURSINGSARATHI SERVICES',
    title: 'Elder Care',
    description:
      'Personalised elder healthcare plans with nursing, rehab and chronic condition support.',
    image:
      'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?w=800&h=600&fit=crop',
  },
  {
    type: 'info',
    tag: 'RAPID RESPONSE',
    title: 'Emergency 1068',
    description:
      'Dial 1068 to instantly connect with Nursingsarathi’s integrated emergency response and ambulance teams.',
  },
  {
    type: 'info',
    tag: 'NEAR YOU',
    title: 'Nursingsarathi Mediclinics',
    description:
      'Neighbourhood clinics across NCR for consultations, diagnostics and day-care procedures.',
  },
  {
    type: 'image',
    category: 'NURSINGSARATHI SERVICES',
    title: 'International Patients',
    description:
      'Dedicated team to help you plan your trip with visas, translators, travel and stay assistance.',
    image:
      'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?w=800&h=600&fit=crop',
  },
];

export function ServicesDetail() {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-xs tracking-widest text-muted-foreground uppercase block mb-3">
            Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
            A continuum of care spanning second opinions, diagnostics, remote monitoring and rapid emergency response,
            inspired by the Nursingsarathi experience.
          </p>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch">

          {/* LEFT IMAGE CARD */}
          <ScrollReveal>
          <Card className="overflow-hidden rounded-3xl border-none shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-full min-h-[340px] sm:min-h-[420px]">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-end h-full text-white">
                <span className="text-[10px] uppercase tracking-widest mb-2 opacity-90">
                  {services[0].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {services[0].title}
                </h3>
                <p className="text-sm opacity-90 mb-6">
                  {services[0].description}
                </p>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-red-400 hover:underline"
                >
                  Know More →
                </Link>
              </div>
            </div>
          </Card>
          </ScrollReveal>

          {/* CENTER STACKED CARDS */}
          <div className="flex flex-col gap-8">
            {services
              .filter((s) => s.type === 'info')
              .map((service, index) => (
                <ScrollReveal key={index} delay={0.05 * (index + 1)}>
                <Card
                  key={index}
                  className="p-5 sm:p-8 rounded-3xl border border-border/30 hover:shadow-lg hover:-translate-y-1 transition bg-white"
                >
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    {service.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-red-500 hover:underline"
                  >
                    Know More →
                  </Link>
                </Card>
                </ScrollReveal>
              ))}
          </div>

          {/* RIGHT IMAGE CARD */}
          <ScrollReveal delay={0.08}>
          <Card className="overflow-hidden rounded-3xl border-none shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-full min-h-[340px] sm:min-h-[420px]">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-end h-full text-white">
                <span className="text-[10px] uppercase tracking-widest mb-2 opacity-90">
                  {services[3].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {services[3].title}
                </h3>
                <p className="text-sm opacity-90 mb-6">
                  {services[3].description}
                </p>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-red-400 hover:underline"
                >
                  Know More →
                </Link>
              </div>
            </div>
          </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
