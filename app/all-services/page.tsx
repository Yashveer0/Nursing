"use client";

import Link from "next/link";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function AllServicesPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mt-18 mx-auto px-4 py-12">

          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                NURSING SERVICES · HOME CARE
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nursing services <br />
                designed for real life
              </h1>

              <p className="text-gray-600 max-w-xl mb-6">
                From acute visits to long-term care plans, every service is
                delivered by verified nurses with hospital-grade protocols and
                clear escalation pathways.
              </p>

              <div className="flex gap-4">
                <Stat label="Care plans delivered" value="35k+" />
                <Stat label="Cities covered" value="12" />
                <Stat label="On-time visits" value="98%" />
              </div>
            </div>

            {/* RIGHT INFO CARD */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h3 className="font-semibold mb-4">
                Why patients trust us
              </h3>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  Verified nurses with multi-level credential checks
                </li>
                <li className="flex gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Digital documentation & doctor-ready reports
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Escalation support & rapid response workflows
                </li>
              </ul>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="mt-16">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              EXPLORE SERVICES
            </p>
            <h2 className="text-2xl font-bold mb-8">
              Pick the care pathway you need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <ServiceCard
                title="Injection Administration"
                desc="Safe medication delivery following WHO injection protocols."
                tags={["At-home visits", "Sterile kits"]}
                href="/injection"
              />

              <ServiceCard
                title="IV Cannulation"
                desc="Ultrasound-assisted IV access for hydration & therapy."
                tags={["Ultrasound assisted", "Long-dwell"]}
                href="/iv-cannulation"
              />

              <ServiceCard
                title="Wound Dressing"
                desc="Advanced wound care using modern dressings and monitoring."
                tags={["Chronic wounds", "Post-op care"]}
                href="/wound-dressing"
              />

              <ServiceCard
                title="Catheterization"
                desc="Male & female catheter care with privacy-first protocols."
                tags={["UTI prevention", "Sterile technique"]}
                href="/catheterization"
              />

              <ServiceCard
                title="Nasogastric Intubation"
                desc="NG/NJ tube placement with verification & feeding setup."
                tags={["pH verification", "Feeding plans"]}
                href="/nasogastric-intubation"
              />

            </div>
          </div>

          {/* GUARANTEES */}
          <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 border">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              WHAT WE GUARANTEE
            </p>
            <h2 className="text-xl font-bold mb-8">
              Every service comes with these guarantees
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Guarantee
                icon={<ShieldCheck className="w-5 h-5 text-blue-600" />}
                title="Vetted professionals"
                desc="Background-verified nurses with skill-based assignments."
              />
              <Guarantee
                icon={<FileText className="w-5 h-5 text-blue-600" />}
                title="Digital documentation"
                desc="Clear visit notes, vitals, and escalation logs."
              />
              <Guarantee
                icon={<Clock className="w-5 h-5 text-blue-600" />}
                title="24×7 escalation"
                desc="Immediate support for urgent or complex situations."
              />
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ label, value }: any) {
  return (
    <div className="bg-white border rounded-xl px-4 py-3 shadow-sm">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function ServiceCard({ title, desc, tags, href }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
      >
        View service details
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function Guarantee({ icon, title, desc }: any) {
  return (
    <div className="border rounded-xl p-6 flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
