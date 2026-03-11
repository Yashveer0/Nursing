"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Users,
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function TeamPage() {
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
      { threshold: 0.15 }
    );

    revealRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mt-18 mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <span className="inline-flex text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
                BEHIND EVERY CARE PLAN
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                People Behind
                <br /> Nursing Sarathi
              </h1>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Intensivists, ops leads, and nurse mentors run our Patna
                command desk so every visit is supervised end-to-end.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex gap-2 items-center">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Clinical governance from NABH mentors
                </li>
                <li className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-blue-700" />
                  24/7 command-center supervision
                </li>
                <li className="flex gap-2 items-center">
                  <Users className="w-4 h-4 text-blue-700" />
                  Hospital-grade infection protocols
                </li>
              </ul>

              {/* CTA */}
              <div className="flex gap-4 mt-8">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition">
                  Explore the Team <ArrowRight className="inline w-4 h-4 ml-1" />
                </button>
                <button className="border px-6 py-3 rounded-full text-sm hover:bg-gray-50">
                  Talk to Our Desk
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg">
                <Stat value="500+" label="Certified Nurses" />
                <Stat value="15+" label="States Covered" />
                <Stat value="24/7" label="Emergency Desk" />
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-4">
                <div className="relative h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/about.jpg"
                    alt="Core Command"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* BADGES */}
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow px-3 py-2 text-xs">
                  <p className="font-semibold">Core Command</p>
                  <p className="text-gray-500">Multi-disciplinary leads</p>
                </div>

                <div className="absolute left-4 bottom-24 bg-white rounded-xl shadow px-3 py-2 text-xs">
                  ⭐ 98.5%
                  <p className="text-gray-500">Family Satisfaction</p>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white rounded-xl px-4 py-2 text-xs flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  Emergency Desk · +91-8766382620
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl font-bold">
                <span className="text-blue-700">Our</span> Care Leadership
              </h2>
              <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leaders.map((leader, i) => (
                <div
                  key={i}
                  ref={(el) => (revealRef.current[i] = el!)}
                  className="opacity-0 translate-y-8 transition-all duration-700
                             bg-slate-300/80 rounded-2xl p-8 text-center
                             hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

/* ================= DATA ================= */

const leaders = [
  {
    name: "Ravi Kumar",
    role: "Founder & Care Strategist",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Dr. Meera Sinha",
    role: "Clinical Governance Lead",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Aniket Roy",
    role: "Ops & Emergency Desk",
    image: "/placeholder-user.jpg",
  },
];

/* ================= COMPONENTS ================= */

function Stat({ value, label }: any) {
  return (
    <div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
