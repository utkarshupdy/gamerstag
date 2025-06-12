import { Helmet } from 'react-helmet-async';
import { AdvancedSEO, SEOConfig } from '@/lib/seo/advanced-seo';
import { StructuredData } from './StructuredData';

interface EnhancedSEOProps {
  config: SEOConfig;
  structuredData?: any;
  children?: React.ReactNode;
}

export function EnhancedSEO({ config, structuredData, children }: EnhancedSEOProps) {
  const metaTags = AdvancedSEO.generateMetaTags(config);
  const schemaData = config.schemaType ? AdvancedSEO.generateStructuredData(config, structuredData) : null;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{metaTags.title}</title>
        <meta name="title" content={metaTags['meta:title']} />
        <meta name="description" content={metaTags['meta:description']} />
        <meta name="keywords" content={metaTags['meta:keywords']} />
        <meta name="viewport" content={metaTags['meta:viewport']} />
        <meta name="theme-color" content={metaTags['meta:theme-color']} />
        
        {/* Robots and Indexing */}
        <meta name="robots" content={metaTags['meta:robots']} />
        <meta name="googlebot" content={metaTags['meta:googlebot']} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={metaTags['link:canonical']} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={metaTags['meta:og:type']} />
        <meta property="og:url" content={metaTags['meta:og:url']} />
        <meta property="og:title" content={metaTags['meta:og:title']} />
        <meta property="og:description" content={metaTags['meta:og:description']} />
        <meta property="og:image" content={metaTags['meta:og:image']} />
        <meta property="og:image:width" content={metaTags['meta:og:image:width']} />
        <meta property="og:image:height" content={metaTags['meta:og:image:height']} />
        <meta property="og:site_name" content={metaTags['meta:og:site_name']} />
        <meta property="og:locale" content={metaTags['meta:og:locale']} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content={metaTags['meta:twitter:card']} />
        <meta name="twitter:url" content={metaTags['meta:twitter:url']} />
        <meta name="twitter:title" content={metaTags['meta:twitter:title']} />
        <meta name="twitter:description" content={metaTags['meta:twitter:description']} />
        <meta name="twitter:image" content={metaTags['meta:twitter:image']} />
        <meta name="twitter:creator" content={metaTags['meta:twitter:creator']} />
        <meta name="twitter:site" content={metaTags['meta:twitter:site']} />
        
        {/* Article-specific meta tags */}
        {config.type === 'article' && (
          <>
            {config.publishedTime && <meta property="article:published_time" content={config.publishedTime} />}
            {config.modifiedTime && <meta property="article:modified_time" content={config.modifiedTime} />}
            {config.author && <meta property="article:author" content={config.author} />}
            {config.section && <meta property="article:section" content={config.section} />}
            {config.tags?.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#E5042F" />
        
        {children}
      </Helmet>
      
      {/* Structured Data */}
      {schemaData && <StructuredData type={config.schemaType!} data={schemaData} />}
      
      {/* Breadcrumb structured data */}
      {config.breadcrumbs && config.breadcrumbs.length > 0 && (
        <StructuredData 
          type="BreadcrumbList" 
          data={AdvancedSEO.generateStructuredData({ 
            ...config, 
            schemaType: 'BreadcrumbList' 
          })} 
        />
      )}
    </>
  );
}

// HOC for automatic SEO enhancement
export function withSEO<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  seoConfigGenerator: (props: T) => SEOConfig
) {
  return function SEOEnhancedComponent(props: T) {
    const seoConfig = seoConfigGenerator(props);
    
    return (
      <>
        <EnhancedSEO config={seoConfig} />
        <Component {...props} />
      </>
    );
  };
}

// Specialized SEO components for different page types
export function TeamMemberSEO({ member }: { member: any }) {
  const config = AdvancedSEO.generateTeamMemberSEO(member);
  return <EnhancedSEO config={config} structuredData={member} />;
}

export function FeatureSEO({ feature }: { feature: any }) {
  const config = AdvancedSEO.generateFeatureSEO(feature);
  return <EnhancedSEO config={config} structuredData={feature} />;
}

export function NewsSEO({ article }: { article: any }) {
  const config = AdvancedSEO.generateNewsSEO(article);
  return <EnhancedSEO config={config} structuredData={article} />;
}

export function PageSEO({ pageType, data }: { pageType: string; data?: any }) {
  const config = AdvancedSEO.generatePageSEO(pageType, data);
  return <EnhancedSEO config={config} structuredData={data} />;
}