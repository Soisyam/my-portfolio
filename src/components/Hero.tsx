import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 py-24"
    >
      <div className="container mx-auto px-4 text-center">

        {/* Avatar with Floating Animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-32 h-32 rounded-full overflow-hidden shadow-xl mx-auto mb-6"
        >
          <img
            src="/Ai.jpg"
            alt="Soyam's Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Greeting Line with Ping Effect */}
        <motion.p
          className="text-white text-3xl md:text-4xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative inline-block">
            Hi, I'm Soyam.
            <span className="absolute -top-2 -right-6 animate-ping text-yellow-400 text-xl">👋</span>
          </span>
        </motion.p>

        {/* Name Line with Hover Animation */}
        <motion.h1
          className="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-yellow-400 hover:text-yellow-300 transition duration-300 ease-in-out cursor-pointer">
            Soyam
          </span>{' '}
          Rai.
        </motion.h1>

        {/* Description Text */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A dedicated <span className="font-bold text-white">Software Engineer</span> passionate about building intuitive and visually captivating web experiences, with interests in UI/UX, AI, and Machine Learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="bg-transparent text-white py-3 px-8 rounded-md font-semibold hover:bg-gray-800 border-2 border-white transition-all duration-300 shadow-lg"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
