interface StructuredDataProps {
  type: 'Organization' | 'Article' | 'Product' | 'WebPage' | 'Person' | 'WebSite' | 'BreadcrumbList';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };
    
    return JSON.stringify(baseSchema);
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateSchema() }}
    />
  );
}

// Predefined schema generators for common use cases
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GAMERS TAG',
  description: 'The world\'s most innovative gaming super platform connecting gamers, creators, and industry professionals.',
  url: 'https://gamerstag.com',
  logo: 'https://gamerstag.com/logo.png',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Joshua J Kanatt',
    jobTitle: 'Founder & Chief Executive Officer'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@gamerstag.com'
  },
  sameAs: [
    'https://linkedin.com/company/gamerstag',
    'https://twitter.com/gamerstag',
    'https://instagram.com/gamerstag'
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GAMERS TAG',
  url: 'https://gamerstag.com',
  description: 'The ultimate gaming ecosystem super app',
  publisher: {
    '@type': 'Organization',
    name: 'GAMERS TAG'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://gamerstag.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};