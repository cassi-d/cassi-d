import { Link } from 'react-router-dom';
import { 
  Shield, Award, Leaf, Users, Building2, Truck, HardHat, 
  Sparkles, ArrowRight, CheckCircle, Phone, Calendar
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const trustBadges = [
    { icon: Shield, label: 'Licensed & Insured', color: 'text-sky-500' },
    { icon: Award, label: 'Minority-Owned', color: 'text-green-600' },
    { icon: Users, label: 'Small Business (SBE)', color: 'text-sky-500' },
    { icon: Leaf, label: 'Eco-Friendly', color: 'text-green-600' },
  ];

  const services = [
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Office, retail, school, and government facility cleaning with professional results.',
      link: '/services#commercial'
    },
    {
      icon: Truck,
      title: 'Street & Outdoor',
      description: 'Street sweeping, litter removal, and sidewalk cleaning for public spaces.',
      link: '/services#outdoor'
    },
    {
      icon: HardHat,
      title: 'Specialty Services',
      description: 'Post-construction cleanup, pressure washing, and emergency response.',
      link: '/services#specialty'
    },
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Response' },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center" data-testid="hero-section">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1741249978306-3714629a276f?w=1920')` 
          }}
        >
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  Eco-Friendly Cleaning Solutions
                </span>
                <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
                  Professional Commercial & Street Cleaning Services in{' '}
                  <span className="text-sky-400">New Jersey</span>
                </h1>
              </div>
              
              <p className="text-lg text-slate-300 max-w-xl animate-fade-in-up animation-delay-100">
                Reliable, insured, and contract-ready cleaning solutions for commercial properties, 
                municipalities, and public spaces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30 px-8"
                    data-testid="hero-quote-btn"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/contact?type=walkthrough">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10"
                    data-testid="hero-walkthrough-btn"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Walkthrough
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-4 animate-fade-in-up animation-delay-300" data-testid="trust-badges">
                {trustBadges.map((badge, index) => (
                  <div 
                    key={index}
                    className="trust-badge flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
                  >
                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-white text-sm font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Grid */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581374820583-317d45555a82?w=400"
                    alt="Commercial Cleaning"
                    className="w-full h-48 object-cover rounded-xl shadow-2xl"
                  />
                  <div className="bg-sky-500 rounded-xl p-6 text-white">
                    <p className="font-['Barlow_Condensed'] font-bold text-3xl">3+</p>
                    <p className="text-sm opacity-90">Years of Excellence</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-green-600 rounded-xl p-6 text-white">
                    <p className="font-['Barlow_Condensed'] font-bold text-3xl">100%</p>
                    <p className="text-sm opacity-90">Client Satisfaction</p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1700809888987-cf2b29ecbd2c?w=400"
                    alt="Office Cleaning"
                    className="w-full h-48 object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-500 font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mt-2 mb-6">
                Who We Are
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We provide dependable commercial, street, and specialty cleaning services across 
                New Jersey. Our team supports offices, retail spaces, government facilities, and 
                public areas with consistent, high-quality results you can trust.
              </p>
              <ul className="space-y-4">
                {[
                  'Fully licensed, bonded, and insured',
                  'Background-checked professional staff',
                  'Eco-friendly cleaning products',
                  'Flexible scheduling options',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/why-choose-us" className="inline-flex items-center gap-2 text-sky-500 font-medium mt-8 hover:text-sky-600 transition-colors">
                Learn more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600"
                alt="Professional Cleaning Team"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white rounded-xl p-6 shadow-xl">
                <p className="font-['Barlow_Condensed'] font-bold text-2xl">Government Ready</p>
                <p className="text-slate-400 text-sm">Contract-ready documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mt-2 mb-4">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From commercial offices to public streets, we deliver professional cleaning services 
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="service-card bg-white border border-slate-200 hover:border-sky-500/50"
              >
                <CardContent className="p-8">
                  <div className="icon-container mb-6">
                    <service.icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-xl text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sky-500 font-medium hover:text-sky-600 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-sky-500 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20"
                data-testid="view-all-services-btn"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl text-sky-400 mb-2">
                  {stat.number}
                </p>
                <p className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're ready to discuss your 
            cleaning needs and provide customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-sky-500 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20 px-8"
                data-testid="cta-quote-btn"
              >
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+12404967636">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-200 text-slate-900 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                (240) 496-7636
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
