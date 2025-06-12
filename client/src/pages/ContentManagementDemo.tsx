import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { SEOHead } from '@/components/seo-head';
import { 
  useTeamMembers, 
  useFeatures, 
  useTestimonials, 
  useIncubators, 
  useMentors,
  useSiteSettings 
} from '@/hooks/useSanity';
import { SanityContent, SanityImageComponent } from '@/components/sanity-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { urlFor } from '@/lib/sanity';
import { Loader2, Users, Star, Award, Building2, UserCheck } from 'lucide-react';

export default function CMSDemo() {
  const { data: teamMembers, isLoading: loadingTeam } = useTeamMembers();
  const { data: features, isLoading: loadingFeatures } = useFeatures();
  const { data: testimonials, isLoading: loadingTestimonials } = useTestimonials();
  const { data: incubators, isLoading: loadingIncubators } = useIncubators();
  const { data: mentors, isLoading: loadingMentors } = useMentors();
  const { data: settings, isLoading: loadingSettings } = useSiteSettings();

  const isLoading = loadingTeam || loadingFeatures || loadingTestimonials || 
                    loadingIncubators || loadingMentors || loadingSettings;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-blue-100">Loading CMS data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Sanity CMS Integration Demo - GAMERS TAG"
        description="Demonstration of comprehensive Sanity CMS integration across all GAMERS TAG pages and content types."
        keywords="Sanity CMS, content management, GAMERS TAG, dynamic content"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <div className="pt-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 text-white">
                Sanity CMS Integration
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive content management system powering all GAMERS TAG pages with dynamic, 
                authenticated data from Sanity CMS.
              </p>
            </motion.div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <Card className="bg-black/50 border-[#E5042F]/30">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-[#E5042F] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{teamMembers?.length || 0}</p>
                  <p className="text-gray-400 text-sm">Team Members</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border-[#E5042F]/30">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-[#E5042F] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{features?.length || 0}</p>
                  <p className="text-gray-400 text-sm">Features</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border-[#E5042F]/30">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-[#E5042F] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{testimonials?.length || 0}</p>
                  <p className="text-gray-400 text-sm">Testimonials</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border-[#E5042F]/30">
                <CardContent className="p-4 text-center">
                  <Building2 className="h-8 w-8 text-[#E5042F] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{incubators?.length || 0}</p>
                  <p className="text-gray-400 text-sm">Incubators</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border-[#E5042F]/30">
                <CardContent className="p-4 text-center">
                  <UserCheck className="h-8 w-8 text-[#E5042F] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{mentors?.length || 0}</p>
                  <p className="text-gray-400 text-sm">Mentors</p>
                </CardContent>
              </Card>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="team" className="mb-12">
              <TabsList className="grid w-full grid-cols-5 bg-black/50">
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="incubators">Incubators</TabsTrigger>
                <TabsTrigger value="mentors">Mentors</TabsTrigger>
              </TabsList>

              <TabsContent value="team" className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Team Members from Sanity CMS</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers?.slice(0, 6).map((member) => (
                    <Card key={member._id} className="bg-black/50 border-[#E5042F]/30">
                      <CardContent className="p-6">
                        {member.profileImage && (
                          <SanityImageComponent
                            image={member.profileImage}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                          />
                        )}
                        <h3 className="text-lg font-bold text-white text-center mb-2">{member.name}</h3>
                        <p className="text-[#E5042F] text-center mb-2">{member.position}</p>
                        <div className="flex justify-center">
                          <Badge variant="outline" className="text-xs">
                            {member.department?.toUpperCase() || 'TEAM'}
                          </Badge>
                        </div>
                        {member.shortBio && (
                          <p className="text-gray-400 text-sm mt-3 text-center">{member.shortBio}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Features from Sanity CMS</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features?.slice(0, 4).map((feature) => (
                    <Card key={feature._id} className="bg-black/50 border-[#E5042F]/30">
                      <CardHeader>
                        <CardTitle className="text-white">{feature.title}</CardTitle>
                        {feature.subtitle && (
                          <p className="text-[#E5042F]">{feature.subtitle}</p>
                        )}
                      </CardHeader>
                      <CardContent>
                        {feature.image && (
                          <SanityImageComponent
                            image={feature.image}
                            alt={feature.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-[#E5042F]/20 text-[#E5042F]">
                            {feature.category?.replace('-', ' ').toUpperCase() || 'FEATURE'}
                          </Badge>
                          {feature.isComingSoon && (
                            <Badge variant="outline">Coming Soon</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Testimonials from Sanity CMS</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials?.slice(0, 4).map((testimonial) => (
                    <Card key={testimonial._id} className="bg-black/50 border-[#E5042F]/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {testimonial.authorImage && (
                            <SanityImageComponent
                              image={testimonial.authorImage}
                              alt={testimonial.author}
                              width={50}
                              height={50}
                              className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                          )}
                          <div>
                            <h3 className="text-white font-bold">{testimonial.author}</h3>
                            <p className="text-[#E5042F] text-sm">{testimonial.authorPosition}</p>
                            {testimonial.authorCompany && (
                              <p className="text-gray-400 text-xs">{testimonial.authorCompany}</p>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
                        <div className="flex justify-between items-center">
                          {testimonial.rating && (
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-[#E5042F] text-[#E5042F]" />
                              ))}
                            </div>
                          )}
                          {testimonial.isVerified && (
                            <Badge className="bg-green-500/20 text-green-400">Verified</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="incubators" className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Incubators from Sanity CMS</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {incubators?.slice(0, 4).map((incubator) => (
                    <Card key={incubator._id} className="bg-black/50 border-[#E5042F]/30">
                      <CardContent className="p-6">
                        {incubator.logo && (
                          <SanityImageComponent
                            image={incubator.logo}
                            alt={incubator.name}
                            width={200}
                            height={100}
                            className="w-full h-24 object-contain mb-4"
                          />
                        )}
                        <h3 className="text-lg font-bold text-white mb-2">{incubator.name}</h3>
                        <p className="text-gray-300 mb-4">{incubator.description}</p>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-[#E5042F]/20 text-[#E5042F]">
                            {incubator.category?.replace('-', ' ').toUpperCase() || 'INCUBATOR'}
                          </Badge>
                          {incubator.partnership?.status && (
                            <Badge variant="outline" className="text-green-400">
                              {incubator.partnership.status.toUpperCase()}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mentors" className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Mentors from Sanity CMS</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentors?.slice(0, 6).map((mentor) => (
                    <Card key={mentor._id} className="bg-black/50 border-[#E5042F]/30">
                      <CardContent className="p-6">
                        {mentor.profileImage && (
                          <SanityImageComponent
                            image={mentor.profileImage}
                            alt={mentor.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                          />
                        )}
                        <h3 className="text-lg font-bold text-white text-center mb-2">{mentor.name}</h3>
                        <p className="text-[#E5042F] text-center mb-2">{mentor.title}</p>
                        {mentor.company && (
                          <p className="text-gray-400 text-center text-sm mb-3">{mentor.company}</p>
                        )}
                        <div className="flex justify-center">
                          <Badge 
                            className={`text-xs ${
                              mentor.availability === 'available' ? 'bg-green-500/20 text-green-400' :
                              mentor.availability === 'limited' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {mentor.availability.toUpperCase()}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* CMS Configuration Info */}
            <Card className="bg-black/50 border-[#E5042F]/30 mb-12">
              <CardHeader>
                <CardTitle className="text-white">Sanity CMS Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Content Types Integrated:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Team Members with profiles and social links</li>
                      <li>• Features with images and descriptions</li>
                      <li>• Testimonials with ratings and verification</li>
                      <li>• Incubators with partnerships and benefits</li>
                      <li>• Mentors with availability and expertise</li>
                      <li>• Pages with SEO and structured content</li>
                      <li>• Blog posts and news articles</li>
                      <li>• Site settings and navigation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">CMS Features:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Real-time content updates</li>
                      <li>• Image optimization and transformation</li>
                      <li>• Rich text content with Portable Text</li>
                      <li>• Structured data and SEO optimization</li>
                      <li>• Content validation and workflows</li>
                      <li>• Multi-language support ready</li>
                      <li>• Version control and publishing</li>
                      <li>• API-first headless architecture</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}