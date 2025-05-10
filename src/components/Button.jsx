import { useState } from 'react';

export default function SubmitButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative" style={{ width: '352.48px' }}>
      {/* Outer container with white border */}
      <div className="border border-white p-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
        {/* Button with linear gradient */}
        <button
          className="w-full text-white font-normal flex items-center justify-center transition-all duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            height: '49px',
            fontFamily: 'Jost, sans-serif',
            fontSize: '18px',
            letterSpacing: '20%',
            background: isHovered 
              ? 'linear-gradient(to bottom, #c51b2b, #a5012a)' // slightly darker on hover
              : 'linear-gradient(to bottom, #DE2234, #BB0130)'
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}