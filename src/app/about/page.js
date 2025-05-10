'use client'
import { Users, BarChart2, Laptop, Lightbulb } from "lucide-react";
import { useState, useRef, useEffect } from 'react';

export default function AboutUsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Linear gradient styles
  const redGradient = 'linear-gradient(to bottom, #DE2234, #BB0130)';
  const whiteGradient = 'linear-gradient(to bottom, #FFFFFF, #999999)';
  
  // Text gradient style for all text elements
  const textGradientStyle = {
    background: whiteGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'white', // Fallback
    display: 'inline-block'
  };
  
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
      {/* About Us Header Section with gradient styling */}
      <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
        <h1 className="text-5xl font-medium font-sans uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>
          ABOUT US
        </h1>
        <p style={{ letterSpacing: '0.05em', ...textGradientStyle }} className="text-lg leading-relaxed max-w-4xl mx-auto">
        We started this adventure to make gamers to dream bigger, with each 
        <br/>
        keystroke a step closer to sucess.       </p>
      </header>
      <div className="border-b border-red-800 w-full"></div>

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
            <div className="border-l-8 pl-6 mb-8 h-17" style={{ borderColor: '#BB0130' }}>
              <h2 className="text-3xl font-medium font-sans mb-1" style={{ letterSpacing: '0.05em' }}>We GAMERS TAG</h2>
              {/* <br/> */}
              <h2 className="text-xl font-normal font-sans mb-6" style={{ letterSpacing: '0.05em' }}>PRIVATE LIMITED INDIA</h2>
            </div>
            <p className="font-sans leading-relaxed text-lg mb-6" style={{ letterSpacing: '0.10em' , ...textGradientStyle}}>
            We are Gamers Tag, a vibrant startup founded in 2021 in the beautiful city of Kochi, Kerala, India. Dedicated to transforming the gaming and esports industry, we are fueled by the passion of gamers and guided by the expertise of experienced leaders and top talent from across the globe. Together with our community, we are shaping the future of gaming through innovation, excellence, and a shared vision for greatness.            </p>
            {/* <p className="font-sans leading-relaxed" style={textGradientStyle}>
              GAMERS TAG offers world-class features such as Jobs Listing and Applying, Bite News, Chat, Networking, Social Linking, and Gamification for gamers, tech enthusiasts, students, brands, and others. Our mission is to create a unified platform where all gaming needs can be met in one place.
            </p> */}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-4xl font-light font-jost  mb-6" style={{ letterSpacing: '0.10em' , ...textGradientStyle}}>
          &quot;A dream platform for anyone to become great to greatest.&quot;          </blockquote>
          <div className="flex justify-end">
            <cite className="text-right text-xl font-light" style={{letterSpacing: '0.10em' ,...textGradientStyle}}>
              - JOSHUA J KANATT 
            </cite>
          </div>
        </div>
        <div className="mt-12 border-b border-red-800 w-full"></div>
      </section>

      {/* How did it started Section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
        <div className="border-l-8 pl-4 mb-8 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
          <h2 className="text-3xl font-sans font-normal"  style={{letterSpacing: '0.02em'}}>
            How did it started ?
          </h2>
        </div>

          <p className="font-jost text-lg leading-relaxed max-w-4xl mb-6"  style={{letterSpacing: '0.10em' ,...textGradientStyle}}>
          Founded in 2021 and based in Kochi, Kerala, India is a dynamic startup dedicated to transforming the gaming & esports industry. Backed by strong, experienced members and top talent from around the globe, we are supported by a passionate community of gamers and industry leaders. Together, we aim to shape the future of gaming and esports with innovation and excellence.          </p>
          {/* <p className="leading-relaxed max-w-4xl" style={textGradientStyle}>
            Our founders, being avid gamers themselves, experienced these frustrations firsthand. They decided to channel their passion and expertise into creating a platform that would address these pain points and revolutionize how gamers interact with the ecosystem. Thus, GAMERS TAG was born - not just as a business venture, but as a solution created by gamers, for gamers.
          </p> */}
        </div>
        <div className="mt-12 border-b border-red-800 w-full"></div>
      </section>

      {/* What we are Special Section */}
      <section className="py-6 px-4 bg-black">
        <div className="max-w-6xl font-sans mx-auto">
        <div className="border-l-8 pl-4 mb-8 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
        <h2 className="text-3xl font-sans font-normal"  style={{letterSpacing: '0.02em'}}>
              What we are Special ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                style={{ background: index === 0 ? redGradient : '#232323' }}
                onMouseEnter={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = redGradient;
                    e.currentTarget.style.opacity = '0.9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = '#232323';
                    e.currentTarget.style.opacity = '1';
                  }
                }}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={textGradientStyle}>{feature.title}</h3>
                <p className="text-sm" style={textGradientStyle}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((dot) => (
              <div 
                key={dot} 
                className="h-2 w-2 rounded-full" 
                style={{ background: dot === activeSlide ? redGradient : whiteGradient }}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-b border-red-800 w-full"></div>
      </section>

      {/* Our Mission Section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
        <div className="border-l-8 pl-4 mb-8 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
        <h2 className="text-3xl font-sans font-normal"  style={{letterSpacing: '0.02em'}}>
              Our Mission</h2>
          </div>
          <p className="font-sans leading-relaxed text-lg max-w-4xl" style={{letterSpacing: '0.10em', ...textGradientStyle}}>
          At GAMERS TAG, our mission goes far beyond building a gaming platform, we are on a mission to transform the way the entire gaming world connects, grows, and thrives. We aim to increase the market cap of the gaming industry by 10x in the next five years by expanding its horizons and bringing every voice in gaming closer to opportunity. We are in pursuit for bringing multiple impactful features tailored for each stakeholder in the industry, unlocking the full potential of every individual, team, and brand within the gaming ecosystem. We’re not just building an app,  we’re building the world’s biggest, most inclusive and exclusive gaming universe. 
          <br/><br/>
          For our B2C users especially  gamers, esports athletes, fans, streamers, creators, developers, organizers, analysts, and tech talents, our mission is to unlock growth, income, and recognition. We want to multiply opportunities, open new revenue streams, and create spaces where individuals can build personal brands, engage with real communities, and turn their love for gaming into a profession. From brining grassroot esports players to global stage, giving creators wider reach, to promoting streamers add more spotlight, to offering game developers a stage for feedback and discovery.  GAMERS TAG is built for every player in the game. It’s a platform where anyone can shine, where dreams become careers, and where the gaming community finds its heartbeat.
          <br/><br/>
For our B2B , Our mission is to build the most effective pipeline for global brands to effortlessly invest and tap into the gaming sector and easily elavate brand engagement. We aim to be the ultimate bridge between gaming and the world of business, whether it’s small gaming teams, esports organizations, game developers, tech brands, consumer brands, or publishers. We enable brands to engage with deeply authentic gaming audiences, collaborate with esports teams, and gain impactful visibility through strategic collaborations. GAMERS TAG will simplify networking, fuel endorsements, and help rising stars reach global stages  all while growing the culture and business of gaming.            <br/><br/>
            {/* GAMERS TAG isn't just a product — it's a movement. A movement to foster inclusivity, elevate voices that have long been underrepresented, and bring the fragmented corners of the gaming world into one thriving, unified space. We're here to change the game — for good. */}
          </p>
        </div>
        <div className="mt-12 border-b border-red-800 w-full"></div>
      </section>

      {/* Our Vision Section */}
      <section className="py-6 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
        <div className="border-l-8 pl-4 mb-8 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
        <h2 className="text-3xl font-sans font-normal"  style={{letterSpacing: '0.02em'}}>
              Our Vision</h2>
          </div>
          <p className="font-sans leading-relaxed text-lg max-w-4xl" style={{letterSpacing: '0.10em', ...textGradientStyle}}>
          Our vision to be the world’s leading platform that transforms the gaming ecosystem by empowering gamers, esports athletes, creators, and streamers with limitless opportunities. We envision a future where brands and organizations seamlessly connect with the gaming community, achieving unmatched engagement and impact. Through continuous innovation, strong partnerships, and a commitment to excellence, we aim to set the gold standard for esports and gaming, driving its growth as the most dynamic and influential industry globally.            {/* <br/><br/>
            In this future, GAMERS TAG becomes the heartbeat of the gaming community — a central hub where passion meets purpose, where careers are launched, friendships are formed, and groundbreaking ideas are nurtured. We aim to foster an environment where opportunities are not limited by geography, resources, or background, but are abundant, inclusive, and accessible to everyone — from aspiring young gamers to elite professionals, from indie developers to global studios.
            <br/><br/>
            Our vision is one where innovation is not just encouraged but embedded into the very DNA of our platform. We aspire to continually push the boundaries of technology, creativity, and connectivity, setting new benchmarks for user experience, community engagement, and industry standards. Whether it's through AI-powered matchmaking, immersive storytelling, or decentralized economies, GAMERS TAG is committed to leading the next wave of innovation in gaming.
            <br/><br/>
            Ultimately, we are building a future where GAMERS TAG is synonymous with empowerment, excellence, and evolution — a place where dreams take root, talent is recognized, and the full potential of the gaming world is unleashed. */}
          </p>
        </div>
        <div className="mt-12 border-b border-red-800 w-full"></div>
      </section>

      {/* We Are Proud Of Section with styled cards */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
        <div className="border-l-8 pl-4 mb-8 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
        <h2 className="text-3xl font-sans font-normal"  style={{letterSpacing: '0.02em'}}>
              We are proud of</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex flex-col" 
                style={{ 
                  background: index === activeSlide ? '#232323' : 'transparent',
                  padding: '20px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="h-px w-full mb-6" style={{ background: whiteGradient }}></div>
                <h3 className="text-6xl font-bold mb-4" 
                    style={{ 
                      background: redGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'monospace', 
                      letterSpacing: '2px', 
                      textShadow: '0 0 1px rgba(255,255,255,0.1)',
                      display: 'inline-block'
                    }}>
                  {achievement.title}
                </h3>
                <div className="text-left">
                  <p className="font-medium mb-1" style={{letterSpacing: '0.02em'}}>{achievement.subtitle}</p>
                  <p className="text-sm leading-relaxed" style={textGradientStyle}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}