import React, { useState } from 'react';
import ProjectCard, { Project } from './ui/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap(project => project.technologies)
    )
  );
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-[#161B22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#C9D1D9] mb-4">Projetos Recentes</h2>
          <p className="text-[#8B949E] max-w-2xl mx-auto">
            Uma coleção dos meus trabalhos recentes em arquitetura cloud, 
            automação de infraestrutura e soluções DevOps.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <FilterButton 
            label="Todos" 
            isActive={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')} 
          />
          {allTechnologies.map((tech, index) => (
            <FilterButton 
              key={index} 
              label={tech} 
              isActive={activeFilter === tech} 
              onClick={() => setActiveFilter(tech)} 
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center text-[#8B949E] mt-10">
            Nenhum projeto encontrado com o filtro selecionado.
          </div>
        )}
      </div>
    </section>
  );
};

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
        isActive 
          ? 'bg-[#2F81F7] text-white'
          : 'bg-[#0D1117] text-[#8B949E] hover:bg-[#30363D]'
      }`}
    >
      {label}
    </button>
  );
};

export default Projects;