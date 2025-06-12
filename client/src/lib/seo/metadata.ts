import { SEOProps } from '@/components/seo/SEOHead';

// Page-specific SEO metadata
export const pageMetadata: Record<string, SEOProps> = {
  home: {
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
    url: 'https://gamerstag.com',
    type: 'website' as const
  },
  
  about: {
    title: 'About GAMERS TAG - Revolutionary Gaming Platform',
    description: 'Discover GAMERS TAG\'s vision to revolutionize gaming through innovative technology, community building, and professional esports development.',
    keywords: [
      'gaming company',
      'gaming innovation',
      'esports development',
      'gaming technology',
      'gaming vision',
      'gaming mission'
    ],
    url: 'https://gamerstag.com/about',
    type: 'website' as const
  },
  
  team: {
    title: 'Our Team - GAMERS TAG Leadership & Innovation',
    description: 'Meet the visionary leaders and innovative team members driving GAMERS TAG\'s success in revolutionizing the gaming industry.',
    keywords: [
      'gaming team',
      'gaming leadership',
      'gaming professionals',
      'esports team',
      'tech team',
      'gaming experts'
    ],
    url: 'https://gamerstag.com/team',
    type: 'website' as const
  },
  
  features: {
    title: 'Gaming Features - Pro Profiles, Tournaments & More',
    description: 'Explore GAMERS TAG\'s powerful features: Pro Gaming Profiles, Tournament System, Team Management, Social Gaming, and cutting-edge gaming technology.',
    keywords: [
      'gaming features',
      'pro gaming profiles',
      'gaming tournaments',
      'team management',
      'social gaming',
      'gaming tools'
    ],
    url: 'https://gamerstag.com/features',
    type: 'website' as const
  },
  
  updates: {
    title: 'Latest Updates - GAMERS TAG News & Announcements',
    description: 'Stay updated with the latest GAMERS TAG app updates, new features, gaming industry news, and platform improvements.',
    keywords: [
      'gaming updates',
      'app updates',
      'gaming news',
      'platform improvements',
      'new features',
      'gaming announcements'
    ],
    url: 'https://gamerstag.com/updates',
    type: 'website' as const
  }
};

// Generate dynamic team member metadata
export function generateTeamMemberMetadata(member: any): SEOProps {
  return {
    title: `${member.fullName || member.name} - ${member.role}`,
    description: `Meet ${member.fullName || member.name}, ${member.role} at GAMERS TAG. ${member.bio || `Leading innovation in gaming technology and esports development.`}`,
    keywords: [
      member.name.toLowerCase(),
      member.role.toLowerCase(),
      'gaming professional',
      'esports',
      'gaming leadership',
      'tech expert',
      ...(member.expertise || [])
    ],
    url: `https://gamerstag.com/team/${member.slug}`,
    type: 'article' as const
  };
}

// Generate dynamic update/blog post metadata
export function generateUpdateMetadata(update: any): SEOProps {
  return {
    title: update.title,
    description: update.description || `Latest update from GAMERS TAG: ${update.title}`,
    keywords: [
      'gaming update',
      'app update',
      'gaming news',
      ...(update.tags || [])
    ],
    url: `https://gamerstag.com/updates/${update.slug}`,
    type: 'article' as const,
    publishedTime: update.publishedAt,
    modifiedTime: update.updatedAt
  };
}