
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-[length:200%_200%] animate-fade-gradient z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto p-8">
          <Hero />
          <About />
          <section id="services" className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-12">My Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl text-yellow-400 mb-4"><i className="fas fa-desktop"></i></div>
                  <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
                  <p className="text-gray-400">Creating intuitive and engaging user interfaces and experiences.</p>
                  </div>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl text-yellow-400 mb-4"><i className="fas fa-code"></i></div>
                  <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                  <p className="text-gray-400">Building responsive and dynamic web applications with modern technologies like React.</p>
                  </div>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl text-yellow-400 mb-4"><i className="fas fa-brain"></i></div>
                  <h3 className="text-2xl font-semibold mb-4">AI & ML Solutions</h3>
                  <p className="text-gray-400">Exploring and implementing Artificial Intelligence and Machine Learning concepts.</p>
                  </div>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl text-yellow-400 mb-4"><i className="fas fa-cogs"></i></div>
                  <h3 className="text-2xl font-semibold mb-4">Programming</h3>
                  <p className="text-gray-400">Proficiency in C, C++, Python, Java, and Dart for various applications.</p>
                  </div>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl text-yellow-400 mb-4"><i className="fas fa-project-diagram"></i></div>
                  <h3 className="text-2xl font-semibold mb-4">Project Development</h3>
                  <p className="text-gray-400">Experience in building practical applications, from To-Do lists to automation tools.</p>
                  </div>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl text-yellow-400 mb-4"><i className="fas fa-users-cog"></i></div>
                  <h3 className="text-2xl font-semibold mb-4">Industry Experience</h3>
                  <p className="text-gray-400">Web design at IQM and React/JavaScript internship at SMIT's Student Research Forum.</p>
                  </div>
              </div>
          </section>
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};