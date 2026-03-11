"use client";

import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AccessibilityPage() {
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
            Accessibility Statement
          </motion.h1>

          <p className="text-gray-600 text-lg">
            Nursing Sarathi is committed to making our website accessible to
            everyone, including people with disabilities.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          {/* Section 1 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              1. Our Commitment
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Nursing Sarathi is dedicated to ensuring digital accessibility
              for all users. We strive to make our website easy to use for
              everyone, including individuals with disabilities and elderly
              patients who rely on accessible healthcare information online.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              2. Accessibility Features
            </h2>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Keyboard-friendly navigation</li>
              <li>Screen reader compatibility</li>
              <li>Readable font sizes and clear typography</li>
              <li>High contrast colors for better visibility</li>
              <li>Responsive design for mobile and tablets</li>
              <li>Accessible forms and buttons</li>
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              3. Accessibility Standards
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our goal is to follow widely accepted accessibility standards
              including the Web Content Accessibility Guidelines (WCAG) 2.1
              wherever possible. These standards help ensure digital content
              is usable by people with a wide range of abilities.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              4. Ongoing Improvements
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We continuously review our website and services to improve
              accessibility. Our team regularly works on enhancing usability
              and ensuring our healthcare platform remains inclusive and easy
              to access.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              5. Third-Party Content
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Some areas of our website may include third-party tools or
              content. While we strive to ensure accessibility across our
              platform, we cannot guarantee the accessibility of external
              services.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-3">
              6. Accessibility Support
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If you experience difficulty accessing any part of our website,
              please contact us. We welcome feedback and will do our best to
              provide the information or assistance you need.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}