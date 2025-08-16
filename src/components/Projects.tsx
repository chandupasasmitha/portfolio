import React from "react";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";
import npkImage from "../assets/npk.png";
import appImage from "../assets/travelwishapp.png";
import bobaImage from "../assets/bobalicious.jpeg";
import webImage from "../assets/travelwishweb.png";
import healthImage from "../assets/mindlink.png";
import wasteImage from "../assets/waste.jpg";
import { useInView } from "../hooks/useInView";

const Projects = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5 });
  const [gridRef, isGridInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "A Tourism App - TravelWish",
      description:
        "Developed a mobile application to assist tourists with end-to-end trip planning. Features include destination discovery, accommodation booking, hiring tour guides, reserving restaurants, accessing other tourism services, real-time notifications, and advanced filtering for a personalized experience.",
      image: appImage,
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      category: "Mobile",
      icon: <Smartphone className="text-emerald-500" size={20} />,
      status: "Completed",
      github: "https://github.com/chandupasasmitha/Travel-Wish",
      demo: "https://travelwish-app-demo.com",
    },
    {
      title: "TravelWish - Part II",
      description:
        "Developed a service provider website for tourism businesses, including accommodation providers, tour guides, restaurants, taxi drivers, and other services. Features include registration, profile management, booking and payment tracking, and real-time notifications to efficiently connect with travelers.",
      image: webImage,
      tech: ["Next.js", "Express.js", "Node.js", "MongoDB"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "Completed",
      github: "https://github.com/CodeCraftersUOM",
      demo: "https://travelwish-service-provider-demo.com",
    },
    {
      title: "NPK Data Tracker Web App",
      description:
        "A web app for real-time soil NPK monitoring. Integrates with hardware sensors, stores historical trends, and uses GPS to map sample locations, improving agricultural decision-making.",
      image: npkImage,
      tech: ["React", "TypeScript", "Firebase", "Firestore"],
      category: "Web App",
      icon: <Code className="text-purple-500" size={20} />,
      status: "Completed",
      github: "https://github.com/yourusername/npk-data-tracker",
      demo: "https://npk-data-tracker-demo.com",
    },
    {
      title: "E-Commerce Platform - Bobalicious",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and MySQL. Features include user authentication, payment integration, and an intuitive admin dashboard for managing products.",
      image: bobaImage,
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "Completed",
      github: "https://github.com/chandupasasmitha/BOBALICIOUS",
      demo: "https://bobalicious-demo.com",
    },
    {
      title: "MindLink",
      description:
        "MindLink is a confidential and anonymous digital community designed for university students to express their thoughts, track emotional health, and access help without fear of stigma. It combines peer support, self-tracking tools, and professional resources in one secure ecosystem.",
      image: healthImage,
      tech: ["React", "Tailwind", "Ballerina", "MongoDB"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
      github: "https://github.com/yourusername/mindlink",
      demo: "https://mindlink-demo.com",
    },
    {
      title: "Waste Management Mobile App",
      description:
        "A waste management app concept that connects users with nearby collectors, shows collection schedules, and rewards proper disposal. Points earned can be redeemed for essentials at supermarkets and grocery stores, promoting sustainable living.",
      image: wasteImage,
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "Concept",
      github: "https://github.com/yourusername/waste-management-app",
      demo: "https://waste-management-app-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isTitleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col transition-all duration-500 ease-out hover:shadow-cyan-500/20 hover:-translate-y-2 ${
                isGridInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                {/* Category & Status badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center gap-1">
                    {project.icon}
                    {project.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      project.status.toLowerCase() === "completed"
                        ? "bg-green-600 text-white"
                        : project.status.toLowerCase() === "in development"
                        ? "bg-yellow-500 text-white"
                        : project.status.toLowerCase() === "planning"
                        ? "bg-blue-500 text-white"
                        : project.status.toLowerCase() === "concept"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub and Demo links */}
                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
