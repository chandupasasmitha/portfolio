import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useInView } from "../hooks/useInView"; // Make sure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Refs for animation
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5 });
  const [infoRef, isInfoInView] = useInView({ threshold: 0.2 });
  const [formRef, isFormInView] = useInView({ threshold: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={20} />,
      label: "Email",
      value: "chandupasasmitha@gmail.com",
      link: "mailto:chandupasasmitha@gmail.com",
    },
    {
      icon: <Phone className="text-emerald-500" size={20} />,
      label: "Phone",
      value: "+94 76 854 0202",
      link: "tel:+94768540202",
    },
    {
      icon: <MapPin className="text-purple-500" size={20} />,
      label: "Location",
      value: "Moratuwa, Sri Lanka",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/chandupa",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/chandupa-sasmitha",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      url: "https://twitter.com/chandupa",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-x-hidden py-20 bg-gray-900"
    >
      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[5vh] left-[5vw] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[10vh] right-[10vw] w-[35vw] h-[35vw] bg-emerald-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isTitleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in
            technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isInfoInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating
                on interesting projects, or simply having a conversation about
                technology and innovation. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-medium hover:text-cyan-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 transition-all duration-1000 ease-out ${
              isFormInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-emerald-400/30"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-blue-200/80">
            © 2025 Chandupa Sasmitha. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
