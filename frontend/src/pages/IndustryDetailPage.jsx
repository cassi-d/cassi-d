import { Link, useParams } from 'react-router-dom';
import { 
  Building2, Stethoscope, GraduationCap, Factory, Store,
  ArrowRight, CheckCircle, Shield, Award, Clock, Phone,
  FileCheck, Users, Leaf
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const industryData = {
  office: {
    icon: Building2,
    title: 'Office Cleaning Services',
    subtitle: 'Professional cleaning for corporate environments',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
    description: 'Keep your workplace clean, healthy, and productive with our comprehensive office cleaning services. We understand that a clean office reflects your company\'s professionalism and impacts employee well-being.',
    services: [
      { name: 'Daily Janitorial Services', desc: 'Routine cleaning including dusting, vacuuming, and trash removal' },
      { name: 'Restroom Sanitization', desc: 'Deep cleaning and restocking of restroom supplies' },
      { name: 'Breakroom & Kitchen Cleaning', desc: 'Appliance cleaning, counter sanitization, and floor care' },
      { name: 'Conference Room Preparation', desc: 'Before and after meeting cleanup and arrangement' },
      { name: 'Floor Care', desc: 'Carpet cleaning, tile maintenance, and floor polishing' },
      { name: 'Window Cleaning', desc: 'Interior and exterior window washing' },
    ],
    benefits: [
      'Improved employee productivity and morale',
      'Reduced sick days and healthier work environment',
      'Professional image for clients and visitors',
      'Flexible scheduling around your business hours',
      'Customized cleaning plans to fit your needs',
    ],
    caseStudy: {
      client: 'Tech Startup - Newark, NJ',
      challenge: 'A 50-person tech company needed reliable daily cleaning without disrupting their 24/7 operations.',
      solution: 'We implemented an after-hours cleaning schedule with a dedicated 3-person team.',
      results: ['95% employee satisfaction rating', '30% reduction in sick days', 'Zero missed cleaning days in 2 years'],
    }
  },
  medical: {
    icon: Stethoscope,
    title: 'Medical Facility Cleaning',
    subtitle: 'Healthcare-grade sanitization and infection control',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920',
    description: 'Medical facilities require the highest standards of cleanliness. Our healthcare cleaning teams are trained in infection control protocols and use hospital-grade disinfectants to ensure patient and staff safety.',
    services: [
      { name: 'Operating Room Cleaning', desc: 'Sterile cleaning following strict medical protocols' },
      { name: 'Patient Room Turnover', desc: 'Rapid, thorough cleaning between patients' },
      { name: 'Waiting Area Sanitization', desc: 'High-touch surface disinfection and air quality maintenance' },
      { name: 'Biohazard Waste Handling', desc: 'Proper disposal following OSHA regulations' },
      { name: 'Medical Equipment Cleaning', desc: 'Careful cleaning of sensitive medical devices' },
      { name: 'Lab Cleaning', desc: 'Contamination-free cleaning for laboratory environments' },
    ],
    benefits: [
      'OSHA-compliant cleaning protocols',
      'Trained in bloodborne pathogen handling',
      'Hospital-grade EPA-registered disinfectants',
      'Reduced healthcare-associated infections',
      '24/7 emergency cleaning availability',
    ],
    caseStudy: {
      client: 'Multi-Specialty Medical Center - Trenton, NJ',
      challenge: 'A 20,000 sq ft medical center needed to meet Joint Commission standards while staying within budget.',
      solution: 'We developed a custom cleaning protocol aligned with Joint Commission requirements and implemented quality audits.',
      results: ['Passed Joint Commission inspection', '40% reduction in cleaning costs', 'Zero infection control violations'],
    }
  },
  school: {
    icon: GraduationCap,
    title: 'School & Education Cleaning',
    subtitle: 'Safe, healthy learning environments',
    heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920',
    description: 'Creating safe, clean learning environments for students and staff is our priority. We use child-safe, eco-friendly products and follow strict protocols to prevent the spread of illness in educational settings.',
    services: [
      { name: 'Classroom Cleaning', desc: 'Desk sanitization, floor care, and supply organization' },
      { name: 'Cafeteria Deep Cleaning', desc: 'Kitchen sanitization and dining area maintenance' },
      { name: 'Gymnasium Cleaning', desc: 'Floor care, equipment sanitization, and locker room cleaning' },
      { name: 'Restroom Sanitization', desc: 'Child-height fixture cleaning and hygiene supplies' },
      { name: 'Administrative Office Cleaning', desc: 'Office cleaning with attention to student records security' },
      { name: 'Summer Deep Cleaning', desc: 'Comprehensive cleaning during school breaks' },
    ],
    benefits: [
      'Child-safe, non-toxic cleaning products',
      'Green Seal certified cleaning solutions',
      'Background-checked staff',
      'Reduced absenteeism due to illness',
      'Compliance with state health regulations',
    ],
    caseStudy: {
      client: 'K-8 Charter School - Camden, NJ',
      challenge: 'A 600-student school needed to reduce flu outbreaks and maintain cleanliness on a tight budget.',
      solution: 'We implemented a targeted disinfection program focusing on high-touch surfaces and provided hygiene training to staff.',
      results: ['50% reduction in flu-related absences', '20% cost savings vs. previous vendor', 'Parent satisfaction score improved to 4.8/5'],
    }
  },
  industrial: {
    icon: Factory,
    title: 'Industrial Cleaning Services',
    subtitle: 'Heavy-duty cleaning for manufacturing & warehouses',
    heroImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920',
    description: 'Industrial facilities require specialized cleaning equipment and trained personnel. Our industrial cleaning teams handle everything from routine maintenance to heavy-duty degreasing and equipment cleaning.',
    services: [
      { name: 'Warehouse Floor Cleaning', desc: 'Industrial floor scrubbing and maintenance' },
      { name: 'Machine & Equipment Cleaning', desc: 'Degreasing and cleaning of manufacturing equipment' },
      { name: 'High-Ceiling Dusting', desc: 'Overhead cleaning using specialized equipment' },
      { name: 'Loading Dock Cleaning', desc: 'Pressure washing and debris removal' },
      { name: 'Hazmat Cleanup', desc: 'Safe handling and disposal of industrial materials' },
      { name: 'Post-Construction Cleanup', desc: 'Final cleaning after renovations or construction' },
    ],
    benefits: [
      'OSHA safety trained crews',
      'Industrial-grade cleaning equipment',
      'Flexible scheduling for 24/7 operations',
      'Experience with various industrial environments',
      'Proper handling of industrial waste',
    ],
    caseStudy: {
      client: 'Food Processing Plant - Elizabeth, NJ',
      challenge: 'A 100,000 sq ft food processing facility needed FDA-compliant cleaning with minimal production disruption.',
      solution: 'We created a rotating cleaning schedule that worked around production shifts and implemented food-safe cleaning protocols.',
      results: ['FDA inspection passed with zero findings', '15% increase in production uptime', 'Reduced contamination incidents to zero'],
    }
  },
  retail: {
    icon: Store,
    title: 'Retail Cleaning Services',
    subtitle: 'Creating welcoming shopping experiences',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920',
    description: 'First impressions matter in retail. Our cleaning services ensure your store looks its best, creating a welcoming environment that encourages customers to shop and return.',
    services: [
      { name: 'Sales Floor Cleaning', desc: 'Floor care, display dusting, and merchandise area maintenance' },
      { name: 'Fitting Room Sanitization', desc: 'Regular cleaning and sanitization between customers' },
      { name: 'Entrance & Window Cleaning', desc: 'Sparkling clean storefronts that attract customers' },
      { name: 'Restroom Maintenance', desc: 'Customer restroom cleaning and restocking' },
      { name: 'Stockroom Organization', desc: 'Back-of-house cleaning and organization' },
      { name: 'Seasonal Deep Cleaning', desc: 'Comprehensive cleaning for holiday seasons' },
    ],
    benefits: [
      'After-hours cleaning to avoid disruption',
      'Quick-response spill cleanup',
      'Consistent brand presentation',
      'Improved customer experience scores',
      'Reduced slip-and-fall incidents',
    ],
    caseStudy: {
      client: 'Regional Clothing Retailer - Cherry Hill, NJ',
      challenge: 'A 15-location retail chain needed consistent cleaning quality across all stores with varying hours.',
      solution: 'We assigned dedicated teams to each store and implemented a quality audit system with photo documentation.',
      results: ['Customer satisfaction up 25%', 'Consistent cleaning scores of 95%+ across all locations', '40% reduction in cleaning-related complaints'],
    }
  }
};

const IndustryDetailPage = () => {
  const { industry } = useParams();
  const data = industryData[industry];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry not found</h1>
          <Link to="/industries">
            <Button>View All Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div data-testid={`industry-${industry}-page`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">Industry Specialty</span>
            </div>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
              {data.title}
            </h1>
            <p className="text-slate-300 text-xl mb-8">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                  Get a Free Quote
                </Button>
              </Link>
              <a href="tel:+12404967636">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" />
                  (240) 496-7636
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-slate-600 text-lg leading-relaxed">{data.description}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-12">
            Our {data.title.replace(' Services', '')} Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, index) => (
              <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-slate-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-8">
                Why Choose Dirdia for {data.title.replace(' Services', '')}?
              </h2>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-500 rounded-xl p-6 text-white">
                <Shield className="w-8 h-8 mb-3" />
                <p className="font-['Barlow_Condensed'] font-bold text-xl">Fully Insured</p>
                <p className="text-sky-100 text-sm">$2M liability coverage</p>
              </div>
              <div className="bg-green-600 rounded-xl p-6 text-white">
                <Leaf className="w-8 h-8 mb-3" />
                <p className="font-['Barlow_Condensed'] font-bold text-xl">Eco-Friendly</p>
                <p className="text-green-100 text-sm">Green Seal certified</p>
              </div>
              <div className="bg-slate-900 rounded-xl p-6 text-white">
                <Users className="w-8 h-8 mb-3" />
                <p className="font-['Barlow_Condensed'] font-bold text-xl">Vetted Staff</p>
                <p className="text-slate-300 text-sm">Background checked</p>
              </div>
              <div className="bg-amber-500 rounded-xl p-6 text-white">
                <Clock className="w-8 h-8 mb-3" />
                <p className="font-['Barlow_Condensed'] font-bold text-xl">24/7 Service</p>
                <p className="text-amber-100 text-sm">Emergency response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">Case Study</span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl mt-2 mb-8">
              {data.caseStudy.client}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-sky-400 mb-3">Challenge</h3>
                <p className="text-slate-300">{data.caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-sky-400 mb-3">Solution</h3>
                <p className="text-slate-300">{data.caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-sky-400 mb-3">Results</h3>
                <ul className="space-y-2">
                  {data.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-4">
            Ready to Experience the Dirdia Difference?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Get a free, no-obligation quote for your {data.title.toLowerCase().replace(' services', '')} needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-sky-500 hover:bg-slate-900 text-white">
              Request Your Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPage;
