import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <img
            src={`${import.meta.env.BASE_URL}uploads/9adf4add-1d4e-4393-ae3d-e98bf0226510.png`}
            alt="Sharon Pais"
            className="
              w-48 h-48 rounded-full mx-auto object-cover
              border-4 border-blue-400/20 shadow-2xl
              hover:border-blue-400/40
              transition-all duration-300
            "
          />
        </div>

        {/* Hero Content */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Sharon <span className="text-blue-400">Pais</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6">
            Backend/Full-Stack Software Engineer
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Software Engineer with
            <span className="text-blue-400 font-semibold"> 4+ years of experience</span>{" "}
            specializing in scalable solutions, microservices architecture, and LLM model
            integration. Currently pursuing my
            <span className="text-blue-400 font-semibold"> BSc in Computer Science</span> while
            contributing to innovative software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/experience">
              <Button
                className="
                  bg-blue-600 hover:bg-blue-700 text-white
                  px-8 py-3 text-lg rounded-lg
                  transition-all duration-200 hover:scale-105
                  flex items-center space-x-2
                "
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </Button>
            </Link>

            <Button
              variant="outline"
              asChild
              className="
    border-blue-500 text-blue-600
   hover:text-blue
    px-8 py-3 text-lg rounded-lg
    transition-all duration-200 hover:scale-105
    flex items-center space-x-2
  "
            >
              <a href="/uploads/sharon-pais-cv.pdf" download>
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/mrshapron"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-slate-400 hover:text-blue-400
                transition-colors duration-200
                hover:scale-110 transform
              "
            >
              <Github size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/sharon-pais"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-slate-400 hover:text-blue-400
                transition-colors duration-200
                hover:scale-110 transform
              "
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="mailto:mrsharpais@gmail.com"
              className="
                text-slate-400 hover:text-blue-400
                transition-colors duration-200
                hover:scale-110 transform
              "
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
