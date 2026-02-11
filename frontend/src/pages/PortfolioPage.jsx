import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Quote, ArrowRight, ChevronLeft, ChevronRight, 
  Download, Building2, FileCheck, Shield, Award
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const PortfolioPage = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      client_name: "Marcus Johnson",
      title: "Office Manager",
      company: "StartUp Hub Coworking",
      content: "Dirdia came in hungry and delivered. Our coworking space has never been cleaner. They're responsive, flexible, and actually care about getting it right.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    {
      id: 2,
      client_name: "Lisa Park",
      title: "Owner",
      company: "Park's Dental Practice",
      content: "Finding a reliable cleaning service was tough until we found Dirdia. They show up on time, follow our protocols, and the price is fair. Exactly what a small practice needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
      id: 3,
      client_name: "David Martinez",
      title: "Property Manager",
      company: "Riverside Apartments",
      content: "These guys are the real deal. Common areas are spotless, they communicate well, and they've been flexible when we needed last-minute help. Highly recommend.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Coworking Space Launch",
      client: "Local Coworking Startup",
      location: "Newark, NJ",
      size: "5,000 sq ft",
      challenge: "New coworking space needed move-in ready cleaning and ongoing maintenance on a startup budget.",
      solution: "Provided deep clean before opening and set up flexible weekly service that scales with their membership.",
      results: ["Ready for launch day", "Under budget", "5-star Google reviews mention cleanliness"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    },
    {
      id: 2,
      title: "Dental Office Deep Clean",
      client: "Family Dental Practice",
      location: "Jersey City, NJ",
      size: "2,500 sq ft",
      challenge: "Dental office needed healthcare-grade cleaning but couldn't afford big commercial rates.",
      solution: "Created a custom cleaning plan focused on high-touch areas and sterilization protocols at a competitive price.",
      results: ["Passed health inspection", "30% savings vs. previous vendor", "Zero complaints from patients"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600"
    },
    {
      id: 3,
      title: "Apartment Complex Takeover",
      client: "Boutique Property Manager",
      location: "Hoboken, NJ",
      size: "50 units",
      challenge: "Property manager needed reliable common area cleaning after previous vendor became unreliable.",
      solution: "Set up twice-weekly cleaning schedule with photo verification and direct communication channel.",
      results: ["100% on-time service", "Tenant complaints dropped to zero", "Renewed for year 2"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"
    }
  ];

  const beforeAfterGallery = [
    {
      id: 1,
      title: "Office Floor Deep Clean",
      category: "Commercial",
      before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
      after: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    },
    {
      id: 2,
      title: "Parking Lot Sweeping",
      category: "Street Cleaning",
      before: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600",
      after: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600"
    },
    {
      id: 3,
      title: "Commercial Kitchen Sanitization",
      category: "Food Service",
      before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
      after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600"
    }
  ];

  const nextGalleryItem = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % beforeAfterGallery.length);
  };

  const prevGalleryItem = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + beforeAfterGallery.length) % beforeAfterGallery.length);
  };

  return (
    <div data-testid="portfolio-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Portfolio & Testimonials
            </h1>
            <p className="text-slate-300 text-lg">
              See the results we deliver for our clients. Real testimonials, proven case studies, 
              and visual proof of our cleaning excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="testimonials" className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12 bg-white border border-slate-200 p-1 rounded-lg">
              <TabsTrigger 
                value="testimonials"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white rounded-md"
              >
                Testimonials
              </TabsTrigger>
              <TabsTrigger 
                value="casestudies"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white rounded-md"
              >
                Case Studies
              </TabsTrigger>
              <TabsTrigger 
                value="gallery"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white rounded-md"
              >
                Before/After
              </TabsTrigger>
            </TabsList>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Quote className="w-10 h-10 text-sky-100 mb-4" />
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.client_name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-slate-900">{testimonial.client_name}</p>
                          <p className="text-sm text-slate-500">{testimonial.title}</p>
                          <p className="text-sm text-sky-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="casestudies">
              <div className="space-y-12">
                {caseStudies.map((study, index) => (
                  <Card key={study.id} className="overflow-hidden bg-white border border-slate-200">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                      <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Case Study
                        </div>
                      </div>
                      <CardContent className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mb-2">
                          {study.title}
                        </h3>
                        <p className="text-sky-500 font-medium mb-4">{study.client} • {study.location}</p>
                        <p className="text-slate-500 text-sm mb-6">Facility Size: {study.size}</p>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                            <p className="text-slate-600 text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">Solution</h4>
                            <p className="text-slate-600 text-sm">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">Results</h4>
                            <ul className="space-y-1">
                              {study.results.map((result, rIndex) => (
                                <li key={rIndex} className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Before/After Gallery Tab */}
            <TabsContent value="gallery">
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                    {beforeAfterGallery[activeGalleryIndex]?.category}
                  </span>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mt-3">
                    {beforeAfterGallery[activeGalleryIndex]?.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group rounded-xl overflow-hidden">
                    <img 
                      src={beforeAfterGallery[activeGalleryIndex]?.before}
                      alt="Before"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-red-500 text-white rounded text-sm font-semibold">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative group rounded-xl overflow-hidden">
                    <img 
                      src={beforeAfterGallery[activeGalleryIndex]?.after}
                      alt="After"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <span className="absolute bottom-4 right-4 px-3 py-1 bg-green-500 text-white rounded text-sm font-semibold">
                      AFTER
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 mt-8">
                  <Button variant="outline" size="icon" onClick={prevGalleryItem} className="rounded-full">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <div className="flex gap-2">
                    {beforeAfterGallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGalleryIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === activeGalleryIndex ? 'bg-sky-500' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Button variant="outline" size="icon" onClick={nextGalleryItem} className="rounded-full">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Capability Statement */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">For Government Buyers</span>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl mt-2 mb-6">
                Download Our Capability Statement
              </h2>
              <p className="text-slate-300 mb-8">
                Get our complete capability statement with company information, NAICS codes, 
                past performance, certifications, and contact details for contract consideration.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-sky-400" />
                  <span className="text-sm">NAICS Codes Listed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-sky-400" />
                  <span className="text-sm">Insurance Certificates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-sky-400" />
                  <span className="text-sm">Past Performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-sky-400" />
                  <span className="text-sm">Certifications</span>
                </div>
              </div>
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Capability Statement (PDF)
              </Button>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="font-['Barlow_Condensed'] font-bold text-xl mb-6">Company Snapshot</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Company</span>
                  <span>Dirdia LLC</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">NAICS Codes</span>
                  <span>561720, 561790, 562998</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Service Area</span>
                  <span>New Jersey (Statewide)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Business Type</span>
                  <span>Minority-Owned, SBE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Contact</span>
                  <span>info@dirdia.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Get a free, no-obligation quote and see why businesses across New Jersey trust Dirdia.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-sky-500 hover:bg-slate-900 text-white">
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
