import React, { useState } from "react";
import { Code, Server, Database, Cloud, Wrench } from "lucide-react";
import { useInView } from "../hooks/useInView"; // Make sure this path is correct

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5 });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp",
        },
        {
          name: "php",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Vercel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        },
        {
          name: "Netlify",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        },
        {
          name: "Linux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://tse3.mm.bing.net/th/id/OIP.UuaLkFWx4KDmdiCuQYO5wAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Vite",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "npm",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        },
        {
          name: "Postman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ];

  const activeCategory = skillCategories.find(
    (cat) => cat.title === selectedCategory
  );

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isTitleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring ideas
            to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
                selectedCategory === category.title
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-gray-800 text-gray-300 shadow-md hover:bg-gray-700"
              }`}
            >
              <span
                className={
                  selectedCategory === category.title
                    ? "text-white"
                    : "text-gray-400"
                }
              >
                {category.icon}
              </span>
              {category.title}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div
            key={activeCategory.title}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-gray-700 shadow-2xl animate-fade-in"
          >
            {/* **CHANGE HERE**: Replaced grid with flexbox for better centering */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  // **CHANGE HERE**: Added a fixed width to ensure proper wrapping
                  className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-900/50 rounded-lg h-32 w-32 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:bg-cyan-500/10"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
