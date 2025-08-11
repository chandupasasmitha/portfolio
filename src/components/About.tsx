import React from "react";
import { GraduationCap, Code, Smartphone, Globe } from "lucide-react";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-blue-500" size={24} />,
      title: "Academic Excellence",
      description:
        "Pursuing undergraduate studies at Faculty of Information Technology, University of Moratuwa.",
    },
    {
      icon: <Code className="text-cyan-500" size={24} />,
      title: "Full-Stack Development",
      description:
        "Building comprehensive web applications with modern technologies and best practices.",
    },
    {
      icon: <Smartphone className="text-emerald-500" size={24} />,
      title: "Mobile Development",
      description:
        "Creating innovative mobile applications for iOS and Android platforms.",
    },
    {
      icon: <Globe className="text-purple-500" size={24} />,
      title: "Emerging Technologies",
      description:
        "Always learning and adapting to the latest trends in technology and development.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Photo */}
          <div className="lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl shadow-cyan-500/20">
                <img
                  src={profileImage}
                  alt="Chandupa Sasmitha"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 space-y-8">
            <div className="space-y-4 text-lg text-gray-300">
              <p className="leading-relaxed">
                I'm an enthusiastic undergraduate student at the prestigious
                Faculty of Information Technology, University of Moratuwa, where
                I'm developing a strong foundation in computer science and
                software engineering principles.
              </p>
              <p className="leading-relaxed">
                My passion lies in staying at the forefront of technological
                innovation. I'm constantly exploring new frameworks, tools, and
                methodologies to enhance my development skills and create
                impactful solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Innovation Focused
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:order-3 lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-cyan-600"
              >
                <div className="flex items-center mb-3">
                  {highlight.icon}
                  <h3 className="ml-3 font-semibold text-white">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
