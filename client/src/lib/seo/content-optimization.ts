// Advanced content optimization for gaming SEO
export class ContentOptimization {
  
  // Gaming-specific keyword density optimization
  static optimizeContentKeywords(content: string, primaryKeywords: string[], secondaryKeywords: string[] = []): {
    optimizedContent: string;
    keywordDensity: Record<string, number>;
    recommendations: string[];
  } {
    const wordCount = content.split(/\s+/).length;
    const recommendations: string[] = [];
    let optimizedContent = content;
    
    // Calculate current keyword density
    const keywordDensity: Record<string, number> = {};
    
    [...primaryKeywords, ...secondaryKeywords].forEach(keyword => {
      const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      const matches = content.match(regex) || [];
      keywordDensity[keyword] = (matches.length / wordCount) * 100;
    });
    
    // Check primary keyword density (should be 1-3%)
    primaryKeywords.forEach(keyword => {
      const density = keywordDensity[keyword] || 0;
      if (density < 1) {
        recommendations.push(`Increase "${keyword}" usage (current: ${density.toFixed(1)}%)`);
      } else if (density > 3) {
        recommendations.push(`Reduce "${keyword}" usage to avoid keyword stuffing (current: ${density.toFixed(1)}%)`);
      }
    });
    
    return {
      optimizedContent,
      keywordDensity,
      recommendations
    };
  }

  // Gaming content readability optimization
  static optimizeReadability(content: string): {
    readabilityScore: number;
    improvements: string[];
    optimizedContent: string;
  } {
    const improvements: string[] = [];
    let optimizedContent = content;
    
    // Sentence length analysis
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgSentenceLength = sentences.reduce((sum, s) => sum + s.split(/\s+/).length, 0) / sentences.length;
    
    if (avgSentenceLength > 20) {
      improvements.push('Break down long sentences for better readability');
    }
    
    // Paragraph length analysis
    const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    const avgParagraphLength = paragraphs.reduce((sum, p) => sum + p.split(/\s+/).length, 0) / paragraphs.length;
    
    if (avgParagraphLength > 150) {
      improvements.push('Shorten paragraphs to improve scanning');
    }
    
    // Gaming terminology balance
    const gamingTerms = ['gaming', 'esports', 'tournament', 'competitive', 'professional', 'platform'];
    const gamingTermCount = gamingTerms.reduce((count, term) => {
      return count + (content.toLowerCase().match(new RegExp(term, 'g')) || []).length;
    }, 0);
    
    const totalWords = content.split(/\s+/).length;
    const gamingTermRatio = (gamingTermCount / totalWords) * 100;
    
    if (gamingTermRatio < 2) {
      improvements.push('Increase gaming terminology for better relevance');
    }
    
    // Simple readability score calculation
    const readabilityScore = Math.max(0, 100 - (avgSentenceLength * 1.5) - (avgParagraphLength * 0.1));
    
    return {
      readabilityScore: Math.round(readabilityScore),
      improvements,
      optimizedContent
    };
  }

  // Gaming-focused heading structure optimization
  static optimizeHeadings(content: string): {
    structure: Array<{level: number; text: string; hasKeywords: boolean}>;
    recommendations: string[];
  } {
    const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
    const headings: Array<{level: number; text: string; hasKeywords: boolean}> = [];
    const recommendations: string[] = [];
    
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, '').trim();
      const hasKeywords = /gaming|esports|tournament|competitive|professional/i.test(text);
      
