'use client';

import { CallbackForm } from '@/components/callback-form';
import { Heart, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedButton } from '@/components/animations/animated-button';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-cover bg-center overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? {} : { scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(13, 27, 77, 0.4) 0%, rgba(69, 122, 184, 0.2) 100%), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <Heart className="w-5 h-5 text-white fill-white" />
              <span className="text-xs font-semibold tracking-widest uppercase letter-spacing">HOME CARE</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-5 sm:mb-6 text-balance"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              Compassionate Hospital-Grade Care at Home
            </motion.h1>

            <motion.p
              className="text-gray-100 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed font-light"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From post-operative healing to chronic care management, our certified nurses, physiotherapists, and care coordinators deliver hospital-standard protocols right where you are.
            </motion.p>

            {/* Feature Badges */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">

  <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full w-full sm:w-fit">
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="font-semibold text-sm">100% Verified Staff</span>
  </div>

  <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full w-full sm:w-fit">
    <Clock className="w-5 h-5 flex-shrink-0" />
    <span className="font-semibold text-sm">Background Checked</span>
  </div>

  <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full w-full sm:w-fit">
    <Clock className="w-5 h-5 flex-shrink-0" />
    <span className="font-semibold text-sm">Doctor Prescribed Care</span>
  </div>

  <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full w-full sm:w-fit">
    <Clock className="w-5 h-5 flex-shrink-0" />
    <span className="font-semibold text-sm">Transparent Pricing</span>
  </div>

  <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full w-full sm:w-fit">
    <Clock className="w-5 h-5 flex-shrink-0" />
    <span className="font-semibold text-sm">24/7 Availability</span>
  </div>

</div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <AnimatedButton className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                Book Free Consultation
              </AnimatedButton>
              <AnimatedButton className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base rounded-full font-semibold bg-transparent backdrop-blur-sm transition-colors">
                Talk to Care Advisor
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Callback Form */}
          <div className="hidden lg:block">
            <CallbackForm />
          </div>
        </div>

        {/* Mobile Callback Form */}
        <div className="lg:hidden mt-10 sm:mt-14">
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}
