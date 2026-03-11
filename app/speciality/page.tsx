import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

const specialities = [
  {
    title: 'Cardiac Care',
    description: 'Specialized care for patients with heart conditions and post-cardiac interventions.',
    icon: '❤️',
  },
  {
    title: 'Orthopedic Care',
    description: 'Post-surgical orthopedic care with physiotherapy and mobility assistance.',
    icon: '🦴',
  },
  {
    title: 'Neurological Care',
    description: 'Specialized care for stroke, paralysis, and other neurological conditions.',
    icon: '🧠',
  },
  {
    title: 'Geriatric Care',
    description: 'Comprehensive elder care with focus on chronic disease management.',
    icon: '👴',
  },
  {
    title: 'Oncology Support',
    description: 'Supportive care for cancer patients undergoing treatment.',
    icon: '🏥',
  },
  {
    title: 'Respiratory Care',
    description: 'Specialized respiratory support and oxygen therapy services.',
    icon: '💨',
  },
];

export const metadata = {
  title: 'Our Specialities - Nursing Sarathi',
  description: 'Explore our specialized healthcare services across various medical conditions.',
};

export default function SpecialityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r mt-18 from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Specialities
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Expert care across a wide range of medical conditions and specializations.
          </p>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((speciality, index) => (
              <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow bg-white">
                <div className="text-5xl mb-4">{speciality.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {speciality.title}
                </h3>
                <p className="text-gray-600">
                  {speciality.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
