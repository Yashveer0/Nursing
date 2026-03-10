"use client";

import Link from "next/link";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function AllSpecialitiesPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-12">

          {/* ================= HERO ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full mb-4">
                SPECIALITY & SUPER SPECIALITY COMMAND
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Multi-speciality command center <br />
                built for complex recoveries
              </h1>

              <p className="text-gray-600 max-w-xl mb-6">
                Every speciality pod runs on the same playbook: consultant
                oversight, hospital partnerships, and predictive dashboards that
                surface risks before symptoms flare. Families see a single plan,
                clinicians get live data.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Stat value="14" label="City clinical hubs" />
                <Stat value="320+" label="Home ICU programs" />
                <Stat value="180+" label="Speciality clinicians" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h3 className="font-semibold mb-4">
                Expert teams working together for better outcomes
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  Daily doctor huddles & escalation ladders
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  Hospital-grade devices calibrated each visit
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  Dedicated family concierge + vitals dashboard
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  Multi-disciplinary speciality care teams
                </li>
              </ul>
            </div>
          </div>

          {/* ================= WORKFLOW ================= */}
          <div className="mt-20">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              SPECIALITY WORKFLOW
            </p>
            <h2 className="text-2xl font-bold mb-2">
              Same choreography for every program
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Replace later with Redux data — for now this assures clients that
              the command center runs on a standard pipeline.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <WorkflowStep
                step="Step 1"
                title="24h onboarding"
                desc="Vitals kit drop, family onboarding, and EMR token issued within the first day."
              />
              <WorkflowStep
                step="Step 2"
                title="Pod activation"
                desc="Consultant, nurse navigator, nutrition, physiotherapy, and counsellor assigned with shared SOP."
              />
              <WorkflowStep
                step="Step 3"
                title="Predictive rounds"
                desc="Data routed to command center. Doctors run virtual rounds and escalate against guardrails."
              />
              <WorkflowStep
                step="Step 4"
                title="Outcome review"
                desc="Weekly benchmarks with family plus discharge runway planning to avoid relapse."
              />
            </div>
          </div>

          {/* ================= SPECIALITY JOURNEYS ================= */}
          <div className="mt-20">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              SPECIALITY JOURNEYS
            </p>
            <h2 className="text-2xl font-bold mb-8">
              Choose the path that mirrors your diagnosis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <JourneyCard
                badge="Telemetry integrated"
                title="Cardiac Care"
                desc="Remote cardiologists, cardio rehab physios, and critical-care nurses collaborate using shared dashboards."
                stats={["38% · hospital readmission cut", "126/78 · average BP stability"]}
              />

              <JourneyCard
                badge="Onco-safe certified"
                title="Cancer Care"
                desc="From PICC line maintenance to neutropenia precautions, every detail is documented and shared with your oncologist."
                stats={["87% · chemo side-effect relief", "91% · nutrition adherence"]}
              />

              <JourneyCard
                badge="Neuro coach on-call"
                title="Neurosciences"
                desc="Speech therapists, occupational therapists, and neuro-psychologists align weekly goals with measurable outcomes."
                stats={["72% · mobility regained", "3.1 MoCA pts · cognitive improvement"]}
              />

              <JourneyCard
                badge="FODMAP friendly"
                title="Gastrosciences"
                desc="Includes home phlebotomy, stool sample pickups, and proactive hydration tracking."
                stats={["42% · flare-up reduction", "6 hrs · home lab turnaround"]}
              />

              <JourneyCard
                badge="Motion lab grade"
                title="Orthopaedics"
                desc="Pain specialists, physiotherapists, and occupational therapists deliver goal-based routines."
                stats={["2× faster · return-to-mobility", "15k+/yr · home physio sessions"]}
              />

              <JourneyCard
                badge="Kidney-safe protocols"
                title="Renal Care"
                desc="Includes medication reconciliation, anemia management, and fluid balance dashboards."
                stats={["88% · fluid compliance", "76% · anemia correction"]}
              />
            </div>
          </div>

          {/* ================= CLINICAL COMMAND ================= */}
          <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 border">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              CLINICAL COMMAND
            </p>
            <h2 className="text-xl font-bold mb-8">
              Critical speciality chiefs already staffed
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DoctorCard
                exp="Ex-AIIMS, 18 yrs"
                name="Dr. Nandini Vyas"
                role="Cardio-metabolic rehab lead"
                desc="Runs virtual MDT rounds for high-risk cardiac + diabetes overlap cases."
              />
              <DoctorCard
                exp="MSKCC trained"
                name="Dr. Harsh Murugan"
                role="Onco-transitional care director"
                desc="Owns escalation ladder design for chemo-to-home pathways in 6 cities."
              />
              <DoctorCard
                exp="12 yrs stroke rehab"
                name="Dr. Sana Pervez"
                role="Neuro restorative strategist"
                desc="Champions hybrid protocols with neuropsych + PT for cognitive outcomes."
              />
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }: any) {
  return (
    <div className="bg-white border rounded-xl px-4 py-3 shadow-sm">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function WorkflowStep({ step, title, desc }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">
      <p className="text-xs font-semibold text-indigo-600 mb-2">{step}</p>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function JourneyCard({ badge, title, desc, stats }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
      <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
        {badge}
      </span>

      <h3 className="font-semibold mt-3 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>

      <div className="space-y-1 text-sm font-medium text-gray-800 mb-4">
        {stats.map((s: string, i: number) => (
          <p key={i}>{s}</p>
        ))}
      </div>

      <Link
        href="/#"
        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:underline"
      >
        See care blueprint
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function DoctorCard({ exp, name, role, desc }: any) {
  return (
    <div className="border rounded-2xl p-6">
      <p className="text-xs font-semibold text-indigo-600">{exp}</p>
      <h4 className="font-semibold mt-1">{name}</h4>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <p className="text-sm text-gray-600 mb-3">{desc}</p>
      <span className="text-xs text-green-700 font-medium">
        Always on-call • Static placeholder
      </span>
    </div>
  );
}
