import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 text-lg leading-relaxed">{description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Todo List Application",
      description: "A simple and intuitive task management application to help users keep track of their daily tasks.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Soisyam/todo-app.git",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "A classic Tic-Tac-Toe game implemented with interactive UI, allowing two players to compete.",
      technologies: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Soisyam/TicTacToe.git",
    },
    {
      title: "Automated Messaging System",
      description: "A Python-based script for automating messaging tasks, demonstrating backend scripting capabilities.",
      technologies: ["Python", "Selenium (or similar)", "Twilio (or similar)"],
      githubUrl: "https://github.com/Soisyam/automated-messaging.git",
    },
  ];

  return (
    <section id="projects" className="py-16">
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
