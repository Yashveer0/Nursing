"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { CheckCircle, Plane, ChevronDown } from "lucide-react";

export default function PlanYourTripPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-6xl mt-18 mx-auto px-4 py-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-4">
            International Patients /{" "}
            <span className="text-gray-700">Plan Your Trip</span>
          </p>

          {/* MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            {/* HERO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  SEAMLESS JOURNEYS
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  Plan Your Trip
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Travel + treatment, choreographed
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Curated itineraries align flights, recovery stays,
                  sightseeing, and physiotherapy follow-ups.
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  From medical visas to post-operative tourism, everything
                  is documented and insured.
                </p>
              </div>

              {/* IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/health.jpg"
                    alt="Plan your trip setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard title="AVERAGE PLANNING TIME" value="5 days" />
              <StatCard title="PARTNER HOTELS" value="42" />
              <StatCard title="AIRPORT TRANSFERS" value="Included" />
            </div>

            {/* INSIDE SETUP */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                INSIDE THE SETUP
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  Plan Your Trip
                </div>
                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-400">
                  Plan Your Trip
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
                  title="Itinerary playbooks"
                  desc="Day-by-day schedule with downtime, labs, and consults."
                />
                <FeatureCard
                  number="2"
                  title="Nutrition coordination"
                  desc="Halal, vegan, gluten-free, and medical diets handled with chefs."
                />
                <FeatureCard
                  number="3"
                  title="Recreation add-ons"
                  desc="City tours, translators, and shopping guides for families."
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
                    Insurance-ready documentation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Multi-currency payment support
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    Telemedicine follow-ups after return
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold mb-2">
                  Want cost comparisons?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Receive estimates from 3 hospitals with transparent inclusions.
                </p>
                <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                  <Plane className="w-4 h-4" />
                  Start travel plan
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
                  <li>Families wanting structured travel coordination</li>
                  <li>Patients needing predictable schedules & escalation clarity</li>
                  <li>Doctors extending hospital protocols internationally</li>
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
                Frequently asked about plan your trip
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
