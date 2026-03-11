"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2C5F] text-white pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pb-10 sm:pb-12 border-b border-white/20">
          <div>
            <h3 className="text-lg font-bold mb-4">Nursing Sarathi</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Professional home healthcare delivered by government-certified nurses across 15+ states
              in India. Hospital-grade care in the comfort of your home.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/90 text-white/70">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="hover:text-white/90 text-white/70">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:text-white/90 text-white/70">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="hover:text-white/90 text-white/70">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/injection" className="hover:text-white">Injection Administration</Link></li>
              <li><Link href="/iv-cannulation" className="hover:text-white">IV Cannulation</Link></li>
              <li><Link href="/wound-dressing" className="hover:text-white">Wound Dressing</Link></li>
              <li><Link href="/catheterization" className="hover:text-white">Catheterization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9560505355</span>
              </div>
              <p className="ml-6 text-xs text-white/60">General Enquiries</p>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 8766382620</span>
              </div>
              <p className="ml-6 text-xs text-white/60">Emergency Hotline</p>
              <div className="flex items-center gap-2 mt-2">
                <Mail size={16} />
                <span className="break-all">care@nursingsarathi.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 py-6 text-sm text-white/70">
          <p className="text-center md:text-left">
            Copyright {year} Nursing Sarathi - Active Institute of Intensive Medical Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
