import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsPage = () => {
  return (
    <div data-testid="terms-page" className="min-h-screen bg-slate-50">
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
              <FileText className="w-6 h-6 text-sky-400" />
            </div>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl text-white">
              Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the CleanStreets NJ website and services, you accept and 
              agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              2. Services
            </h2>
            <p>
              CleanStreets NJ provides commercial cleaning, street cleaning, and specialty 
              cleaning services throughout New Jersey. All services are subject to availability 
              and agreement on terms specific to each engagement.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              3. Service Agreements
            </h2>
            <p>
              Specific services will be outlined in individual service agreements or contracts. 
              These agreements will detail scope of work, pricing, scheduling, and other 
              relevant terms.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              4. Payment Terms
            </h2>
            <p>
              Payment terms will be specified in your service agreement. We accept various 
              forms of payment and offer flexible billing options for recurring services.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              5. Insurance & Liability
            </h2>
            <p>
              Dirdia maintains comprehensive general liability insurance and workers' 
              compensation coverage. Certificates of insurance are available upon request.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              6. Cancellation Policy
            </h2>
            <p>
              Cancellation terms vary by service type and will be outlined in your service 
              agreement. Please contact us for specific cancellation requirements.
            </p>

            <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
              7. Contact Information
            </h2>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@dirdia.com<br />
              <strong>Phone:</strong> (732) 555-1234
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
