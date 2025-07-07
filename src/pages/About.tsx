
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'ReactJS', 'Node.JS', 'TypeScript', 'RabbitMQ', 'Microsoft Azure',
    'Nginx', 'ASP.NET(C#)', 'Java', 'Python', 'SQL(MySQL, PostgreSQL)',
    'NoSQL(MongoDB)', 'HTML5/CSS', 'AWS Beanstalk', 'GIT', 'MVC',
    'WPF', 'Web APIs', 'Docker', 'Lambda', 'Jenkins', 'ElasticSearch',
    'Kibana', 'Microservices'
  ];

  const languages = [
    { language: 'Hebrew', level: 5 },
    { language: 'English', level: 5 }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about creating scalable solutions and innovative software architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Personal Info */}
          <Card className="bg-slate-800/50 border-slate-700 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 text-blue-400" />
                Profile
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-slate-300">Tel Aviv, Israel</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-slate-300">4+ Years Experience</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-blue-400" size={20} />
                  <span className="text-slate-300">BSc Computer Science (In Progress)</span>
                </div>
              </div>
              
              <p className="text-slate-400 mt-6 leading-relaxed">
                Software Engineer specializing in scalable solutions, microservices architecture, 
                and LLM model integration. Seeking a full-time role to contribute to innovative 
                and efficient software development.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-slate-800/50 border-slate-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-400" />
                Education
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">BSc. Computer Science</h3>
                  <p className="text-blue-400">The Academic College of Tel Aviv-Yaffo</p>
                  <p className="text-slate-400">2021/10 – 2025/02</p>
                  <ul className="mt-2 text-slate-400 space-y-1">
                    <li>• Completed all coursework; currently finalizing degree project</li>
                    <li>• Developed 'Stepper', a Java-based project showcasing software architecture</li>
                    <li>• Available on GitHub: github.com/mrshapron/stepper</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-slate-700/50 text-slate-300 px-3 py-2 rounded-lg text-sm text-center hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-200 hover:scale-105"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="bg-slate-800/50 border-slate-700 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Languages</h2>
            <div className="space-y-4">
              {languages.map(({ language, level }) => (
                <div key={language} className="flex items-center justify-between">
                  <span className="text-slate-300 font-medium">{language}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < level ? 'bg-blue-400' : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
