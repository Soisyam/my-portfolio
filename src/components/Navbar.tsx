import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-6 shadow-lg relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-white text-3xl font-extrabold">Soyam</a>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">Home</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">About</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">Services</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">Contact</a></li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 py-4 absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg" onClick={toggleMenu}>Services</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;