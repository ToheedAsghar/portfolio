
import React from 'react';
import SectionTitle from './SectionTitle';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="glass-card p-6 rounded-xl transition-all hover:shadow-glow-blue">
    <h3 className="heading-sm text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-4 py-2 bg-dark-100 text-gray-300 rounded-lg text-sm font-medium hover:bg-glow-blue/10 hover:text-white transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: ".NET & Backend",
      skills: [
        "C#", 
        ".NET Core", 
        "ASP.NET MVC", 
        "Entity Framework", 
        "Web API", 
        "LINQ", 
        "Microservices", 
        "SignalR"
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        "ML.NET", 
        "Machine Learning Algorithms",
        "Python", 
        "TensorFlow", 
        "PyTorch", 
        "Deep Learning", 
        "Neural Networks", 
        "Computer Vision"
      ]
    },
    {
      title: "Database",
      skills: [
        "SQL Server", 
        "Oracle SQL",
        "Entity Framework Core"
      ]
    },
    // {
    //   title: "DevOps & Cloud",
    //   skills: [
    //     "Azure", 
    //     "Docker", 
    //     "Kubernetes", 
    //     "CI/CD", 
    //     "GitHub Actions", 
    //   ]
    // },
    {
      title: "Frontend",
      skills: [
        "JavaScript", 
        "TypeScript", 
        "React", 
        "Angular", 
        "HTML", 
        "CSS", 
        "Blazor",
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        "Git", 
        "Visual Studio", 
        "VS Code", 
        "JetBrains Rider", 
        "REST", 
        "GraphQL", 
        "SOLID", 
        "Clean Architecture"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="My technical toolkit and areas of Interest"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
