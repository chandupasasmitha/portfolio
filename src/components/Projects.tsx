import React from "react";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  // Placeholder projects - can be updated with real projects later
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and mySQL. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "php", "mySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-600" size={20} />,
      status: "In Development",
    },
    {
      title: "A Tourism App",
      description: "A flutter mobile application for tourists can ----> dummy.",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      icon: <Smartphone className="text-emerald-600" size={20} />,
      status: "Planning",
    },
    {
      title: "Code Snippet Manager",
      description:
        "A web application for developers to save, organize, and share code snippets with syntax highlighting and search functionality.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "TypeScript", "Supabase"],
      category: "Web App",
      icon: <Code className="text-purple-600" size={20} />,
      status: "Concept",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development journey and the solutions I'm building
            to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-sm font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "In Development"
                        ? "bg-yellow-100 text-yellow-800"
                        : project.status === "Planning"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            More exciting projects coming soon!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
