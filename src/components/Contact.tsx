import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white"> {/* Added bg-gray-900 to ensure section background */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Contact Information */}
          <div className="lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-3xl font-semibold mb-4 text-white">Contact Information</h3>

            {/* Email Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-start space-x-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-yellow-400">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Email</h4>
                <p className="text-gray-300">soyamrai18@gmail.com</p> {/* Normal Email */}
                <p className="text-gray-400 text-sm mt-1">
                  Connect for inquiries and collaborations.
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-start space-x-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-yellow-400">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Phone</h4>
                <p className="text-gray-300">+91 9883865433</p>
                <p className="text-gray-400 text-sm mt-1">
                  Reach out for urgent discussions or projects.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-start space-x-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-yellow-400">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Location</h4>
                <p className="text-gray-300">Sikkim, India</p>
                <p className="text-gray-400 text-sm mt-1">
                  Open to remote opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Connect With Me & Response Time */}
          <div className="lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-3xl font-semibold mb-4 text-white">Connect With Me</h3>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-300 text-lg mb-6">
                I'm always interested in discussing new opportunities, web development challenges, and innovative projects. Whether you need a software consultation, partnership, or just want to connect, I'm here to help.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-white">Find me on</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=soyam-rai-356703331" // IMPORTANT: Replace with your actual LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white py-3 px-6 rounded-md flex items-center justify-center space-x-3 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300 shadow-md"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                  <span className="font-semibold">LinkedIn</span>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/" // IMPORTANT: Replace with your actual GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white py-3 px-6 rounded-md flex items-center justify-center space-x-3 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300 shadow-md"
                >
                  <i className="fab fa-github text-2xl"></i>
                  <span className="font-semibold">GitHub</span>
                </a>
                {/* Add other social links if you have them, e.g., TryHackMe, HackTheBox */}
                {/* Example for TryHackMe (replace with your link and actual icon if available) */}
                {/* <a
                  href="https://tryhackme.com/p/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white py-3 px-6 rounded-md flex items-center justify-center space-x-3 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300 shadow-md"
                >
                  <i className="fas fa-terminal text-2xl"></i> // Example icon, find a better one if possible
                  <span className="font-semibold">TryHackMe</span>
                </a> */}
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-white">Response Time</h4>
              <p className="text-gray-300">
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