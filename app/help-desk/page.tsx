"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { CheckCircle, Phone, ChevronDown } from "lucide-react";

export default function HelpDeskPage() {
  return (
    <div className="relative mt-18 overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-4">
            International Patients /{" "}
            <span className="text-gray-700">International Help Desk</span>
          </p>

          {/* MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            {/* HERO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  24×7 CONCIERGE
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  International Help Desk
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Concierge humans, not call trees
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  We assign a bilingual care ambassador to plan visas,
                  accommodation, translators, and hospital appointments.
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Available on WhatsApp, email, and live video in GMT+5:30,
                  GMT+1, and EST-friendly windows.
                </p>
              </div>

              {/* IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/about.jpg"
                    alt="International help desk setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard title="COUNTRIES SERVED" value="34" />
              <StatCard title="MEDIAN RESPONSE" value="40 sec" />
              <StatCard title="FAMILY SATISFACTION" value="4.8 / 5" />
            </div>

            {/* INSIDE SETUP */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                INSIDE THE SETUP
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  International Help Desk
                </div>
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  International Help Desk
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
                  title="Visa paperwork kit"
                  desc="Invitation letters, medical summaries, and FRRO coordination."
                />
                <FeatureCard
                  number="2"
                  title="Interpreter pool"
                  desc="Arabic, French, Russian, Spanish, Bahasa, and Swahili experts."
                />
                <FeatureCard
                  number="3"
                  title="Local experiences"
                  desc="City guides, dietary support, and cultural orientation for families."
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
                    Dedicated WhatsApp hotline
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Airport meet & greet
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Hospital admissions fast-tracked
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold mb-2">
                  Need hospital tie-ups?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We coordinate with Fortis, Max, Medanta, and Artemis
                  international desks.
                </p>
                <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                  <Phone className="w-4 h-4" />
                  Chat with concierge
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
                  <li>Families seeking structured international coordination</li>
                  <li>Patients needing predictable schedules & escalation clarity</li>
                  <li>Doctors extending hospital protocols to home settings</li>
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
                Frequently asked about international help desk
              </h2>

              <FAQItem
                question="How do you verify your nurses?"
                answer="Every nurse undergoes background verification, license validation, skill assessments, and 45 days of supervised shadowing."
              />
              <FAQItem
                question="Can I pause or modify a care plan mid-way?"
                answer="Yes. Care plans can be paused, modified, or upgraded with 4-hour notice and transparent billing."
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
