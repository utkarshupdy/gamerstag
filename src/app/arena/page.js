'use client'

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

 export default function Home() {
  const [hostNowHover, setHostNowHover] = useState(false);
  const [weHostHover, setWeHostHover] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>GT Arena - Esports Tournament Hosting</title>
        <meta name="description" content="All in one esports tournament hosting platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-12">
          <h1 className="text-4xl font-bold tracking-wide mb-3">WELCOME TO GT ARENA</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            YOUR COMPREHENSIVE SOLUTION FOR HOSTING, MANAGING, AND PARTICIPATING IN TOURNAMENTS
            WITH MAXIMUM EXCITEMENT
          </p>
        </div>

        {/* Red Separator */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/2 bg-blue-900/30 rounded-lg overflow-hidden">
            {/* Placeholder for the blue texture background */}
            <img
      src="https://png.pngtree.com/thumb_back/fh260/background/20230315/pngtree-sci-fi-city-car-cyberpunk-blue-background-image_1948138.jpg" // <-- Replace this with your actual image path or URL
      alt="Tournament Visual"
      className="h-full w-full object-cover"
    />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h2 className="text-2xl font-bold">Hello!</h2>
                <p className="text-gray-400">Brand, Campus or Organization</p>
              </div>
            </div>
            <p className="text-gray-300">
            GT Arena is your comprehensive tournament hosting solution. Whether you&apos;re planning a small friendly competition or a major league event, we&apos;ve got you covered with robust tools that streamline every aspect of tournament management—from registrations and scheduling to results tracking and leaderboard generation.            </p>
            <p className="text-gray-300 mb-4">
            Our platform enables you to create, manage, and participate in tournaments with ease, letting you focus on what truly matters—the thrill of the game and the spirit of competition. Whether you&apos;re a student club, gaming community, or a professional esports organization, GT Arena adapts to your needs with flexible configuration and scalable performance.            </p>
            <p className="text-gray-300">
            Join us in revolutionizing the world of competitive gaming—where technology meets teamwork, and every match brings players closer to greatness.  </p>
          </div>
        </div>

        {/* All-in-One Section */}
        <div className="text-center my-12">
          <h2 className="text-3xl font-bold mb-6">ALL IN ONE ESPORTS TOURNAMENT HOSTING</h2>
          <div className="border-t-2 border-white my-8"></div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              className={`px-8 py-3 rounded-md font-bold transition-colors duration-300 ${
                hostNowHover ? 'bg-red-600' : 'bg-red-500'
              }`}
              onMouseEnter={() => setHostNowHover(true)}
              onMouseLeave={() => setHostNowHover(false)}
            >
              Host Now
            </button>
            <button
              className={`px-8 py-3 rounded-md font-bold transition-colors duration-300 ${
                weHostHover ? 'bg-red-600' : 'bg-red-500'
              }`}
              onMouseEnter={() => setWeHostHover(true)}
              onMouseLeave={() => setWeHostHover(false)}
            >
              We Host For You
            </button>
          </div>
        </div>
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Features Section */}
        {/* <div className="border-t-2 border-white/20 my-12"></div> */}

        {/* Tournament Creation Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament Creation</h3>
                <p className="text-gray-400">& Publishing</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&quot;Simplify. Customize. Dominate.&quot;</p>
            <p className="text-gray-300">
            Create tournaments in minutes with our intuitive and streamlined interface, carefully crafted to cater to all levels of organizers—from casual players to professional event coordinators. Whether you&apos;re planning a local e-sports night, a school or college-level championship, or a large-scale league, GT Arena gives you full flexibility and control. Easily customize rules, formats, team sizes, entry types, and more, ensuring that your tournament perfectly aligns with your competitive goals and community culture. Our platform supports a wide variety of game types, bracket styles, and scheduling formats, allowing you to personalize every aspect of the experience. With intelligent automation tools and user-friendly dashboards, organizing tournaments becomes not only efficient but also enjoyable. Every step is guided, from initial setup to the final leaderboard, so you can focus less on logistics and more on the competitive excitement.            </p>
          </div>
        </div>

        {/* <div className="border-t border-red-600/30 my-8"></div> */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Tournament Registration Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament</h3>
                <p className="text-gray-400">Registration</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&quot;Effortless sign-ups. Unlimited possibilities.&quot;</p>
            <p className="text-gray-300">
            Our advanced registration system simplifies the sign-up process while maintaining the flexibility you need to accommodate any kind of participant—be it individuals, teams, recurring users, or first-time guests. With options to register using integrated account logins or as temporary guest players, we ensure inclusivity without compromising security. Each registration goes through a verification layer to prevent duplicate entries and maintain fairness across all matchups. Administrators can easily track registrations, assign teams, and categorize participants based on ranks, regions, or qualifications. The system also supports pre-screening questionnaires, fee collection, and automated deadline reminders to enhance the professionalism of your tournament structure. With a strong foundation built during the registration phase, you’ll enjoy smoother tournament execution and optimized matchmaking outcomes.            </p>
          </div>
        </div>

        {/* <div className="border-t border-red-600/30 my-8"></div> */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Tournament Managing Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament Managing</h3>
                <p className="text-gray-400">& Organizing</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&quot;Finally! Your tournament, perfectly organized.&quot;</p>
            <p className="text-gray-300">
            Take full command of your tournament structure with our powerful management and backend tools designed for precision, flexibility, and real-time efficiency. From assigning participants to handling brackets and resolving ties, every operation is supported by intelligent automation. You can manage seeding, automate match pairings, apply advanced tie-breaker rules, and make schedule adjustments without disrupting the flow of the tournament. Conflicts are flagged and resolved with system suggestions, and admins can manually override decisions when necessary. Participants receive real-time updates via emails, in-platform alerts, and mobile notifications, ensuring they&apos;re always informed. The admin panel offers a clean, responsive interface to monitor live matches, reschedule games, and communicate with players—all without switching tabs or tools. Whether you&apos;re managing a single-elimination tournament or a complex round-robin format, GT Arena&apos;s organization tools scale with you.            </p>
          </div>
        </div>

        {/* <div className="border-t border-red-600/30 my-8"></div> */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Tournament Communication Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament</h3>
                <p className="text-gray-400">Communication</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&apos;Enjoy the fastest and gamified communication: Chat Features&apos;</p>
            <p className="text-gray-300">
            Communication is the heartbeat of any tournament, and GT Arena ensures it flows seamlessly. With our integrated chat and messaging ecosystem, players, teams, and admins can connect instantly and meaningfully. Dedicated chat channels are created for each team, match, and tournament-wide announcement, allowing you to keep conversations organized and focused. Our gamified features include reaction-based polls, resource sharing (like rulebooks or strategies), and live Q&A sessions, keeping engagement high. Admins can pin important messages, schedule announcements, or send automated match reminders directly into participant inboxes and chat threads. With optional moderation and flagging tools, all conversations remain respectful and competition-focused. Whether you&apos;re discussing strategies, clarifying rules, or celebrating a win, GT Arena makes sure everyone&apos;s voice is heard—clearly and quickly.

</p>
          </div>
        </div>

        {/* <div className="border-t border-red-600/30 my-8"></div> */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Tournament Streams Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament Streams</h3>
                <p className="text-gray-400">and Records</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&quot;You capture every moment. Each Win counts!&quot;</p>
            <p className="text-gray-300">
            Your tournament deserves the spotlight, and GT Arena ensures it shines across all major streaming platforms. Seamlessly broadcast your matches live using built-in integrations with OBS, Twitch, YouTube, and more. Every moment—from opening rounds to final victories—is captured with optional overlays, team banners, and live commentary tools. But we go further: our automated systems tag and highlight key moments such as game-winning plays, overtime clashes, or MVP performances, building a bank of memorable highlights you can share instantly. All streams and replays are archived and synced with match records, providing both players and spectators access to past games. These records include scores, stats, replays, and timelines, which are neatly displayed in each player or team&apos;s profile. Whether you&apos;re building a tournament legacy or creating content for your community, GT Arena makes it effortless and impactful.            </p>
          </div>
        </div>

        {/* <div className="border-t border-red-600/30 my-8"></div> */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Tournament Awards Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament</h3>
                <p className="text-gray-400">Awards</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&quot;Showcase every achievement. Celebrate true greatness.&quot;</p>
            <p className="text-gray-300">
            Recognizing player performance is more than just handing out trophies—it’s about storytelling and motivation. With GT Arena’s award system, you can honor every type of achievement, from the tournament champions to the best comeback, most strategic play, or community favorite. Customize badges, digital trophies, and leaderboard shoutouts that automatically sync with participant profiles. At the end of each tournament, the system auto-generates a recap highlighting top performers, match stats, and award recipients in a visually engaging format. These recognitions can be shared on social media, embedded in web pages, or printed as physical certificates. Cumulative awards also track long-term performance across multiple tournaments, offering a legacy view for frequent competitors. Whether casual or professional, every player leaves with a sense of accomplishment—and something to strive for next time.            </p>
          </div>
        </div>

        {/* <div className="border-t border-red-600/30 my-8"></div> */}
        <div className="border-t-4 border-red-600 my-8"></div>

        {/* Tournament Matches Section */}
        <div className="flex flex-col md:flex-row my-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start">
              <div className="w-2 h-12 bg-red-600 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold">Tournament</h3>
                <p className="text-gray-400">Matches</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-semibold text-red-400 mb-2">&quot;Get the future glimpse of matches - brackets&quot;</p>
            <p className="text-gray-300">
            Navigate your tournament visually and intuitively through our dynamic bracket system, built to provide a clear roadmap for participants and viewers alike. Whether it&apos;s single elimination, double elimination, Swiss, or round-robin, the bracket layout updates in real-time with match results and player progress. Participants can view their upcoming matches, opponent profiles, match times, and results at a glance. Admins can make on-the-fly adjustments, reschedule games, and even override results with proper logging. Spectators enjoy a complete overview of the competition&apos;s landscape, following favorite teams or players from early rounds to the grand finale. Each match page comes with detailed stats, chat options, team bios, and links to stream or replay content, making it a one-stop destination for every fixture in the tournament. With GT Arena, brackets aren&apos;t just functional—they&apos;re interactive, informative, and essential to the experience.            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GT Arena. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

