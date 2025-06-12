import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { ArrowLeft, Gamepad, Mail, Phone } from "lucide-react";

export default function EsportsForm() {
  const [formData, setFormData] = useState({
    contactingPersonName: "",
    email: "",
    phone: "",
    entityType: "",
    companyBrandName: "",
    socialProfiles: "",
    brandWebsite: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Esports partnership application submitted:", formData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert("Thank you for your esports partnership inquiry! Our team will review your proposal and contact you within 3-5 business days.");
    setFormData({
      contactingPersonName: "",
      email: "",
      phone: "",
      entityType: "",
      companyBrandName: "",
      socialProfiles: "",
      brandWebsite: "",
      message: ""
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
                Esports <span className="text-[#E5042F]">Partnership</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join forces with GAMERS TAG to create unforgettable esports experiences. Partner with us for hosting, events, and gaming excellence.
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
                  <h3 className="font-bold text-lg text-white">Esports Partnerships</h3>
                </div>
                <p className="text-gray-300 mb-2">contactus@gamerstag.in</p>
                <p className="text-gray-400 text-sm">Esports hosting and event partnerships</p>
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

        {/* Esports Partnership Form */}
        <section className="relative py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/80 backdrop-blur-sm border border-gray-700/50 p-8 rounded-lg"
            >
              <h2 className="font-orbitron font-bold text-2xl text-white mb-8 text-center">
                Esports Partnership Application
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Contacting Person Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.contactingPersonName}
                      onChange={(e) => setFormData({...formData, contactingPersonName: e.target.value})}
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

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Are You *
                  </label>
                  <Select value={formData.entityType} onValueChange={(value) => setFormData({...formData, entityType: value})}>
                    <SelectTrigger className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]">
                      <SelectValue placeholder="Select entity type" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-gray-600">
                      <SelectItem value="brand" className="text-white hover:bg-[#E5042F]/20">Brand</SelectItem>
                      <SelectItem value="individual" className="text-white hover:bg-[#E5042F]/20">Individual</SelectItem>
                      <SelectItem value="creator" className="text-white hover:bg-[#E5042F]/20">Creator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Brand Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.companyBrandName}
                    onChange={(e) => setFormData({...formData, companyBrandName: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="Enter your company or brand name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company LinkedIn/Instagram/YouTube Profile *
                  </label>
                  <Input
                    type="url"
                    value={formData.socialProfiles}
                    onChange={(e) => setFormData({...formData, socialProfiles: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="https://linkedin.com/company/yourcompany or social media profile"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Brand Website *
                  </label>
                  <Input
                    type="url"
                    value={formData.brandWebsite}
                    onChange={(e) => setFormData({...formData, brandWebsite: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="https://your-website.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message to Us *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white min-h-[120px] focus:border-[#E5042F] focus:ring-[#E5042F]"
                    placeholder="Tell us about your esports hosting needs, event ideas, and how we can collaborate..."
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
                        <Gamepad className="w-5 h-5 mr-2" />
                        Submit Partnership Application
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