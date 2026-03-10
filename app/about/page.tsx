"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import InteractiveTimeline from "@/app/about/InteractiveTimeline";
import { Phone, ShieldCheck, Clock, Stethoscope } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-16">

          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-5">
                AVAILABLE IN 15+ STATES
              </span>

              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                Hospital-Grade Care,
                <br /> Right at Your Home
              </h1>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Our certified nurses deliver comprehensive medical support,
                bridging trusted hospital protocols with the comfort of your
                living room. One call connects you to specialists,
                diagnostics, and compassion-driven service.
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Government-certified nurses
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-700" />
                  24/7 emergency-ready support
                </li>
                <li className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-blue-700" />
                  Hospital-grade infection control
                </li>
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition">
                  Book Home Care
                </button>

                <button className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                  <Phone className="w-4 h-4" />
                  Talk to Expert
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
                <Stat label="Certified Nurses" value="500+" />
                <Stat label="Families Served" value="10K+" />
                <Stat label="Emergency Care" value="24/7" />
              </div>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-4">
                <div className="relative h-[380px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/about.jpg" 
                    alt="Home healthcare nurse"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* FLOATING BADGES */}
              <div className="absolute top-6 -right-4 bg-white rounded-xl shadow px-4 py-2 text-sm font-semibold">
                ⭐ 98.5%
                <p className="text-xs text-gray-500 font-normal">
                  Patient satisfaction
                </p>
              </div>

              <div className="absolute bottom-6 -left-4 bg-blue-700 text-white rounded-xl shadow px-4 py-3 text-sm">
                <p className="font-semibold">24/7 Emergency Care</p>
                <p className="text-xs opacity-90">Call +91-8766382620</p>
              </div>
            </div>
          </div>

          {/* MISSION */}
          <div className="mt-24 bg-white rounded-3xl shadow-xl p-10 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Why we exist</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe recovery shouldn’t require hospital queues,
              unfamiliar rooms, or fragmented care. Our mission is to
              extend hospital-level protocols into homes — safely,
              predictably, and compassionately.
            </p>
          </div>
        </div>
        <InteractiveTimeline />
        <Footer />
      </div>
    </div>
  );
}

/* ---------- COMPONENT ---------- */

function Stat({ label, value }: any) {
  return (
    <div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
