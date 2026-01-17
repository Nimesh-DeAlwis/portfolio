import React from 'react';
import { FiCode, FiServer, FiCloud, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I'm a passionate Technical Support Executive with 1.5+ years of experience 
                in supporting POS, ERP, Accounting, and Payroll solutions at mypos Software Solutions.
              </p>
              
              <p className="text-lg text-gray-300">
                My journey in technology started with a deep interest in how systems work 
                together. Now, I'm expanding my expertise from technical support to full-stack 
                development with a focus on Cloud DevOps engineering.
              </p>
              
              <p className="text-lg text-gray-300">
                I believe in solving real-world problems through technology and am 
                constantly learning new tools and methodologies to build scalable, 
                efficient systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FiCode className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">Full Stack</h4>
                  <p className="text-sm text-gray-400">React, Node.js, SQL</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <FiServer className="text-green-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">Systems</h4>
                  <p className="text-sm text-gray-400">POS, ERP, Cloud</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <FiCloud className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">DevOps</h4>
                  <p className="text-sm text-gray-400">Cloud, CI/CD, Automation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <FiTrendingUp className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">Growth</h4>
                  <p className="text-sm text-gray-400">Always Learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                <p className="text-gray-300">
                  Transitioning my career towards Cloud DevOps Engineering while 
                  leveraging my technical support experience in enterprise software.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Cloud Technologies</span>
                    <span className="text-blue-400">70%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Backend Development</span>
                    <span className="text-green-400">80%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Frontend Development</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">DevOps Practices</span>
                    <span className="text-yellow-400">60%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 italic">
                  "Bridging the gap between technical support and software development 
                  to build better, more reliable systems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;