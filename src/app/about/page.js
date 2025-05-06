'use client'
import { Users, BarChart2, Laptop, Lightbulb } from "lucide-react";
import { useState, useRef, useEffect } from 'react';

export default function AboutUsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
//   const slidesRef = useRef(null);
  
  // Sample achievements data
 const achievements = [
    {
      title: "FREE",
      subtitle: "Anyone Can use.",
      description: "Experience expert-like never before the platform is free for freelancers, connect with partners, and more."
    },
    {
      title: "BIG",
      subtitle: "Our vision.",
      description: "One platform to become the world's largest and greatest growth & success platform, offering world-class features for high-quality experience."
    },
    {
      title: "80%",
      subtitle: "Increase your reach.",
      description: "Optimize your presence with a professional audit, plus ongoing improvement strategies at all levels, and connect with top partners and gaining peak visibility."
    },
    {
      title: "70%",
      subtitle: "Decrease Cost.",
      description: "Cut business costs and improve management with low-fee transactions, efficient features, and a stronger bottom line. Save more!"
    },
    {
      title: "10X",
      subtitle: "Higher Brand Visibility.",
      description: "Enhance your brand growth by having expanded reach, analytics to guide your results, powerful platform, and strong engagement through attractive campaigns."
    }
  ];
  
  // Special features data
//   const specialFeatures = [
//     {
//       title: "All-in-one Platform",
//       description: "Integrating all gaming needs in a single super app with seamless experience",
//       icon: "⚡"
//     },
//     {
//       title: "Community Driven",
//       description: "Built by gamers for gamers, with continuous feedback and improvement",
//       icon: "👨‍👩‍👧‍👦"
//     },
//     {
//       title: "Revolutionary Technology",
//       description: "Using cutting-edge tech to provide the best gaming experience possible",
//       icon: "💻"
//     },
//     {
//       title: "Global Reach",
//       description: "Connecting gamers, brands, and enthusiasts from around the world",
//       icon: "🌐"
//     }
//   ];
const [specialFeatures] = useState([
    {
      icon: <Users size={48} color="#fff" />,
      title: "The Dream Team",
      description: "A powerhouse of talent from IIT, NIT, ISB, and beyond. Forming one of the finest collections of expertise across various industry segments."
    },
    {
      icon: <Lightbulb size={48} color="#fff" />,
      title: "Expert Mentor Guidance",
      description: "Our company's success and growth are driven by our mentors from top experts from varied domains, whose guidance and insights shape our strategic decisions."
    },
    {
      icon: <BarChart2 size={48} color="#fff" />,
      title: "Market Understanding",
      description: "Our strong commercial understanding of the market segments for 150+ products and over 200+ clients enables us to deliver solutions on a global scale."
    },
    {
      icon: <Laptop size={48} color="#fff" />,
      title: "World Class Tech Team",
      description: "Our tech-powered workflows, designs, and innovative solutions set us apart from the rest. We impact our clients' satisfaction and loyalty."
    }
  ]);

  
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* About Us Header Section */}
      <section className="bg-black py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold font-sans text-gray-300 uppercase tracking-wider mb-6">
          ABOUT US
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We started this adventure to make gamers to dream bigger, with each keystroke a step closer to success.
        </p>
      </div>
      {/* <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div> */}
    </section>
    <div className="mt-7 border-b-3 border-red-600 mx-auto w-full"></div>
    {/* <div className="border-t-4 border-red-600 my-8"></div> */}

      {/* GAMERS TAG Introduction Section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="h-96 overflow-hidden rounded">
              <img 
                src="https://media.istockphoto.com/id/1155123965/photo/double-exposure-the-city-and-clouds-technology-futuristic-computer-digital-abstract.jpg?s=612x612&w=0&k=20&c=gVuvMR7IpqZwjrUioxD3ozITYkCe3-uoaMB4Uaka1OU=" 
                alt="GAMERS TAG Team" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="border-l-6 border-red-600 pl-6 mb-8">
              <h2 className="text-3xl font-bold font-sans mb-1">WE GAMERS TAG</h2>
              <h2 className="text-xl font-normal font-sans mb-6">PRIVATE LIMITED INDIA</h2>
            </div>
            <p className="text-gray-300 font-sans leading-relaxed mb-6">
              Founded in 2020, GAMERS TAG has quickly grown from a small startup to a global platform serving users across 25+ countries. Our team consists of passionate gamers, tech innovators, and industry veterans who understand the unique challenges and opportunities in the gaming ecosystem.
            </p>
            <p className="text-gray-300 font-sans leading-relaxed">
              GAMERS TAG offers world-class features such as Jobs Listing and Applying, Bite News, Chat, Networking, Social Linking, and Gamification for gamers, tech enthusiasts, students, brands, and others. Our mission is to create a unified platform where all gaming needs can be met in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-light font-sans italic text-gray-300 mb-6">
          &quot;The future of gaming is not just about playing games, it&apos;s about building communities, creating opportunities, and establishing connections that transcend traditional boundaries. At GAMERS TAG, we&apos;re building that future today.&quot;
          </blockquote>
          <div className="flex justify-end">
            <cite className="text-right text-xl text-slate-300 font-bold">
              - JOSHUA J KANATT 
            </cite>
            

          </div>
        </div>
        <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div>
      </section>

      {/* Why We Started Section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-l-6 border-red-600 pl-6 mb-8">
            <h2 className="text-3xl font-sans font-normal mb-6">How did it started ?</h2>
          </div>
          <p className="text-gray-300 font-sans leading-relaxed max-w-4xl mb-6">
            The gaming industry has long been fragmented, with players having to navigate multiple platforms for different needs - one for finding jobs, another for news, yet another for networking. We recognized this challenge and envisioned a unified solution that would bring everything together.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Our founders, being avid gamers themselves, experienced these frustrations firsthand. They decided to channel their passion and expertise into creating a platform that would address these pain points and revolutionize how gamers interact with the ecosystem. Thus, GAMERS TAG was born - not just as a business venture, but as a solution created by gamers, for gamers.
          </p>
        </div>
        <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div>
      </section>

      {/* Why We Are Special Section */}
      {/* <section className="py-6 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="border-l-4 border-red-600 pl-6 mb-12">
            <h2 className="text-3xl font-normal font-sans mb-6">What are we special?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded transition-transform duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-4 text-red-500">{feature.icon}</div>
                <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div>
      </section> */}
      <section className="py-6 px-4 bg-black text-white">
      <div className="max-w-6xl  font-sans mx-auto">
        <div className="border-l-6 border-red-600 pl-6 mb-12">
          <h2 className="text-3xl font-normal mb-2">What we are Special ?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((dot) => (
            <div key={dot} className="h-2 w-2 rounded-full bg-gray-600"></div>
          ))}
        </div>
      </div>
      <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div>
    </section>

      {/* Our Mission Section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-l-6 border-red-600 pl-6 mb-8">
            <h2 className="text-3xl font-sans font-normal mb-6">Our Mission</h2>
          </div>
          <p className="text-gray-300 font-sans leading-relaxed max-w-4xl">
          At GAMERS TAG, our mission goes far beyond creating a platform — we aim to revolutionize the way the gaming world connects, grows, and thrives. We are building the world&apos;s most comprehensive and inclusive gaming ecosystem, one that unites gamers of all levels, connects innovative brands, and propels the dynamic growth of esports and interactive entertainment.

We envision a global community where barriers are eliminated and opportunities are accessible to all — whether you&aposre a casual player finding your tribe, a rising esports athlete chasing your dreams, or an indie developer looking to share your creation with the world. GAMERS TAG is a place where talent meets opportunity, where passion is celebrated, and where every voice in the gaming universe matters.

Our platform is designed to empower every stakeholder in the industry. Gamers can showcase their skills, build their personal brand, and connect with like-minded individuals. Developers can gain visibility, receive community feedback, and build loyal followings. Brands can engage with authentic audiences and contribute meaningfully to the culture of gaming. Together, we&apos;re shaping a future where gaming is not just a pastime, but a powerful vehicle for creativity, collaboration, and career growth.

GAMERS TAG isn&apos;t just a product — it&apos;s a movement. A movement to foster inclusivity, elevate voices that have long been underrepresented, and bring the fragmented corners of the gaming world into one thriving, unified space. We&apos;re here to change the game — for good.
          </p>
        </div>
        <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div>
      </section>

      {/* Our Vision Section */}
      <section className="py-6 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="border-l-6 border-red-600 pl-6 mb-8">
            <h2 className="text-3xl font-sans font-normal mb-6">Our Vision</h2>
          </div>
          <p className="text-gray-300 font-sans leading-relaxed max-w-4xl">
          We envision a future where GAMERS TAG stands at the very core of the global gaming universe — not merely as a platform, but as a powerful catalyst for transformation, opportunity, and progress. Our goal is to build more than just a successful company; we are laying the foundation for a thriving, interconnected ecosystem that redefines how the gaming industry operates and evolves. We see a world where gamers, developers, brands, and creators are no longer isolated within fragmented spaces, but instead united within one seamless and empowering environment.

