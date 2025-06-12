import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { UserPlus, Check, Target, Users, Building, ArrowRight, Zap, Clock, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hire() {
  const problems = [
    "Finding Niche Talent is Hard: Locating qualified candidates who truly understand gaming culture is a major challenge",
    "Recruiting is Slow: Traditional hiring methods are inefficient and not built for the fast-paced gaming industry",
    "High Cost of Bad Hires: Hiring someone without genuine passion for gaming can be a costly mistake"
  ];

  const benefits = [
    "Access Elite Talent: Tap into the GAMERS TAG pool of dedicated and skilled gaming professionals",
    "Hire Faster: Our streamlined process helps you post, match, and interview the best candidates in record time",
    "Build a Winning Team: Find passionate individuals who will drive your brand's success in the gaming world"
  ];

  const features = [
    "Smart candidate filtering",
    "Direct messaging with talent",
    "Comprehensive talent profiles",
    "Interview scheduling tools",
    "Team collaboration features",
    "Hiring analytics dashboard",
    "Cultural fit assessment"
  ];

  const hireSteps = [
    { step: "Post", icon: Target, description: "Create detailed job postings with specific gaming requirements" },
    { step: "Match", icon: Users, description: "Our AI matches you with passionate gaming professionals" },
    { step: "Interview", icon: Clock, description: "Schedule and conduct interviews with top candidates" },
    { step: "Done", icon: Trophy, description: "Hire the perfect fit for your gaming team or company" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding hero-gradient pt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
              <UserPlus className="w-4 h-4" />
              <span>Feature Overview</span>
            </div>
            <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              GT <span className="text-white">Hire</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              "Post. Match. Interview. Done. Hire the Sharpest Minds in Gaming."
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              With GAMERS TAG, companies can easily find and recruit the most talented and passionate professionals in the entire gaming industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Feature Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="font-space font-bold text-3xl mb-6">About This Feature</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Stop searching and start hiring champions. The GAMERS TAG Hire platform is the most effective pipeline for recruiting top gaming talent. Post job openings, from developer roles to marketing internships, and instantly connect with a community of skilled and passionate candidates.
                </p>
                <p>
                  Our system is designed to help you find the perfect match for your team or brand, simplifying the hiring process so you can focus on building the future of gaming.
                </p>
              </div>
            </div>
            <div className="professional-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-primary mr-3" />
                <h3 className="font-space font-bold text-xl">Hiring Tools</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Simple 4-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From posting to hiring, our streamlined process gets you the best talent fast
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hireSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center hover:scale-105 transition-transform"
              >
                <step.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-space font-bold text-lg mb-2">{step.step}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Problems This Feature Solves</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional hiring struggles to find candidates who truly understand gaming culture
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access a curated pool of gaming professionals who share your passion
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="professional-card p-6 flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space font-bold text-3xl mb-6">Ready to Build Your Dream Gaming Team?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access the largest pool of passionate gaming professionals and hire the talent that will drive your success.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Hiring
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}