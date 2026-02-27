import { Link } from 'react-router-dom';
import { 
  Building2, Stethoscope, GraduationCap, Factory, Store,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEO from '../components/SEO';

const IndustriesPage = () => {
  const industries = [
    {
      id: 'office',
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Professional cleaning for corporate offices, co-working spaces, and business centers.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
      features: ['Daily janitorial services', 'Conference room sanitization', 'Breakroom & kitchen cleaning', 'Floor care & carpet cleaning'],
      link: '/industries/office'
    },
    {
      id: 'medical',
      icon: Stethoscope,
      title: 'Medical Facility Cleaning',
      description: 'Healthcare-grade cleaning for hospitals, clinics, dental offices, and medical centers.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
      features: ['OSHA-compliant protocols', 'Biohazard waste handling', 'Sterilization procedures', 'Infection control standards'],
      link: '/industries/medical'
    },
    {
      id: 'school',
      icon: GraduationCap,
      title: 'School & Education Cleaning',
      description: 'Safe, thorough cleaning for K-12 schools, universities, and childcare facilities.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
      features: ['Child-safe products', 'Classroom sanitization', 'Cafeteria deep cleaning', 'Gymnasium & restroom care'],
      link: '/industries/school'
    },
    {
      id: 'industrial',
      icon: Factory,
      title: 'Industrial Cleaning',
      description: 'Heavy-duty cleaning for warehouses, manufacturing plants, and industrial facilities.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600',
      features: ['Machine & equipment cleaning', 'Floor scrubbing & degreasing', 'High-ceiling dusting', 'Loading dock maintenance'],
      link: '/industries/industrial'
    },
    {
      id: 'retail',
      icon: Store,
      title: 'Retail Cleaning',
      description: 'Customer-focused cleaning for retail stores, shopping centers, and showrooms.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      features: ['Display area dusting', 'Fitting room sanitization', 'Entrance & window cleaning', 'After-hours service'],
      link: '/industries/retail'
    }
  ];

  return (
    <div data-testid="industries-page">
      <SEO 
        title="Industry-Specific Cleaning Solutions"
        description="Specialized cleaning services for offices, medical facilities, schools, industrial sites, and retail stores in New Jersey. Industry-compliant protocols and trained staff."
        keywords="office cleaning NJ, medical facility cleaning, school cleaning services, industrial cleaning, retail store cleaning, healthcare cleaning New Jersey"
        canonical="https://dirdia.com/industries"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">Industry Solutions</span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Specialized Cleaning for Every Industry
            </h1>
            <p className="text-slate-300 text-lg">
              We understand that different industries have unique cleaning requirements. Our specialized teams 
              are trained to meet the specific standards and regulations of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50" data-testid="industries-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <Card 
                key={industry.id} 
                className={`overflow-hidden bg-white border border-slate-200 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-slate-600 mb-6">{industry.description}</p>
                    <ul className="space-y-3 mb-8">
                      {industry.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={industry.link}>
                      <Button className="w-fit bg-sky-500 hover:bg-slate-900 text-white">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We serve many more industries. Contact us to discuss your specific cleaning needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
              Get a Custom Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
