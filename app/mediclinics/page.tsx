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
  Clock,
  TrendingUp,
} from "lucide-react";

export default function MediclinicsPage() {
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

        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* ================= CITY / SERVICE TABS ================= */}
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
            <span className="text-gray-700">
              Nursingsarathi Mediclinics
            </span>
          </p>

          {/* ================= HERO ================= */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  CLINIC-IN-A-BOX
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Nursingsarathi Mediclinics
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Mini-clinics inside communities
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Plug-and-play nurse-led clinics for societies,
                  factories, and campuses needing full-time
                  medical rooms.
                </p>

                <p className="text-gray-600 text-sm">
                  Includes supply chain, doctor tie-ups,
                  digital health records, and occupational
                  safety reporting.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                    alt="Nursingsarathi Mediclinics setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 flex justify-between">
                  <span>
                    Illustrative image for Nursingsarathi Mediclinics
                  </span>
                  <span className="text-blue-600 font-semibold">
                    REAL-WORLD INSPIRED
                  </span>
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard
                title="CLINICS LAUNCHED"
                value="54"
                icon={<Activity />}
              />
              <StatCard
                title="ACTIVATION SPEED"
                value="21 days"
                icon={<Clock />}
              />
              <StatCard
                title="UTILISATION BOOST"
                value="2.5×"
                icon={<TrendingUp />}
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
                title="Modular layouts"
                desc="Pharmacy shelf, triage bay, tele-med kiosk, vaccine fridge."
              />
              <FeatureCard
                number="2"
                title="Digital queueing"
                desc="QR check-ins, vitals sync, and doctor follow-up alerts."
              />
              <FeatureCard
                number="3"
                title="Reporting engine"
                desc="Monthly utilisation, incident, and wellness dashboards."
              />
            </div>
          </div>

          {/* ================= EXPECT + CTA ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-4">
                What to expect
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Complies with Factories Act",
                  "Multi-employer SLA options",
                  "Emergency drills every quarter",
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
                Need a custom blueprint?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our architects co-design interiors and
                equipment flow.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                Launch a mediclinic
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
                  Mediclinics without repeated hospital visits.
                </li>
                <li>
                  Patients who need predictable nursing
                  schedules and clear escalation pathways.
                </li>
                <li>
                  Doctors looking for a reliable at-home
                  extension of their in-hospital protocols.
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
              Frequently asked about Nursingsarathi Mediclinics
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
      Nursingsarathi Mediclinics
    </div>
  );
}

function FeatureCard({ number, title, desc }: any) {
  return (
    <div className="border rounded-xl p-6">
      <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mb-4">
        {number}
      </div>
      <h4 className="font-semibold mb-2">
        {title}
      </h4>
      <p className="text-sm text-gray-600">
        {desc}
      </p>
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
          className={`w-4 h-4 transition ${
            open ? "rotate-180" : ""
          }`}
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
