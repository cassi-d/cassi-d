import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
    fetchGallery();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${API}/testimonials`);
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const fetchGallery = async () => {
    try {
      const response = await axios.get(`${API}/gallery`);
      setGallery(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  const nextGalleryItem = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevGalleryItem = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div data-testid="testimonials-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1691496550053-80260c93db8f?w=1920')` 
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wider">
              Client Feedback
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Testimonials & Results
            </h1>
            <p className="text-slate-300 text-lg">
              See what our clients say about our services and view our before & after transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50" data-testid="testimonials-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-12 text-center">
            Client Feedback
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id || index} 
                className="testimonial-card bg-white border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-sky-100 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-medium text-slate-900">{testimonial.client_name}</p>
                    {testimonial.company && (
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl text-slate-900 mb-4">
              Before & After Gallery
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              See the transformative results of our professional cleaning services.
            </p>
          </div>

          {gallery.length > 0 && (
            <div className="relative">
              {/* Gallery Carousel */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                    {gallery[activeGalleryIndex]?.category}
                  </span>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-slate-900 mt-3">
                    {gallery[activeGalleryIndex]?.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before Image */}
                  <div className="comparison-container relative group">
                    <img 
                      src={gallery[activeGalleryIndex]?.before_image}
                      alt="Before"
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />
                    <span className="comparison-label label-before">Before</span>
                  </div>

                  {/* After Image */}
                  <div className="comparison-container relative group">
                    <img 
                      src={gallery[activeGalleryIndex]?.after_image}
                      alt="After"
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />
                    <span className="comparison-label label-after">After</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevGalleryItem}
                    className="rounded-full"
                    data-testid="gallery-prev-btn"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  
                  <div className="flex gap-2">
                    {gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGalleryIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === activeGalleryIndex ? 'bg-sky-500' : 'bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextGalleryItem}
                    className="rounded-full"
                    data-testid="gallery-next-btn"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white" data-testid="testimonials-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join our satisfied clients and experience the Dirdia difference.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white"
              data-testid="testimonials-cta-btn"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
