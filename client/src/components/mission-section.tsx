import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Globe, Briefcase, Zap } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future where gaming becomes a top career industry worldwide
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 group"
        >
          <div className="relative bg-gradient-to-br from-black via-gray-900/95 to-black border-2 border-white/20 hover:border-[#E5042F] transition-all duration-500 p-8 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/30 overflow-hidden">
            {/* Sharp Corner Cuts */}
            <div className="absolute top-0 left-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
            <div className="absolute top-0 right-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
            
            {/* Corner Frame Lines */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            
            {/* Header */}
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E5042F]/30 to-[#E5042F]/10 border border-[#E5042F]/50 group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10 group-hover:border-white/50 transition-all duration-300 flex items-center justify-center mr-4"
                   style={{
                     clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'
                   }}>
                <Target className="w-7 h-7 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white text-3xl font-bold text-center tracking-wider group-hover:text-[#E5042F] transition-colors duration-300">
                OUR VISION
              </h3>
            </div>
            
            {/* Content */}
            <div className="space-y-6 relative z-10">
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                At GAMERS TAG, our vision is bold, data-driven, and deeply rooted in purpose. We envision a future where gaming becomes one of the Top 3 career-building industries globally, empowering over 100 million gamers, creators, and innovators by 2030. Our aim is to build the world's largest and most trusted gaming ecosystem, supporting a projected $500B+ global industry.
              </p>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                We are building a future for Gaming & Esports where 12x more tournaments are hosted across regions, tournament prize pools grow 6x, and the esports audience triples. GAMERS TAG will be the launchpad for over 5,00,000+ gaming and esports jobs, powering dreams and careers alike.
              </p>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                For brands, publishers, and esports organizations, our vision is to create the most effective partnership pipeline in gaming with 12,000+ brands projected to engage with esports teams for endorsements and sponsorships. We are here to bridge the gap between culture and profession, turning fragmented efforts into unified success. GAMERS TAG is not just shaping the future of gaming we're elevating it to next level and transforming it into a movement that touches every corner of the digital world.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E5042F] group-hover:text-white transition-colors duration-300">100M+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Empowered Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E5042F] group-hover:text-white transition-colors duration-300">$500B+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Industry Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E5042F] group-hover:text-white transition-colors duration-300">5L+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Gaming Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E5042F] group-hover:text-white transition-colors duration-300">12K+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Brand Partners</div>
                </div>
              </div>
            </div>
            
            {/* Bottom HUD elements */}
            <div className="absolute bottom-4 left-4 text-white/50 group-hover:text-[#E5042F]/80 text-xs font-mono transition-colors duration-300 z-10">
              VISION_DATA_01
            </div>
            <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-[#E5042F]/80 text-xs font-mono transition-colors duration-300 z-10">
              STATUS: ACTIVE
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 group"
        >
          <div className="relative bg-gradient-to-br from-black via-gray-900/95 to-black border-2 border-white/20 hover:border-[#E5042F] transition-all duration-500 p-8 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/30 overflow-hidden">
            {/* Sharp Corner Cuts */}
            <div className="absolute top-0 left-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
            <div className="absolute top-0 right-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                 style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
            
            {/* Corner Frame Lines */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
            
            {/* Header */}
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E5042F]/30 to-[#E5042F]/10 border border-[#E5042F]/50 group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10 group-hover:border-white/50 transition-all duration-300 flex items-center justify-center mr-4"
                   style={{
                     clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'
                   }}>
                <Briefcase className="w-7 h-7 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white text-3xl font-bold text-center tracking-wider group-hover:text-[#E5042F] transition-colors duration-300">
                OUR MISSION
              </h3>
            </div>
            
            {/* Content */}
            <div className="space-y-6 relative z-10">
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                At GAMERS TAG, our mission goes far beyond building a gaming platform – we are on a mission to transform the way the entire gaming world connects, grows, and thrives. We aim to increase the market cap of the gaming industry by 10x in the next five years by expanding its horizons and bringing every voice in gaming closer to opportunity. We are in pursuit for bringing multiple impactful features tailored for each stakeholder in the industry, unlocking the full potential of every individual and organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-[#E5042F] group-hover:text-white mb-4 transition-colors duration-300">For B2C Users</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    For our B2C users especially gamers, esports athletes, fans, streamers, creators, developers, organizers, analysts, and tech talents, our mission is to elevate growth, income, and recognition. We want to multiply opportunities, open new revenue streams, and create spaces where individuals can build personal brands, engage with real communities, and turn their love for gaming into a profession. From bringing grassroot esports players to global stage, giving creators wider reach, to empowering developers with tools and resources.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#E5042F] group-hover:text-white mb-4 transition-colors duration-300">For B2B Partners</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    For our B2B, Our mission is to build the most effective pipeline for global brands to effortlessly invest and tap into the gaming sector and easily elevate brand engagement. We aim to be the ultimate bridge between gaming and the world of business, whether it's small gaming teams, esports organizations, game developers, tech brands, consumer brands, or publishers. We enable brands to engage with deeply authentic gaming audiences, collaborate with esports teams, and gain impactful partnerships.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom HUD elements */}
            <div className="absolute bottom-4 left-4 text-white/50 group-hover:text-[#E5042F]/80 text-xs font-mono transition-colors duration-300 z-10">
              MISSION_DATA_02
            </div>
            <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-[#E5042F]/80 text-xs font-mono transition-colors duration-300 z-10">
              STATUS: ACTIVE
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Market Growth",
              stat: "10x Industry Cap",
              description: "Increasing gaming industry market capitalization by 10x in the next five years"
            },
            {
              icon: Users,
              title: "Global Reach",
              stat: "100M+ Users",
              description: "Empowering over 100 million gamers, creators, and innovators by 2030"
            },
            {
              icon: Globe,
              title: "Career Creation",
              stat: "5L+ Jobs",
              description: "Creating over 500,000 gaming and esports career opportunities worldwide"
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-black via-gray-900/95 to-black border-2 border-white/20 hover:border-[#E5042F] transition-all duration-500 p-8 h-full transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/30 overflow-hidden">
                {/* Sharp Corner Cuts */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                     style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                     style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#E5042F] group-hover:bg-white transition-colors duration-300" 
                     style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
                
                {/* Corner Frame Lines */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#E5042F]/30 to-[#E5042F]/10 border border-[#E5042F]/50 group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10 group-hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                       style={{
                         clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                       }}>
                    <metric.icon className="w-8 h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                    {metric.title}
                  </h3>
                  <div className="text-3xl font-bold text-[#E5042F] group-hover:text-white mb-4 transition-colors duration-300">
                    {metric.stat}
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {metric.description}
                  </p>
                </div>
                
                {/* Bottom HUD indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300 z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}