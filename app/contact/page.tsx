'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        alert('Message sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Something went wrong.');
      }
    } catch {
      alert('Server error.');
    }
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
              <p className="text-xs font-semibold text-gray-500 mb-2">CARE HOTLINE</p>
              <p className="font-bold text-lg">+91 8800-222-111</p>
              <p className="text-sm text-gray-600 mt-1">24x7 nurse triage desk for urgent needs.</p>
            </Card>
            <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs font-semibold text-gray-500 mb-2">CARE CONCIERGE EMAIL</p>
              <p className="font-bold text-lg">hello@nursingsarathi.com</p>
              <p className="text-sm text-gray-600 mt-1">Share reports, requests, or partnerships.</p>
            </Card>
            <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs font-semibold text-gray-500 mb-2">WALK-IN HOURS</p>
              <p className="font-bold text-lg">Mon-Sat | 9am to 7pm</p>
              <p className="text-sm text-gray-600 mt-1">Sector 44, Gurugram | Appointment preferred</p>
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
                <strong>Phone:</strong> +91 8800-222-111
              </p>
              <p>
                <strong>Email:</strong> hello@nursingsarathi.com
              </p>
              <p>
                <strong>Web:</strong> nursingsarathi.com
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <Card className="p-5 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                  <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                </div>
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="min-h-[140px]" required />
                <Button className="w-full bg-blue-900 hover:bg-blue-800 hover:scale-[1.01] active:scale-[0.98] transition-transform">
                  Send Message
                </Button>
              </form>
            </Card>
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
            <p className="text-sm mt-2">hello@nursingsarathi.com</p>
          </Card>

          <Card className="p-6 bg-blue-50 hover:-translate-y-1 transition-transform duration-300">
            <p className="text-xs font-semibold text-gray-500 mb-1">NEED URGENT HELP?</p>
            <p className="text-2xl font-bold text-blue-900">+91 8800-222-111</p>
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
