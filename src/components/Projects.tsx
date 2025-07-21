import React from 'react';

// Define the types for the props that ProjectCard will receive
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

// ProjectCard component - CORRECTLY destructures 'title', 'description', and 'technologies' from its props
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => { // <--- Fix is here!
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
          {/* You can add a 'View Details' button or link here if needed */}
          {/* <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">View Details</a> */}
        </div>
      </div>
    </div>
  );
};

// Projects component - it uses the ProjectCard component and passes props to it
const Projects: React.FC = () => {
  const projects = [
    {
      title: "Todo List Application",
      description: "A simple and intuitive task management application to help users keep track of their daily tasks.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "A classic Tic-Tac-Toe game implemented with interactive UI, allowing two players to compete.",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Automated Messaging System",
      description: "A Python-based script for automating messaging tasks, demonstrating backend scripting capabilities.",
      technologies: ["Python", "Selenium (or similar)", "Twilio (or similar)"],
    },
    {
      title: "IQM Website with Belle Atom",
      description: "Developed a dynamic website for IQM, leveraging modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    },
    // Add more projects here
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