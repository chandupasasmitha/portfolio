import React from "react";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";
import npkImage from "../assets/npk.png";
import appImage from "../assets/travelwishapp.png";
import { useInView } from "../hooks/useInView";

const Projects = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5 });
  const [gridRef, isGridInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "A Tourism App",
      description:
        "Developed a mobile application to assist tourists with end-to-end trip planning. Features include destination discovery, accommodation booking, real-time notifications, and advanced filtering for a personalized experience.",
      image: appImage,
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      category: "Mobile",
      icon: <Smartphone className="text-emerald-500" size={20} />,
      status: "Planning",
    },
    {
      title: "NPK Data Tracker Web App",
      description:
        "A web app for real-time soil NPK monitoring. Integrates with hardware sensors, stores historical trends, and uses GPS to map sample locations, improving agricultural decision-making.",
      image: npkImage,
      tech: ["React", "TypeScript", "Supabase"],
      category: "Web App",
      icon: <Code className="text-purple-500" size={20} />,
      status: "Concept",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and MySQL. Features include user authentication, payment integration, and an intuitive admin dashboard for managing products.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and MySQL. Features include user authentication, payment integration, and an intuitive admin dashboard for managing products.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and MySQL. Features include user authentication, payment integration, and an intuitive admin dashboard for managing products.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with HTML, CSS, php, and MySQL. Features include user authentication, payment integration, and an intuitive admin dashboard for managing products.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "In Development",
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
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
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
                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-700/50">
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Demo</span>
                  </button>
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
