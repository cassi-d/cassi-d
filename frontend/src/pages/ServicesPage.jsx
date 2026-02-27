import { Link } from 'react-router-dom';
import { 
  Building2, Store, GraduationCap, Landmark, Truck, Trash2, 
  Footprints, TreePine, HardHat, Droplets, Layers, AlertTriangle,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import SEO from '../components/SEO';

const ServicesPage = () => {
  const commercialServices = [
    {
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Daily, weekly, or custom office cleaning to maintain a healthy and professional work environment.',
    },
    {
      icon: Store,
      title: 'Retail Cleaning',
      description: 'Clean, inviting retail spaces that improve customer experience and safety.',
    },
    {
      icon: GraduationCap,
      title: 'School & Educational Facilities',
      description: 'Sanitation-focused cleaning that supports student and staff health.',
    },
    {
      icon: Landmark,
      title: 'Government Buildings',
      description: 'Secure, compliant cleaning for municipal, county, and state facilities.',
    },
  ];

  const outdoorServices = [
    {
      icon: Truck,
      title: 'Street Sweeping',
      description: 'Routine and on-demand sweeping for roads, parking lots, and industrial zones.',
    },
    {
      icon: Trash2,
      title: 'Litter Removal',
      description: 'Manual and mechanical litter pickup for public areas and commercial sites.',
    },
    {
      icon: Footprints,
      title: 'Sidewalk Cleaning',
      description: 'Power washing and debris removal to maintain safe walkways.',
    },
    {
      icon: TreePine,
      title: 'Parks & Public Spaces',
      description: 'Clean, welcoming outdoor environments for community use.',
    },
  ];

  const specialtyServices = [
    {
      icon: HardHat,
      title: 'Post-Construction Cleanup',
      description: 'Dust, debris, and material removal after construction or renovation.',
    },
    {
      icon: Droplets,
      title: 'Pressure Washing',
      description: 'Concrete, sidewalks, buildings, and parking structures.',
    },
    {
      icon: Layers,
      title: 'Floor Stripping & Waxing',
      description: 'Extend floor life and restore professional appearance.',
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Cleanup',
      description: '24/7 response for urgent cleaning needs.',
    },
  ];

  const includedItems = [
    'Trash removal',
    'Restroom sanitation',
    'Floor care',
    'High-touch surface disinfection',
  ];

  return (
    <div data-testid="services-page">
      <SEO 
        title="Commercial Cleaning Services"
        description="Professional commercial cleaning, office cleaning, street sweeping, pressure washing, and post-construction cleanup services in New Jersey. 24/7 emergency response available."
        keywords="commercial cleaning services NJ, office cleaning, street sweeping, pressure washing, floor stripping, post-construction cleanup, janitorial services New Jersey"
        canonical="https://dirdia.com/services"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900" data-testid="services-hero">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1764981966665-1abf644d10a4?w=1920')` 
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-slate-300 text-lg">
              Comprehensive cleaning solutions for commercial properties, municipalities, 
              and public spaces throughout New Jersey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-slate-50" data-testid="services-tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="commercial" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-white border border-slate-200 p-1 rounded-lg">
              <TabsTrigger 
                value="commercial" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white rounded-md"
                data-testid="tab-commercial"
              >
                <Building2 className="w-4 h-4 mr-2 hidden sm:block" />
                Commercial
              </TabsTrigger>
              <TabsTrigger 
                value="outdoor"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white rounded-md"
                data-testid="tab-outdoor"
              >
                <Truck className="w-4 h-4 mr-2 hidden sm:block" />
                Outdoor
              </TabsTrigger>
              <TabsTrigger 
                value="specialty"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white rounded-md"
                data-testid="tab-specialty"
              >
                <HardHat className="w-4 h-4 mr-2 hidden sm:block" />
                Specialty
              </TabsTrigger>
            </TabsList>

            {/* Commercial Cleaning */}
            <TabsContent value="commercial" id="commercial">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-6">
                    Commercial Cleaning
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {commercialServices.map((service, index) => (
                      <Card key={index} className="service-card bg-white border border-slate-200">
                        <CardContent className="p-6">
                          <div className="icon-container mb-4">
                            <service.icon className="w-6 h-6 text-sky-500" />
                          </div>
                          <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-slate-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card className="bg-slate-900 text-white border-0">
                    <CardHeader>
                      <CardTitle className="font-['Barlow_Condensed'] text-xl">
                        What's Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {includedItems.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="block mt-8">
                        <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                          Get a Free Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Outdoor Cleaning */}
            <TabsContent value="outdoor" id="outdoor">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-6">
                    Outdoor & Street Cleaning
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {outdoorServices.map((service, index) => (
                      <Card key={index} className="service-card bg-white border border-slate-200">
                        <CardContent className="p-6">
                          <div className="icon-container mb-4">
                            <service.icon className="w-6 h-6 text-sky-500" />
                          </div>
                          <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-slate-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1764981966665-1abf644d10a4?w=600"
                      alt="Street Sweeping"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-white font-['Barlow_Condensed'] font-bold text-xl mb-1">
                          Municipal Ready
                        </p>
                        <p className="text-slate-300 text-sm">
                          Equipped for public works contracts
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="block mt-6">
                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                      Request Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Specialty Services */}
            <TabsContent value="specialty" id="specialty">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-6">
                    Specialty Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {specialtyServices.map((service, index) => (
                      <Card key={index} className="service-card bg-white border border-slate-200">
                        <CardContent className="p-6">
                          <div className="icon-container mb-4">
                            <service.icon className="w-6 h-6 text-sky-500" />
                          </div>
                          <h3 className="font-['Barlow_Condensed'] font-bold text-lg text-slate-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card className="bg-green-600 text-white border-0">
                    <CardContent className="p-6">
                      <AlertTriangle className="w-10 h-10 mb-4" />
                      <h3 className="font-['Barlow_Condensed'] font-bold text-2xl mb-2">
                        24/7 Emergency
                      </h3>
                      <p className="text-green-100 mb-6">
                        Need urgent cleanup? Our emergency team is available around the clock 
                        for immediate response.
                      </p>
                      <a href="tel:+12404967636">
                        <Button className="w-full bg-white text-green-600 hover:bg-green-50">
                          Call Now: (240) 496-7636
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Every property is unique. Contact us to discuss your specific cleaning requirements 
            and get a customized service plan.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-sky-500 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20"
              data-testid="services-cta-btn"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
