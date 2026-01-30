import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Terminal, Code, Database, Cpu, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Message sent successfully! 🚀');
      setIsSubmitting(false);
      e.target.reset();
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const projects = [
    {
      title: "AI TensorFlow Project",
      description: "Advanced machine learning model using TensorFlow for image classification with 95% accuracy",
      tech: ["Python", "TensorFlow", "NumPy", "Pandas"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      title: "Next.js E-Commerce Platform",
      description: "Full-stack e-commerce solution with server-side rendering, payment integration, and admin dashboard",
      tech: ["Next.js", "React", "Node.js", "MongoDB"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      title: "React Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization",
      tech: ["React", "TypeScript", "Tailwind", "D3.js"],
      icon: <Terminal className="w-6 h-6" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      title: "REST API Backend",
      description: "Scalable RESTful API with authentication, rate limiting, and comprehensive documentation",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
  ];

  const skills = {
    "Frontend Development": [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"
    ],
    "Backend & APIs": [
      "Node.js", "Express", "RESTful APIs", "GraphQL", "Database Design"
    ],
    "Tools & Deployment": [
      "Git", "GitHub", "GitLab", "Vercel", "cPanel", "CLI", "CI/CD"
    ],
    "AI & ML": [
      "Python", "TensorFlow", "NumPy", "Machine Learning", "Data Analysis"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 100%)'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              &lt;Dev/&gt;
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-400'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative z-10 text-center space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 animate-pulse">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Available for freelance work
              </span>
            </div>

            {/* Main Heading with Gradient Animation */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="inline-block animate-[fadeInUp_0.6s_ease-out]">
                  Frontend
                </span>
                <br />
                <span className="inline-block animate-[fadeInUp_0.8s_ease-out] bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
                  Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out]">
                Crafting exceptional digital experiences with modern web technologies, 
                AI integration, and pixel-perfect design
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-[fadeInUp_1.2s_ease-out]">
              <a href="#projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#contact"
                className="px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-xl">
                Get In Touch
              </a>
            </div>

            {/* Floating Tech Icons */}
            <div className="flex items-center justify-center gap-6 pt-12 animate-[fadeInUp_1.4s_ease-out]">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'TensorFlow'].map((tech, i) => (
                <div 
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${1.6 + i * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-pink-500/30 rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400">Full-stack developer with a passion for creating beautiful, functional applications</p>
          </div>

          {/* Skills Grid with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 text-sm font-medium text-gray-300 hover:text-purple-300 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">A showcase of my best work and experiments</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 blur-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 p-3 w-fit rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-xs font-medium text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group/btn">
                    <span className="font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400">Have a project in mind? Let's create something amazing</p>
          </div>

          {/* Contact Form with Glassmorphism */}
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {formStatus && (
                <div className="text-center p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300">
                  {formStatus}
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <a href="mailto:your.email@example.com" 
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Frontend Developer. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        * {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;