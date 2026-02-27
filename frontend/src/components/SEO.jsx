import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  type = 'website',
  image = 'https://customer-assets.emergentagent.com/job_cleanstreets-nj/artifacts/n9fdovtq_Untitled_design-removebg-preview.png'
}) => {
  const siteTitle = 'Dirdia';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Commercial Cleaning Services NJ`;
  const defaultDescription = 'Professional commercial cleaning, street sweeping, and specialty cleaning services in New Jersey. Veteran owned, licensed, insured, and eco-friendly. Free quotes available!';
  const defaultKeywords = 'commercial cleaning NJ, office cleaning New Jersey, street sweeping, janitorial services, industrial cleaning, medical facility cleaning, retail cleaning, veteran owned cleaning company, eco-friendly cleaning NJ';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
