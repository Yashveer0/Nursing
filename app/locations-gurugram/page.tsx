"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Phone,
  ChevronDown,
  MapPin,
  Clock,
  Users,
} from "lucide-react";

export default function GurugramLocationPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />
       

        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* BREADCRUMB */}
           <div className="flex flex-wrap gap-2 mb-6">
  {[
    { name: "Gurugram", href: "/locations-gurugram" },
    { name: "Lucknow", href: "/locations-lucknow" },
    { name: "Patna", href: "/locations-patna" },
    { name: "Indore", href: "/locations-indore" },
    { name: "Noida", href: "/locations-noida" },
    { name: "Ranchi", href: "/locations-ranchi" },
    { name: "Mediclinics", href: "/mediclinics" },
  ].map((city) => (
    <Link
      key={city.name}
      href={city.href}
      className={`px-4 py-1 rounded-full text-sm transition ${
        city.name === "Gurugram"
          ? "bg-blue-700 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {city.name}
    </Link>
  ))}
</div>
          <p className="text-sm text-gray-500 mb-4">
            Locations / <span className="text-gray-700">Nursingsarathi Gurugram</span>
          </p>

          {/* ================= HERO ================= */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  FLAGSHIP HUB
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Nursingsarathi Gurugram
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Corporate capital, compassionate care
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Sector 44 command centre deploys rapid-response nurses across
                  Gurgaon, Manesar, and Dwarka Expressway.
                </p>

                <p className="text-gray-600 text-sm">
                  Trusted by expat families, Fortune 500 offices, and senior
                  communities alike.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                    alt="Nursingsarathi Gurugram setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 flex justify-between">
                  <span>Illustrative image for Gurugram</span>
                  <span className="text-blue-600 font-semibold">REAL-WORLD INSPIRED</span>
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard title="SERVICE RADIUS" value="35 km" icon={<MapPin />} />
              <StatCard title="RAPID UNITS" value="14" icon={<Users />} />
              <StatCard title="AVG. RESPONSE" value="30 min" icon={<Clock />} />
            </div>
          </div>

          {/* ================= INSIDE SETUP ================= */}
          <div className="mb-14">
            <p className="text-xs font-warning text-gray-500 mb-3">
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
                title="Corporate wellness pods"
                desc="In-office vaccination, ergonomic audits, and nurse stations."
              />
              <FeatureCard
                number="2"
                title="NICU-on-wheels"
                desc="Portable incubators for neonatal transport to partner hospitals."
              />
              <FeatureCard
                number="3"
                title="Senior clusters"
                desc="Dedicated geriatric teams for DLF, Nirvana, and South City."
              />
            </div>
          </div>

          {/* ================= EXPECT + CTA ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-4">What to expect</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  Dedicated city helpline +91 8800-999-001
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  Partner hospitals: Medanta, Artemis, Fortis
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  Multi-lingual care teams
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Need a site visit?</h3>
              <p className="text-sm text-gray-600 mb-4">
                We tour your home or office to map ideal care pathways.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                Plan Gurugram care
                <Phone className="w-4 h-4" />
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
                <li>Families wanting structured home care without hospital visits</li>
                <li>Patients needing predictable schedules and escalation pathways</li>
                <li>Doctors extending in-hospital protocols to homes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Pairs well with
              </h3>
              <p>
                Injection administration, wound dressing, speciality care
                programs, and 24×7 monitoring bundles.
              </p>
            </div>
          </div>

          {/* ================= FAQ ================= */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              QUESTIONS
            </p>
            <h2 className="text-xl font-bold mb-4">
              Frequently asked about Nursingsarathi Gurugram
            </h2>

            <FAQ
              q="How do you verify your nurses?"
              a="Every nurse undergoes background verification, license validation, skill assessments, and 45 days of supervised shadowing."
            />
            <FAQ
              q="Can I pause or modify a care plan mid-way?"
              a="Absolutely. Care managers can pause, reschedule, or upgrade services with transparent billing."
            />
            <FAQ
              q="Do you support insurance claims?"
              a="Yes, we share itemised bills, medical records, and coordinate with insurers or TPAs."
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
      Nursingsarathi Gurugram
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
      {open && <div className="px-4 pb-4 text-sm text-gray-600">{a}</div>}
    </div>
  );
}
