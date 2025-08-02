import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center relative px-4"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-32 h-32 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-yellow-400"
      >
        <img
          src="/Ai.jpg"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Soyam
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Software Engineer passionate about building web interfaces, AI models, and smart user experiences.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="#projects"
          className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-300 transition duration-300 font-semibold"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition duration-300 font-semibold"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
