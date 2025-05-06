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
      <header className="text-center py-8 border-b border-red-800">
        <h1 className="text-4xl font-bold mb-2">Contact us</h1>
        <p className="text-sm text-gray-400">
          Full Headline/where , are, which appeared at the end of the 1940s, which appeared at the end of the21 appeared at the end of the 194
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="py-8 px-4 border-b border-red-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Welcome to GAMERS TAG</h2>
              <p className="mb-4">
                GAMERS TAG is the world&apos;s first all-in-one Gaming Super App with B2B,B2C and B2B2C features, revolutionizing the future of gaming and esports. Our platform offers world class features such as Jobs Listing and Applying, Bite News, Chat, Networking, Social Linking, and Gamification and others for gamers and tech enthusiasts, students, brands and others.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="h-48 bg-gradient-to-r from-orange-300 to-red-500 rounded">
                {/* Sunset image placeholder */}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Options */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-900 p-4 rounded flex items-center gap-3">
              <div className="w-12 h-12 bg-red-700 rounded"></div>
              <span className="font-semibold">Esports Hosting Partnership Partnership</span>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-700 rounded"></div>
              <span className="font-semibold">Brand Partnership</span>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-700 rounded"></div>
              <span className="font-semibold">Join as Mentor</span>
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
                className="bg-black border border-gray-700 p-3 rounded text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email id"
                className="bg-black border border-gray-700 p-3 rounded text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number ( Optional )"
                className="bg-black border border-gray-700 p-3 rounded text-white"
              />
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization / Brand / Company name"
                className="bg-black border border-gray-700 p-3 rounded text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your brand website link / linkedin profile"
                className="w-full bg-black border border-gray-700 p-3 rounded text-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message to us"
                className="w-full bg-black border border-gray-700 p-3 rounded text-white h-32"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-red-600 text-white px-8 py-2 rounded uppercase font-bold"
            >
              SUBMIT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}