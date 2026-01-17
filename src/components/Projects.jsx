import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "POS Management System",
      description: "Full-stack POS system with inventory management, billing, and reporting features",
      tech: ["React", "Node.js", "Express", "SQL Server", "Crystal Reports"],
      github: "https://github.com/Nimesh-DeAlwis",
      demo: "#",
      features: ["Real-time inventory", "Sales reporting", "Multi-branch support", "Cloud backup"]
    },
    {
      title: "ERP Dashboard",
      description: "Dashboard for managing enterprise resources with analytics and reporting",
      tech: ["React", "D3.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/Nimesh-DeAlwis",
      demo: "#",
      features: ["Data visualization", "Role-based access", "Real-time updates", "Export functionality"]
    },
    {
      title: "Cloud Deployment Tool",
      description: "Tool for automating cloud deployments and infrastructure management",
      tech: ["Node.js", "Docker", "NGINX", "AWS", "CI/CD"],
      github: "https://github.com/Nimesh-DeAlwis",
      demo: "#",
      features: ["Auto-scaling", "Monitoring", "Cost optimization", "Security compliance"]
    },
    {
      title: "Technical Support Portal",
      description: "Internal portal for managing support tickets and client communications",
      tech: ["React", "Java Spring", "MySQL", "WebSocket", "Material-UI"],
      github: "https://github.com/Nimesh-DeAlwis",
      demo: "#",
      features: ["Ticket management", "Live chat", "Knowledge base", "Performance metrics"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Real-world applications combining my technical support experience with development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="px-8 py-6 bg-gray-900/50 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  Inspired by real-world technical support challenges
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;