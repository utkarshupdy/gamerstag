import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const founders = [
    {
      name: "Joshua J Kanatt",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/joshuakanatt/",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400"
    },
    {
      name: "Adesh Kumar Patra",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/adeshkpatra/",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-400"
    },
    {
      name: "Hemanth Joseph",
      role: "Co-Founder",
      color: "from-red-500 to-pink-500",
      textColor: "text-red-400"
    }
  ];

  return (
    <section id="team" className="py-20 bg-cyber-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-glow">Leadership Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visionary leaders driving the future of gaming and esports
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="glass-card p-6 rounded-2xl text-center feature-hover transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${founder.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <i className="fas fa-user text-white text-2xl"></i>
              </div>
              <h3 className={`font-orbitron font-bold text-xl mb-2 ${founder.textColor}`}>{founder.name}</h3>
              <p className="text-gray-400 mb-4">{founder.role}</p>
              {founder.linkedin && (
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <i className="fab fa-linkedin mr-2"></i>LinkedIn Profile
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="glass-card p-8 rounded-2xl max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-orbitron font-bold text-2xl mb-4 text-glow">Strategic Mentor</h3>
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-star text-white text-2xl"></i>
          </div>
          <h4 className="font-orbitron font-bold text-xl mb-2 text-yellow-400">Abhinav Jain</h4>
          <p className="text-gray-400 mb-4">CFO - CoinDCX</p>
          <a 
            href="https://www.linkedin.com/company/gamers-tag" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-linkedin mr-2"></i>Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
