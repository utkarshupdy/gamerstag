import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="download" className="py-20 bg-dark-grey relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 text-glow">Ready to Start?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the revolution. Download GAMERS TAG and be part of the world's largest gaming ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="xl" className="font-semibold">
              <i className="fab fa-apple mr-3"></i>Download for iOS
            </Button>
            <Button variant="outline" size="xl" className="font-semibold">
              <i className="fab fa-google-play mr-3"></i>Download for Android
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="animate-float">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mobile app mockups" 
              className="mx-auto rounded-2xl shadow-2xl max-w-2xl w-full" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
