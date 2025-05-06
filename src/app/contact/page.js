'use client'
import { useState } from 'react';

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

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="text-center py-15 bg-gray-950">
        <h1 className="text-5xl font-normal mb-2">Contact us</h1>
        <p className="text-sm text-gray-400">
          Full Headline/where , are, which appeared at the end of the 1940s, which appeared at the end of the21 appeared at the end of the 194
        </p>
        {/* <div className="mt-6 border-b-3 border-red-800 mx-auto w-full"></div> */}
      </header>
      <div className=" border-b-3 border-red-800 mx-auto w-full"></div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-normal mb-4">Welcome to GAMERS TAG</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                GAMERS TAG is the world&apos;s first all-in-one Gaming Super App with B2B,B2C and B2B2C features, revolutionizing the future of gaming and esports. Our platform offers world class features such as Jobs Listing and Applying, Bite News, Chat, Networking, Social Linking, and Gamification and others for gamers and tech enthusiasts, students, brands and others.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
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
          <div className="mt-8 border-b-3 border-red-800 mx-auto w-full"></div>
        </section>

        {/* Partnership Options */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              className={`${activePartnership === 0 ? 'bg-red-900' : 'bg-gray-800'} p-4 rounded flex items-center gap-3 cursor-pointer hover:bg-opacity-90 transition-colors duration-300`}
              onClick={() => setActivePartnership(0)}
            >
              <div className="w-12 h-12 bg-opacity-60 overflow-hidden rounded">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" alt="Esports icon" className="w-full h-full object-cover" />
              </div>
              <span className="font-normal">Esports Hosting Partnership Partnership</span>
            </div>
            
            <div 
              className={`${activePartnership === 1 ? 'bg-red-900' : 'bg-gray-800'} p-4 rounded flex items-center gap-3 cursor-pointer hover:bg-opacity-90 transition-colors duration-300`}
              onClick={() => setActivePartnership(1)}
            >
              <div className="w-12 h-12 bg-opacity-60 overflow-hidden rounded">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" alt="Brand icon" className="w-full h-full object-cover" />
              </div>
              <span className="font-normal">Brand Partnership</span>
            </div>
            
            <div 
              className={`${activePartnership === 2 ? 'bg-red-900' : 'bg-gray-800'} p-4 rounded flex items-center gap-3 cursor-pointer hover:bg-opacity-90 transition-colors duration-300`}
              onClick={() => setActivePartnership(2)}
            >
              <div className="w-12 h-12 bg-opacity-60 overflow-hidden rounded">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7DMzT3qk4CG0Z8z2Hf7S6ptqNDmu9Hwk3w&s" alt="Mentor icon" className="w-full h-full object-cover" />
              </div>
              <span className="font-normal">Join as Mentor</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email id"
                className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number ( Optional )"
                className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
              />
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization / Brand / Company name"
                className="bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
              />
            </div>
            
            <div className="mb-4">
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your brand website link / linkedin profile"
                className="w-full bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300"
              />
            </div>
            
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message to us"
                className="w-full bg-black border border-gray-800 p-3 rounded text-white focus:border-red-800 outline-none transition-colors duration-300 h-32 resize-none"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="bg-red-500 text-white px-8 py-2 rounded uppercase font-normal hover:bg-red-700 transition-colors duration-300"
            >
              SUBMIT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}