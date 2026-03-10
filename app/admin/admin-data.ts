export type LeadStatus = 'New' | 'In Progress' | 'Completed';

export type Lead = {
  id: string;
  name: string;
  phone: string;
  service: string;
  state: string;
  city: string;
  status: LeadStatus;
  date: string;
};

export type CMSSection = 'services' | 'states' | 'pricing';

export type CMSPage = {
  id: string;
  section: CMSSection;
  name: string;
  title: string;
  content: string;
  price?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export type SeoMetadata = {
  title: string;
  description: string;
  ogTitle: string;
  ogImage: string;
};

export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
};

export type AdminUser = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  status: 'Active' | 'Disabled';
  lastActive: string;
};

export type AdminSessionUser = Omit<AdminUser, 'password'>;

const STORAGE_KEYS = {
  leads: 'nursing_admin_leads',
  cmsPages: 'nursing_admin_cms_pages',
  blogPosts: 'nursing_admin_blog_posts',
  seo: 'nursing_admin_seo',
  testimonials: 'nursing_admin_testimonials',
  users: 'nursing_admin_users',
  session: 'nursing_admin_session',
} as const;

const DEFAULT_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    service: 'IV Cannulation',
    state: 'Delhi',
    city: 'New Delhi',
    status: 'New',
    date: '2026-03-01',
  },
  {
    id: 'lead-2',
    name: 'Priya Patel',
    phone: '+91 98765 12345',
    service: 'Wound Dressing',
    state: 'Maharashtra',
    city: 'Mumbai',
    status: 'In Progress',
    date: '2026-03-02',
  },
  {
    id: 'lead-3',
    name: 'Amit Singh',
    phone: '+91 98765 67890',
    service: 'Catheterization',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    status: 'Completed',
    date: '2026-03-03',
  },
];

const DEFAULT_CMS_PAGES: CMSPage[] = [
  {
    id: 'cms-services-iv',
    section: 'services',
    name: 'IV Cannulation',
    title: 'Professional IV Cannulation at Home',
    content: 'Certified nurses provide safe IV cannulation at your doorstep.',
  },
  {
    id: 'cms-states-delhi',
    section: 'states',
    name: 'Delhi',
    title: 'Home Nursing Services in Delhi',
    content: 'Fast response and skilled nursing support across Delhi NCR.',
  },
  {
    id: 'cms-pricing-wound',
    section: 'pricing',
    name: 'Wound Dressing',
    title: 'Wound Dressing Package',
    content: 'Basic dressing package details and inclusions.',
    price: '1200',
  },
];

const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Understanding Home Healthcare',
    excerpt: 'A practical guide to choosing safe and reliable home healthcare.',
    content: 'Home healthcare improves comfort, recovery, and continuity of care.',
    date: '2026-03-04',
  },
];

const DEFAULT_SEO: SeoMetadata = {
  title: 'Nursing Sarathi - Professional Home Healthcare',
  description:
    'Professional home healthcare services across India. Certified nurses for IV, wound care, and more.',
  ogTitle: 'Nursing Sarathi Home Care',
  ogImage: 'https://nursingsarathi.com/og-image.jpg',
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent service provided by the nurse. Very professional.',
    date: '2026-03-01',
  },
  {
    id: 'test-2',
    name: 'Anita Desai',
    rating: 4,
    text: 'Good experience overall, timely arrival.',
    date: '2026-03-02',
  },
];

const DEFAULT_USERS: AdminUser[] = [
  {
    id: 'user-1',
    email: 'admin@nursing.com',
    password: 'admin',
    name: 'Primary Admin',
    role: 'Super Admin',
    status: 'Active',
    lastActive: 'Just now',
  },
  {
    id: 'user-2',
    email: 'manager@nursing.com',
    password: 'manager',
    name: 'Content Manager',
    role: 'Editor',
    status: 'Active',
    lastActive: 'Today',
  },
];

function hasWindow() {
  return typeof window !== 'undefined';
}

function readStorage<T>(key: string, fallback: T): T {
  if (!hasWindow()) return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (!hasWindow()) return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getAdminSessionKey() {
  return STORAGE_KEYS.session;
}

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function toSessionUser(user: AdminUser): AdminSessionUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    status: user.status,
    lastActive: user.lastActive,
  };
}

export function getUsers() {
  return readStorage(STORAGE_KEYS.users, DEFAULT_USERS);
}

export function saveUsers(users: AdminUser[]) {
  writeStorage(STORAGE_KEYS.users, users);
}

export function getLeads() {
  return readStorage(STORAGE_KEYS.leads, DEFAULT_LEADS);
}

export function saveLeads(leads: Lead[]) {
  writeStorage(STORAGE_KEYS.leads, leads);
}

export function getCMSPages() {
  return readStorage(STORAGE_KEYS.cmsPages, DEFAULT_CMS_PAGES);
}

export function saveCMSPages(pages: CMSPage[]) {
  writeStorage(STORAGE_KEYS.cmsPages, pages);
}

export function getBlogPosts() {
  return readStorage(STORAGE_KEYS.blogPosts, DEFAULT_BLOG_POSTS);
}

export function saveBlogPosts(posts: BlogPost[]) {
  writeStorage(STORAGE_KEYS.blogPosts, posts);
}

export function getSeoMetadata() {
  return readStorage(STORAGE_KEYS.seo, DEFAULT_SEO);
}

export function saveSeoMetadata(metadata: SeoMetadata) {
  writeStorage(STORAGE_KEYS.seo, metadata);
}

export function getTestimonials() {
  return readStorage(STORAGE_KEYS.testimonials, DEFAULT_TESTIMONIALS);
}

export function saveTestimonials(testimonials: Testimonial[]) {
  writeStorage(STORAGE_KEYS.testimonials, testimonials);
}
