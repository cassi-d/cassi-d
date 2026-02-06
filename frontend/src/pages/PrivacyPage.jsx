import { Link } from 'react-router-dom';
import { Shield, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const PrivacyPage = () => {
  return (
    <div data-testid="privacy-page" className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-sky-400" />
            </div>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-slate-400">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none">
            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mt-0">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a 
              contact form, request a quote, or communicate with us. This may include your name, 
              email address, phone number, organization name, and any other information you 
              choose to provide.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third 
              parties without your consent, except as required by law or to provide our services.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              4. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              5. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@cleanstreetsnj.com<br />
              <strong>Phone:</strong> (732) 555-1234
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
