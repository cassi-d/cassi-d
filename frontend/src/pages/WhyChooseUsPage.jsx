import { Link } from 'react-router-dom';
import { 
  Shield, Award, Users, Leaf, Clock, AlertCircle,
  FileCheck, HardHat, CheckCircle, ArrowRight, Star
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const WhyChooseUsPage = () => {
  const trustReasons = [
    {
      icon: Shield,
      title: 'Fully Licensed, Bonded & Insured',
      description: 'Complete coverage and protection for every job we undertake.',
    },
    {
      icon: Users,
      title: 'Experienced Cleaning Professionals',
      description: 'Our team brings years of expertise in commercial and municipal cleaning.',
    },
    {
      icon: FileCheck,
      title: 'Background-Checked Staff',
      description: 'Every team member passes thorough background verification.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Cleaning Products',
      description: 'We use environmentally responsible cleaning solutions.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Services available on your schedule, including weekends.',
    },
    {
      icon: AlertCircle,
      title: '24/7 Emergency Availability',
      description: 'Round-the-clock response for urgent cleaning needs.',
    },
  ];

  const governmentReady = [
    { icon: FileCheck, label: 'Registered Vendor' },
    { icon: HardHat, label: 'Public Works Capable' },
    { icon: Shield, label: 'OSHA-Compliant' },
    { icon: Award, label: 'Contract-Ready Documentation' },
  ];

  const certifications = [
    { name: 'Licensed & Insured', icon: Shield },
    { name: 'Minority-Owned Business', icon: Award },
    { name: 'Small Business Enterprise (SBE)', icon: Users },
    { name: 'Eco-Friendly Certified', icon: Leaf },
  ];

  return (
    <div data-testid="why-choose-us-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1581374820583-317d45555a82?w=1920')` 
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Why Clients Trust Us
            </h1>
            <p className="text-slate-300 text-lg">
              We've built our reputation on reliability, professionalism, and exceptional results. 
              Here's what sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Reasons Grid */}
      <section className="py-20 bg-slate-50" data-testid="trust-reasons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
              The CleanStreets NJ Difference
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our commitment to quality and professionalism has made us a trusted partner 
              for businesses and municipalities across New Jersey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustReasons.map((reason, index) => (
              <Card key={index} className="service-card bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-sky-500" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-xl text-slate-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Ready Section */}
      <section className="py-20 bg-slate-900 text-white" data-testid="government-ready">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">
                Contract Ready
              </span>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-white mt-2 mb-6">
                Government & Commercial Ready
              </h2>
              <p className="text-slate-300 mb-8">
                We maintain all necessary documentation, certifications, and capabilities 
                to serve as a vendor for municipal, county, state, and commercial contracts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {governmentReady.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                    <item.icon className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/contracts">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white" data-testid="view-contracts-btn">
                  View Contract Information
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
                alt="Contract Documentation"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-xl p-6 shadow-xl hidden lg:block">
                <p className="font-['Barlow_Condensed'] font-bold text-2xl">NAICS</p>
                <p className="text-green-100 text-sm">561720 • 561790 • 562998</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white" data-testid="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-4">
              Our Certifications
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <cert.icon className="w-6 h-6 text-green-600" />
                <span className="font-medium text-slate-900">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-slate-50" data-testid="testimonial-preview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="font-['Barlow_Condensed'] text-2xl sm:text-3xl text-slate-900 mb-6">
            "Reliable, professional, and always on time. Our facility has never looked better."
          </blockquote>
          <p className="text-slate-600">
            — Michael Rodriguez, Bergen County Property Management
          </p>
          <Link to="/testimonials" className="inline-flex items-center gap-2 text-sky-500 font-medium mt-8 hover:text-sky-600 transition-colors">
            Read more testimonials
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" data-testid="why-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Experience the Difference
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Join the many businesses and municipalities who trust CleanStreets NJ for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-sky-500 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20"
                data-testid="why-cta-btn"
              >
                Get Started Today
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-200"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;
