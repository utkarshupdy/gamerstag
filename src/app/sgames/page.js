'use client'

import { useState } from 'react';
import Image from 'next/image';
// import Router from 'next/router';
import { useRouter } from 'next/navigation';

export default function SupportedGamesPage() {
    const router = useRouter();
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

  // Games data - using game images from public folder
  const games = [
    { id: 1, name: 'PUBG MOBILE', role: 'BATTLE ROYALE', image: '/game.png' },
    { id: 2, name: 'FREE FIRE', role: 'BATTLE ROYALE', image: '/game.png' },
    { id: 3, name: 'CALL OF DUTY', role: 'SHOOTER GAME', image: '/game.png' },
    { id: 4, name: 'VALORANT', role: 'TACTICAL SHOOTER', image: '/game.png' },
    { id: 5, name: 'FORTNITE', role: 'BATTLE ROYALE', image: '/game.png' },
    { id: 6, name: 'APEX LEGENDS', role: 'BATTLE ROYALE', image: '/game.png' },
    { id: 7, name: 'COUNTER STRIKE', role: 'TACTICAL SHOOTER', image: '/game.png' },
    { id: 8, name: 'ROCKET LEAGUE', role: 'SPORTS GAME', image: '/game.png' },
    { id: 9, name: 'OVERWATCH', role: 'HERO SHOOTER', image: '/game.png' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <main>
        {/* Header Section */}
        <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
          <h1 className="text-5xl font-medium font-sans uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>
            Supported Games by us
          </h1>
          <p style={{ letterSpacing: '0.10em', ...textGradientStyle }} className="text-lg leading-relaxed max-w-4xl mx-auto">
            Full Headlinehere, ers, which appeared at the end of the 194ers, which
            <br/>
            appeared at the end of thech appeared at the end of the 194
          </p>
        </header>

        {/* Red Separator */}
        <div className="border-2 border-red-800 w-full mb-12"></div>

        {/* Game Details Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          {/* Game Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-sans font-medium text-white mb-8" style={{ letterSpacing: '0.10em' , ...textGradientStyle }}>
              GAME NAMEGAME NAME NAME
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Game Information */}
            <div className="flex-1">
              {/* Publisher Name */}
              <div className="mb-6">
                <div className="border-l-8 pl-4 mb-2 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
                  <h3 className="text-xl font-sans font-medium text-white" style={{ letterSpacing: '0.02em' }}>
                    Publisher name 
                  </h3>
                </div>
                <p style={textGradientStyle} className="text-base font-light ml-4">
                  Krafton Mobile India
                </p>
              </div>

              {/* Game Linked Date */}
              <div className="mb-6">
                <div className="border-l-8 pl-4 mb-2 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
                  <h3 className="text-xl font-sans font-medium text-white" style={{ letterSpacing: '0.02em' }}>
                    Game Linked on GT 
                  </h3>
                </div>
                <p style={textGradientStyle} className="text-base font-light ml-4">
                  12 Jan 2022
                </p>
              </div>

              {/* Platform Features */}
              <div className="mb-6">
                <div className="border-l-8 pl-4 mb-2 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
                  <h3 className="text-xl font-sans font-medium text-white" style={{ letterSpacing: '0.02em' }}>
                    Our platform features 
                  </h3>
                </div>
                <p style={textGradientStyle} className="text-base font-light ml-4">
                  You can add game accounts, You can link game accounts, create tournaments, join the game Tournaments
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <div className="border-l-8 pl-4 mb-2 h-12 flex items-center" style={{ borderColor: '#BB0130' }}>
                  <h3 className="text-xl font-sans font-medium text-white" style={{ letterSpacing: '0.02em' }}>
                    Description 
                  </h3>
                </div>
                <p style={textGradientStyle} className="text-base font-light ml-4 leading-relaxed">
                  Battlegrounds Mobile India is previously known as PUBG Mobile India. It is an online multiplayer battle royale game by Krafton that is in development. PUBG Mobile available in India. It is an online multiplayer battle royale game for mobile platforms developed by Krafton
                </p>
              </div>
            </div>

            {/* Right side - Game Screenshots */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <Image
                  src="/game.png"
                  alt="Game Screenshots"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium">
                  03
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Games Grid Section */}
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
              // onClick={() => router.push(`/game?id=${game.id}`)}
              onMouseEnter={() => setHoveredCard(game.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative w-full h-80">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Red Overlay on hover */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredCard === game.id ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{ background: redGradient }}
                ></div>
              </div>

              {/* Game Name and Genre Section */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredCard === game.id ? 'text-white' : 'text-gray-300'
                }`}
                style={{
                  background: hoveredCard === game.id 
                    ? redGradient 
                    : 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8))',
                  minHeight: '111px',
                  width: '100%'
                }}
              >
                <div className="text-center">
                  <h3 
                    className="text-lg font-bold mb-1" 
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {game.name}
                  </h3>
                  <p 
                    className="text-sm font-medium mb-3" 
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {game.role}
                  </p>
                  <button 
                    onClick={() => router.push(`/igame/${game.id}`)}
                    className="px-4 py-2 text-sm font-medium border border-white hover:bg-white hover:text-black transition-all duration-300 rounded"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Red Separator */}
        <div className="border-1 border-red-800 w-full"></div>
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