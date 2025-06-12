import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  rel?: string;
  target?: string;
  prefetch?: boolean;
  analytics?: {
    category: string;
    action: string;
    label?: string;
  };
}

export function InternalLink({
  href,
  children,
  className,
  title,
  rel,
  target,
  prefetch = true,
  analytics
}: InternalLinkProps) {
  
  const handleClick = () => {
    // Track internal link clicks for SEO analytics
    if (analytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', analytics.action, {
        event_category: analytics.category,
        event_label: analytics.label || href,
        value: 1
      });
    }

    // Prefetch link on hover for better performance
    if (prefetch && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    }
  };

  return (
    <Link
      href={href}
      className={cn(
        "text-primary hover:text-brand transition-colors duration-200 underline-offset-4 hover:underline",
        className
      )}
      title={title}
      rel={rel}
      target={target}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

// SEO-optimized breadcrumb component
interface BreadcrumbProps {
  items: Array<{
    name: string;
    href?: string;
    current?: boolean;
  }>;
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-2 text-sm text-secondary", className)}
    >
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <span className="mx-2 text-muted">/</span>
            )}
            {item.href && !item.current ? (
              <InternalLink
                href={item.href}
                className="hover:text-brand no-underline"
                itemProp="item"
                analytics={{
                  category: 'Navigation',
                  action: 'breadcrumb_click',
                  label: item.name
                }}
              >
                <span itemProp="name">{item.name}</span>
              </InternalLink>
            ) : (
              <span 
                className={cn(
                  item.current ? "text-brand font-medium" : "text-secondary"
                )}
                itemProp="name"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Related links component for internal linking
interface RelatedLinksProps {
  title?: string;
  links: Array<{
    title: string;
    href: string;
    description?: string;
    category?: string;
  }>;
  className?: string;
}

export function RelatedLinks({ 
  title = "Related Links", 
  links, 
  className 
}: RelatedLinksProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-h4 text-primary font-semibold">{title}</h3>
      <div className="grid gap-3">
        {links.map((link, index) => (
          <div key={index} className="hud-panel p-4 hover:border-brand transition-colors">
            <InternalLink
              href={link.href}
              className="block no-underline group"
              analytics={{
                category: 'Related Links',
                action: 'click',
                label: link.title
              }}
            >
              <h4 className="text-primary group-hover:text-brand transition-colors font-medium mb-1">
                {link.title}
              </h4>
              {link.description && (
                <p className="text-secondary text-sm">{link.description}</p>
              )}
              {link.category && (
                <span className="text-xs text-brand bg-glass px-2 py-1 rounded mt-2 inline-block">
                  {link.category}
                </span>
              )}
            </InternalLink>
          </div>
        ))}
      </div>
    </div>
  );
}

// Site-wide navigation links for better internal linking
export const siteNavigation = {
  main: [
    { name: 'Home', href: '/', description: 'GAMERS TAG gaming super app homepage' },
    { name: 'About', href: '/about', description: 'Learn about GAMERS TAG mission and vision' },
    { name: 'Features', href: '/features', description: 'Explore all gaming features and tools' },
    { name: 'Team', href: '/team', description: 'Meet the GAMERS TAG team members' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with GAMERS TAG' }
  ],
  features: [
    { name: 'GT Jobs', href: '/features/jobs', description: 'Find gaming and esports job opportunities' },
    { name: 'GT News', href: '/features/news', description: 'Latest gaming and esports news' },
    { name: 'GT Chats', href: '/features/chats', description: 'Connect with gaming community' },
    { name: 'GT Sound', href: '/features/gt-sound', description: 'Gaming audio experiences' },
    { name: 'Creator Voice', href: '/features/creator-voice', description: 'Platform for gaming creators' },
    { name: 'GT Card', href: '/features/gt-card', description: 'Gaming profile and identity card' }
  ],
  company: [
    { name: 'Incubators', href: '/incubators', description: 'Our startup incubator partnerships' },
    { name: 'Mentors', href: '/mentors', description: 'Industry mentors and advisors' },
    { name: 'Journey', href: '/journey', description: 'GAMERS TAG startup journey' },
    { name: 'Testimonials', href: '/testimonials', description: 'User reviews and testimonials' }
  ]
};