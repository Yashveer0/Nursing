'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { AnimatedCard } from '@/components/animations/animated-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useEmblaAutoplay } from '@/components/carousel/use-embla-autoplay';
import { BlogModal } from '@/app/blog/_components/blog-modal';
import { getTrendingBlogs, type PublicBlog } from '@/lib/blogs/api';

const BLOG_FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23dbeafe'/%3E%3Ccircle cx='220' cy='160' r='120' fill='%2393c5fd' fill-opacity='0.35'/%3E%3Ccircle cx='1020' cy='680' r='180' fill='%230ea5e9' fill-opacity='0.2'/%3E%3Ctext x='72' y='420' fill='%230f172a' font-size='72' font-family='Arial, sans-serif' font-weight='700'%3ENursing Sarathi Blog%3C/text%3E%3C/svg%3E";

function stripHtml(content: string) {
  return content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getExcerpt(blog: PublicBlog) {
  const baseText = (blog.metaDescription || stripHtml(blog.content)).trim();
  if (baseText.length <= 140) {
    return baseText;
  }

  return `${baseText.slice(0, 137).trimEnd()}...`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return 'Date unavailable';
  }

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function BlogsSection() {
  const [blogs, setBlogs] = useState<PublicBlog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<PublicBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  useEmblaAutoplay(emblaApi, 4200);

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      setLoading(true);
      setError('');

      try {
        const data = await getTrendingBlogs();
        if (active) {
          setBlogs(data);
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Unable to load trending blogs right now.'
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadBlogs();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="bg-[#F4F8FB] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="mb-14 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Trending Blogs
          </h2>
        </ScrollReveal>

        {error ? (
          <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center">
            <p className="text-lg font-semibold text-red-900">Unable to load trending blogs</p>
            <p className="mt-2 text-sm leading-7 text-red-700">{error}</p>
          </div>
        ) : !loading && blogs.length === 0 ? (
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">No blogs available right now</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              New healthcare articles will appear here once they are available from the backend.
            </p>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous blogs"
              className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition-transform hover:scale-105 active:scale-95 md:left-2 md:h-10 md:w-10"
            >
              <ChevronLeft />
            </button>

            <div className="overflow-hidden px-8 md:px-12" ref={emblaRef}>
              <div className="-ml-4 flex touch-pan-y">
                {loading &&
                  Array.from({ length: 4 }, (_, index) => (
                    <div
                      key={`blog-skeleton-${index}`}
                      className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] 2xl:flex-[0_0_25%]"
                    >
                      <AnimatedCard className="group h-full overflow-hidden rounded-2xl border bg-white shadow-sm [background-size:14px_14px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]">
                        <div className="aspect-[4/3] w-full animate-pulse rounded-t-2xl bg-slate-200" />
                        <div className="flex h-full flex-col p-6">
                          <div className="mb-2 h-6 w-4/5 animate-pulse rounded bg-slate-200" />
                          <div className="mb-3 h-4 w-24 animate-pulse rounded bg-slate-200" />
                          <div className="mb-2 h-4 w-full animate-pulse rounded bg-slate-200" />
                          <div className="mb-6 h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                          <div className="mt-auto flex items-center gap-2">
                            <div className="h-5 w-28 animate-pulse rounded bg-slate-200" />
                            <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
                          </div>
                        </div>
                      </AnimatedCard>
                    </div>
                  ))}

                {!loading &&
                  blogs.map((blog) => (
                    <div
                      key={blog._id}
                      className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] 2xl:flex-[0_0_25%]"
                    >
                      <AnimatedCard className="group h-full overflow-hidden rounded-2xl border bg-white shadow-sm [background-size:14px_14px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                          <Image
                            src={blog.featuredImage || BLOG_FALLBACK_IMAGE}
                            alt={`${blog.title} healthcare blog cover image`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                            unoptimized
                          />
                        </div>

                        <div className="flex h-full flex-col p-6">
                          <button
                            type="button"
                            onClick={() => setSelectedBlog(blog)}
                            className="mb-2 text-left text-sm font-semibold text-blue-700 hover:underline"
                          >
                            {blog.title}
                          </button>

                          <span className="mb-3 text-xs uppercase text-muted-foreground">
                            {formatDate(blog.createdAt)}
                          </span>

                          <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {getExcerpt(blog)}
                          </p>

                          <button
                            type="button"
                            onClick={() => setSelectedBlog(blog)}
                            className="group mt-auto flex items-center gap-2 text-sm font-medium"
                          >
                            Read More
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B2C6A] text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                              <ArrowRight size={14} />
                            </span>
                          </button>
                        </div>
                      </AnimatedCard>
                    </div>
                  ))}
              </div>
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next blogs"
              className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition-transform hover:scale-105 active:scale-95 md:right-2 md:h-10 md:w-10"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
    </section>
  );
}
