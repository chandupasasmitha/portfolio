import React from "react";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";
import npkImage from "../assets/npk.png";
import npkJpeg from "../assets/npk.jpg";
import appImage from "../assets/travelwishapp.png";
import portfolioImage from "../assets/portfolio.png";
import bobaImage from "../assets/bobalicious.jpeg";
import webImage from "../assets/travelwishweb.png";
import budgetImage from "../assets/budgetwise.png";
import wasteImage from "../assets/waste.jpg";
import skyCast from "../assets/skycast.jpg";
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
      demo: "https://www.linkedin.com/posts/chandupa-sasmitha_travelwish-fullstackdevelopment-flutter-activity-7381954290413793280-JdYP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOIoX0B82BQRTJ7IcW9pVPTL9MzAmKWHuI",
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
      demo: "https://www.linkedin.com/posts/dulanjana-dilshan-6bb13a2ba_proud-to-announce-the-successful-completion-ugcPost-7380465453787262976-aORv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOIoX0B82BQRTJ7IcW9pVPTL9MzAmKWHuI",
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
      github: "https://github.com/nethmalgunawardhana/NPK-Data-Tracker",
      demo: "https://npk-data-tracker-655de.web.app",
    },

    {
      title: "Budgetwise",
      description:
        "Built a company budget management website with ledger creation for specific months or tasks, collaborator access control, and dynamic chart visualizations for financial insights.",
      image: budgetImage,
      tech: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "Completed",
      github: "https://github.com/chandupasasmitha/budgetwise",
      demo: "https://budgetwise-one.vercel.app/dashboard",
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
      demo: "https://www.linkedin.com/posts/chandupa-sasmitha_webdevelopment-ecommerce-bubbletea-activity-7298650173512003585-_gMQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOIoX0B82BQRTJ7IcW9pVPTL9MzAmKWHuI",
    },

    {
      title: "Waste Management Mobile App",
      description:
        "A waste management app concept that connects users with nearby collectors, shows collection schedules, and rewards proper disposal. Points earned can be redeemed for essentials at supermarkets and grocery stores, promoting sustainable living.",
      image: wasteImage,
      tech: ["React Native", "Node.js", "Express.js", "MongoDB"],
      category: "Full-Stack",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "in Development",
      github: "https://github.com/UomLeos-RC-WasteManagement",
      demo: "",
    },
    {
      title: "Portfolio",
      description:
        "Personal portfolio website showcasing projects, skills, and contact information. Built with Vite, React, TypeScript and Tailwind CSS; includes a contact form integrated with EmailJS.",
      image: portfolioImage,
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "Web",
      icon: <Globe className="text-blue-500" size={20} />,
      status: "Completed",
      github: "https://github.com/chandupasasmitha/portfolio",
      demo: "chandupasasmitha.me",
    },
    {
      title: "Smart Soil Monitor (NPK)",
      description:
        "Level‑01 IoT device that measures soil NPK and displays readings on an LCD, website and mobile app; caches data to SD when offline and gives immediate soil suitability feedback.",
      image: npkJpeg,
      tech: [
        "ESP32",
        "NPK Sensor",
        "LCD",
        "SD Card",
        "Wi‑Fi",
        "React",
        "React Native",
      ],
      category: "IoT",
      icon: <Globe className="text-amber-400" size={20} />,
      status: "Completed",
      github: "",
      demo: "https://www.linkedin.com/posts/chandupa-sasmitha_smartsoiltracker-agritech-iot-activity-7362745836004388864-F8dJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOIoX0B82BQRTJ7IcW9pVPTL9MzAmKWHuI",
    },
    {
      title: "Weather Forecasting App",
      description:
        "React Native (Expo) app that fetches current weather and hourly forecasts via OpenWeatherMap; users search by city for instant temp, humidity and condition updates.",
      image: skyCast,
      tech: ["React Native", "Expo", "OpenWeatherMap API", "JavaScript"],
      category: "Mobile",
      icon: <Smartphone className="text-emerald-500" size={20} />,
      status: "Completed",
      github: "https://github.com/chandupasasmitha/WeatherApp",
      demo: "https://www.linkedin.com/in/chandupa-sasmitha/details/projects/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
