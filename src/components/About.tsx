import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
        <p className="mb-4">
          I'm Soyam, a passionate Software Engineer who enjoys exploring frontend development and the exciting world of Machine Learning. My journey into tech started with a fascination for how modern digital experiences are built and how intelligent systems can enhance them.
        </p>
        <p className="mb-4">
          I love crafting responsive and visually engaging web applications using technologies like React, TypeScript, and Tailwind CSS. I'm also curious about how data-driven approaches can improve interactivity and personalization in web experiences.
        </p>
        <p>
          Outside of coding, I enjoy diving into new technologies and experimenting with design patterns. I'm a strong believer in continuous learning and always strive to sharpen my skills—both in development and emerging tech like AI and ML.
        </p>
      </div>
    </section>
  );
};

export default About;
