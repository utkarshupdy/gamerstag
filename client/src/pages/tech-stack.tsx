import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { SEOHead } from '@/components/seo-head';
import { CyberpunkBox } from '@/components/CyberpunkBox';
import { CyberpunkButton } from '@/components/CyberpunkButton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Shield, 
  Zap, 
  Settings, 
  Terminal,
  Cloud,
  Layers,
  Palette,
  Lock
} from 'lucide-react';

export default function TechStack() {
  const frontendTechnologies = [
    {
      name: 'React 18',
      description: 'Modern React with hooks and concurrent features for optimal performance',
      category: 'Framework',
      icon: <Code className="w-6 h-6" />
    },
    {
      name: 'TypeScript',
      description: 'Full type safety across the entire application stack',
      category: 'Language',
      icon: <Terminal className="w-6 h-6" />
    },
    {
      name: 'Vite',
      description: 'Lightning-fast build tool and development server with HMR',
      category: 'Build Tool',
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      category: 'Styling',
      icon: <Palette className="w-6 h-6" />
    },
    {
      name: 'Framer Motion',
      description: 'Production-ready motion library for smooth animations',
      category: 'Animation',
      icon: <Layers className="w-6 h-6" />
    },
    {
      name: 'Wouter',
      description: 'Lightweight routing solution for single-page applications',
      category: 'Routing',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'TanStack Query',
      description: 'Powerful data fetching and caching library',
      category: 'Data Fetching',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'React Hook Form',
      description: 'Performant forms with minimal re-renders',
      category: 'Forms',
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const backendTechnologies = [
    {
      name: 'Node.js',
      description: 'High-performance JavaScript runtime environment',
      category: 'Runtime',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: 'Express.js',
      description: 'Fast, unopinionated web framework for Node.js',
      category: 'Framework',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Drizzle ORM',
      description: 'Type-safe database toolkit with excellent TypeScript support',
      category: 'Database',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'PostgreSQL',
      description: 'Advanced open-source relational database',
      category: 'Database',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'Passport.js',
      description: 'Simple, unobtrusive authentication for Node.js',
      category: 'Authentication',
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const cmsFeatures = [
    'Real-time content updates without deployment',
    'Image optimization and transformation',
    'Rich text content with Portable Text',
    'SEO-optimized metadata fields',
    'Relationship management between content types',
    'API-first headless architecture',
    'Type-safe content modeling',
    'Live preview and collaboration tools'
  ];

  const designFeatures = [
    'Cyberpunk-inspired neon aesthetics',
    'Glassmorphism design elements',
    'Custom animated components',
    'Dark theme optimization',
    'Responsive design patterns',
    'Interactive hover effects',
    'Smooth page transitions',
    'Gaming-focused UI components'
  ];

  return (
    <>
      <SEOHead 
        title="Technology Stack - GAMERS TAG"
        description="Explore the cutting-edge technology stack powering GAMERS TAG. Built with React, TypeScript, Sanity CMS, and modern web technologies for optimal gaming experience."
        keywords="React, TypeScript, Sanity CMS, gaming technology, web development, cyberpunk design"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E5042F] via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Technology Stack
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Powered by cutting-edge technologies and engineered for the future of gaming
                </p>
              </motion.div>
            </div>
          </section>

          {/* Technology Overview */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-[#E5042F]/30">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="cms">Content Management</TabsTrigger>
                  <TabsTrigger value="design">Design System</TabsTrigger>
                </TabsList>

                <TabsContent value="frontend" className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frontendTechnologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CyberpunkBox className="h-full p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-[#E5042F]">
                              {tech.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                              <Badge variant="outline" className="text-xs">
                                {tech.category}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-300">{tech.description}</p>
                        </CyberpunkBox>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="backend" className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {backendTechnologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CyberpunkBox className="h-full p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-[#E5042F]">
                              {tech.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                              <Badge variant="outline" className="text-xs">
                                {tech.category}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-300">{tech.description}</p>
                        </CyberpunkBox>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cms" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <CyberpunkBox className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Settings className="w-8 h-8 text-[#E5042F]" />
                        Sanity CMS Integration
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        {cmsFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#E5042F] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CyberpunkBox>

                    <CyberpunkBox className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Cloud className="w-8 h-8 text-[#E5042F]" />
                        CMS Access Information
                      </h3>
                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="font-bold text-white mb-2">Studio Access:</h4>
                          <p>Visit <code className="bg-black/50 px-2 py-1 rounded text-cyan-400">/cms-demo</code> to see live CMS integration</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-2">Environment Setup:</h4>
                          <div className="bg-black/50 p-4 rounded-lg font-mono text-sm">
                            <div>VITE_SANITY_PROJECT_ID=your-project-id</div>
                            <div>VITE_SANITY_DATASET=production</div>
                            <div>VITE_SANITY_API_VERSION=2024-01-01</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-2">Content Types:</h4>
                          <p>Team members, features, testimonials, incubators, mentors, pages, and site settings</p>
                        </div>
                      </div>
                    </CyberpunkBox>
                  </div>
                </TabsContent>

                <TabsContent value="design" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <CyberpunkBox className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Palette className="w-8 h-8 text-[#E5042F]" />
                        Design Philosophy
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        {designFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#E5042F] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CyberpunkBox>

                    <CyberpunkBox className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Shield className="w-8 h-8 text-[#E5042F]" />
                        Component Architecture
                      </h3>
                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="font-bold text-white">Cyberpunk Components:</h4>
                          <p>Custom CyberpunkBox, CyberpunkButton, and CyberpunkHUD components</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">UI Library:</h4>
                          <p>Shadcn/ui components with custom theming and animations</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Responsive Design:</h4>
                          <p>Mobile-first approach with desktop enhancements</p>
                        </div>
                      </div>
                    </CyberpunkBox>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Leadership Quotes */}
          <section className="py-16 px-4 bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#E5042F] to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Engineering Vision
              </motion.h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <CyberpunkBox className="p-8 h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#E5042F] mb-2">Adesh</h3>
                      <p className="text-lg text-gray-300">Director of Engineering & Founding Member</p>
                      <p className="text-sm text-gray-400">IIT Guwahati | Ex-Amazon Intern</p>
                    </div>
                    <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                      "Building highly engineered products with multiple patentable algorithms, latest tech, and complex AI-SaaS interactions that make gamers unique and create sensational products in gaming."
                    </blockquote>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['AI Technology', 'Web3 & Crypto', 'Full-Stack Development', 'Patentable Algorithms'].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-[#E5042F]/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CyberpunkBox>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <CyberpunkBox className="p-8 h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#E5042F] mb-2">Hemanth</h3>
                      <p className="text-lg text-gray-300">Chief Security Officer & Founding Member</p>
                      <p className="text-sm text-gray-400">Startup Veteran</p>
                    </div>
                    <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                      "The gaming industry stands at the precipice of unprecedented transformation. With GAMERS TAG's vision, we're not just building a platform – we're architecting the future where every gamer becomes a recognized professional, every achievement gets its due recognition, and the entire gaming ecosystem evolves into something extraordinary."
                    </blockquote>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['Cybersecurity', 'Startup Strategy', 'Gaming Industry Vision', 'Platform Security'].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-[#E5042F]/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CyberpunkBox>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Experience the Technology
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Explore our live CMS integration and see how cutting-edge technology powers the future of gaming
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CyberpunkButton 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={() => window.location.href = '/cms-demo'}
                  >
                    View CMS Demo
                  </CyberpunkButton>
                  <CyberpunkButton 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={() => window.location.href = '/team'}
                  >
                    Meet the Team
                  </CyberpunkButton>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}