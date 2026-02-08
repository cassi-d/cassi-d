import { Link } from 'react-router-dom';
import { 
  Building2, Trash2, Droplets, HardHat, CheckCircle, 
  ArrowRight, Info, Phone
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';

const PricingPage = () => {
  const pricingItems = [
    {
      icon: Building2,
      title: 'Office Cleaning',
      price: 'Starting at $150',
      description: 'Per visit pricing for daily, weekly, or custom schedules.',
      features: [
        'Trash removal & recycling',
        'Floor cleaning & vacuuming',
        'Restroom sanitation',
        'Surface disinfection',
      ],
    },
    {
      icon: Trash2,
      title: 'Street Litter Removal',
      price: '$45–$75/hr',
      description: 'Manual and mechanical litter pickup services.',
      features: [
        'Manual litter pickup',
        'Mechanical sweeping',
        'Public area coverage',
        'Flexible scheduling',
      ],
    },
    {
      icon: Droplets,
      title: 'Pressure Washing',
      price: '$0.25–$0.40 per sq ft',
      description: 'Professional pressure washing for all surfaces.',
      features: [
        'Concrete & sidewalks',
        'Building exteriors',
        'Parking structures',
        'Deck & patio cleaning',
      ],
    },
    {
      icon: HardHat,
      title: 'Post-Construction Cleanup',
      price: 'Custom Quote',
      description: 'Comprehensive post-construction cleaning services.',
      features: [
        'Dust & debris removal',
        'Window cleaning',
        'Floor finishing',
        'Final inspection prep',
      ],
    },
  ];

  return (
    <div data-testid="pricing-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586281010691-f5c20e93f5ea?w=1920')` 
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">
              Transparent Pricing
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Pricing Estimates
            </h1>
            <p className="text-slate-300 text-lg">
              Competitive rates for professional cleaning services. Final pricing depends on 
              site size, frequency, and scope.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-slate-50" data-testid="pricing-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="mb-12 bg-sky-50 border-sky-200">
            <Info className="w-5 h-5 text-sky-500" />
            <AlertDescription className="text-slate-700 ml-2">
              These are estimated price ranges. Final pricing is customized based on your specific 
              requirements, site conditions, and service frequency.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingItems.map((item, index) => (
              <Card 
                key={index} 
                className="pricing-card bg-white border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-sky-500" />
                    </div>
                  </div>
                  <CardTitle className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mt-4">
                    {item.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="font-['Barlow_Condensed'] font-black text-3xl text-sky-500">
                      {item.price}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className="w-full bg-slate-900 hover:bg-sky-500 text-white"
                      data-testid={`pricing-quote-btn-${index}`}
                    >
                      Get Custom Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-white" data-testid="custom-quote">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-900 text-white border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-['Barlow_Condensed'] font-bold text-3xl mb-4">
                    Need a Custom Solution?
                  </h2>
                  <p className="text-slate-300 mb-6">
                    Every property is unique. Contact us for a free site assessment and 
                    customized pricing based on your specific needs.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Free on-site assessment
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      No obligation quote
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Flexible payment options
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                      data-testid="pricing-contact-btn"
                    >
                      Request Custom Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+12404967636">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-white/30 text-white hover:bg-white/10"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      (240) 496-7636
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50" data-testid="pricing-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-8 text-center">
            Pricing FAQ
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How is pricing determined?',
                a: 'Final pricing is based on square footage, service frequency, specific requirements, and site conditions. We provide free assessments to give accurate quotes.',
              },
              {
                q: 'Do you offer contract pricing?',
                a: 'Yes, we offer discounted rates for long-term contracts and recurring services. Contact us to discuss your needs.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No hidden fees. Your quote includes all labor, materials, and equipment. Any additional services will be discussed and agreed upon in advance.',
              },
              {
                q: 'Do you offer emergency pricing?',
                a: 'Emergency and after-hours services may have different pricing. Contact us for details on emergency response rates.',
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
