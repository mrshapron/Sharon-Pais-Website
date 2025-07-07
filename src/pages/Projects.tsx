
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Stepper - Software Architecture Showcase",
      description: "A comprehensive Java-based project demonstrating advanced software architecture patterns and design principles.",
      technologies: ["Java", "Software Architecture", "Design Patterns", "OOP"],
      githubUrl: "https://github.com/mrshapron/stepper",
      highlights: [
        "Implemented advanced software architecture patterns",
        "Showcased object-oriented programming principles",
        "Demonstrated clean code practices and design patterns",
        "Built as part of BSc Computer Science degree project"
      ]
    },
    {
      title: "Full-Stack Microservices Platform",
      description: "Scalable microservices platform built with React.js frontend and Node.js backend, deployed on Azure with MongoDB and PostgreSQL databases.",
      technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Docker", "Azure", "RabbitMQ"],
      highlights: [
        "Designed and implemented scalable microservices architecture",
        "Integrated authentication and authorization with SSO",
        "Optimized RabbitMQ consumption for high-performance processing",
        "Deployed on Azure with Docker containerization"
      ]
    },
    {
      title: "Pango Fast Parking Backend Services",
      description: "High-availability backend services for parking management system handling thousands of concurrent users and real-time event processing.",
      technologies: [".NET Core", "AWS", "Entity Framework", "Microservices", "TDD", "Kibana"],
      highlights: [
        "Built scalable AWS-based microservices architecture",
        "Implemented high-rate event handling system",
        "Optimized database performance with Entity Framework",
        "Applied TDD methodology with dependency injection"
      ]
    },
    {
      title: "Flight Data Analysis System",
      description: "Comprehensive data processing system for Israeli Air Force, transforming raw flight data into structured formats with advanced visualization capabilities.",
      technologies: ["C#", ".NET", "WPF", "WinForms", "SQL Server", "MATLAB", "Excel"],
      highlights: [
        "Processed and analyzed large-scale flight data",
        "Created interactive data visualizations",
        "Built user-friendly desktop applications",
        "Implemented efficient data transformation pipelines"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <Code className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white flex items-center space-x-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 hover:scale-105"
            asChild
          >
            <a href="https://github.com/mrshapron" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
