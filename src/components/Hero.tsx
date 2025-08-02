import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 px-4"
    >
      <div className="container mx-auto text-center z-10">
        {/* Avatar with Glowing Ring + Float Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl mx-auto mb-6 ring-4 ring-yellow-500/30 ring-offset-2 ring-offset-gray-900"
        >
          <img
            src="/Ai.jpg"
            alt="Soyam's Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.p
          className="text-white text-2xl md:text-3xl font-medium mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I'm Soyam.
        </motion.p>

        <motion.h1
          className="text-white text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-yellow-400">Soyam</span> Rai
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A <span className="text-white font-semibold">Software Engineer</span> crafting visually stunning, accessible, and performant user experiences. Passionate about <span className="text-yellow-400 font-semibold">UI/UX</span>, <span className="text-yellow-400 font-semibold">AI</span>, and <span className="text-yellow-400 font-semibold">Machine Learning</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            🚀 View Projects
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
          >
            📄 Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
