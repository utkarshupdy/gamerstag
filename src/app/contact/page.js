// 'use client'
// import SubmitButton from '@/components/Button';
// import { useState } from 'react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     organization: '',
//     website: '',
//     message: ''
//   });
  
//   const [activePartnership, setActivePartnership] = useState(0);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     // Here you would normally send the data to your backend
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       {/* Header Section */}
//       <header className="text-center py-15 bg-gray-950">
//         <h1 className="text-5xl font-normal mb-2">Contact us</h1>
//         <p className="text-sm text-gray-400">
//           Full Headline/where , are, which appeared at the end of the 1940s, which appeared at the end of the21 appeared at the end of the 194
//         </p>
//         {/* <div className="mt-6 border-b-3 border-red-800 mx-auto w-full"></div> */}
//       </header>
//       <div className=" border-b-3 border-red-800 mx-auto w-full"></div>

//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Welcome Section */}
//         <section className="py-10 px-4">
//           <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
//             <div className="md:w-1/2">
//               <h2 className="text-2xl font-normal mb-4">Welcome to GAMERS TAG</h2>
//               <p className="mb-4 text-gray-300 leading-relaxed">
//                 GAMERS TAG is the world&apos;s first all-in-one Gaming Super App with B2B,B2C and B2B2C features, revolutionizing the future of gaming and esports. Our platform offers world class features such as Jobs Listing and Applying, Bite News, Chat, Networking, Social Linking, and Gamification and others for gamers and tech enthusiasts, students, brands and others.
//               </p>
//               <p className="mb-4 text-gray-300 leading-relaxed">
//                 We are here to make your life easier and more fun. We are here to help you find the perfect job, build your network, connect with friends, and have fun.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <div className="h-70 overflow-hidden rounded">
//                 <img 
//                   src="https://i.ytimg.com/vi/KEV4zTVjLxw/maxresdefault.jpg" 
//                   alt="City skyline sunset view" 
//                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 border-b-3 border-red-800 mx-auto w-full"></div>
//         </section>

//         {/* Partnership Options */}
//         <section className="py-8 px-4">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div 
//               className={`${activePartnership === 0 ? 'bg-red-900' : 'bg-gray-800'} p-4 rounded flex items-center gap-3 cursor-pointer hover:bg-opacity-90 transition-colors duration-300`}
//               onClick={() => setActivePartnership(0)}
//             >
//               <div className="w-12 h-12 bg-opacity-60 overflow-hidden rounded">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" alt="Esports icon" className="w-full h-full object-cover" />
//               </div>
//               <span className="font-normal">Esports Hosting Partnership Partnership</span>
//             </div>
            
//             <div 
//               className={`${activePartnership === 1 ? 'bg-red-900' : 'bg-gray-800'} p-4 rounded flex items-center gap-3 cursor-pointer hover:bg-opacity-90 transition-colors duration-300`}
//               onClick={() => setActivePartnership(1)}
//             >
//               <div className="w-12 h-12 bg-opacity-60 overflow-hidden rounded">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" alt="Brand icon" className="w-full h-full object-cover" />
//               </div>
//               <span className="font-normal">Brand Partnership</span>
//             </div>
            
//             <div 
//               className={`${activePartnership === 2 ? 'bg-red-900' : 'bg-gray-800'} p-4 rounded flex items-center gap-3 cursor-pointer hover:bg-opacity-90 transition-colors duration-300`}
//               onClick={() => setActivePartnership(2)}
//             >
//               <div className="w-12 h-12 bg-opacity-60 overflow-hidden rounded">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" alt="Mentor icon" className="w-full h-full object-cover" />
//               </div>
//               <span className="font-normal">Join as Mentor</span>
//             </div>
//           </div>
//         </section>

//         {/* Contact Form */}
//         <section className="py-8 px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email id"
//                 className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
//               />
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone number ( Optional )"
//                 className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
//               />
//               <input
//                 type="text"
//                 name="organization"
//                 value={formData.organization}
//                 onChange={handleChange}
//                 placeholder="Organization / Brand / Company name"
//                 className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
//               />
//             </div>
            
//             <div className="mb-4">
//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//                 placeholder="Your brand website link / linkedin profile"
//                 className="w-full bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
//               />
//             </div>
            
//             <div className="mb-4">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Message to us"
//                 className="w-full bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300 h-32 resize-none"
//               />
//             </div>

