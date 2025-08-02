import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* Contact Information Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl text-yellow-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:soyamrai18@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                      soyamrai18@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Connect for inquiries and collaborations.</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl text-yellow-400">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <a href="tel:+919883865433" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                      +91 9883865433
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Reach out for urgent discussions or projects.</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl text-yellow-400">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Sikkim, India</p>
                    <p className="text-sm text-gray-500 mt-1">Open to remote opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Me Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h3>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in discussing new opportunities, web development challenges, and innovative projects. If you want to connect, I'm here to help.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Find me on</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn Button */}
              <a href="https://www.linkedin.com/in/soyam-rai-3567033" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-2xl"><i className="fab fa-linkedin"></i></div>
                <span className="font-medium hidden sm:block">LinkedIn</span>
              </a>
              
              {/* GitHub Button */}
              <a href="https://github.com/Soisyam" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-2xl"><i className="fab fa-github"></i></div>
                <span className="font-medium hidden sm:block">GitHub</span>
              </a>
            </div>

            {/* Response Time Card */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md mt-6 hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
              <p className="text-gray-400">
                I typically respond to emails within 1-2 business days. For urgent matters, please call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;