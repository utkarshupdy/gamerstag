'use client'

'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function OurMentorsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Gradient styles matching the GT Arena theme
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

  // Mentors data
  const mentors = [
    { id: 1, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/mentor.png' },
    { id: 2, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 3, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 4, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 5, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 6, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 7, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 8, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' },
    { id: 9, name: 'DARLENE ROBERTSON', role: 'WEB DESIGNER', image: '/mentor.png' }
  ];

  return (
    <div>
      <main >
        {/* Header Section */}
        {/* <div className="pt-12 mb-8">
          <div className="border-l-8 pl-6 mb-8 h-17" style={{ borderColor: '#BB0130' }}>
            <h2 className="text-3xl font-medium font-sans mb-1" style={{ letterSpacing: '0.05em' }}>
              We GAMERS TAG
            </h2>
            <h2 className="text-xl font-normal font-sans mb-6" style={{ letterSpacing: '0.05em' }}>
              PRIVATE LIMITED INDIA
            </h2>
          </div>
        </div> */}
         <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
        <h1 className="text-5xl font-medium font-sans uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>
          OUR MENTORS
        </h1>
        <p style={{ letterSpacing: '0.10em', ...textGradientStyle }} className="text-lg leading-relaxed max-w-4xl mx-auto">
           Full Headlinehere , ers, which appeared at the end of the 194ers, which 
           <br/>
           appeared at the end of thech appeared at the end of the 194
        </p>
        
      </header>
      <div className=" mb-12 border-1 border-red-800 w-full"></div>


        {/* Red Separator */}
        {/* <div className="mt-12 border-b border-red-800 w-full mb-12"></div> */}

        {/* Mentors Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredCard(mentor.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative w-full h-95">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredCard === mentor.id ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{ background: redGradient }}
                ></div>
              </div>

              {/* Name and Role Section */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredCard === mentor.id ? 'text-white' : 'text-gray-300'
                }`}
                style={{
                  background: hoveredCard === mentor.id 
                    ? redGradient 
                    : 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8))',
                  minHeight: '111px',
                  width: '376px',
                  maxWidth: '100%'
                }}
              >
                <div className="text-center">
                  <h3 
                    className="text-lg font-bold mb-1" 
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {mentor.name}
                  </h3>
                  <p 
                    className="text-sm font-medium" 
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {mentor.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Red Separator */}
       <div className="  border-1 border-red-800 w-full"></div>
      </main>

      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p style={textGradientStyle}>
            © {new Date().getFullYear()} GT Arena. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}