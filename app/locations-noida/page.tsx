"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  Activity,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function NoidaLocationPage() {
  const pathname = usePathname();

  const cities = [
    { name: "Gurugram", href: "/locations-gurugram" },
    { name: "Lucknow", href: "/locations-lucknow" },
    { name: "Patna", href: "/locations-patna" },
    { name: "Indore", href: "/locations-indore" },
    { name: "Noida", href: "/locations-noida" },
    { name: "Ranchi", href: "/locations-ranchi" },
    { name: "Mediclinics", href: "/mediclinics" },
  ];

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mx-auto px-4 mt-18 py-10">
          {/* ================= CITY TABS ================= */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cities.map((city) => {
              const isActive = pathname === city.href;
              return (
                <Link
                  key={city.name}
                  href={city.href}
                  className={`px-4 py-1 rounded-full text-sm transition ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {city.name}
                </Link>
              );
            })}
          </div>

          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-4">
            Locations /{" "}
            <span className="text-gray-700">Nursingsarathi Noida</span>
          </p>

          {/* ================= HERO ================= */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  METRO EXPRESS
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Nursingsarathi Noida
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Hi-tech, high-empathy
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Noida, Greater Noida, and Ghaziabad get seamless
                  nurse scheduling synced with smart building
                  security.
                </p>

                <p className="text-gray-600 text-sm">
                  Ideal for gated societies, IT campuses, and
                  international schools.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                    alt="Nursingsarathi Noida setup"
                    fill
                    className="object-cover"
                  />
                </div>
                
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard
                title="SMART SOCIETY TIE-UPS"
                value="32"
                icon={<Users />}
              />
              <StatCard
                title="SCHOOL INFIRMARIES"
                value="14"
                icon={<ShieldCheck />}
              />
              <StatCard
                title="EMERGENCY ETA"
                value="25 min"
                icon={<Clock />}
              />
            </div>
          </div>

          {/* ================= INSIDE SETUP ================= */}
          <div className="mb-14">
            <p className="text-xs font-semibold text-gray-500 mb-3">
              INSIDE THE SETUP
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SetupBox />
              <SetupBox />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Dummy images – replace with real shots later.
            </p>
          </div>

          {/* ================= FEATURES ================= */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              KEY FEATURES
            </p>
            <h2 className="text-xl font-bold mb-6">
              What makes this service special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                number="1"
                title="Onsite wellness kiosks"
                desc="BP, BMI, glucose, and stress screenings with instant reports."
              />
              <FeatureCard
                number="2"
                title="Women’s health clinics"
                desc="PCOS, fertility, and prenatal guidance close to home."
              />
              <FeatureCard
                number="3"
                title="Security cleared staff"
                desc="Biometric access cards and daily geo-tagged attendance."
              />
            </div>
          </div>

          {/* ================= EXPECT + CTA ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-4">What to expect</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Drone medicine pilots",
                  "Multi-lingual call centre",
                  "Night shift nurse pool",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Want facility management support?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Bundle nurse desk, paramedics, and ambulance
                under one SLA.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                Launch Noida health desk
              </button>
            </div>
          </div>

          {/* ================= WHO / PAIRS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 mb-16">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Who is this best suited for?
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Families who want structured Nursingsarathi
                  Noida without repeated hospital visits.
                </li>
                <li>
                  Patients who need predictable nursing schedules
                  and clear escalation pathways.
                </li>
                <li>
                  Doctors looking for a reliable at-home extension
                  of their in-hospital protocols.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Pairs well with
              </h3>
              <p>
                Injection administration, wound dressing,
                speciality care programs, and 24×7 monitoring
                bundles for a fully choreographed care plan.
              </p>
            </div>
          </div>

          {/* ================= FAQ ================= */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              QUESTIONS
            </p>
            <h2 className="text-xl font-bold mb-4">
              Frequently asked about Nursingsarathi Noida
            </h2>

            <FAQ
              q="How do you verify your nurses?"
              a="Every nurse undergoes background verification, license validation, skill assessments, and 45 days of shadowing before independent deployment."
            />
            <FAQ
              q="Can I pause or modify a care plan mid-way?"
              a="Absolutely. Your care manager can pause, reschedule, or upgrade services with 4-hour notice and transparent billing adjustments."
            />
            <FAQ
              q="Do you support insurance claims?"
              a="Yes, we share itemised bills, medical records, and liaise with your insurer or TPA to keep reimbursements smooth."
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, icon }: any) {
  return (
    <div className="border rounded-xl p-6 flex items-center gap-4 shadow-sm">
      <div className="text-blue-700">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function SetupBox() {
  return (
    <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
      Nursingsarathi Noida
    </div>
  );
}

function FeatureCard({ number, title, desc }: any) {
  return (
    <div className="border rounded-xl p-6">
      <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mb-4">
        {number}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <p className="text-sm font-medium">{q}</p>
        <ChevronDown
          className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {a}
        </div>
      )}
    </div>
  );
}
