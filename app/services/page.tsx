'use client';

import { useRef } from 'react';
import  Header  from '@/components/header';
import { Footer } from '@/components/footer';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  { title: 'Home Sample Collection', icon: '🧪' },
  { title: 'Expert Clinical Procedures', icon: '🩺' },
  { title: 'Medicine Delivery', icon: '💊' },
  { title: 'Patient Attendant Service', icon: '🧑‍⚕️' },
  { title: 'ICU at Home', icon: '🏥' },
  { title: 'Doctor At Home', icon: '👨‍⚕️' },
  { title: 'Physiotherapy & Rehab Services', icon: '🏃‍♂️' },
];

export default function ServicesPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: dir === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* PAGE HEADER */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </section>

      {/* SERVICES CAROUSEL */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronLeft />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl border shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="text-3xl mb-6">{service.icon}</div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-8">
                  {service.title}
                </h3>

                {/* KNOW MORE */}
                <button className="flex items-center gap-2 text-sm font-medium">
                  Know More
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
