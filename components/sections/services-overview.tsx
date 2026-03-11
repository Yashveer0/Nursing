'use client';

import { useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Stethoscope,
  Activity,
  Hospital,
  X,
} from 'lucide-react';
import { AnimatedCard } from '@/components/animations/animated-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { AnimatedSection } from '@/components/animations/animated-section';
import { useEmblaAutoplay } from '@/components/carousel/use-embla-autoplay';
import { CallbackForm } from '@/components/callback-form';

const services = [
  
  {
    title: 'Expert Clinical Procedures',
    icon: Building2,
    image: '/images/services/new_expert-clinical-procedure.jpeg',
    description: 'Precision-led nursing procedures and post-treatment care at home.',
  },
  
  {
    title: 'Patient Attendant Service',
    icon: Activity,
    image: '/images/services/new_patient-attendant-service.jpeg',
    description: 'Reliable bedside support for daily assistance, comfort, and recovery.',
  },
  {
    title: 'ICU at Home',
    icon: Hospital,
    image: '/images/services/new_icu-at-home.jpeg',
    description: 'Critical care monitoring with trained professionals in your own space.',
  },
  {
    title: 'Doctor At Home',
    icon: Stethoscope,
    image: '/images/services/doctor-at-home.jpg',
    description: 'Scheduled consultations and follow-up treatment without hospital travel.',
  },
  {
    title: 'Physiotherapy & Rehabilitation Services',
    icon: Activity,
    image: '/images/services/new_physiotherapy-rehabilitation.jpeg',
    description: 'Goal-based recovery plans to rebuild movement, strength, and confidence.',
  },
];

export function ServicesOverview() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  useEmblaAutoplay(emblaApi, 3800);

  return (
    <AnimatedSection className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Homecare Services
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl md:text-4xl">
            Care programs designed for recovery at home
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore specialized home healthcare services delivered by trained professionals,
            with faster access, clinical discipline, and support tailored to each patient.
          </p>
        </ScrollReveal>

        <div className="relative">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous services"
            className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#0F0961]/95 text-white shadow-[0_14px_35px_rgba(15,9,97,0.28)] transition-transform hover:scale-105 active:scale-95 md:left-2 md:h-11 md:w-11"
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden px-8 md:px-12" ref={emblaRef}>
            <div className="-ml-4 flex touch-pan-y">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="min-w-0 pl-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] 2xl:flex-[0_0_25%]"
                  >
                    <AnimatedCard className="group relative h-full overflow-hidden rounded-[28px] border border-white/40 bg-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
                      <div className="relative aspect-[4/4.9] w-full overflow-hidden">
                        <Image
                          src={service.image}
                          alt={`${service.title} home healthcare service`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,34,0.08)_0%,rgba(10,16,34,0.24)_34%,rgba(7,14,33,0.86)_100%)]" />
                        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(7,14,33,0.58)_0%,transparent_100%)]" />
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/14 text-white shadow-lg backdrop-blur-md">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="rounded-full border border-sky-200/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100 backdrop-blur-md">
                            Home Visit
                          </div>
                        </div>

                        <div className="mt-auto flex min-h-[13.5rem] flex-col justify-end">
                          <h3 className="max-w-[14rem] text-2xl font-semibold leading-tight text-white sm:text-[1.7rem]">
                            {service.title}
                          </h3>
                          <p className="mt-3 max-w-[17rem] text-sm leading-6 text-slate-200">
                            {service.description}
                          </p>

                          <button
                            type="button"
                            onClick={() => setIsFormOpen(true)}
                            className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/12 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                          >
                            Know More
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B2C6A] transition-transform group-hover:translate-x-0.5">
                              <ArrowRight size={16} />
                            </span>
                          </button>
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next services"
            className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#0F0961]/95 text-white shadow-[0_14px_35px_rgba(15,9,97,0.28)] transition-transform hover:scale-105 active:scale-95 md:right-2 md:h-11 md:w-11"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 px-4 py-8">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto">
            <button
              type="button"
              aria-label="Close callback form"
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md"
            >
              <X className="h-5 w-5" />
            </button>
            <CallbackForm />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}
