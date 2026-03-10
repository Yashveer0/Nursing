"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2019",
    title: "Mission Takes Shape",
    description:
      "The vision of delivering hospital-grade care at home was born, focusing on safety, trust, and dignity.",
    image: "/cardiac-care.jpg",
    tag: "FOUNDATION",
    side: "right",
  },
  {
    year: "2020",
    title: "Home Care Across Patna",
    description:
      "Despite challenges, our home care services expanded across Patna with trained nurses and doctors.",
    image: "/gastrosciences.jpg",
    tag: "EXPANSION",
    side: "left",
  },
  {
    year: "2021",
    title: "Emergency-Ready Systems",
    description:
      "24×7 emergency protocols, escalation ladders, and rapid response systems were introduced.",
    image: "/health.jpg",
    tag: "INFRA",
    side: "right",
  },
  {
    year: "2022",
    title: "Care in Every District",
    description:
      "Services scaled district-wide with standardized SOPs and quality audits.",
    image: "/injection_img.png",
    tag: "SCALE",
    side: "left",
  },
  {
    year: "2023",
    title: "Care Meets Compassion",
    description:
      "Patient experience, empathy training, and family communication became core pillars.",
    image: "/neurosciences_img.jpg",
    tag: "VALUES",
    side: "right",
  },
  {
    year: "2024",
    title: "Technology-Led Care",
    description:
      "Digital dashboards, vitals tracking, and remote coordination strengthened outcomes.",
    image: "/about.jpg",
    tag: "TECH",
    side: "left",
  },
  {
    year: "2025",
    title: "Multi-Speciality Programs",
    description:
      "Renal, cardiac, neuro, and post-surgical recovery programs launched at scale.",
    image: "/cardiac-care.jpg",
    tag: "SPECIALITY",
    side: "right",
  },
  {
    year: "2026",
    title: "Trusted Care Ecosystem",
    description:
      "A mature ecosystem connecting families, clinicians, hospitals, and home seamlessly.",
    image: "/gastrosciences.jpg",
    tag: "FUTURE",
    side: "left",
  },
];

export default function InteractiveTimeline() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-x-0",
              "translate-y-0"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 bg-transparent">
      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-blue-200 hidden md:block" />

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-24">
          Our Journey Through the Years
        </h2>

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              ref={(el: any) => (itemsRef.current[index] = el)}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ITEM ---------------- */

const TimelineItem = ({
  year,
  title,
  description,
  image,
  tag,
  side,
  ref,
}: any) => {
  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center
        opacity-0 transition-all duration-700 ease-out
        ${isLeft ? "-translate-x-20" : "translate-x-20"}
      `}
    >
      {/* DOT */}
      <div className="absolute md:left-1/2 md:-translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-blue-700 border-4 border-white shadow-md" />
      </div>

      {/* CARD */}
      <div
        className={`w-full md:w-1/2 ${
          isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
        }`}
      >
        <div
          className="
            group bg-white rounded-2xl shadow-lg overflow-hidden
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-2xl
          "
        >
          {/* IMAGE */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />

            {/* TAG */}
            <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-5">
            <p className="text-xs text-gray-400 mb-1">{year}</p>
            <h3 className="font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
