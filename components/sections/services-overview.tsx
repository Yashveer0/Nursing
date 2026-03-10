'use client';

import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Building2,
  Stethoscope,
  Activity,
  User,
  Hospital,
} from 'lucide-react';
import { AnimatedCard } from '@/components/animations/animated-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { AnimatedSection } from '@/components/animations/animated-section';
import { useEmblaAutoplay } from '@/components/carousel/use-embla-autoplay';

const services = [
  
  {
    title: 'Expert Clinical Procedures',
    icon: Building2,
    image: '/images/services/expert-clinical-procedures.jpg',
  },
  
  {
    title: 'Patient Attendant Service',
    icon: Activity,
    image: '/images/services/patient-attendant-service.jpg',
  },
  {
    title: 'Patient Attendant Services',
    icon: User,
    image: '/images/services/patient-attendant-services.jpg',
  },
  {
    title: 'ICU at Home',
    icon: Hospital,
    image: '/images/services/icu-at-home.jpg',
  },
  {
    title: 'Doctor At Home',
    icon: Stethoscope,
    image: '/images/services/doctor-at-home.jpg',
  },
  {
    title: 'Physiotherapy & Rehabilitation Services',
    icon: Activity,
    image: '/images/services/physiotherapy-rehabilitation.jpg',
  },
];

export function ServicesOverview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  useEmblaAutoplay(emblaApi, 3800);

  return (
    <AnimatedSection className="py-14 sm:py-16 md:py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Services</h2>
        </ScrollReveal>

        <div className="relative">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous services"
            className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#0F0961] text-white shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
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
                    <AnimatedCard className="group h-full overflow-hidden bg-white rounded-2xl border shadow-sm flex flex-col text-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:14px_14px]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={service.image}
                          alt={`${service.title} home healthcare service`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                        />
                      </div>

                      <div className="p-6 sm:p-7 flex flex-col items-center h-full">
                        <div className="mb-5">
                          <Icon className="w-10 h-10 text-gray-700" />
                        </div>

                        <h3 className="text-lg font-semibold mb-4">{service.title}</h3>

                        <Link href="/services" className="group flex items-center gap-2 text-sm font-medium mt-auto">
                          Know More
                          <span className="h-9 w-9 rounded-full bg-[#0B2C6A] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowRight size={16} />
                          </span>
                        </Link>
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
            className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#0F0961] text-white shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
