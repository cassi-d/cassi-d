import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_cleanstreets-nj/artifacts/n9fdovtq_Untitled_design-removebg-preview.png" 
                alt="Dirdia Cleaning"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional commercial & street cleaning services across New Jersey. 
              Licensed, insured, and contract-ready. Dirdia delivers excellence.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Barlow_Condensed'] font-bold text-lg mb-6 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Why Choose Us', path: '/why-choose-us' },
                { name: 'Government Contracts', path: '/contracts' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Barlow_Condensed'] font-bold text-lg mb-6 tracking-tight">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Commercial Cleaning',
                'Street Sweeping',
                'Litter Removal',
                'Pressure Washing',
                'Post-Construction',
                'Emergency Cleanup',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Barlow_Condensed'] font-bold text-lg mb-6 tracking-tight">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">(240) 496-7636</p>
                  <p className="text-slate-400 text-xs">Mon-Fri 8am-6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">info@dirdia.com</p>
                  <p className="text-slate-400 text-xs">24/7 Email Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">New Jersey</p>
                  <p className="text-slate-400 text-xs">Statewide Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Dirdia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
