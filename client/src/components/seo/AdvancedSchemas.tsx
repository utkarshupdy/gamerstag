import { StructuredData } from './StructuredData';
import { AdvancedSEOFeatures } from '@/lib/seo/advanced-features';

// FAQ Schema Component for gaming platform questions
export function FAQSchema({ faqs }: { faqs: Array<{question: string; answer: string}> }) {
  const schema = AdvancedSEOFeatures.generateFAQSchema(faqs);
  return <StructuredData type="WebPage" data={schema} />;
}

// Review Schema for gaming platform testimonials
export function ReviewSchema({ reviews }: { 
  reviews: Array<{author: string; rating: number; text: string; date?: string}> 
}) {
  const schema = AdvancedSEOFeatures.generateReviewSchema(reviews);
  return <StructuredData type="Product" data={schema} />;
}

// Gaming Feature Schema for software applications
export function FeatureSchema({ feature }: {
  feature: {name: string; description: string; category: string; operatingSystem?: string[]}
}) {
  const schema = AdvancedSEOFeatures.generateSoftwareSchema(feature);
  return <StructuredData type="WebPage" data={schema} />;
}

// Gaming Event Schema for tournaments
export function EventSchema({ event }: {
  event: {name: string; startDate: string; endDate?: string; location?: string; description: string}
}) {
  const schema = AdvancedSEOFeatures.generateEventSchema(event);
  return <StructuredData type="WebPage" data={schema} />;
}

// Local Business Schema for company
export function CompanySchema() {
  const schema = AdvancedSEOFeatures.generateLocalBusinessSchema();
  return <StructuredData type="Organization" data={schema} />;
}

// Article Schema for news content
export function NewsSchema({ article }: {
  article: {headline: string; description: string; author: string; datePublished: string; image?: string}
}) {
  const schema = AdvancedSEOFeatures.generateArticleSchema(article);
  return <StructuredData type="WebPage" data={schema} />;
}