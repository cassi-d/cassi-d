import { Link } from 'react-router-dom';
import { 
  FileText, Download, Mail, Building2, Truck, HardHat, 
  AlertCircle, CheckCircle, ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const ContractsPage = () => {
  const naicsCodes = [
    { code: '561720', description: 'Janitorial Services' },
    { code: '561790', description: 'Other Services to Buildings and Dwellings' },
    { code: '562998', description: 'All Other Miscellaneous Waste Management Services' },
  ];

  const capabilities = [
    { icon: Building2, text: 'Commercial & office cleaning' },
    { icon: Truck, text: 'Street sweeping & litter removal' },
    { icon: HardHat, text: 'Public facility maintenance' },
    { icon: AlertCircle, text: 'Emergency response cleaning' },
  ];

  const pastPerformance = [
    { type: 'Commercial offices', status: 'Completed', count: '50+' },
    { type: 'Retail centers', status: 'Completed', count: '30+' },
    { type: 'Small municipal projects', status: 'Completed', count: '20+' },
    { type: 'Construction cleanup', status: 'Completed', count: '100+' },
  ];

  return (
    <div data-testid="contracts-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')` 
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">
              For Contracting Officers
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Contract-Ready Cleaning Services
            </h1>
            <p className="text-slate-300 text-lg">
              We actively support municipal, county, state, and commercial contracts 
              throughout New Jersey with comprehensive documentation and proven capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white" data-testid="company-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Company Details */}
            <div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-8">
                Company Information
              </h2>
              
              <Card className="bg-slate-50 border-0 mb-8">
                <CardContent className="p-8">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-slate-900">Company Name</TableCell>
                        <TableCell className="text-slate-600">CleanStreets NJ LLC</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-slate-900">NAICS Codes</TableCell>
                        <TableCell className="text-slate-600">561720, 561790, 562998</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-slate-900">UEI / DUNS</TableCell>
                        <TableCell className="text-slate-600">[Available Upon Request]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-slate-900">CAGE Code</TableCell>
                        <TableCell className="text-slate-600">[Available Upon Request]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-slate-900">Service Area</TableCell>
                        <TableCell className="text-slate-600">Statewide New Jersey</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-slate-900">Business Type</TableCell>
                        <TableCell className="text-slate-600">Minority-Owned, Small Business (SBE)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <h3 className="font-['Barlow_Condensed'] font-bold text-xl text-slate-900 mb-4">
                NAICS Code Details
              </h3>
              <div className="space-y-3">
                {naicsCodes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-4">
                    <span className="font-mono text-sky-500 font-bold">{item.code}</span>
                    <span className="text-slate-600">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Capabilities */}
            <div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-8">
                Capabilities
              </h2>
              
              <div className="space-y-4 mb-10">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-center gap-4 bg-slate-50 rounded-lg p-5">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <cap.icon className="w-6 h-6 text-sky-500" />
                    </div>
                    <span className="text-slate-900 font-medium">{cap.text}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-sky-500 text-white border-0">
                <CardContent className="p-8">
                  <FileText className="w-10 h-10 mb-4" />
                  <h3 className="font-['Barlow_Condensed'] font-bold text-2xl mb-3">
                    Download Capability Statement
                  </h3>
                  <p className="text-sky-100 mb-6">
                    Get our full capability statement with detailed company information, 
                    past performance, and contact details.
                  </p>
                  <Button 
                    className="w-full bg-white text-sky-500 hover:bg-sky-50"
                    data-testid="download-capability-btn"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20 bg-slate-50" data-testid="past-performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-8">
            Past Performance
          </h2>
          
          <Card className="bg-white border border-slate-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-['Barlow_Condensed'] font-bold text-slate-900">
                      Project Type
                    </TableHead>
                    <TableHead className="font-['Barlow_Condensed'] font-bold text-slate-900">
                      Status
                    </TableHead>
                    <TableHead className="font-['Barlow_Condensed'] font-bold text-slate-900 text-right">
                      Projects
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pastPerformance.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                          <CheckCircle className="w-4 h-4" />
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-bold text-sky-500">
                        {item.count}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact for Contracts */}
      <section className="py-20 bg-slate-900 text-white" data-testid="contract-contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-sky-400 mx-auto mb-6" />
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl mb-4">
            Contracting Officer Contact
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            For contract inquiries, capability statements, or to discuss partnership opportunities, 
            please contact our contracts department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contracts@cleanstreetsnj.com">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white"
                data-testid="email-contracts-btn"
              >
                <Mail className="w-4 h-4 mr-2" />
                contracts@cleanstreetsnj.com
              </Button>
            </a>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10"
              >
                Contact Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractsPage;
