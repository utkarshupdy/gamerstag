import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { ArrowLeft, Send, Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    console.log("Contact form submitted:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
                Contact <span className="text-blue-500">GAMERS TAG</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get in touch with our team for general inquiries, support, or any questions about our platform
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
                  <Mail className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-lg text-white">Email Us</h3>
                </div>
                <p className="text-gray-300 mb-2">contactus@gamerstag.in</p>
                <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/60 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-lg text-white">Call Us</h3>
                </div>
                <p className="text-gray-300 mb-2">+91 9999999999</p>
                <p className="text-gray-400 text-sm">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/80 backdrop-blur-sm border border-gray-700/50 p-8 rounded-lg"
            >
              <h2 className="font-orbitron font-bold text-2xl text-white mb-8 text-center">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-black/50 border-gray-600 text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category *
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger className="bg-black/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white"
                    placeholder="Brief subject of your message"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/50 border-gray-600 text-white min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
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