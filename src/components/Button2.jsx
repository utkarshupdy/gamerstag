'use client'
// import { useState } from 'react';

// export default function Button({ children, onClick }) {
//   const [isHover, setIsHover] = useState(false);
  
//   // Linear gradient styles
//   const redGradient = 'linear-gradient(to bottom, #DE2234, #BB0130)';
//   const hoverRedGradient = 'linear-gradient(to bottom, #FF3345, #D10232)';

//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//       className="px-8 py-3 rounded-md font-bold transition-all duration-300"
//       style={{
//         background: isHover ? hoverRedGradient : redGradient,
//       }}
//     >
//       {children}
//     </button>
//   );
// }

import { useState } from 'react';

export default function Button({ children, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative" style={{ width: '352.48px' }}>
      {/* Outer container with white border */}
      <div>
        {/* Button with linear gradient */}
        <button
          className="w-full text-white font-normal flex items-center justify-center transition-all duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            height: '50px',
            fontFamily: 'Jost, sans-serif',
            fontWeight: isHovered ? 'lighter' : 'normal',
            fontSize: '18px',
            letterSpacing: '20%',
            background: isHovered 
              ? 'linear-gradient(to bottom, #c51b2b, #a5012a)' // slightly darker on hover
              : 'linear-gradient(to bottom, #DE2234, #BB0130)'
          }}
        >
          {children}
        </button>
      </div>
    </div>
  );
}