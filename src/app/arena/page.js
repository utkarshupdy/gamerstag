'use client'
import { useState } from 'react';
import Head from 'next/head';
import Button from '@/components/Button2';

// Button Component
// const Button = ({ children, onClick }) => {
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
// };

export default function GTArenaPage() {
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

  // Section component for reuse
  const Section = ({ title, subtitle, description, quote }) => {
    // Split the title to separate "Tournament" from the rest
    const isTournamentTitle = title.startsWith('Tournament');
    const titleParts = isTournamentTitle ? ['Tournament ', title.substring(11)] : [title];

    return (
      <>
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-16" style={{ background: redGradient }}></div>
              <div className="ml-4">
                <h3 className="text-3xl font-medium mb-0" style={{ letterSpacing: '0.07em' }}>
                  {/* Render "Tournament" in white */}
                  {isTournamentTitle && <span className="text-white">{titleParts[0]}</span>}
                  {/* Render the rest of the title with gradient */}
                  {isTournamentTitle ? 
                    <span className="text-3xl font-light mb-0" style={{ color: '#CCCCCC' }}>
                    {titleParts[1]}
                  </span>
                  : 
                    <span className="text-white">{title}</span>}
                </h3>
                <div className="mt-1">
                  {subtitle && <p className="text-gray-400" style={{ letterSpacing: '0.05em' }}> {subtitle}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 bg-black bg-opacity-40 p-6 rounded">
  {quote && (
    <p className="text-2xl font-light mb-4 text-white" style={{ letterSpacing: '0.10em' }}>
      &quot; {quote} &quot;
    </p>
  )}
  <p className="text-gray-300  text-light leading-relaxed" style={{ letterSpacing: '0.18em' }}>
    {description}
  </p>
</div>

        </div>
        <div className="w-full h-1" style={{ background: redGradient }}></div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>GT Arena - Esports Tournament Hosting</title>
        <meta name="description" content="All in one esports tournament hosting platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section with 3 lines - small, big, small */}
        <div className="text-center mb-12 pt-12">
          <p className="text-sm text-light tracking-wider mb-3" style={{ letterSpacing: '0.20em' , ...textGradientStyle}}>YOUR PLATFORM YOU HOST IT, WE GOT YOUR BACK</p>
          <br/>
          <h1 className="text-5xl font-meduim tracking-wide mb-3" style={{ letterSpacing: '0.08em'}}>WELCOME TO GT ARENA</h1>
          <p className="text-sm tracking-wider"style={{ letterSpacing: '0.10em' , ...textGradientStyle}}>
          READY TO EASIEST AND THE BIGGEST ESPORTS TOURNAMENT HOSTING PLATFORM 
          <br/>
          WITH WORLD CLASS FEATURES
          </p>
        </div>

        {/* Red Separator */}
        <div className="w-full h-1" style={{ background: redGradient }}></div>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/2 bg-blue-900/30 rounded-lg overflow-hidden">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230315/pngtree-sci-fi-city-car-cyberpunk-blue-background-image_1948138.jpg"
              alt="Tournament Visual"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-start mb-4">
              <div className="w-3 h-17" style={{ background: redGradient }}></div>
              <div className="ml-4">
                <h2 className="text-4xl font-medium"  style={{ letterSpacing: '0.20em'}}>Hello!</h2>
                {/* <br/> */}
                <p className="text-white text-lg"  style={{ letterSpacing: '0.25em'}}>Brand, Campus or Organizations</p>
              </div>
            </div>
            <p className="mb-4" style={{ letterSpacing: '0.07em', ...textGradientStyle }}>
  Looking for the best way to attract gamers for your brand? Build a World-class virtual stadium to host professional esports tournaments effortlessly with 
  <span className="text-white font-bold"> GAMERS TAG’s Pro SaaS Esports Tournament </span>
  hosting. Meet one of the world’s best esports tournament hosting platforms, this advanced SaaS features host you end-to-end tournaments seamlessly, ensuring that every participant experiences the thrill of competition in a virtual stadium tailored just for them. You’ve got the warriors and hunters, and we bring you the ultimate battleground for your organization. Picture the whole world in your virtual stadium, united with tailored features for every stakeholder such as creators, organizers, streamers, esports athletes, gamers, sponsors, fans, and public users.
</p>

          </div>
        </div>

        {/* All-in-One Section */}
        <div className="text-center my-12">
          <h2 className="text-4xl font-light mb-1" style={{ letterSpacing: '0.10em' }}>ALL IN ONE ESPORTS TOURNAMENT HOSTING</h2>
          <p className="text-gray-300 mt-2" style={textGradientStyle}>
          "Why juggle multiple platforms when you can do it all in one ? Welcome to the future of laziness!"          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <Button>Host Now</Button>
            <Button>We Host For You</Button>
          </div>
        </div>

        <div className="w-full h-1" style={{ background: redGradient }}></div>

        {/* Features Sections using the reusable Section component */}
        <Section 
          title="Tournament Creation" 
          subtitle="& Publishing" 
          quote="Simplify. Customize. Dominate."
          description="With our platform, Launching A professional esports tournaments is so easy with few clicks. We have Tailor settings for each game to match your vision, whether it's a single day event or a multi-day battle. Start out your game settings and prepare a welcome participants into an expertly crafted Virtual Stadium from your brand."
        />

        <Section 
          title="Tournament" 
          subtitle="Registration"
          quote="Effortless sign-ups. Unlimited possibilities."
          description="Our advanced registration features enhance the user experience, making it simple for participants to join your tournament. With various options like open registrations, invite-only events and request/accept feature, Each section is designed to ensure that signing up is easy and enjoyable, making your tournament accessible while maintaining control over who competes."
        />

        <Section 
          title="Tournament Managing" 
          subtitle="& Organizing"
          quote="Finally! Your tournament, perfectly organized."
          description="Take full command of your tournament structure with our powerful management and backend tools designed for precision, flexibility, and real-time efficiency. From assigning participants to handling brackets and resolving ties, every operation is supported by intelligent automation. You can manage seeding, automate match pairings, apply advanced tie-breaker rules, and make schedule adjustments without disrupting the flow of the tournament."
        />

        <Section 
          title="Tournament" 
          subtitle="Communication"
          quote="Enjoy the fastest and gamified communication: Chat Features"
          description="Communication is the heartbeat of any tournament, and GT Arena ensures it flows seamlessly. With our integrated chat and messaging ecosystem, players, teams, and admins can connect instantly and meaningfully. Dedicated chat channels are created for each team, match, and tournament-wide announcement, allowing you to keep conversations organized and focused."
        />

        <Section 
          title="Tournament Streams" 
          subtitle="and Records"
          quote="You capture every moment. Each Win counts!"
          description="Your tournament deserves the spotlight, and GT Arena ensures it shines across all major streaming platforms. Seamlessly broadcast your matches live using built-in integrations with OBS, Twitch, YouTube, and more. Every moment—from opening rounds to final victories—is captured with optional overlays, team banners, and live commentary tools."
        />

        <Section 
          title="Tournament" 
          subtitle="Awards"
          quote="Showcase every achievement. Celebrate true greatness."
          description="Recognizing player performance is more than just handing out trophies—it's about storytelling and motivation. With GT Arena's award system, you can honor every type of achievement, from the tournament champions to the best comeback, most strategic play, or community favorite. Customize badges, digital trophies, and leaderboard shoutouts that automatically sync with participant profiles."
        />

        <Section 
          title="Tournament" 
          subtitle="Matches"
          quote="Get the future glimpse of matches - brackets"
          description="Navigate your tournament visually and intuitively through our dynamic bracket system, built to provide a clear roadmap for participants and viewers alike. Whether it's single elimination, double elimination, Swiss, or round-robin, the bracket layout updates in real-time with match results and player progress. Participants can view their upcoming matches, opponent profiles, match times, and results at a glance."
        />
      </main>

      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p style={textGradientStyle}>© {new Date().getFullYear()} GT Arena. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
