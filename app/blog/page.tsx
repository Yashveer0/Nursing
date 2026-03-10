"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "Health",
    title: "Understanding Medical Conditions",
    excerpt:
      "A comprehensive guide explaining common medical conditions and their classifications.",
    content: `
      <p>This is the full content for Understanding Medical Conditions. It's a deep dive into how medical conditions are classified and understood in the modern medical world.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <h4 class="text-xl font-bold mt-6 mb-2">Sub-heading</h4>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.</p>
    `,
    date: "January 15, 2024",
    author: "Dr. Sarah Johnson",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    category: "Medical",
    title: "Anaplastic Thyroid Carcinoma",
    excerpt:
      "One of the rarest and most aggressive thyroid cancers explained in detail.",
    content: `
      <p>Anaplastic thyroid carcinoma is a rare but deadly form of thyroid cancer. This article explores its causes, symptoms, and treatment options.</p>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.</p>
      <h4 class="text-xl font-bold mt-6 mb-2">Symptoms and Diagnosis</h4>
      <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>`,
    date: "January 10, 2024",
    author: "Dr. Michael Chen",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    category: "Health",
    title: "Sciatica Symptoms & Treatment",
    excerpt:
      "Learn how to identify sciatic nerve pain and treat it effectively.",
    content: `
      <p>Sciatica can be a debilitating condition. This post covers the primary symptoms and various treatment approaches, from physical therapy to medication.</p>
      <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
    `,
    date: "January 5, 2024",
    author: "Dr. Emily Roberts",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
    category: "Wellness",
    title: "Post-Operative Care Tips",
    excerpt:
      "Essential recovery guidelines after surgery to heal faster and safer.",
    content: `
      <p>Recovery after surgery is crucial. Here are some essential tips for post-operative care at home to ensure a smooth and speedy recovery.</p>
      <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
    `,
    date: "December 28, 2023",
    author: "Dr. James Wilson",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
    category: "Health",
    title: "Managing Chronic Diseases",
    excerpt:
      "Long-term strategies for managing diabetes and hypertension.",
    content: `
      <p>Living with chronic diseases like diabetes and hypertension requires a long-term management plan. This article provides strategies for a healthier life.</p>
      <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
    `,
    date: "December 20, 2023",
    author: "Dr. Patricia Lee",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health & Medical Blog
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover health tips, medical insights, and wellness advice from
            professional healthcare experts.
          </p>

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >

            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={item}>

                <Card className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-xl transition duration-300 flex flex-col">

                  {/* IMAGE */}
                  <div className="relative h-56 w-full overflow-hidden">

                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-1">

                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500">

                      <div>
                        <p className="font-semibold text-gray-800">
                          {post.author}
                        </p>
                        <p>{post.date}</p>
                      </div>

                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-primary font-semibold hover:underline"
                      >
                        Read →
                      </button>

                    </div>

                  </div>

                </Card>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* BLOG POST MODAL */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl my-8"
          >
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl">
              {/* IMAGE */}
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>By {selectedPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPost.date}</span>
                </div>
                {/* Using dangerouslySetInnerHTML for demo content. In a real app, sanitize this or use a proper CMS/Markdown renderer. */}
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>
            </div>
            <button onClick={() => setSelectedPost(null)} className="absolute right-4 top-4 z-10 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/50 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}