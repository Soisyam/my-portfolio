import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Avatar Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mx-auto mb-6">
          {/*
            This is the corrected path! If 'ai.jpg' is directly in your 'public' folder,
            then '/ai.jpg' is the correct relative path from the root.
          */}
          <img
            src="/Ai.jpg" // <--- CORRECTED PATH HERE!
            alt="Soyam's AI Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <p className="text-white text-3xl md:text-4xl font-semibold mb-2">
          Hey, I'm Soyam.
        </p>
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
          <span className="text-yellow-400">Soyam</span> Rai.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          A dedicated <span className="font-bold text-white">Software Engineer</span> passionate about building intuitive and visually captivating web experiences, with interests in UI/UX, AI, and Machine Learning.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="bg-transparent text-white py-3 px-8 rounded-md font-semibold hover:bg-gray-900 transition-colors duration-300 border-2 border-white shadow-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;