"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { CheckCircle, Phone, ChevronDown } from "lucide-react";

export default function CatheterizationPage() {
  return (
    <div className="relative mt-18 overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-4">
            Services / <span className="text-gray-700">Catheterization</span>
          </p>

          {/* MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            {/* HERO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  PRIVACY-FIRST PROTOCOL
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  Catheterization
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Intimate care with impeccable hygiene
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  We provide male and female catheter insertions, suprapubic care,
                  and bladder irrigation with utmost privacy and infection control.
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Ideal for chronic retention, post-surgical care, neurogenic
                  bladder management, or palliative comfort.
                </p>
              </div>

              {/* IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/injection_img.png"
                    alt="Catheterization setup"
                    fill
                    className="object-cover"
                  />
                </div>
                
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard title="UTI PREVENTION RATE" value="97%" />
              <StatCard title="NURSE EXPERIENCE" value="7+ yrs avg" />
              <StatCard title="STERILE KITS CARRIED" value="3 variants" />
            </div>

            {/* INSIDE SETUP */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                INSIDE THE SETUP
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  Catheterization
                </div>
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  Catheterization
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Dummy images – replace with real shots later.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                KEY FEATURES
              </p>
              <h2 className="text-xl font-bold mb-6">
                What makes this service special
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  number="1"
                  title="Custom sizing & materials"
                  desc="Latex-free, silicone, and hydrogel-coated options sized after assessment."
                />
                <FeatureCard
                  number="2"
                  title="Education for caregivers"
                  desc="Drainage bag handling, intake-output charts, and early red-flag spotting."
                />
                <FeatureCard
                  number="3"
                  title="24×7 escalation line"
                  desc="Immediate guidance if discomfort, bleeding, or blockage occurs."
                />
              </div>
            </div>

            {/* EXPECTATION + CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold mb-4">What to expect</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Consent and dignity checklist
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Periurethral antisepsis with warm saline rinse
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Lubricant + lidocaine comfort combo
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold mb-2">
                  Need recurring monthly care?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We schedule recurring visits and manage supplies automatically.
                </p>
                <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                  <Phone className="w-4 h-4" />
                  Plan catheter care
                </button>
              </div>
            </div>

            {/* WHO + PAIRS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Who is this best suited for?
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Families wanting structured catheter care without hospital visits</li>
                  <li>Patients needing predictable nursing schedules</li>
                  <li>Doctors extending hospital protocols into home care</li>
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

            {/* FAQ */}
            <div className="mt-14">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                QUESTIONS
              </p>
              <h2 className="text-xl font-bold mb-4">
                Frequently asked about catheterization
              </h2>

              <FAQItem
                question="How do you verify your nurses?"
                answer="Every nurse undergoes background verification, license validation, skill assessments, and 45 days of supervised shadowing."
              />
              <FAQItem
                question="Can I pause or modify a care plan mid-way?"
                answer="Absolutely. Your care manager can pause, reschedule, or upgrade services with transparent billing."
              />
              <FAQItem
                question="Do you support insurance claims?"
                answer="Yes, we share itemised bills, medical records, and coordinate with insurers or TPAs."
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

function StatCard({ title, value }: any) {
  return (
    <div className="border rounded-xl p-6 text-center shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
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

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <p className="text-sm font-medium text-gray-800">{question}</p>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}
