import React from "react";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Wrench,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Sass",
        "Redux",
        "Next.js",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="text-green-600" size={24} />,
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "Flask",
        "REST APIs",
        "GraphQL",
        "Microservices",
        "JWT Authentication",
      ],
    },
    {
      title: "Database Technologies",
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase Firestore",
        "SQLite",
        "Prisma",
        "Mongoose",
      ],
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="text-cyan-600" size={24} />,
      skills: [
        "React Native",
        "Flutter",
        "Dart",
        "Android Studio",
        "Xcode",
        "Expo",
        "Mobile UI/UX",
        "App Store Deployment",
      ],
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Docker",
        "Webpack",
        "Vite",
        "npm",
        "yarn",
        "ESLint",
        "Prettier",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-indigo-600" size={24} />,
      skills: [
        "AWS",
        "Firebase",
        "Vercel",
        "Netlify",
        "Heroku",
        "Docker",
        "CI/CD",
        "Linux",
        "Nginx",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full">
            <span className="font-medium">
              Always learning and exploring new technologies
            </span>
            <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
