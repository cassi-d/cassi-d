import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';
import axios from 'axios';
import SEO from '../components/SEO';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') === 'walkthrough' ? 'walkthrough' : 'quote';
  
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service_type: initialType,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    { value: 'quote', label: 'Request a Free Quote' },
    { value: 'walkthrough', label: 'Schedule a Walkthrough' },
    { value: 'commercial', label: 'Commercial Cleaning' },
    { value: 'street', label: 'Street Cleaning' },
    { value: 'specialty', label: 'Specialty Services' },
    { value: 'emergency', label: 'Emergency Cleanup' },
    { value: 'contract', label: 'Government Contract Inquiry' },
    { value: 'other', label: 'Other' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceTypeChange = (value) => {
    setFormData((prev) => ({ ...prev, service_type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      toast.success('Message sent successfully! We\'ll be in touch soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '(240) 496-7636',
      secondary: 'Mon-Fri 8am-6pm EST',
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@dirdia.com',
      secondary: '24/7 Email Support',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      primary: 'New Jersey',
      secondary: 'Statewide Coverage',
    },
    {
      icon: Clock,
      title: 'Emergency',
      primary: '24/7 Available',
      secondary: 'Call for urgent needs',
    },
  ];

  return (
    <div data-testid="contact-page">
      <SEO 
        title="Contact Us - Free Quote"
        description="Contact Dirdia for a free commercial cleaning quote in New Jersey. Call (240) 496-7636 or fill out our form. Veteran owned, licensed & insured cleaning services."
        keywords="contact cleaning company NJ, free cleaning quote, commercial cleaning estimate, cleaning services New Jersey, office cleaning quote"
        canonical="https://dirdia.com/contact"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920')` 
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-slate-300 text-lg">
              Ready to discuss your cleaning needs? Reach out to us for a free consultation 
              and customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50" data-testid="contact-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900">
                Contact Information
              </h2>
              
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-white border border-slate-200">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{item.title}</p>
                      <p className="font-medium text-slate-900">{item.primary}</p>
                      <p className="text-sm text-slate-600">{item.secondary}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="contact-form bg-white border border-slate-200 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12" data-testid="contact-success">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600 mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            organization: '',
                            email: '',
                            phone: '',
                            service_type: 'quote',
                            message: '',
                          });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} data-testid="contact-form">
                      <h2 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mb-6">
                        Send Us a Message
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="form-input"
                            data-testid="contact-name-input"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="Company or organization"
                            className="form-input"
                            data-testid="contact-organization-input"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="form-input"
                            data-testid="contact-email-input"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(XXX) XXX-XXXX"
                            className="form-input"
                            data-testid="contact-phone-input"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="service_type">Type of Service *</Label>
                        <Select 
                          value={formData.service_type} 
                          onValueChange={handleServiceTypeChange}
                        >
                          <SelectTrigger className="form-input" data-testid="contact-service-select">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 mb-8">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your cleaning needs..."
                          rows={5}
                          required
                          className="form-input resize-none"
                          data-testid="contact-message-input"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-sky-500 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20"
                          data-testid="contact-submit-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Request a Free Quote
                            </>
                          )}
                        </Button>
                        <a href="tel:+12404967636" className="flex-1">
                          <Button 
                            type="button"
                            variant="outline"
                            className="w-full border-2 border-slate-200"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Us Instead
                          </Button>
                        </a>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
