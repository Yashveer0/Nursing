"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Users,
  MapPin,
  Activity,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Stethoscope,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function WhyUsPage() {
  const revealRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
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
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
                NABH-ALIGNED CARE NETWORK
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Compassion engineered for
                <br /> every home in India
              </h1>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Backed by Active Institute of Intensive Medical Services,
                Nursing Sarathi unites intensivists, command-center nurses,
                and family counsellors to deliver hospital-grade safety
                right inside living rooms across 15+ states.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition">
                  Explore services <ArrowRight className="inline w-4 h-4 ml-1" />
                </button>
                <button className="border px-6 py-3 rounded-full text-sm hover:bg-gray-50">
                  Talk to us
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg">
                <Stat icon={<Users className="w-5 h-5" />} value="650+" label="Certified Nurses" />
                <Stat icon={<MapPin className="w-5 h-5" />} value="12" label="Cities Served" />
                <Stat icon={<Activity className="w-5 h-5" />} value="1.8M+" label="Clinical Hours" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl shadow-2xl p-4">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <Image src="/about.jpg" alt="Care" fill className="object-cover" />
              </div>

              <div className="p-4 space-y-2 text-sm text-gray-600">
                <p>• Command desk pairs every nurse with clinical mentors.</p>
                <p>• Transparent escalation + tech tracking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE (IMAGE BASED) ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-28">
          <p className="text-xs font-semibold text-blue-700 mb-3">
            WHY CHOOSE NURSING SARATHI
          </p>

          <h2 className="text-3xl font-bold mb-12 max-w-2xl">
            Clinical rigor with compassion-first delivery
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT STACK */}
            <div className="space-y-6">
              {[
                {
                  icon: <Stethoscope />,
                  title: "Hospital-grade protocols",
                  desc: "ICU matrons audit every procedure—from IV push to tracheostomy care—so home visits mirror ward safety.",
                },
                {
                  icon: <Clock />,
                  title: "30-min emergency desk",
                  desc: "Live command center coordinates ambulances, tele-ICU, and physician escalations round-the-clock.",
                },
                {
                  icon: <BadgeCheck />,
                  title: "Government-certified nurses",
                  desc: "Every professional is background-verified, insured, and trained on NABH-aligned SOPs.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (revealRef.current[i] = el!)}
                  className="opacity-0 translate-y-10 transition-all duration-700
                             bg-gray-50 rounded-2xl p-6 flex gap-4
                             hover:bg-white hover:shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT PANEL */}
            <div
              ref={(el) => (revealRef.current[3] = el!)}
              className="opacity-0 translate-y-10 transition-all duration-700
                         bg-white border rounded-3xl p-8 shadow-lg"
            >
              <p className="text-xs font-semibold text-blue-700 mb-2">
                BUILT FOR FAMILIES & CLINICIANS
              </p>
              <h3 className="text-xl font-bold mb-6">
                Two-layer assurance
              </h3>

              <div className="space-y-4">
                <RightBox
                  title="Specialist continuum"
                  points={[
                    "Home diagnostics & lab pickups",
                    "Teleconsults with super specialists",
                    "Chronic-care dashboards",
                  ]}
                />
                <RightBox
                  title="Infection control obsession"
                  points={[
                    "Hospital-grade consumables",
                    "Single-use kit policies",
                    "Dedicated wound-care mentors",
                  ]}
                />
                <RightBox
                  title="Transparent reporting"
                  points={[
                    "Family WhatsApp updates",
                    "Doctor-accessible EMR",
                    "Care summaries after every shift",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ icon, value, label }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 text-blue-700 mb-1">
        {icon}
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function RightBox({ title, points }: any) {
  return (
    <div className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        {points.map((p: string, i: number) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}
