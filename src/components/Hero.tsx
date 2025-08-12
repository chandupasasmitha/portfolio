import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background color */}
      <div className="absolute inset-0 bg-gray-900"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Chandupa Sasmitha
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-light">
              Full-Stack Developer & Tech Enthusiast
            </p>
          </div>

          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Undergraduate at Faculty of Information Technology, University of
            Moratuwa, passionate about emerging technologies and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >
              Explore My Work
            </button>

            <div className="flex space-x-4">
              <a
                href="mailto:chandupa@example.com"
                aria-label="Send me an email"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com"
                aria-label="View my GitHub profile"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="View my LinkedIn profile"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to about section"
            className="p-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
