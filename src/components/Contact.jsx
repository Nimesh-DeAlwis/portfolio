import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in collaboration, opportunities, or just want to chat about technology? 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <FiMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:tharindualwis2003@gmail.com" className="text-gray-400 hover:text-blue-400">
                      tharindualwis2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <FiPhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-400">0701675084 / 0768476349</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <FiMapPin className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Current Role</h4>
                    <p className="text-gray-400">Technical Support Executive</p>
                    <p className="text-sm text-gray-500">mypos Software Solutions</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="font-bold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Nimesh-DeAlwis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/tharindu-nimesh-de-alwis-a5b589327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="font-bold text-lg mb-3">🚀 Career Objective</h4>
              <p className="text-gray-300 mb-4">
                Seeking opportunities as a Cloud DevOps Engineer where I can leverage my 
                technical support experience and development skills to build scalable, 
                reliable cloud infrastructure.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <FiCheckCircle /> Open to remote & onsite opportunities
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-8">Send Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                <FiCheckCircle className="text-green-400" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-[1.02]"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;