import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface AdvancedSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
  breadcrumbs?: { name: string; url: string }[];
  structuredData?: object;
}

export function AdvancedSEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.png',
  canonical,
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
  category,
  tags = [],
  breadcrumbs = [],
  structuredData
}: AdvancedSEOHeadProps) {
  const [location] = useLocation();
  const currentUrl = `${window.location.origin}${location}`;
  const finalCanonical = canonical || currentUrl;

  useEffect(() => {
    // Set document title with brand suffix
    document.title = `${title} | GAMERS TAG - Gaming Community Platform`;
    
    // Remove existing meta tags to avoid duplicates
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
    existingMetas.forEach(meta => meta.remove());
    
    // Basic SEO meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords || '' },
      { name: 'author', content: author || 'GAMERS TAG Team' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      
      // Open Graph tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:image', content: ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}` },
      { property: 'og:image:alt', content: `${title} - GAMERS TAG` },
      { property: 'og:url', content: finalCanonical },
      { property: 'og:site_name', content: 'GAMERS TAG' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Gamerstag_GT' },
      { name: 'twitter:creator', content: '@Gamerstag_GT' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}` },
      
      // Additional SEO tags
      { name: 'theme-color', content: '#E5042F' },
      { name: 'msapplication-TileColor', content: '#E5042F' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ];

    // Add article-specific tags
    if (type === 'article' && publishedDate) {
      metaTags.push(
        { property: 'article:published_time', content: publishedDate },
        { property: 'article:author', content: author || 'GAMERS TAG Team' },
        { property: 'article:section', content: category || 'Gaming' }
      );
      
      if (modifiedDate) {
        metaTags.push({ property: 'article:modified_time', content: modifiedDate });
      }
      
      tags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }

    // Create and append meta tags
    metaTags.forEach(({ name, property, content }) => {
      if (content) {
        const meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        meta.setAttribute('data-seo', 'true');
        document.head.appendChild(meta);
      }
    });

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

    // Structured Data (JSON-LD)
    const removeExistingStructuredData = () => {
      const existing = document.querySelectorAll('script[type="application/ld+json"][data-seo="true"]');
      existing.forEach(script => script.remove());
    };

    removeExistingStructuredData();

    // Default organization structured data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GAMERS TAG",
      "description": "Revolutionary gaming community platform connecting gamers worldwide",
      "url": "https://gamers-tag.com",
      "logo": `${window.location.origin}/logo.png`,
      "sameAs": [
        "https://www.instagram.com/gamerstag/",
        "https://www.facebook.com/Gamers-Tag-102219632395268",
        "https://www.youtube.com/channel/UCWH3iUkctZvdLmTYqjoMEcA",
        "https://www.linkedin.com/company/gamers-tag",
        "https://x.com/Gamerstag_GT"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@gamerstag.com"
      }
    };

    // Website structured data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GAMERS TAG",
      "url": window.location.origin,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${window.location.origin}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    // Breadcrumb structured data
    if (breadcrumbs.length > 0) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `${window.location.origin}${crumb.url}`
        }))
      };
      
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-seo', 'true');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    }

    // Add structured data scripts
    [organizationData, websiteData, structuredData].filter(Boolean).forEach(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

  }, [title, description, keywords, ogImage, finalCanonical, type, author, publishedDate, modifiedDate, category, tags, breadcrumbs, structuredData]);

  return null;
}