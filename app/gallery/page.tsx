"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useEffect, useRef } from "react";

const images = [
  {
    src: "/images/blogs/g1.jpeg",
    height: "row-span-2",
  },
  {
    src: "/images/blogs/g2.jpeg",
    height: "row-span-1",
  },
  {
    src: "/images/blogs/g3.jpeg",
    height: "row-span-2",
  },
  {
    src: "/images/blogs/g4.jpeg",
    height: "row-span-1",
  },
  {
    src: "/images/blogs/g5.jpeg",
    height: "row-span-2",
  },
  {
    src: "/images/blogs/g6.jpeg",
    height: "row-span-1",
  },
  {
    src: "/images/blogs/g7.jpeg",
    height: "row-span-1",
  },
  
  {
    src: "/images/blogs/g9.jpeg",
    height: "row-span-1",
  },
  {
    src: "/images/blogs/g10.jpeg",
    height: "row-span-2",
  }
];

export default function GalleryPage() {
  const revealRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mt-15 overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        {/* ================= HEADER ================= */}
        <section className="max-w-7xl mx-auto px-4 pt-20 pb-12 text-center">
          <p className="text-xs tracking-widest text-blue-700 font-semibold mb-3">
            GALLERY
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Care in action
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Hospital-like environments, compassionate moments, and real care
            journeys across homes and recovery spaces.
          </p>
        </section>

        {/* ================= MASONRY GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                ref={(el) => (revealRef.current[i] = el!)}
                className={`relative overflow-hidden rounded-2xl bg-gray-200
                  ${img.height}
                  opacity-0 translate-y-8 transition-all duration-700
                  group`}
              >
                <Image
                  src={img.src}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
