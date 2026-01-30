'use client'
import { Terminal, Code, Database, Cpu, ExternalLink, Brain, Globe, Users, FileText, Palette, FolderOpen } from 'lucide-react'

const projects = [
  {
    title: "Flower Vision CNN",
    description: "Advanced computer vision project using CNNs for flower species classification with transfer learning and VGG16 architecture achieving high accuracy on 5+ species.",
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    icon: <Brain className="w-5 h-5" />,
    github: "https://github.com/mHadi1091/flower-vision-cnn",
    // period: "Oct 2023 - Jan 2024"
  },
  {
    title: "NGO Management Application",
    description: "Full-stack web application for NGO management with donor tracking, project management, volunteer coordination, and comprehensive reporting dashboard.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    icon: <Globe className="w-5 h-5" />,
    github: "https://github.com/mHadi1091/ngo-management-app",
    // period: "Aug 2025 - Jan 2026"
  },
  {
    title: "Traffic System DSA Project",
    description: "Advanced traffic management system implementing complex data structures and algorithms for traffic flow simulation, signal optimization, and route planning.",
    tech: ["C++", "Data Structures", "Algorithms", "Graph Theory"],
    icon: <Terminal className="w-5 h-5" />,
    github: "https://github.com/mHadi1091/Traffic-System-DSA-project",
    // period: "Dec 2025 - Jan 2026"
  },
  {
    title: "Employee Management System",
    description: "Comprehensive HR solution with three role-based dashboards (Admin, HR, Employee). Features complete workflow management, attendance tracking, payroll processing, and performance evaluation for streamlined company operations.",
    tech: ["React", "Node.js", "CSS", "cPanel"],
    icon: <Users className="w-5 h-5" />,
    github: "https://github.com/mHadi1091/employee-management-system",
    // period: "2024 - 2025"
  },
  {
    title: "Rameen Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and TypeScript. Features smooth animations, dark theme, and optimized performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    icon: <Code className="w-5 h-5" />,
    github: "https://github.com/mHadi1091/rameen-portfo",
    // period: "Dec 2025 - Jan 2026"
  },
  {
    title: "Genclouds Website",
    description: "Complete UI/UX design and development for Genclouds static website. Created modern, responsive sections with clean design patterns and optimized user experience across all devices.",
    tech: ["React", "CSS", "Responsive Design", "AWS S3"],
    icon: <Palette className="w-5 h-5" />,
    github: "https://github.com/mHadi1091/genclouds-website",
    // period: "2024 - 2025"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-black/80 border border-white/20 rounded-lg overflow-hidden shadow-2xl mb-8 max-w-6xl mx-auto">
          <div className="bg-gray-900/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FolderOpen className="w-4 h-4 text-gradient" />
              <span className="text-gradient font-mono text-sm">projects/</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              {projects.length} repositories found
            </div>
          </div>
          
          <div className="p-12">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-gradient text-lg">$</span>
              <span className="text-gray-400 font-mono text-lg">ls -la projects/</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-gradient">FEATURED_PROJECTS</span>
            </h2>
            <p className="text-gray-400 font-mono text-lg">Real-world applications and experiments from GitHub</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-black/80 border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="bg-gray-900/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {project.icon}
                  <span className="text-gradient font-mono text-sm truncate">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                </div>
                {/* <span className="text-xs text-gray-500 font-mono">
                  {project.period}
                </span> */}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-gradient font-mono text-lg">$</span>
                    <span className="text-gray-400 font-mono text-lg">cat README.md</span>
                  </div>
                  <h3 className="font-mono font-bold text-white mb-4 text-xl">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-mono">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-gradient font-mono text-lg">$</span>
                    <span className="text-gray-400 font-mono text-lg">cat package.json</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded text-base font-mono text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gradient hover:text-white transition-colors duration-300 font-mono text-lg"
                  >
                    <span>▸ VIEW_REPOSITORY</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}