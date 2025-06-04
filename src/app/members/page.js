'use client'

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function TeamMembersPage() {
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

  // Background gradients for cards - new design
  const normalCardBackground = 'linear-gradient(180deg, #F0F0F0 30%, #C0C0C0 50%, #808080 70%, #404040 85%, #000000 100%)';
const hoverCardBackground = 'linear-gradient(180deg, rgba(220, 53, 69, 0.3) 0%, rgba(220, 53, 69, 0.5) 50%, rgba(220, 53, 69, 0.7) 100%)';
const hoverLowerBackground = 'linear-gradient(to bottom, #DE2234, #BB0130)';
  // Team members data - all using the same PNG
  const teamMembers = [
    { id: 1, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 2, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 3, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 4, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 5, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 6, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 7, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 8, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' },
    { id: 9, name: 'JOSHUA J KANATT JOSH', role: 'FOUNDER & CEO', image: '/member.png' }
  ];

  return (
    <div>
      <Head>
        <title>Team Members - GT Arena</title>
        <meta name="description" content="Meet our expert team members at GT Arena" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header Section */}
        <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
          <h1 className="text-5xl font-medium font-sans uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>
            TEAM MEMBERS
          </h1>
          <p style={{ letterSpacing: '0.10em', ...textGradientStyle }} className="text-lg leading-relaxed max-w-4xl mx-auto">
            Full Headlinehere , ers, which appeared at the end of the 194ers, which 
            <br/>
            appeared at the end of thech appeared at the end of the 194
          </p>
        </header>

        {/* Red Separator */}
        <div className="mb-12 border-1 border-red-800 w-full"></div>

        {/* Team Members Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-gray-600 rounded-lg"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === member.id ? hoverCardBackground : normalCardBackground,
                boxShadow: hoveredCard === member.id 
                  ? '0 20px 40px rgba(222, 34, 52, 0.3), 0 0 30px rgba(222, 34, 52, 0.2)' 
                  : '0 10px 25px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-70 flex items-center justify-center p-6">
                <div className="relative w-56 h-70 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    // className={`object-contain transition-all duration-300 ${
                    //   hoveredCard === member.id ? 'brightness-110 contrast-110' : 'brightness-100'
                    // }`}
                    // className="h-40"
                    
                    sizes="192px"
                  />
                </div>
              </div>

              {/* Lower Plate with Name and Role */}
              <div className="w-full h-20 flex flex-col items-center justify-center px-4 relative">
                {/* Overlay for better text readability */}
                <div 
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: hoveredCard === member.id 
                      ? 'rgba(222, 34, 52, 0.85)' 
                      : 'rgba(0, 0, 0, 0.6)'
                  }}
                ></div>
                
                <div className="text-center relative z-10">
                  <h3 
                    className="text-m font-normal mb-1 transition-all duration-300 text-white"
                    style={{ 
                      letterSpacing: '0.10em',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-xs font-normal transition-all duration-300 text-gray-200"
                    style={{ 
                      letterSpacing: '0.05em',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {member.role}
                  </p>
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