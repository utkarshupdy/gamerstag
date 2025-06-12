import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  canonical?: string;
}

export function AdvancedSEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  structuredData,
  noIndex = false,
  canonical
}: AdvancedSEOProps) {
  const [location] = useLocation();
  const currentUrl = `https://gamerstag.com${location}`;
  const canonicalUrl = canonical || currentUrl;

  const defaultKeywords = [
    'gaming network',
    'esports platform',
    'gaming super app',
    'gamer community',
    'gaming professionals',
    'esports careers',
    'gaming industry',
    'professional gaming',
    'gaming recruitment',
    'esports talent'
  ];

  const allKeywords = keywords.concat(defaultKeywords.filter(k => !keywords.includes(k)));

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GAMERS TAG",
    "alternateName": "GT",
    "url": "https://gamerstag.com",
    "logo": "https://gamerstag.com/logo.svg",
    "description": "The world's first gaming super app connecting gamers, esports professionals, and gaming companies worldwide.",
    "foundingDate": "2023",
    "industry": "Gaming and Esports",
    "numberOfEmployees": "10-50",
    "sameAs": [
      "https://linkedin.com/company/gamerstag",
      "https://twitter.com/gamerstag",
      "https://instagram.com/gamerstag",
      "https://facebook.com/gamerstag"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GAMERS TAG" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@gamerstag" />
      <meta name="twitter:creator" content="@gamerstag" />
      
      {/* Additional Meta Tags for Gaming Industry */}
      <meta name="application-name" content="GAMERS TAG" />
      <meta name="apple-mobile-web-app-title" content="GAMERS TAG" />
      <meta name="theme-color" content="#E5042F" />
      <meta name="msapplication-TileColor" content="#E5042F" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Performance & Loading */}
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.sanity.io" />
      
      {/* Prefetch critical resources */}
      <link rel="prefetch" href="/api/testimonials" />
      <link rel="prefetch" href="/api/gallery" />
      <link rel="prefetch" href="/api/news" />
      
      {/* Alternative formats */}
      <link rel="alternate" type="application/rss+xml" title="GAMERS TAG News" href="/feed.xml" />
      <link rel="alternate" type="application/json" title="GAMERS TAG" href="/feed.json" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Critical CSS for CLS prevention */}
      <style>
        {`
          /* Prevent layout shifts */
          html { scroll-behavior: smooth; }
          body { 
            margin: 0; 
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
            background: #0A0A0A; 
            color: #FFFFFF;
            overflow-x: hidden;
            line-height: 1.6;
          }
          
          /* Reserve space for navigation */
          .main-content { padding-top: 80px; }
          
          /* Skeleton loaders to prevent CLS */
          .skeleton {
            background: linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
            border-radius: 4px;
          }
          
          @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          
          /* Image optimization */
          img {
            max-width: 100%;
            height: auto;
            display: block;
          }
          
          /* Font loading optimization */
          .font-orbitron { font-family: 'Orbitron', monospace; font-display: swap; }
          .font-space-grotesk { font-family: 'Space Grotesk', sans-serif; font-display: swap; }
        `}
      </style>
    </Helmet>
  );
}