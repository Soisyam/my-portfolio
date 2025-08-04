import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-gray-800">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-[length:200%_200%] animate-fade-gradient z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto p-8 space-y-20">
          {/* Hero Section with Fade-Up Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Hero />
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>

          {/* Services Section */}
          <motion.section
            id="services"
            className="py-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'fas fa-desktop',
                  title: 'UI/UX Design',
                  desc: 'Creating intuitive and engaging user interfaces and experiences.',
                },
                {
                  icon: 'fas fa-code',
                  title: 'Web Development',
                  desc: 'Building responsive and dynamic web applications with modern technologies like React.',
                },
                {
                  icon: 'fas fa-brain',
                  title: 'AI & ML Solutions',
                  desc: 'Exploring and implementing Artificial Intelligence and Machine Learning concepts.',
                },
                {
                  icon: 'fas fa-cogs',
                  title: 'Programming',
                  desc: 'Proficiency in C, C++, Python, Java, and Dart for various applications.',
                },
                {
                  icon: 'fas fa-project-diagram',
                  title: 'Project Development',
                  desc: 'Experience in building practical applications, from To-Do lists to automation tools.',
                },
                {
                  icon: 'fas fa-users-cog',
                  title: 'Industry Experience',
                  desc: "Web design at IQM and React/JavaScript internship at SMIT's Student Research Forum.",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-white/20 transition duration-300"
                >
                  <div className="text-5xl text-yellow-400 mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Projects />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
