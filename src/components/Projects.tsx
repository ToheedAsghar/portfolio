
import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Virtual Fashion Fit",
      description: "Virtual Fashion Fit is a cutting-edge application that enables users to virtually try on traditional garments, helping them visualize fit and style. The project integrates computer vision techniques for accurate garment detection and overlay, with a robust ASP.NET Core back-end to handle data processing and application logic. The front-end is built using Angular, providing a dynamic and user-friendly interface that incorporates real-time image processing for seamless interaction. This innovative solution combines technology and fashion to enhance the user experience in garment selection.",
      tags: ["Angular", "Computer Vision", "Deep Learning", ".NET", "NLP" ],
      imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
      // githubUrl: "https://github.com",
      // liveUrl: "https://example.com"
    },
    {
      title: "Gadget Gourmet E-Commerce",
      description: "Gadget Gourment is an e-commerce platform designed to sell modern kitchen gadgets, offering a seamless shopping experience with intuitive product search, secure checkout, and user authentication. Built using Blazor and ASP.NET Core with SQL Server, it features a responsive UI styled, ensuring smooth navigation and an engaging user experience.",
      tags: [".NET 8", "Blazor", "RESTful API", "Authentication", "MVC", "Bootstrap"],
      imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
      githubUrl: "https://github.com/ToheedAsghar/Gadget-Gourmet"
    },
    {
      title: "Smart Meters in London - Kaggle",
      description: "This project showcases my proficiency in data analytics and machine learning by analyzing the Smart Meters in London dataset from Kaggle, which contains detailed household electricity usage records across London. I performed comprehensive data preprocessing, exploratory data analysis (EDA) to uncover consumption trends, and implemented predictive models to forecast energy usage and identify optimization opportunities. The project highlights my ability to transform raw data into actionable insights, providing recommendations for improving energy efficiency and demonstrating my expertise in handlingreal-world datasets and AI methodologies in the energy domain.",
      tags: ["Data Analysis", "Machine Learning", "Pandas", "Python Programming", "Time Series Analysis", "Exploratory Data Analysis (EDA)", "Kaggle", "Regression"],
      imageUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80",
      githubUrl: "https://github.com/ToheedAsghar/Smart-Meters-London-Analytics",
      // liveUrl: ""
    },
    // {
    //   title: "Code Analysis Tool",
    //   description: "A static code analysis tool for C# that identifies potential performance issues and suggests improvements.",
    //   tags: ["C#", "Roslyn API", "SOLID", "Git Integration"],
    //   imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80",
    //   githubUrl: "https://github.com"
    // },
    // {
    //   title: "Smart Inventory Management",
    //   description: "A .NET-based inventory system with demand forecasting and automated ordering capabilities.",
    //   tags: [".NET Core", "ML.NET", "Entity Framework", "Azure"],
    //   imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com"
    // },
    // {
    //   title: "DevOps Pipeline Automation",
    //   description: "A suite of tools to automate CI/CD pipelines for .NET applications across multiple cloud platforms.",
    //   tags: ["Azure DevOps", "PowerShell", "Docker", "Kubernetes"],
    //   imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80",
    //   githubUrl: "https://github.com"
    // }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-400/50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my recent work and contributions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/toheedasghar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-dark-100 text-white rounded-lg font-medium border border-glow-blue/30 hover:border-glow-blue inline-flex items-center gap-2 transition-all"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
