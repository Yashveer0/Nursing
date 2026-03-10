"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function InternationalPatientsPage() {
  return (
    <div className="bg-[#f4f6f8]">
      {/* ================= HERO SECTION ================= */}
      <Header />
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold text-blue-700">
              INTERNATIONAL PATIENTS
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fly in for care, feel at home instantly
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Visas, hospitals, translators, treatment follow-ups — everything
              coordinated before you even land.
            </p>
          </motion.div>

          {/* Right Trust Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-[#2b2f77] to-[#e33b44] p-8 text-white shadow-xl">
              <p className="text-xs uppercase tracking-wide opacity-80">
                Global Trust
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Patients from 34 countries since 2018
              </h3>

              <p className="mt-3 text-sm opacity-90">
                Concierge, translators, dieticians, and post-travel
                telemedicine plans built into every program.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-blue-700" />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Visa & compliance ready
                </p>
                <p className="text-xs text-gray-600">
                  Embassy documentation and FRRO support included
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase text-blue-700">
              Choose a Program
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Support at every milestone
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Whether you need estimates, concierge support, or insurance
              assistance, we have a specialised desk ready to help.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProgramCard
              tag="24x7 concierge"
              title="International Help Desk"
              stats={["34+ countries served", "40 sec median response"]}
            />

            <ProgramCard
              tag="Seamless journeys"
              title="Plan Your Trip"
              stats={["5 days avg planning", "42 partner hotels"]}
            />

            <ProgramCard
              tag="Transparent billing"
              title="Request An Estimate"
              stats={["+5% quote accuracy", "28 hospitals onboard"]}
            />

            <ProgramCard
              tag="Cashless ready"
              title="Insurance Partner Network"
              stats={["22 TPAs onboard", "94% approval success"]}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ================= REUSABLE CARD ================= */

function ProgramCard({
  tag,
  title,
  stats,
}: {
  tag: string;
  title: string;
  stats: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl cursor-pointer"
    >
      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
        {tag}
      </span>

      <h3 className="mt-4 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {stats.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center text-sm font-semibold text-blue-700">
        See details
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}
