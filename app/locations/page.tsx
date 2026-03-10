import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

const locations = [
  {
    city: 'Mumbai',
    areas: ['Bandra', 'Andheri', 'Worli', 'Thane'],
    phone: '+91 XXXXXX XXXX',
  },
  {
    city: 'Delhi',
    areas: ['Gurgaon', 'Noida', 'South Delhi', 'Central Delhi'],
    phone: '+91 XXXXXX XXXX',
  },
  {
    city: 'Bangalore',
    areas: ['Whitefield', 'Indiranagar', 'Koramangala', 'Marathahalli'],
    phone: '+91 XXXXXX XXXX',
  },
  {
    city: 'Hyderabad',
    areas: ['HITEC City', 'Banjara Hills', 'Secunderabad', 'Madhapur'],
    phone: '+91 XXXXXX XXXX',
  },
  {
    city: 'Chennai',
    areas: ['Anna Nagar', 'Velachery', 'Nungambakkam', 'Adyar'],
    phone: '+91 XXXXXX XXXX',
  },
  {
    city: 'Pune',
    areas: ['Kalyani Nagar', 'Viman Nagar', 'Hinjewadi', 'Magarpatta'],
    phone: '+91 XXXXXX XXXX',
  },
];

export const metadata = {
  title: 'Our Locations - Nursing Sarathi',
  description: 'Find Nursing Sarathi services in your area across major Indian cities.',
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Locations
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Professional home care services available in major cities across India.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 border border-border hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  📍 {location.city}
                </h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Service Areas:</h4>
                  <div className="space-y-2">
                    {location.areas.map((area, areaIndex) => (
                      <p key={areaIndex} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">Contact:</p>
                  <p className="text-primary font-bold">{location.phone}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
