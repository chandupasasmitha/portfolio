import React from "react";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";
import npkImage from "../assets/npk.png";
import appImage from "../assets/travelwishapp.png";

const Projects = () => {
  const projects = [
    {
      title: "A Tourism App",
      description:
        "Developed a mobile application to assist tourists with end-to-end trip planning. The app allows users to discover destinations, book accommodations, and access local services. It features booking history tracking, real-time notifications for confirmations and advanced filters for budget, location, and availability. Tourists can also securely manage their profiles and preferences to ensure a personalized travel experience.",
      image: appImage,
      tech: ["flutter", "node js", "express js", "mongo DB"],
      category: "Mobile",
      icon: <Smartphone className="text-emerald-500" size={20} />,
      status: "Planning",
    },
    {
      title: " NPK Data Tracker App(Web App)",
      description:
        " Developed a web application for real-time soil NPK monitoring. The app integrates with hardware sensors for live data, stores historical trends, and uses GPS to map sample locations. It also allows for manual data entry, all through a user-friendly interface designed to improve agricultural decision-making.",
      image: npkImage,
      tech: ["React", "TypeScript", "Supabase"],
      category: "Web App",
      icon: <Code className="text-purple-500" size={20} />,
      status: "Concept",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and mySQL. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "php", "mySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and mySQL. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "php", "mySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my development journey and the solutions I'm building
            to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-sm font-medium text-gray-200">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "In Development"
                        ? "bg-yellow-400/20 text-yellow-300"
                        : project.status === "Planning"
                        ? "bg-blue-400/20 text-blue-300"
                        : "bg-gray-400/20 text-gray-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            More exciting projects coming soon!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
