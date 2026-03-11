'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/app/blog/_components/blog-card';
import { BlogModal } from '@/app/blog/_components/blog-modal';
import { getPublishedBlogs, type PublicBlog } from '@/lib/blogs/api';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<PublicBlog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<PublicBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      setLoading(true);
      setError('');

      try {
        const data = await getPublishedBlogs();
        if (active) {
          setBlogs(data);
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Unable to load blog posts right now.'
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
    <main className="min-h-screen bg-[#f8fbff] pt-24">
      <Header />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_52%,#38bdf8_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
            Nursing Sarathi Blog
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Health insights, care guidance, and practical updates from our team.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50">
            Browse the latest published healthcare articles directly from our backend-powered blog.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                Latest Articles
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Dynamic blog feed from the backend
              </h2>
            </div>
            <div className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-slate-600">
              {loading ? 'Loading posts...' : `${blogs.length} posts available`}
            </div>
          </div>

          {loading && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="h-56 animate-pulse bg-slate-200" />
                  <div className="space-y-4 p-6">
                    <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                    <div className="h-7 w-4/5 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                    <div className="h-10 w-full animate-pulse rounded-full bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-[28px] border border-red-200 bg-red-50 p-8 text-center">
              <h3 className="text-xl font-semibold text-red-900">Unable to load blog posts</h3>
              <p className="mt-3 text-sm leading-7 text-red-700">{error}</p>
            </div>
          )}

          {!loading && !error && blogs.length === 0 && (
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">No published blogs yet</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Please check back later for new healthcare articles and updates.
              </p>
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} onReadMore={setSelectedBlog} />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="mt-6 flex justify-center">
              <Button type="button" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          )}
        </div>
      </section>

      {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}

      <Footer />
    </main>
  );
}
