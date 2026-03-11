"use client";

import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r mt-18 from-primary/10 to-accent/10 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Terms & Conditions
          </motion.h1>

          <p className="text-gray-600 text-lg">
            Please read these terms carefully before using Nursing Sarathi
            services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          {/* Section 1 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Nursing Sarathi. By accessing our website and using our
              services, you agree to comply with these Terms & Conditions. These
              terms govern your use of our healthcare support services and
              website content.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">2. Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Nursing Sarathi provides professional home healthcare support
              services including nursing care, patient assistance, elderly care,
              and post-hospital recovery support. All services are delivered by
              trained healthcare professionals.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate information when requesting services</li>
              <li>Follow medical advice given by licensed professionals</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect healthcare staff and caregivers</li>
            </ul>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">4. Appointment & Booking</h2>
            <p className="text-gray-600 leading-relaxed">
              Service bookings may be scheduled through our website or support
              team. Availability may vary depending on location and healthcare
              staff availability.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">5. Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              Fees for services will be communicated before service delivery.
              Payments must be completed as per the agreed service plan.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">6. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your personal and medical information will be handled with strict
              confidentiality in accordance with our Privacy Policy.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Nursing Sarathi strives to provide high-quality healthcare
              assistance; however, we are not liable for outcomes resulting from
              incomplete information, misuse of services, or medical conditions
              beyond our service scope.
            </p>
          </motion.div>

          {/* SECTION 8 DISCLAIMER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-3 text-red-700">
              SECTION 8 – Legal Disclaimer
            </h2>

            <p className="text-red-700 font-medium leading-relaxed">
              We do not diagnose or prescribe medicines. All services are
              provided strictly under medical prescription and within home
              healthcare scope.
            </p>
          </motion.div>

          {/* Section 9 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Nursing Sarathi reserves the right to update or modify these Terms
              & Conditions at any time. Updates will be posted on this page.
            </p>
          </motion.div>

          {/* Section 10 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions regarding these Terms & Conditions, please contact
              Nursing Sarathi through our website or support channels.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}