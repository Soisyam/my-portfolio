import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
        <p className="mb-4">
          I'm Soyam, a passionate and driven frontend devith a ke   en eye for creating intuitive and visually appealing web experiences. My journey into the world of web development began with a fascination for how digital interfaces come to life.eloper w
        </p>
        <p className="mb-4">
          I specialize in building responsive and dynamic web applications using modern technologies like React, TypeScript, and Tailwind CSS. I enjoy turning complex problems into simple, beautiful, and functional designs.
        </p>
        <p>
          Beyond coding, I'm constantly exploring new technologies and design patterns to stay at the forefront of the industry. I believe in continuous learning and always strive to improve my craft.
        </p>
      </div>
    </section>
  );
};

export default About;