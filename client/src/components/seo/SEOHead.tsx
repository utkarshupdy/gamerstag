import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonical?: string;
}

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

const defaultSEO = {
  title: 'GAMERS TAG - The Ultimate Gaming Ecosystem Super App',
  description: 'Join the world\'s most innovative gaming super platform. Connect with gamers, build your legacy, compete in esports, and experience next-generation gaming technology.',
  keywords: [
    'gaming platform',
    'esports',
    'gaming community',
    'gaming app',
    'gamer profiles',
    'gaming tournaments',
    'gaming technology',
    'multiplayer gaming',
    'gaming ecosystem',
    'gaming super app'
  ],
  image: '/images/og-image.jpg',
  type: 'website' as const,
  url: 'https://gamerstag.com'
};

export function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonical,
  children
}: SEOHeadProps) {
  const seoTitle = title ? `${title} | GAMERS TAG` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords.join(', ')} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="GAMERS TAG" />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#E5042F" />
      <meta name="msapplication-TileColor" content="#E5042F" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.sanity.io" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      
      {/* Additional children */}
      {children}
    </Helmet>
  );
}