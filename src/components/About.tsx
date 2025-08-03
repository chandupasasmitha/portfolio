import React from "react";
import { GraduationCap, Code, Smartphone, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-blue-600" size={24} />,
      title: "Academic Excellence",
      description:
        "Pursuing undergraduate studies at Faculty of Information Technology, University of Moratuwa",
    },
    {
      icon: <Code className="text-cyan-600" size={24} />,
      title: "Full-Stack Development",
      description:
        "Building comprehensive web applications with modern technologies and best practices",
    },
    {
      icon: <Smartphone className="text-emerald-600" size={24} />,
      title: "Mobile Development",
      description:
        "Creating innovative mobile applications for iOS and Android platforms",
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      title: "Emerging Technologies",
      description:
        "Always learning and adapting to the latest trends in technology and development",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Chandupa Sasmitha"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                I'm an enthusiastic undergraduate student at the prestigious
                Faculty of Information Technology, University of Moratuwa, where
                I'm developing a strong foundation in computer science and
                software engineering principles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My passion lies in staying at the forefront of technological
                innovation. I'm constantly exploring new frameworks, tools, and
                methodologies to enhance my development skills and create
                impactful solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently, I'm focusing on mastering full-stack development and
                mobile application development, with the goal of building
                applications that make a real difference in people's lives.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Innovation Focused
              </span>
            </div>
          </div>

          <div className="lg:order-3 lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-3">
                  {highlight.icon}
                  <h3 className="ml-3 font-semibold text-gray-900">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
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
