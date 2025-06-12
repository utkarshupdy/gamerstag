import { Helmet } from 'react-helmet-async';
import { StructuredData } from './StructuredData';

interface SEOManagerProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function SEOManager({
  title,
  description,
  keywords = [],
  image = '/images/og-default.jpg',
  url = '',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  canonical,
  structuredData,
  breadcrumbs
}: SEOManagerProps) {
  const baseUrl = 'https://gamerstag.com';
  const fullTitle = title.includes('GAMERS TAG') ? title : `${title} | GAMERS TAG`;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="title" content={fullTitle} />
        <meta name="description" content={description} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#E5042F" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="GAMERS TAG" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImage} />
        <meta name="twitter:creator" content="@gamerstag" />
        <meta name="twitter:site" content="@gamerstag" />
        
        {/* Article specific */}
        {type === 'article' && (
          <>
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {author && <meta property="article:author" content={author} />}
          </>
        )}
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* SEO optimizations */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      
      {/* Structured Data */}
      {structuredData && (
        <StructuredData 
          type={type === 'profile' ? 'Person' : type === 'article' ? 'Article' : type === 'product' ? 'Product' : 'WebPage'} 
          data={structuredData} 
        />
      )}
      
      {/* Breadcrumb structured data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <StructuredData 
          type="BreadcrumbList" 
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: crumb.name,
              item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`
            }))
          }} 
        />
      )}
    </>
  );
}