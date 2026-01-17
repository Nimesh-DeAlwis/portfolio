import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a resume file or link to your actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nimesh_De_Alwis_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">W.T Nimesh De Alwis</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl font-semibold mb-6">
                <span className="text-gray-300">I am a </span>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Cloud DevOps Aspirant',
                    2000,
                    'Technical Support Executive',
                    2000,
                    'Software Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-blue-400 ml-2"
                  repeat={Infinity}
                />
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                Passionate about building scalable applications and transitioning into 
                Cloud DevOps Engineering. Currently enhancing POS/ERP systems with 
                1.5+ years of technical support experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <FiDownload /> Download Resume
              </button>
              
              <a
                href="#contact"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              <a href="https://github.com/Nimesh-DeAlwis" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/tharindu-nimesh-de-alwis-a5b589327" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:tharindualwis2003@gmail.com" 
                 className="text-gray-400 hover:text-red-400 transition-colors">
                <FiMail size={24} />
              </a>
            </div>

            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="text-blue-400" />
                <span>0701675084 / 0768476349</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="text-blue-400" />
                <span>tharindualwis2003@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-800">
                        <img 
                          src="/portfolio/images/nimesh-profile.jpg" 
                          alt="Nimesh De Alwis"
                          className="w-full h-full object-cover"
                        />
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <span className="text-6xl">ND</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">Nimesh De Alwis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;