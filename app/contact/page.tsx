'use client';

import Image from 'next/image';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { CallbackForm } from '@/components/callback-form';

export default function ContactPage() {
  const contactDetails = {
    generalPhone: '+91 9560505355',
    emergencyPhone: '+91 8766382620',
    email: 'care@nursingsarathi.com',
  };

  return (
    <main className="bg-white">
      <Header />

      <section className="relative mt-24 h-[240px] sm:h-[300px] md:h-[320px] w-full">
        <Image src="/injection_img.png" alt="Contact Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100 px-4 py-1 rounded-full mb-4">
              HERE FOR YOU 24x7
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s design the right care plan together
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Share a few details and our care concierge will respond within 30 minutes. Need urgent
              help? Call the hotline anytime.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs font-semibold text-gray-500 mb-2">GENERAL ENQUIRIES</p>
              <p className="font-bold text-lg">{contactDetails.generalPhone}</p>
              <p className="text-sm text-gray-600 mt-1">Primary contact number for home care support.</p>
            </Card>
            <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs font-semibold text-gray-500 mb-2">CARE CONCIERGE EMAIL</p>
              <p className="font-bold text-lg">{contactDetails.email}</p>
              <p className="text-sm text-gray-600 mt-1">Share reports, requests, or partnerships.</p>
            </Card>
            <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs font-semibold text-gray-500 mb-2">EMERGENCY HOTLINE</p>
              <p className="font-bold text-lg">{contactDetails.emergencyPhone}</p>
              <p className="text-sm text-gray-600 mt-1">Immediate assistance for urgent care coordination.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact
              <br />
              Nursingsarathi
            </h2>
            <p className="text-gray-600 max-w-md mb-10">
              Share your care requirements and our nurse concierge will get back with a personalized
              plan, pricing, and next steps.
            </p>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <strong>General Enquiries:</strong> {contactDetails.generalPhone}
              </p>
              <p>
                <strong>Emergency Hotline:</strong> {contactDetails.emergencyPhone}
              </p>
              <p>
                <strong>Email:</strong> {contactDetails.email}
              </p>
              <p>
                <strong>Web:</strong> nursingsarathi.com
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <CallbackForm
              eyebrow="Care Enquiry"
              title="Tell us the care you need"
              buttonLabel="Send Enquiry"
              className="max-w-none p-5 sm:p-8"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
            <p className="text-xs font-semibold text-gray-500 mb-1">VISIT US</p>
            <p className="font-bold">Nursingsarathi HQ</p>
            <p className="text-sm text-gray-600">Noida Office, E-23 Sector-3, Noida</p>
            <p className="text-xs font-semibold text-gray-500 mt-3 mb-1">
              Mohali / Chandigarh Office
            </p>
            <p className="text-sm text-gray-600">GM Plaza, 3rd Floor, Sector 77, Mohali</p>
            <p className="text-sm mt-2">{contactDetails.email}</p>
          </Card>

          <Card className="p-6 bg-blue-50 hover:-translate-y-1 transition-transform duration-300">
            <p className="text-xs font-semibold text-gray-500 mb-1">NEED URGENT HELP?</p>
            <p className="text-2xl font-bold text-blue-900">{contactDetails.emergencyPhone}</p>
            <p className="text-sm text-gray-600 mt-2">
              Nurse triage desk, average response 42 seconds. We coordinate ambulances and hospital
              admissions.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
