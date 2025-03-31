
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow-blue hover:scale-[1.02] group">
      <div className="relative overflow-hidden h-52">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="heading-sm text-white mb-2 group-hover:text-glow-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-dark-100 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-glow-blue transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-glow-blue transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
