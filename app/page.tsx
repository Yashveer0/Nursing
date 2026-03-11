import  Header  from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesOverview } from '@/components/sections/services-overview';
import { ServicesDetail } from '@/components/sections/services-detail';
import { CareProgramsSection } from '@/components/sections/care-programs-section';
import { BlogsSection } from '@/components/sections/blogs-section';
import { TestimonialSection } from '@/components/sections/testimonial-section';
import { GoogleReviews } from '@/components/sections/google-reviews';
import { InstagramFeed } from '@/components/sections/instagram-feed';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Nursing Sarathi - Professional Home Care Services',
  description: 'Compassionate hospital-grade care at home with verified staff and 24/7 availability',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-18">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      {/* <ServicesDetail /> */}
      <CareProgramsSection />
      <BlogsSection />
      <TestimonialSection />
      {/* <GoogleReviews />
      <InstagramFeed /> */}
      <Footer />
    </main>
  );
}
