'use client'

import { useState, useEffect } from 'react';
import { useParams  } from 'next/navigation';
import Image from 'next/image';

export default function GamePage() {
  // const searchParams = useSearchParams();
  const params = useParams();
  const id = params.id;
  // const id = searchParams.get('id');

  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 23,
    minutes: 59,
    seconds: 50
  });

  const redGradient = 'linear-gradient(to bottom, #DE2234, #BB0130)';
  const whiteGradient = 'linear-gradient(to bottom, #FFFFFF, #999999)';

  const textGradientStyle = {
    background: whiteGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'white',
    display: 'inline-block'
  };

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

  const currentGame = games.find(game => game.id === parseInt(id));
  const gameName = currentGame ? currentGame.name : 'GAME NAME FULL NAME FULL';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <main>
        <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
          <h1 className="text-5xl font-medium font-sans uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>
            Supported Games by us
          </h1>
          <p style={{ letterSpacing: '0.10em', ...textGradientStyle }} className="text-lg leading-relaxed max-w-4xl mx-auto">
            Full Headlinehere, ers, which appeared at the end of the 194ers, which
            <br />
            appeared at the end of thech appeared at the end of the 194
          </p>
        </header>

        <div className="border-2 border-red-800 w-full mb-12"></div>

        <div className="max-w-6xl mx-auto px-4 mb-12 h-100">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-xl font-light mb-3" style={{ letterSpacing: '0.20em' }}>
                  Coming soon
                </h2>
                <h2 className="text-4xl font-sans font-medium text-white mb-8 -ml-1" style={{ letterSpacing: '0.10em', ...textGradientStyle }}>
                  {gameName}
                </h2>
              </div>

              {/* 🎯 UPDATED TIMER UI */}
              <br/>
              <br/>
              <br/>
              <div className="mb-8 ">
                <div className=" p-4 flex justify-center gap-10 -ml-60">
                  {/* Day */}
                  <div className="flex flex-col items-center min-w-[80px]">
                    <div className="text-[4rem] font-light mb-1 leading-none -mr-4" style={textGradientStyle}>
                      {timeLeft.days.toString().padStart(3, '0')}
                    </div>
                    <div className="text-sm uppercase tracking-wider" style={textGradientStyle}>
                      day
                    </div>
                  </div>
                   <div className="text-[4rem] font-light leading-none -mt-2" style={textGradientStyle}>:</div>
                  

                  {/* Hour */}
                  <div className="flex flex-col items-center min-w-[80px] -ml-4 -mr-4">
                    <div className="text-[4rem] font-light mb-1 leading-none" style={textGradientStyle}>
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase tracking-wider" style={textGradientStyle}>
                      hr
                    </div>
                  </div>
                  <div className="text-[4rem] font-light leading-none -mt-2" style={textGradientStyle}>:</div>

                  {/* Minute */}
                  <div className="flex flex-col items-center min-w-[80px] -ml-4 -mr-4">
                    <div className="text-[4rem] font-light mb-1 leading-none" style={textGradientStyle}>
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase tracking-wider" style={textGradientStyle}>
                      min
                    </div>
                  </div>
                  <div className="text-[4rem] font-light leading-none -mt-2" style={textGradientStyle}>:</div>

                  {/* Second */}
                  <div className="flex flex-col items-center min-w-[80px] -ml-4 -mr-4">
                    <div className="text-[4rem] font-light mb-1 leading-none" style={textGradientStyle}>
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase tracking-wider" style={textGradientStyle}>
                      sec
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Game image */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <Image
                  src="/game.png"
                  alt="Game Screenshots"
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-50"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium">
                  03
                </div>
              </div>
            </div>
          </div>
        </div>

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
