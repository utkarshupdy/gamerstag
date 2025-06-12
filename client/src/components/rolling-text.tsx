import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RollingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function RollingText({ words, className = "", interval = 3000 }: RollingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 90 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="absolute inset-0 flex items-center justify-start"
          style={{ transformOrigin: "50% 50%" }}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{words[0]}</span>
    </span>
  );
}