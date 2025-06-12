import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MobileShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-glow">Experience The Future</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary mobile experience designed for the gaming generation
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-blue-400">World-Class UI/UX</h3>
              <p className="text-gray-300 mb-4">Experience gaming-inspired design with smooth animations, intuitive navigation, and stunning visual effects.</p>
              <div className="flex space-x-4 text-sm">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-400">Glassmorphism</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-400">3D Effects</span>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-purple-400">Immersive Audio</h3>
              <p className="text-gray-300 mb-4">GT Sound delivers premium audio experience with spatial audio and customizable sound effects.</p>
              <div className="flex space-x-4 text-sm">
                <span className="bg-red-500/20 px-3 py-1 rounded-full text-red-400">Spatial Audio</span>
                <span className="bg-green-400/20 px-3 py-1 rounded-full text-green-400">Custom FX</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Gaming community collaboration" 
                className="rounded-2xl shadow-2xl" 
              />
              <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live Community</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
