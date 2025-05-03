import React from 'react';
import { Star, GitFork } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  url: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 h-full flex flex-col">
      <div className="p-5 flex-grow">
        <h3 className="text-[#2F81F7] text-lg font-semibold mb-2 font-mono flex items-center">
          <span className="mr-2">📂</span>
          {project.title}
        </h3>
        <p className="text-[#C9D1D9] mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap mt-3 mb-3 gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-[#0D1117] text-[#8B949E] border border-[#30363D]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-[#30363D] bg-[#0D1117] flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-[#8B949E]">
            <Star size={16} className="mr-1 text-[#E3B341]" />
            <span className="text-xs">{project.stars}</span>
          </div>
          <div className="flex items-center text-[#8B949E]">
            <GitFork size={16} className="mr-1" />
            <span className="text-xs">{project.forks}</span>
          </div>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#2F81F7] hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;