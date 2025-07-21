import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400">
      <div className="container mx-auto px-4">
        <p className="mb-4">&copy; {new Date().getFullYear()} Soyam. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/your-soyam-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <p className="text-sm">Designed and Developed with  by Soyam</p>
      </div>
    </footer>
  );
};

export default Footer;