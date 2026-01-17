import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaAws, FaDatabase, FaGitAlt} from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiPostgresql, SiNginx, SiDocker, SiMicrosoftazure, SiLinux, SiUbuntu, SiCsharp } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaDatabase />, name: 'SQL Server', level: 'Advanced', color: 'text-yellow-500' },
    { icon: <FaGitAlt />, name: 'Git', level: 'Advanced', color: 'text-orange-500' },
    { icon: <FaReact />, name: 'React', level: 'Intermediate', color: 'text-cyan-400' },
    { icon: <FaNodeJs />, name: 'Node.js', level: 'Intermediate', color: 'text-green-500' },
    { icon: <SiExpress />, name: 'Express.js', level: 'Intermediate', color: 'text-gray-400' },
    { icon: <FaJava />, name: 'Java', level: 'Intermediate', color: 'text-red-500' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', level: 'Learning', color: 'text-blue-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 'Intermediate', color: 'text-teal-400' },
    { icon: <SiNginx />, name: 'NGINX', level: 'Intermediate', color: 'text-green-600' },
    { icon: <FaAws />, name: 'AWS', level: 'Learning', color: 'text-yellow-400' },
    { icon: <SiMicrosoftazure />, name: 'Azure', level: 'Learning', color: 'text-blue-500' },
    { icon: <SiLinux />, name: 'Linux', level: 'Learning', color: 'text-yellow-500' },
    { icon: <SiUbuntu />, name: 'Ubuntu', level: 'Learning', color: 'text-orange-500' },
    { icon: <SiDocker />, name: 'Docker', level: 'Learning', color: 'text-blue-600' },
    { icon: <SiCsharp />, name: 'C#', level: 'Intermediate', color: 'text-purple-500' }
  ];

  const knowledge = [
    'ERP Systems Management',
    'Crystal Reports',
    'POS Systems',
    'Windows Server',
    'Technical Support',
    'Project Documentation',
    'Client Training',
    'Troubleshooting',
    'Cloud Computing',
    'System Monitoring'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with daily, plus expertise from my technical support role
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Core Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <div className={`text-4xl ${skill.color} mb-4`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{skill.level}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mx-1 ${
                            i <
                            (skill.level === 'Advanced' ? 5 : skill.level === 'Intermediate' ? 3 : 2)
                              ? 'bg-blue-500'
                              : 'bg-gray-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Domain Knowledge</h3>
            <div className="grid grid-cols-2 gap-4">
              {knowledge.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-400">🏆</span> Certifications
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  .NET Development for Beginners
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Advanced Playwright Techniques
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  C# and .NET Development with VS Code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;