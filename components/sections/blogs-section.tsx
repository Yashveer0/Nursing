'use client';

import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { AnimatedCard } from '@/components/animations/animated-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useEmblaAutoplay } from '@/components/carousel/use-embla-autoplay';

const blogs = [
  {
    image: '/images/blogs/anaplastic-thyroid-carcinoma.jpg',
    category: 'Cancer',
    title: 'Anaplastic Thyroid Carcinoma',
    description:
      'Anaplastic thyroid carcinoma stands as one of the deadliest and rarest types of thyroid cancer in medical science.',
  },
  {
    image: '/images/blogs/sciatica-symptoms-treatment.jpg',
    category: 'Orthopedics',
    title: 'Sciatica Symptoms Treatment',
    description:
      'The sciatic nerve stands as the longest and thickest nerve in our body. Sciatica shows up as pain that starts in the back.',
  },
  {
    image: '/images/blogs/high-platelet-count.jpg',
    category: 'Cancer',
    title: 'High Platelet Count',
    description:
      'A high platelet count or thrombocytosis happens when your blood has more platelets than normal.',
  },
  {
    image: '/images/blogs/anaplastic-thyroid-carcinoma.jpg',
    category: 'Cancer',
    title: 'Anaplastic Thyroid Carcinoma',
    description:
      'Anaplastic thyroid carcinoma stands as one of the deadliest and rarest types of thyroid cancer in medical science.',
  },
  {
    image: '/images/blogs/sciatica-symptoms-treatment.jpg',
    category: 'Orthopedics',
    title: 'Sciatica Symptoms Treatment',
    description:
      'The sciatic nerve stands as the longest and thickest nerve in our body. Sciatica shows up as pain that starts in the back.',
  },
  {
    image: '/images/blogs/high-platelet-count.jpg',
    category: 'Cancer',
    title: 'High Platelet Count',
    description:
      'A high platelet count or thrombocytosis happens when your blood has more platelets than normal.',
  },
];

export function BlogsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  useEmblaAutoplay(emblaApi, 4200);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#F4F8FB]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Trending Blogs</h2>
        </ScrollReveal>

        <div className="relative">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous blogs"
            className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden px-8 md:px-12" ref={emblaRef}>
            <div className="-ml-4 flex touch-pan-y">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="min-w-0 pl-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] 2xl:flex-[0_0_25%]"
                >
                  <AnimatedCard className="group h-full rounded-2xl bg-white border shadow-sm [background-size:14px_14px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={blog.image}
                        alt={`${blog.title} healthcare blog cover image`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                      />
                    </div>

                    <div className="p-6 flex flex-col h-full">
                      <Link href="/blog" className="text-sm font-semibold text-blue-700 mb-2 hover:underline">
                        {blog.title}
                      </Link>

                      <span className="text-xs uppercase text-muted-foreground mb-3">{blog.category}</span>

                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                        {blog.description}
                      </p>

                      <Link href="/blog" className="group flex items-center gap-2 text-sm font-medium mt-auto">
                        Continue reading
                        <span className="h-8 w-8 rounded-full bg-[#0B2C6A] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowRight size={14} />
                        </span>
                      </Link>
                    </div>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next blogs"
            className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
