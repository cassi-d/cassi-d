import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API}/blog`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div data-testid="blog-page">
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
              Resources
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6 tracking-tight">
              Blog & Resources
            </h1>
            <p className="text-slate-300 text-lg">
              Industry insights, compliance guides, and tips for maintaining clean commercial 
              and public spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50" data-testid="blog-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(4)].map((_, index) => (
                <Card key={index} className="bg-white border border-slate-200">
                  <CardContent className="p-0">
                    <div className="h-48 bg-slate-200 skeleton" />
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-slate-200 skeleton rounded w-1/3" />
                      <div className="h-6 bg-slate-200 skeleton rounded" />
                      <div className="h-4 bg-slate-200 skeleton rounded w-2/3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={post.id || index} 
                  className="blog-card bg-white border border-slate-200 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image_url || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'}
                        alt={post.title}
                        className="blog-image w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <h2 className="font-['Barlow_Condensed'] font-bold text-xl text-slate-900 mb-3 group-hover:text-sky-500 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.created_at)}
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sky-500 font-medium text-sm hover:text-sky-600 transition-colors"
                          data-testid={`blog-read-more-${index}`}
                        >
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" data-testid="blog-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Our team is ready to answer your questions about cleaning services, 
            contracts, or compliance requirements.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-sky-500 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20"
              data-testid="blog-cta-btn"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
