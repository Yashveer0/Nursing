"use client";

import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>

          <p className="text-gray-600 text-lg">
            Your privacy is important to us at Nursing Sarathi.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Nursing Sarathi. We respect your privacy and are committed
              to protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data when you visit our
              website or use our healthcare-related services.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              2. Information We Collect
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may collect personal information such as your name, email
              address, phone number, and other details when you contact us,
              subscribe to our blog, or use our healthcare services.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide healthcare-related services and support</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website and user experience</li>
              <li>Send updates, newsletters, or health tips</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              4. Data Protection
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal
              information from unauthorized access, misuse, or disclosure.
              However, no internet-based system is completely secure.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              5. Third-Party Services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party services or websites.
              Nursing Sarathi is not responsible for the privacy practices of
              those external sites.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              6. Cookies
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may use cookies and similar technologies to enhance your browsing
              experience and understand how visitors interact with our website.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              7. Changes to This Policy
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with the updated revision date.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-3">
              8. Contact Us
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you have any questions regarding this Privacy Policy, you can
              contact us through our website or email support.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}