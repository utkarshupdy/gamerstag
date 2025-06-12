import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { ArrowLeft, Handshake, Building, Mail, Phone, Globe } from "lucide-react";

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    partnershipType: "",
    companySize: "",
    industry: "",
    description: "",
    offerings: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Partnership application submitted:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert("Thank you for your partnership proposal! Our business development team will review it and contact you within 3-5 business days.");
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      partnershipType: "",
      companySize: "",
      industry: "",
      description: "",
      offerings: "",
      timeline: ""
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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-4 z-50">
          <Link href="/connect">
            <Button variant="outline" className="flex items-center space-x-2">
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
                Partner With <span className="text-purple-500">GAMERS TAG</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let's collaborate and grow together in the gaming ecosystem. Join forces with us to create innovative solutions and reach new heights.
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
                  <Mail className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-lg text-white">Business Development</h3>
                </div>
                <p className="text-gray-300 mb-2">partnerships@gamerstag.in</p>
                <p className="text-gray-400 text-sm">Strategic partnerships and collaborations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/60 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-lg text-white">Call Us</h3>
                </div>
                <p className="text-gray-300 mb-2">+91 9999999999</p>
                <p className="text-gray-400 text-sm">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="relative py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/80 backdrop-blur-sm border border-gray-700/50 p-8 rounded-lg"
            >
              <h2 className="font-orbitron font-bold text-2xl text-white mb-8 text-center">
                Partnership Proposal
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Person *
                    </label>
                    <Input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Website
                  </label>
                  <Input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Partnership Type *
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, partnershipType: value})}>
                      <SelectTrigger className="bg-black/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology Integration</SelectItem>
                        <SelectItem value="strategic">Strategic Alliance</SelectItem>
                        <SelectItem value="marketing">Marketing Collaboration</SelectItem>
                        <SelectItem value="investment">Investment Opportunity</SelectItem>
                        <SelectItem value="distribution">Distribution Partnership</SelectItem>
                        <SelectItem value="content">Content Partnership</SelectItem>
                        <SelectItem value="sponsor">Sponsorship</SelectItem>
                        <SelectItem value="reseller">Reseller/Channel Partner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, companySize: value})}>
                      <SelectTrigger className="bg-black/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                        <SelectItem value="small">Small (11-50 employees)</SelectItem>
                        <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                        <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry/Sector
                  </label>
                  <Input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white"
                    placeholder="Gaming, Technology, E-sports, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Partnership Description *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white min-h-[120px]"
                    placeholder="Describe why you want to partner with GAMERS TAG and how this collaboration would benefit both parties..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What Can You Offer? *
                  </label>
                  <Textarea
                    value={formData.offerings}
                    onChange={(e) => setFormData({...formData, offerings: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white min-h-[120px]"
                    placeholder="Detail what your company can bring to this partnership - technology, resources, expertise, market access, etc..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Expected Timeline
                  </label>
                  <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                    <SelectTrigger className="bg-black/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select expected timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                      <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                      <SelectItem value="long">Long-term (6+ months)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <span>Submitting Proposal...</span>
                    ) : (
                      <>
                        <Handshake className="w-5 h-5 mr-2" />
                        Submit Partnership Proposal
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