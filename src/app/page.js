// pages/index.js

'use client'
// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SubmitButton from '@/components/Button';

export default function Home() {
  const [activeButton, setActiveButton] = useState(null);

  // Button hover effect handler
  const handleButtonHover = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <Head>
        <title>Gamers Tag - Your Gaming Community</title>
        <meta name="description" content="Join the ultimate gaming community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SubmitButton /> */}

      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

      <main className="flex flex-col items-center justify-center text-center z-10">
        {/* Logo Area */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <h1 className="text-6xl md:text-8xl font-bold text-white relative z-10 tracking-tight">
            GAMERS <span className="text-red-500">TAG</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 relative">
          Visit the Ultimate Gamers Tag Webpages
        </p>

        {/* Red divider line */}
        <div className="w-24 h-1 bg-red-600 mb-12"></div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mt-4">
          <Link href="/about" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'about' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('about')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-xl font-bold tracking-wide">ABOUT US</span>
              </div>
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'contact' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('contact')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-xl font-bold tracking-wide">CONTACT US</span>
              </div>
            </div>
          </Link>

          <Link href="/arena" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-xl font-bold tracking-wide">GT ARENA</span>
              </div>
            </div>
          </Link>
          <Link href="/tnc" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-2xl font-bold tracking-wide">TnC</span>
              </div>
            </div>
          </Link>
          <Link href="/abap" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-2xl font-bold tracking-wide">About App</span>
              </div>
            </div>
          </Link>

          <Link href="/members" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-2xl font-bold tracking-wide">Team Members</span>
              </div>
            </div>
          </Link>
          <Link href="/mentors" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-2xl font-bold tracking-wide">Mentors</span>
              </div>
            </div>
          </Link>
          <Link href="/sgames" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-2xl font-bold tracking-wide">Support Games</span>
              </div>
            </div>
          </Link>
          <Link href="/igames" passHref>
            <div
              className={`
                relative group cursor-pointer transform transition-all duration-300
                ${activeButton === 'arena' ? 'scale-105' : 'hover:scale-105'}
              `}
              onMouseEnter={() => handleButtonHover('arena')}
              onMouseLeave={() => handleButtonHover(null)}
            >
              <div 
                className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                  opacity-75 transition duration-300 group-hover:opacity-100 group-hover:blur-sm
                `}
              ></div>
              <div className="relative bg-black/90 text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center h-full border border-red-800/50">
                <div className="w-1 h-8 bg-red-600 absolute left-0 top-6"></div>
                <span className="text-2xl font-bold tracking-wide">Individual Games Details</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to action */}
        <div className="mt-16 mb-6">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            JOIN NOW
          </button>
        </div>

        {/* Footer element */}
        <div className="mt-8 w-full max-w-md">
          <div className="border-t border-red-800/30 pt-6">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Gamers Tag. All rights reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
}