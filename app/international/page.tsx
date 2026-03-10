import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'International Patients - Nursing Sarathi',
  description: 'Healthcare services for international patients and medical tourists.',
};

export default function InternationalPage() {
  const services = [
    {
      title: 'Multi-lingual Support',
      description: 'Professional interpreters and multilingual staff to assist international patients.',
      icon: '🌍',
    },
    {
      title: 'Documentation Assistance',
      description: 'Help with medical documentation, visa requirements, and travel arrangements.',
      icon: '📋',
    },
    {
      title: 'Hospital Coordination',
      description: 'Direct coordination with leading hospitals and medical institutions.',
      icon: '🏥',
    },
    {
      title: 'Insurance Support',
      description: 'Assistance with international health insurance claims and procedures.',
      icon: '💳',
    },
    {
      title: 'Accommodation Assistance',
      description: 'Help finding suitable accommodation near hospitals and care facilities.',
      icon: '🏨',
    },
    {
      title: 'Travel Support',
      description: 'Guidance for safe travel arrangements and airport pickup services.',
      icon: '✈️',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            International Patients
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Comprehensive healthcare services for international patients and medical tourists.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to Nursing Sarathi</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are proud to serve international patients seeking world-class healthcare in India. Our experienced team provides comprehensive support throughout your medical journey, ensuring comfort, quality care, and peace of mind.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 border border-border hover:shadow-lg transition-shadow bg-white">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Our Services?
            </h3>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
              Contact Our International Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
