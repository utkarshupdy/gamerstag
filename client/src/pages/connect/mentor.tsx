import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { ArrowLeft, GraduationCap, Mail, Phone } from "lucide-react";

export default function MentorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    profileHeadline: "",
    motivation: "",
    expertise: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Mentor application submitted:", formData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert("Thank you for applying to become a mentor! Our team will review your application and get back to you within 5-7 business days.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      profileHeadline: "",
      motivation: "",
      expertise: ""
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Navigation />

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-4 z-50">
          <Link href="/connect">
            <Button variant="outline" className="flex items-center space-x-2 bg-black border-gray-600 text-white hover:bg-[#E5042F] hover:border-[#E5042F]">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Connect</span>
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
                Join as <span className="text-[#E5042F]">Mentor</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Share your expertise and help shape the next generation of gaming professionals. Join our mentor community and make a lasting impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black/60 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-[#E5042F]" />
                  <h3 className="font-bold text-lg text-white">Mentorship Program</h3>
                </div>
                <p className="text-gray-300 mb-2">mentors@gamerstag.in</p>
                <p className="text-gray-400 text-sm">Join our expert mentor community</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/60 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-[#E5042F]" />
                  <h3 className="font-bold text-lg text-white">Call Us</h3>
                </div>
                <p className="text-gray-300 mb-2">+91 9999999999</p>
                <p className="text-gray-400 text-sm">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mentor Application Form */}
        <section className="relative py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/80 backdrop-blur-sm border border-gray-700/50 p-8 rounded-lg"
            >
              <h2 className="font-orbitron font-bold text-2xl text-white mb-8 text-center">
                Mentor Application
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      LinkedIn *
                    </label>
                    <Input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                      placeholder="https://linkedin.com/in/yourprofile"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Profile Headline *
                  </label>
                  <Input
                    type="text"
                    value={formData.profileHeadline}
                    onChange={(e) => setFormData({...formData, profileHeadline: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="e.g., CFO of xxx company"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why You Want to Be a Mentor of Gamers Tag? *
                  </label>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white min-h-[120px] focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="Share your motivation for becoming a mentor and how you can help our community..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How can you mentor us? Your expertise *
                  </label>
                  <Textarea
                    value={formData.expertise}
                    onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white min-h-[120px] focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="Describe your areas of expertise and how you can mentor our team..."
                    required
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E5042F] hover:bg-[#E5042F]/80 text-white px-8 py-3 text-lg font-medium border border-[#E5042F] hover:border-white transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Submit Mentor Application
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}