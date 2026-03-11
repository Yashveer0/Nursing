'use client';

type ApiErrorDetail = {
  msg?: string;
  message?: string;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: ApiErrorDetail[];
};

export type PublicBlog = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  featuredImage?: string;
  schemaToggle: boolean;
  status: 'DRAFT' | 'PUBLISHED';
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    _id: string;
    name: string;
    email: string;
  };
};

type BlogsResponseData = {
  blogs: PublicBlog[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
};

function normalizeErrorMessage(message: string, errors?: ApiErrorDetail[]) {
  if (!errors || errors.length === 0) {
    return message;
  }

  return errors[0].msg || errors[0].message || message;
}

async function request<T>(path: string, init: RequestInit = {}) {
  const response = await fetch(path, {
    ...init,
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new Error(
      normalizeErrorMessage(payload?.message ?? 'Request failed.', payload?.errors)
    );
  }

  return payload;
}

export async function getPublishedBlogs(limit = 50) {
  const response = await request<BlogsResponseData>(`/api/blogs?limit=${limit}`);
  return response.data?.blogs ?? [];
}

export async function getTrendingBlogs(limit = 8) {
  const response = await request<BlogsResponseData>(`/api/blogs?limit=${limit}`);
  return response.data?.blogs ?? [];
}
