import { SEOHead } from '@/components/seo-head';
import { EnhancedCard } from '@/components/EnhancedCard';
import { EnhancedButton } from '@/components/EnhancedButton';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Volume2, Headphones, Zap, Music, Check, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GTSound() {
  const soundFeatures = [
    {
      icon: Volume2,
      title: "Custom Sound Effects",
      description: "Unique audio cues designed specifically for gaming interactions"
    },
    {
      icon: Headphones,
      title: "Immersive Audio",
      description: "Rich soundscapes that enhance every aspect of the app experience"
    },
    {
      icon: Music,
      title: "Dynamic Feedback",
      description: "Contextual audio responses that guide and inform user actions"
    },
    {
      icon: Zap,
      title: "Gaming-Optimized",
      description: "Audio designed to complement gaming sessions without distraction"
    }
  ];

  const audioElements = [
    "Button clicks and navigation sounds",
    "Achievement and level-up notifications",
    "Message and notification alerts",
    "Menu transitions and modal sounds",
    "Success and error feedback audio",
    "Ambient gaming atmosphere sounds",
    "Haptic feedback integration",
    "Volume and preference controls"
  ];

  return (
    <>
      <SEOHead
        title="GT Sound - Immersive Gaming Audio Experience | GAMERS TAG"
        description="Experience rich and dynamic audio within GAMERS TAG app with custom sound effects. Immersive audio experience for gamers with gamified sound design."
        keywords="gaming app sounds, immersive audio experience, gaming sound effects, gamified audio, premium gaming app audio, haptic feedback"
        url="/features/gt-sound"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern opacity-20" />
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
                <Volume2 className="w-5 h-5 mr-2" />
                GT Sound Feature
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                The Sound of Gaming
              </h1>
              <p className="text-2xl text-purple-400 font-semibold mb-4">
                "Immerse Your Senses. The Sound of Gaming."
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                GT SOUND is more than just background noise; it's an integral part of the GAMERS TAG experience. We've incorporated custom-designed sound effects and auditory cues that make navigating the app feel like an extension of the gaming world itself. From subtle haptic feedback to satisfying UI sounds, GT SOUND enhances immersion, making every tap, swipe, and notification a part of the gamified journey. It's designed for premium gaming app sounds.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Audio Features */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Audio That Enhances Gaming
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every sound carefully crafted to create the perfect gaming atmosphere
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {soundFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </EnhancedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Audio Experience */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">More Than Background Noise</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  GT SOUND is more than just background noise; it's an integral part of the GAMERS TAG experience. We've incorporated custom-designed sound effects and auditory cues that make navigating the app feel like an extension of the gaming world itself.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  From subtle haptic feedback to satisfying UI sounds, GT SOUND enhances immersion, making every tap, swipe, and notification a part of the gamified journey.
                </p>
                <EnhancedButton size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Play className="w-5 h-5 mr-2" />
                  Experience GT Sound
                </EnhancedButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Audio Elements</h4>
                  <div className="space-y-4">
                    {audioElements.map((element, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-4 flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-300">{element}</p>
                      </div>
                    ))}
                  </div>
                </EnhancedCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-red-600/10 backdrop-blur-sm border-red-500/30 p-8 h-full">
                  <h3 className="text-2xl font-bold text-red-400 mb-6">Problems We Solve</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-3 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Lack of Sensory Engagement</h4>
                        <p className="text-gray-300 text-sm">Many apps lack an engaging auditory experience</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-3 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Generic Feedback</h4>
                        <p className="text-gray-300 text-sm">Standard notification sounds do not align with a gaming theme</p>
                      </div>
                    </li>
                  </ul>
                </EnhancedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-green-600/10 backdrop-blur-sm border-green-500/30 p-8 h-full">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">GT Sound Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-3 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Increased Immersion</h4>
                        <p className="text-gray-300 text-sm">Custom sounds deepen the gamified experience within the app</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-3 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Enhanced User Feedback</h4>
                        <p className="text-gray-300 text-sm">Auditory cues provide clear and satisfying responses to user actions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-3 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Brand Identity</h4>
                        <p className="text-gray-300 text-sm">Unique sounds contribute to the distinctive GAMERS TAG brand</p>
                      </div>
                    </li>
                  </ul>
                </EnhancedCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <EnhancedCard className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-purple-500/30 p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Experience GT Sound</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Hear the difference that premium gaming audio makes in your app experience.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {['Button Click', 'Achievement', 'Notification', 'Success'].map((sound, index) => (
                    <EnhancedButton
                      key={index}
                      variant="outline"
                      className="h-16 flex flex-col items-center justify-center"
                    >
                      <Volume2 className="w-5 h-5 mb-1" />
                      <span className="text-xs">{sound}</span>
                    </EnhancedButton>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <EnhancedButton size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Headphones className="w-5 h-5 mr-2" />
                    Try Full Experience
                  </EnhancedButton>
                  <EnhancedButton variant="outline" size="lg">
                    <Music className="w-5 h-5 mr-2" />
                    Audio Settings
                  </EnhancedButton>
                </div>
              </EnhancedCard>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}