//             <SubmitButton />
//             {/* <button
//               onClick={handleSubmit}
//               className="bg-red-500 text-white px-8 py-2 rounded uppercase font-normal hover:bg-red-700 transition-colors duration-300"
//             >
//               SUBMIT
//             </button> */}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


'use client'
import { useState } from 'react';
import SubmitButton from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    website: '',
    message: ''
  });
  
  const [activePartnership, setActivePartnership] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your backend
  };

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

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header Section with exact styling */}
      <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
        <h1 className="text-5xl font-normal mb-2" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>Contact us</h1>
        <p className="text-sm mx-auto" style={{ letterSpacing: '0.03em', maxWidth: '80%', margin: '0 auto', ...textGradientStyle }}>
          Full Headline/where , are, which appeared at the end of the 1940s, which appeared at the end of the21 appeared at the end of the 194
        </p>
      </header>
      <div className="border-b border-red-800 w-full"></div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-medium mb-4" style={{ letterSpacing: '0.06em', ...textGradientStyle }}>Welcome to GAMERS TAG</h2>
              <p className="mb-4 leading-relaxed" style={{ letterSpacing: '0.06em', ...textGradientStyle }}>
              GAMERS TAG is the world&pos;s first all-in-one Gaming Super App with B2B,B2C and B2B2C features, revolutionizing the future of gaming and esports. Our platform offers world class features such as Jobs Listing and Applying, Bite News, Chat, Networking, Social Linking, and Gamification and others for gamers and tech enthusiasts, students, brands and others.              </p>
              <p className="mb-4 leading-relaxed" style={{ letterSpacing: '0.06em', ...textGradientStyle }}>
                We are here to make your life easier and more fun. We are here to help you find the perfect job, build your network, connect with friends, and have fun.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="h-70 overflow-hidden rounded">
                <img 
                  src="https://i.ytimg.com/vi/KEV4zTVjLxw/maxresdefault.jpg" 
                  alt="City skyline sunset view" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 border-b border-red-800 w-full"></div>
        </section>

        {/* Partnership Options with Hover Effect */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 px-4">
            {[
              { title: "Esports Hosting Partnership Partnership", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" },
              { title: "Brand Partnership", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" },
              { title: "Join as Mentor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative flex-1 h-16 cursor-pointer"
                onClick={() => setActivePartnership(index)}
              >
                {/* White vertical line on the left */}
                <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
                
                {/* Red background for active item, dark background for inactive */}
                <div 
                  className="absolute left-0.5 top-0 h-full w-full flex items-center gap-3 px-3"
                  style={{ 
                    background: activePartnership === index ? redGradient : '#232323',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activePartnership !== index) {
                      e.currentTarget.style.background = redGradient;
                      e.currentTarget.style.opacity = '0.9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activePartnership !== index) {
                      e.currentTarget.style.background = '#232323';
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                >
                  <div className="w-12 h-12 overflow-hidden flex-shrink-0 bg-black flex items-center justify-center rounded">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-normal text-white" style={{ letterSpacing: '0.03em' }}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form with full width and spacing */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Input with vertical gradient line */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#1A1A1A] border-0 p-4 pl-6 outline-none transition-colors duration-300"
                  style={{ color: '#fff' }}
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email id"
                  className="w-full bg-[#1A1A1A] border-0 p-4 pl-6 outline-none transition-colors duration-300"
                  style={{ color: '#fff' }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number ( Optional )"
                  className="w-full bg-[#1A1A1A] border-0 p-4 pl-6 outline-none transition-colors duration-300"
                  style={{ color: '#fff' }}
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization / Brand / Campus name"
                  className="w-full bg-[#1A1A1A] border-0 p-4 pl-6 outline-none transition-colors duration-300"
                  style={{ color: '#fff' }}
                />
              </div>
            </div>
            
            <div className="mb-8 relative">
              <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your brand website link / LinkedIn profile"
                className="w-full bg-[#1A1A1A] border-0 p-4 pl-6 outline-none transition-colors duration-300"
                style={{ color: '#fff' }}
              />
            </div>
            
            <div className="mb-8 relative">
              <div className="absolute left-0 top-0 h-full w-0.5" style={{ background: whiteGradient }}></div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message to us"
                className="w-full bg-[#1A1A1A] border-0 p-4 pl-6 outline-none transition-colors duration-300 h-48 resize-none"
                style={{ color: '#fff' }}
              />
            </div>
            
            <div className="flex">
              <SubmitButton onClick={handleSubmit} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}