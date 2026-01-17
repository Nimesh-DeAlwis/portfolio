import React from 'react';
import { FiBriefcase, FiTarget, FiTool, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  const responsibilities = [
    "Provide technical support for POS, ERP, Accounting, and Payroll solutions",
    "Act as liaison between clients and company, ensuring clear communication",
    "Handle project management tasks and requirement analysis",
    "Proactively monitor and maintain POS/ERP systems",
    "Resolve client issues promptly ensuring highest satisfaction",
    "Collaborate with helpdesk team effectively",
    "Install and configure software at client locations",
    "Conduct training sessions for clients",
    "Own projects from inception to sign-off",
    "Stay updated on latest industry trends"
  ];

  const requirements = [
    "SQL Server, Windows, and Cloud Computing proficiency",
    "POS/ERP/Accounting/Payroll management experience",
    "Excellent problem-solving and communication",
    "Customer-focused with passion for support",
    "Team collaboration in dynamic environment",
    "Willingness to work occasional weekends"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            1.5+ years of hands-on experience in technical support and software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FiBriefcase className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Technical Support Executive</h3>
                  <p className="text-gray-400">mypos Software Solutions</p>
                  <p className="text-blue-400">1 Year 6 Months Experience</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FiTarget className="text-green-400" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FiTool className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Technical Expertise</h3>
                  <p className="text-gray-400">Role Requirements</p>
                </div>
              </div>

              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <FiTarget className="text-green-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Career Ambition</h3>
                  <p className="text-gray-400">Future Goals</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">🎯 Cloud DevOps Engineer</h4>
                  <p className="text-gray-300">
                    Transitioning from technical support to Cloud DevOps engineering, 
                    focusing on automation, CI/CD pipelines, cloud infrastructure, 
                    and scalable system architectures.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-blue-400 mb-2">Current Focus</h5>
                    <p className="text-sm text-gray-400">Cloud Computing</p>
                    <p className="text-sm text-gray-400">Containerization</p>
                    <p className="text-sm text-gray-400">Infrastructure as Code</p>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-green-400 mb-2">Learning Path</h5>
                    <p className="text-sm text-gray-400">AWS/Azure Certifications</p>
                    <p className="text-sm text-gray-400">Kubernetes</p>
                    <p className="text-sm text-gray-400">Terraform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;