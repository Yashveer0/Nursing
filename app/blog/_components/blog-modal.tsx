'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { PublicBlog } from '@/lib/blogs/api';

const BLOG_FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23dbeafe'/%3E%3Ccircle cx='220' cy='160' r='120' fill='%2393c5fd' fill-opacity='0.35'/%3E%3Ccircle cx='1020' cy='680' r='180' fill='%230ea5e9' fill-opacity='0.2'/%3E%3Ctext x='72' y='420' fill='%230f172a' font-size='72' font-family='Arial, sans-serif' font-weight='700'%3ENursing Sarathi Blog%3C/text%3E%3C/svg%3E";

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

export function BlogModal({
  blog,
  onClose,
}: {
  blog: PublicBlog;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative my-6 w-full max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-[0_32px_100px_rgba(15,23,42,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close blog details"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/65 p-2 text-white transition hover:bg-slate-950"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-64 w-full sm:h-80">
          <Image
            src={blog.featuredImage || BLOG_FALLBACK_IMAGE}
            alt={blog.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
              Healthcare Blog
            </span>
            <span>{formatDate(blog.createdAt)}</span>
            {blog.createdBy?.name && <span>By {blog.createdBy.name}</span>}
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            {blog.title}
          </h2>

          {blog.metaDescription && (
            <p className="mt-4 text-base leading-7 text-slate-600">{blog.metaDescription}</p>
          )}

          <div
            className="prose prose-slate mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
