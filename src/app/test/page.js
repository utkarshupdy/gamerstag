'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Settings,
  MessageCircle,
  Trophy,
  User,
  ShoppingBag
} from 'lucide-react';

const GamingHeroSection = () => {
  const [hoveredRoute, setHoveredRoute] = useState(null);

  const routes = [
    { id: 1, name: 'Home', icon: Home, path: '/' },
    { id: 2, name: 'About Us', icon: Settings, path: '/about' },
    { id: 3, name: 'Terms and Conditions', icon: MessageCircle, path: '/tnc' },
    { id: 4, name: 'GT Arena', icon: Trophy, path: '/arena' },
    { id: 5, name: 'Team Members', icon: User, path: '/members' },
    { id: 6, name: 'Mentors', icon: MessageCircle, path: '/mentors' },
    { id: 7, name: 'Support Games', icon: ShoppingBag, path: '/sgames' },
    { id: 8, name: 'About App', icon: Settings, path: '/abap' },
    { id: 9, name: 'Contact Us', icon: MessageCircle, path: '/contact' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/main.png"
          alt="Gaming Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Sidebar */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col backdrop-blur-md bg-black/20 space-y-3 p-3 rounded-xl">
          {routes.map((route, index) => {
            const IconComponent = route.icon;
            return (
              <Link key={route.id} href={route.path}>
                <div
                  className={`
                    group relative cursor-pointer transition-all duration-500 ease-out
                    ${hoveredRoute === route.id ? 'scale-105' : 'scale-100'}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInRight 0.8s ease-out forwards'
                  }}
                  onMouseEnter={() => setHoveredRoute(route.id)}
                  onMouseLeave={() => setHoveredRoute(null)}
                >
                  {/* Route Item */}
                  <div className={`
                    flex items-center justify-between p-4 rounded-xl backdrop-blur-md
                    transition-all duration-300 ease-out border border-white/10
                    ${hoveredRoute === route.id 
                      ? 'bg-gradient-to-r from-lime-400/20 to-emerald-400/20 border-lime-400/30 shadow-2xl shadow-lime-400/20' 
                      : 'bg-black/20 hover:bg-black/30'
                    }
                  `}>
                    {/* Icon */}
                    <div className={`
                      p-2 rounded-lg transition-all duration-300
                      ${hoveredRoute === route.id 
                        ? 'bg-lime-400 text-black' 
                        : 'bg-white/10 text-white'
                      }
                    `}>
                      <IconComponent size={20} />
                    </div>

                    {/* Route Name */}
                    <span className={`
                      font-jost text-lg font-semibold ml-4 transition-all duration-300
                      ${hoveredRoute === route.id 
                        ? 'text-lime-400' 
                        : 'text-white'
                      }
                    `}>
                      {route.name}
                    </span>

                    {/* Arrow Icon */}
                    <ChevronRight 
                      className={`
                        ml-4 transition-all duration-300
                        ${hoveredRoute === route.id 
                          ? 'text-lime-400 transform translate-x-1' 
                          : 'text-white/70'
                        }
                      `}
                      size={18}
                    />
                  </div>

                  {/* Hover Line */}
                  <div className={`
                    absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-lime-400 to-emerald-400 rounded-full
                    transition-all duration-300 ease-out
                    ${hoveredRoute === route.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
                  `}></div>

                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-xl transition-all duration-300
                    ${hoveredRoute === route.id 
                      ? 'shadow-2xl shadow-lime-400/20 animate-pulse' 
                      : ''
                    }
                  `}></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-1 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

        .font-jost {
          font-family: 'Jost', sans-serif;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GamingHeroSection;
