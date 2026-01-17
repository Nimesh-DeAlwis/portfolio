import React from 'react';
import { FiHeart, FiCoffee } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              W.T Nimesh De Alwis
            </h2>
            <p className="text-gray-400 mt-2">Technical Support Executive & Developer</p>
          </div>

          <div className="flex flex-wrap gap-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400">Home</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-blue-400">Skills</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-blue-400">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400">Projects</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:tharindualwis2003@gmail.com" className="text-gray-400 hover:text-blue-400">Email</a></li>
                <li><a href="https://linkedin.com/in/tharindu-nimesh-de-alwis-a5b589327" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">LinkedIn</a></li>
                <li><a href="https://github.com/Nimesh-DeAlwis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <FiHeart className="text-red-400" /> and <FiCoffee className="text-yellow-400" />
          </p>
          <p className="text-gray-500 mt-2">
            © {currentYear} W.T Nimesh De Alwis. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Transitioning from Technical Support to Cloud DevOps Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;