In this future, GAMERS TAG becomes the heartbeat of the gaming community — a central hub where passion meets purpose, where careers are launched, friendships are formed, and groundbreaking ideas are nurtured. We aim to foster an environment where opportunities are not limited by geography, resources, or background, but are abundant, inclusive, and accessible to everyone — from aspiring young gamers to elite professionals, from indie developers to global studios.

Our vision is one where innovation is not just encouraged but embedded into the very DNA of our platform. We aspire to continually push the boundaries of technology, creativity, and connectivity, setting new benchmarks for user experience, community engagement, and industry standards. Whether it&apos;s through AI-powered matchmaking, immersive storytelling, or decentralized economies, GAMERS TAG is committed to leading the next wave of innovation in gaming.

Ultimately, we are building a future where GAMERS TAG is synonymous with empowerment, excellence, and evolution — a place where dreams take root, talent is recognized, and the full potential of the gaming world is unleashed.          </p>
        </div>
        <div className="mt-12 border-b-3 border-red-600 mx-auto w-full"></div>
      </section>

      {/* We Are Proud Of Section with Sliding Cards */}
      <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="border-l-6 border-red-600 pl-6 mb-12">
          <h2 className="text-3xl font-normal mb-2">We are proud of</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-px w-full bg-gray-600 mb-6"></div>
              <h3 className="text-6xl font-bold mb-4 text-gray-300" 
                  style={{ 
                    fontFamily: 'monospace', 
                    letterSpacing: '2px', 
                    WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                    textShadow: '0 0 1px rgba(255,255,255,0.1)'
                  }}>
                {achievement.title}
              </h3>
              <div className="text-left">
                <p className="text-white font-medium mb-1">{achievement.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}