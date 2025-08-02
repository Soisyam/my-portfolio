// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 text-md leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-4 flex-wrap">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded transition-all duration-300 shadow-lg"
        >
          <FaGithub /> View Code
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-4 py-2 rounded transition-all duration-300 shadow-lg"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Todo List Application",
      description:
        "A simple and intuitive task management app to help users track their daily goals.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Soisyam/todo-app.git",
      liveUrl: "https://srf-internship-p6c1.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "A classic Tic-Tac-Toe game with a playful UI, allowing two players to compete.",
      technologies: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Soisyam/TicTacToe.git",
      liveUrl: "https://tic-tac-toe-chi-ivory.vercel.app/",
    },
    {
      title: "Automated Messaging System",
      description:
        "Python-based script for automating WhatsApp messaging tasks — practical backend automation.",
      technologies: ["Python", "Selenium", "Twilio"],
      githubUrl: "https://github.com/Soisyam/automated-messaging.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