      headings.push({ level, text, hasKeywords });
    }
    
    // Check H1 presence
    const h1Count = headings.filter(h => h.level === 1).length;
    if (h1Count === 0) {
      recommendations.push('Add an H1 heading with primary gaming keywords');
    } else if (h1Count > 1) {
      recommendations.push('Use only one H1 heading per page');
    }
    
    // Check keyword presence in headings
    const keywordHeadings = headings.filter(h => h.hasKeywords).length;
    if (keywordHeadings < headings.length * 0.5) {
      recommendations.push('Include gaming keywords in more headings');
    }
    
    // Check heading hierarchy
    for (let i = 1; i < headings.length; i++) {
      if (headings[i].level > headings[i-1].level + 1) {
        recommendations.push('Maintain proper heading hierarchy (H1 > H2 > H3...)');
        break;
      }
    }
    
    return { structure: headings, recommendations };
  }

  // Voice search optimization for gaming queries
  static optimizeForVoiceSearch(content: string): {
    questionPhrases: string[];
    conversationalKeywords: string[];
    suggestions: string[];
  } {
    const questionStarters = [
      'what is', 'how to', 'where can', 'when does', 'why should',
      'which gaming', 'best gaming', 'top esports'
    ];
    
    const conversationalKeywords = [
      'best gaming platform',
      'how to join esports',
      'what is professional gaming',
      'where to find gaming tournaments',
      'top gaming features',
      'gaming platform for beginners',
      'esports team management',
      'competitive gaming tips'
    ];
    
    const questionPhrases: string[] = [];
    const suggestions: string[] = [];
    
    // Extract existing question phrases
    const questionRegex = /(what|how|where|when|why|which|who)\s+[^.!?]*[.!?]/gi;
    let match;
    while ((match = questionRegex.exec(content)) !== null) {
      questionPhrases.push(match[0].trim());
    }
    
    if (questionPhrases.length < 3) {
      suggestions.push('Add more conversational question-answer pairs');
      suggestions.push('Include "How to" sections for gaming features');
      suggestions.push('Add FAQ section with common gaming questions');
    }
    
    return {
      questionPhrases,
      conversationalKeywords,
      suggestions
    };
  }

  // Gaming content freshness optimization
  static optimizeFreshness(content: string, lastUpdated: Date): {
    freshnessScore: number;
    recommendations: string[];
  } {
    const now = new Date();
    const daysSinceUpdate = Math.floor((now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24));
    const recommendations: string[] = [];
    
    let freshnessScore = 100;
    
    if (daysSinceUpdate > 90) {
      freshnessScore -= 30;
      recommendations.push('Content is over 3 months old - consider updating with latest gaming trends');
    } else if (daysSinceUpdate > 30) {
      freshnessScore -= 10;
      recommendations.push('Consider adding recent gaming news or updates');
    }
    
    // Check for outdated gaming references
    const outdatedTerms = ['flash games', 'internet explorer', '2020 tournament', '2021 season'];
    const hasOutdatedTerms = outdatedTerms.some(term => 
      content.toLowerCase().includes(term.toLowerCase())
    );
    
    if (hasOutdatedTerms) {
      freshnessScore -= 20;
      recommendations.push('Update outdated gaming references and dates');
    }
    
    // Check for current gaming trends
    const currentTerms = ['2024', '2025', 'latest', 'new', 'upcoming', 'current season'];
    const hasCurrentTerms = currentTerms.some(term => 
      content.toLowerCase().includes(term.toLowerCase())
    );
    
    if (!hasCurrentTerms) {
      freshnessScore -= 15;
      recommendations.push('Add references to current gaming trends and seasons');
    }
    
    return {
      freshnessScore: Math.max(0, freshnessScore),
      recommendations
    };
  }

  // Gaming-specific internal linking optimization
  static optimizeInternalLinks(content: string, availablePages: Array<{url: string; title: string; keywords: string[]}>) {
    const recommendations: string[] = [];
    const suggestedLinks: Array<{anchor: string; url: string; context: string}> = [];
    
    // Find gaming-related terms that could be linked
    const linkableTerms = [
      'gaming platform', 'esports tournament', 'professional gaming',
      'team management', 'gaming community', 'competitive gaming'
    ];
    
    linkableTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      const matches = content.match(regex);
      
      if (matches) {
        const relevantPage = availablePages.find(page => 
          page.keywords.some(keyword => 
            keyword.toLowerCase().includes(term.toLowerCase())
          )
        );
        
        if (relevantPage && !content.includes(`href="${relevantPage.url}"`)) {
          suggestedLinks.push({
            anchor: term,
            url: relevantPage.url,
            context: `Link "${term}" to ${relevantPage.title}`
          });
        }
      }
    });
    
    // Check current link density
    const linkRegex = /<a[^>]*href[^>]*>.*?<\/a>/gi;
    const currentLinks = content.match(linkRegex) || [];
    const wordCount = content.split(/\s+/).length;
    const linkDensity = (currentLinks.length / wordCount) * 100;
    
    if (linkDensity < 1) {
      recommendations.push('Increase internal linking to improve SEO');
    } else if (linkDensity > 3) {
      recommendations.push('Reduce link density to avoid over-optimization');
    }
    
    return {
      suggestedLinks,
      currentLinkDensity: linkDensity,
      recommendations
    };
  }

  // Comprehensive content analysis for gaming pages
  static analyzeGamingContent(content: string, metadata: {
    title: string;
    description: string;
    keywords: string[];
    lastUpdated: Date;
    pageType: 'team' | 'feature' | 'news' | 'home' | 'about';
  }) {
    const keywordAnalysis = this.optimizeContentKeywords(
      content, 
      metadata.keywords.slice(0, 3), 
      metadata.keywords.slice(3)
    );
    
    const readabilityAnalysis = this.optimizeReadability(content);
    const headingAnalysis = this.optimizeHeadings(content);
    const voiceSearchAnalysis = this.optimizeForVoiceSearch(content);
    const freshnessAnalysis = this.optimizeFreshness(content, metadata.lastUpdated);
    
    const overallScore = Math.round(
      (readabilityAnalysis.readabilityScore + 
       freshnessAnalysis.freshnessScore + 
       (Object.values(keywordAnalysis.keywordDensity).filter(d => d >= 1 && d <= 3).length / metadata.keywords.length * 100)) / 3
    );
    
    return {
      overallScore,
      keyword: keywordAnalysis,
      readability: readabilityAnalysis,
      headings: headingAnalysis,
      voiceSearch: voiceSearchAnalysis,
      freshness: freshnessAnalysis,
      recommendations: [
        ...keywordAnalysis.recommendations,
        ...readabilityAnalysis.improvements,
        ...headingAnalysis.recommendations,
        ...voiceSearchAnalysis.suggestions,
        ...freshnessAnalysis.recommendations
      ].slice(0, 10) // Top 10 recommendations
    };
  }
}