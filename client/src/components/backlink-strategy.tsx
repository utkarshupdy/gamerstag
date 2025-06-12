import { InternalLink } from './internal-link';

interface BacklinkOpportunity {
  domain: string;
  type: 'press-release' | 'guest-post' | 'directory' | 'social-media' | 'partnership' | 'forum' | 'resource-page';
  authority: 'high' | 'medium' | 'low';
  relevance: 'high' | 'medium' | 'low';
  contact?: string;
  notes?: string;
}

interface BacklinkStrategyProps {
  opportunities?: BacklinkOpportunity[];
}

export function BacklinkStrategy({ opportunities = [] }: BacklinkStrategyProps) {
  // High-quality backlink opportunities for gaming industry
  const defaultOpportunities: BacklinkOpportunity[] = [
    {
      domain: 'esports.com',
      type: 'guest-post',
      authority: 'high',
      relevance: 'high',
      notes: 'Submit gaming industry insights and startup stories'
    },
    {
      domain: 'gamasutra.com',
      type: 'press-release',
      authority: 'high',
      relevance: 'high',
      notes: 'Gaming industry news and startup announcements'
    },
    {
      domain: 'techcrunch.com',
      type: 'press-release',
      authority: 'high',
      relevance: 'medium',
      notes: 'Startup funding and tech innovation stories'
    },
    {
      domain: 'venturebeat.com',
      type: 'guest-post',
      authority: 'high',
      relevance: 'medium',
      notes: 'Gaming tech and startup ecosystem articles'
    },
    {
      domain: 'polygon.com',
      type: 'resource-page',
      authority: 'high',
      relevance: 'high',
      notes: 'Gaming tools and platform listings'
    },
    {
      domain: 'reddit.com/r/gaming',
      type: 'social-media',
      authority: 'high',
      relevance: 'high',
      notes: 'Community engagement and valuable content sharing'
    },
    {
      domain: 'producthunt.com',
      type: 'directory',
      authority: 'medium',
      relevance: 'high',
      notes: 'Launch gaming app for community voting'
    },
    {
      domain: 'crunchbase.com',
      type: 'directory',
      authority: 'high',
      relevance: 'medium',
      notes: 'Complete startup profile with funding information'
    },
    {
      domain: 'angel.co',
      type: 'directory',
      authority: 'medium',
      relevance: 'medium',
      notes: 'Startup profile and job posting platform'
    },
    {
      domain: 'indianstartupnews.com',
      type: 'press-release',
      authority: 'medium',
      relevance: 'high',
      notes: 'Indian gaming startup ecosystem coverage'
    }
  ];

  const allOpportunities = opportunities.length > 0 ? opportunities : defaultOpportunities;

  return (
    <div className="space-y-6">
      <div className="hud-panel p-6">
        <h3 className="text-h3 text-primary mb-4">Backlink Strategy Overview</h3>
        <p className="text-secondary mb-4">
          High-quality backlinks from reputable gaming and tech sites boost domain authority and search rankings.
          Focus on relevance, authority, and natural link building through valuable content.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-glass p-4 rounded border border-accent">
            <h4 className="text-brand font-semibold">Target DA 50+</h4>
            <p className="text-secondary text-sm">Focus on high-authority domains for maximum SEO impact</p>
          </div>
          <div className="bg-glass p-4 rounded border border-accent">
            <h4 className="text-brand font-semibold">Gaming Relevance</h4>
            <p className="text-secondary text-sm">Prioritize gaming and tech industry publications</p>
          </div>
          <div className="bg-glass p-4 rounded border border-accent">
            <h4 className="text-brand font-semibold">Natural Growth</h4>
            <p className="text-secondary text-sm">Build links through valuable content and partnerships</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <h4 className="text-h4 text-primary">High-Priority Backlink Opportunities</h4>
        {allOpportunities
          .filter(opp => opp.authority === 'high' && opp.relevance === 'high')
          .map((opportunity, index) => (
            <div key={index} className="hud-panel p-4 hover:border-brand transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-primary font-medium">{opportunity.domain}</h5>
                <div className="flex gap-2">
                  <span className="text-xs bg-brand text-primary px-2 py-1 rounded">
                    {opportunity.authority.toUpperCase()} DA
                  </span>
                  <span className="text-xs bg-glass text-secondary px-2 py-1 rounded border border-accent">
                    {opportunity.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>
              {opportunity.notes && (
                <p className="text-secondary text-sm">{opportunity.notes}</p>
              )}
            </div>
          ))}
      </div>

      <div className="hud-panel p-6">
        <h4 className="text-h4 text-primary mb-4">Backlink Building Tactics</h4>
        <div className="space-y-4">
          <div className="border-l-2 border-brand pl-4">
            <h5 className="text-primary font-medium">Content Marketing</h5>
            <p className="text-secondary text-sm">Create valuable gaming industry insights, startup journey stories, and esports analysis that naturally attract links</p>
          </div>
          <div className="border-l-2 border-brand pl-4">
            <h5 className="text-primary font-medium">Partnership Outreach</h5>
            <p className="text-secondary text-sm">Collaborate with gaming influencers, esports teams, and industry publications for mutual link opportunities</p>
          </div>
          <div className="border-l-2 border-brand pl-4">
            <h5 className="text-primary font-medium">Resource Page Inclusion</h5>
            <p className="text-secondary text-sm">Get listed on gaming tool directories, startup resource pages, and industry roundups</p>
          </div>
          <div className="border-l-2 border-brand pl-4">
            <h5 className="text-primary font-medium">HARO Participation</h5>
            <p className="text-secondary text-sm">Respond to Help a Reporter Out requests with expert gaming industry commentary</p>
          </div>
        </div>
      </div>

      <div className="hud-panel p-6">
        <h4 className="text-h4 text-primary mb-4">Internal Link Architecture</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-primary font-medium mb-3">Topic Clusters</h5>
            <ul className="space-y-2">
              <li>
                <InternalLink href="/features" className="text-secondary hover:text-brand">
                  Gaming Features Hub
                </InternalLink>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><InternalLink href="/features/jobs" className="text-xs text-muted hover:text-brand">GT Jobs</InternalLink></li>
                  <li><InternalLink href="/features/news" className="text-xs text-muted hover:text-brand">GT News</InternalLink></li>
                  <li><InternalLink href="/features/chats" className="text-xs text-muted hover:text-brand">GT Chats</InternalLink></li>
                </ul>
              </li>
              <li>
                <InternalLink href="/team" className="text-secondary hover:text-brand">
                  Team & Leadership
                </InternalLink>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><InternalLink href="/team/joshua-kanatt" className="text-xs text-muted hover:text-brand">CEO Profile</InternalLink></li>
                  <li><InternalLink href="/incubators" className="text-xs text-muted hover:text-brand">Incubators</InternalLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-medium mb-3">Content Hubs</h5>
            <ul className="space-y-2">
              <li><InternalLink href="/about" className="text-secondary hover:text-brand">Company Story</InternalLink></li>
              <li><InternalLink href="/journey" className="text-secondary hover:text-brand">Startup Journey</InternalLink></li>
              <li><InternalLink href="/testimonials" className="text-secondary hover:text-brand">User Success Stories</InternalLink></li>
              <li><InternalLink href="/mentors" className="text-secondary hover:text-brand">Industry Mentors</InternalLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Backlink monitoring utility
export function trackBacklinks() {
  const backlinks = [
    { source: 'techcrunch.com', anchor: 'gaming startup', url: '/about' },
    { source: 'esports.com', anchor: 'GAMERS TAG platform', url: '/features' },
    { source: 'producthunt.com', anchor: 'gaming app', url: '/' },
  ];

  // Track backlink performance
  if (typeof window !== 'undefined' && window.gtag) {
    backlinks.forEach(link => {
      window.gtag('event', 'backlink_referral', {
        event_category: 'SEO',
        event_label: link.source,
        custom_parameter_1: link.anchor,
        custom_parameter_2: link.url
      });
    });
  }

  return backlinks;
}