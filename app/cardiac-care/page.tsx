"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { CheckCircle, Phone, ChevronDown } from "lucide-react";

export default function CardiacCarePage() {
  return (
    <div className="relative overflow-hidden mt-18 bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-4">
            Speciality / <span className="text-gray-700">Cardiac Care</span>
          </p>

          {/* MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            {/* HERO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  TELEMETRY INTEGRATED
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  Cardiac Care
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Round-the-clock rhythm monitoring
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  From post-angioplasty recovery to chronic heart failure
                  management, our cardiac command centre keeps you stable at home.
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Remote cardiologists, cardio rehab physios, and critical-care
                  nurses collaborate using shared dashboards.
                </p>
              </div>

              {/* IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/cardiac-care.jpg"
                    alt="Cardiac Care program"
                    fill
                    className="object-cover"
                  />
                </div>
                
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard title="HOSPITAL READMISSION CUT" value="38%" />
              <StatCard title="AVERAGE BP STABILITY" value="126/78" />
              <StatCard title="DEDICATED CARDIOLOGISTS" value="12" />
            </div>

            {/* WHY FAMILIES PICK THIS */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Why families pick this
              </h3>
              <p className="text-sm text-gray-600">
                Built to reduce readmissions and keep specialists looped in with
                real-time home data, without adding hospital fatigue for families.
              </p>
            </div>

            {/* INSIDE PROGRAM */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                INSIDE THE PROGRAM
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  Cardiac Care
                </div>
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  Cardiac Care
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Dummy images – replace with real speciality photos later.
              </p>
            </div>

            {/* CARE MODULES */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                CARE MODULES
              </p>
              <h2 className="text-xl font-bold mb-6">
                How this speciality program is stitched together
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  number="1"
                  title="Medication titration support"
                  desc="Evidence-based dosage tweaks with your cardiologist always on loop."
                />
                <FeatureCard
                  number="2"
                  title="Cardiac rehab pods"
                  desc="Supervised exercises, posture drills, breathwork, and gait training."
                />
                <FeatureCard
                  number="3"
                  title="Remote vitals bridge"
                  desc="ECG patches, SpO₂, and BP cuffs stream into alerts dashboard."
                />
              </div>
            </div>

            {/* EXPECTATION + CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold mb-4">
                  What to expect day-to-day
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Baseline cardiology consult report review
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Lifestyle blueprint for salt, sleep, and stress
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Emergency escalation to cath-lab partners
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold mb-2">
                  Need second opinion?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Share angiography films securely for 24-hour turnaround insights.
                </p>
                <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                  <Phone className="w-4 h-4" />
                  Talk to cardiac nurse navigator
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-14">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                QUESTIONS
              </p>
              <h2 className="text-xl font-bold mb-4">
                Frequently asked about cardiac care programs
              </h2>

              <FAQItem
                question="How do you verify your nurses?"
                answer="Every nurse undergoes background verification, license validation, skill assessments, and 45 days of supervised shadowing."
              />
              <FAQItem
                question="Can I pause or modify a care plan mid-way?"
                answer="Absolutely. Your care manager can pause, reschedule, or upgrade services with 4-hour notice."
              />
              <FAQItem
                question="Do you support insurance claims?"
                answer="Yes, we share itemised bills, medical records, and liaise with insurers or TPAs."
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
