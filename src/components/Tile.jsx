// Gamers Tag Tile Section
function GamersTagTile() {
  const GLogoSVG = () => (
    <svg width="180" height="110" viewBox="0 0 180 117" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M59.8052 87.2953L24.8283 0H0L34.7596 87.2953H34.77L45.6073 117H95.1775H123.475L123.476 116.997L149.647 62.5738L158.526 44.8601H64.2023L73.1591 67.4922H119.035L109.491 87.2953H59.8052ZM180 0L168.164 25.057H56.3755L46.341 0H180Z" fill="url(#paint0_linear_90_1855)"/>
      <defs>
        <linearGradient id="paint0_linear_90_1855" x1="89.958" y1="0" x2="89.958" y2="117" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#999999"/>
        </linearGradient>
      </defs>
    </svg>
  );

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

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Blue border container */}
        <div className="border-2 border-gray-600 py-6 bg-black  rounded-lg">
          <div className="flex items-center justify-center overflow-hidden">
            {/* Repeating pattern */}
            <div className="flex items-center space-x-8 animate-scroll">
              {/* First set */}
              <div className="flex items-center space-x-8 whitespace-nowrap">
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
                <GLogoSVG />
                <span className="text-white text-4xl font-medium tracking-wider" style={{letterSpacing: '0.05em', ...textGradientStyle}}>GAMERS TAG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default GamersTagTile;