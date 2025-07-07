import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location?: string;
  achievements: string[];
  technologies?: string[];
  url?: string; // <-- NEW
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Infotale",
      url: "https://infotale.com", // <-- NEW
      position: "Full Stack Software Engineer",
      duration: "2024/01 – present",
      achievements: [
        "Designed and developed full-stack applications with React.js, Node.js, MongoDB, and PostgreSQL in a Docker-based environment",
        "Designed and implemented scalable microservices on Azure, optimising RabbitMQ consumption for high-performance processing",
        "Implemented authentication, authorisation, and Single Sign-On (SSO) to enhance security across services",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Azure",
        "RabbitMQ",
        "SSO",
      ],
    },
    {
      company: "Pango Parking Ltd.",
      url: "https://pango.co.il", // <-- NEW
      position: "Backend Software Developer",
      duration: "2020/02 – 2021/09",
      achievements: [
        "Developed and optimised backend services for Pango Fast Parking, ensuring high availability and performance",
        "Designed and deployed scalable AWS-based microservices using .NET Core, balancing high-rate event handling and user scalability",
        "Optimised database performance and access using Entity Framework, improving query efficiency",
        "Implemented TDD-based microservices architecture with Dependency Injection",
        "Enhanced system monitoring and troubleshooting through Kibana log-analysis queries",
      ],
      technologies: [
        "AWS",
        ".NET Core",
        "Entity Framework",
        "TDD",
        "Dependency Injection",
        "Kibana",
      ],
    },
    {
      company: "Israeli Air Force – Flight Test Center (Manat)",
      position: "Software Developer",
      duration: "2017/06 – 2020/02",
      achievements: [
        "Transformed raw flight data into structured, analysable formats (Excel reports, MATLAB visualisations)",
        "Built user applications with .NET tech (C#, WPF, WinForms, WebForms), optimising performance and usability",
        "Designed and implemented large-scale SQL-based data systems for efficient flight-data management",
      ],
      technologies: ["C#", "WPF", "WinForms", "WebForms", ".NET", "SQL", "MATLAB", "Excel"],
    },
  ];

  const education = {
    title: "Educational Experience & Contributions",
    position: "High-School Teacher & Private Tutor",
    achievements: [
      "Tutored high-school students (4–5 units) in computer science, physics, and mathematics",
      "Taught Python to junior-high students for over a year",
      "Mentored 12th-grade students in computer-science projects, improving their problem-solving and programming skills",
    ],
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h1>
          <p className="text-xl text-slate-400">
            Building scalable solutions across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  {/* Position + Company */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <div className="flex items-center space-x-2 text-blue-400 font-semibold mb-2">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <>
                          <span>{exp.company}</span>
                          
                        </>
                      )}
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="flex flex-col md:items-end text-slate-400">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="text-slate-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Education Section */}
          <Card
            className="bg-slate-800/50 border-slate-700 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{education.title}</h3>
              <p className="text-blue-400 font-semibold mb-4">{education.position}</p>

              <ul className="space-y-2">
                {education.achievements.map((ach, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
