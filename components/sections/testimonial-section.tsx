'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

/* ================= DATA ================= */

const testimonials = [
  {
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop',
    name: 'Priya Sharma',
    role: 'Daughter of patient',
    text:
      'Nursing Sarathi has been a blessing for our family. Their nurse Sister Meera provided exceptional care for my elderly mother during her recovery. The professionalism and compassion went beyond our expectations.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?w=800&h=600&fit=crop',
    name: 'Rajesh Kumar',
    role: 'Son of patient',
    text:
      'The 24/7 support and quick response team made all the difference. We felt reassured knowing our father was in capable hands.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=500&fit=crop',
    name: 'Anita Verma',
    role: 'Daughter of patient',
    text:
      'From doctor visits to daily nursing care, everything was handled with precision and empathy. Truly stress-free healthcare.',
  },
];

/* ================= COMPONENT ================= */

export function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-14 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

        {/* LEFT – STACKED IMAGES */}
        <ScrollReveal className="relative w-full max-w-[320px] h-[340px] sm:h-[380px] mx-auto md:mx-0">
          {testimonials.map((t, i) => {
            const offset = (i - index + testimonials.length) % testimonials.length;

            if (offset > 2) return null;

            return (
              <img
                key={i}
                src={t.image}
                alt={t.name}
                className="absolute w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-500"
                style={{
                  transform: `translate(${offset * 20}px, ${-offset * 20}px)`,
                  zIndex: 10 - offset,
                  opacity: offset === 0 ? 1 : 0.6,
                }}
              />
            );
          })}
        </ScrollReveal>

        {/* RIGHT – CONTENT */}
        <ScrollReveal delay={0.08} className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-1">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            {testimonials[index].role}
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            {testimonials[index].text}
          </p>

          {/* ARROWS */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              <ChevronRight />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
