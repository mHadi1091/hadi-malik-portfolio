'use client'
import { Terminal, Code, Database, Cpu, Zap } from 'lucide-react'

const skills = {
  "Frontend Development": {
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    icon: <Code className="w-5 h-5" />
  },
  "Backend & APIs": {
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Database Design"],
    icon: <Database className="w-5 h-5" />
  },
  "Tools & Deployment": {
    skills: ["Git", "GitHub", "GitLab", "Vercel", "cPanel", "CLI", "CI/CD", "Linux"],
    icon: <Terminal className="w-5 h-5" />
  },
  "AI & ML": {
    skills: ["Python", "TensorFlow", "NumPy", "Machine Learning", "Data Analysis"],
    icon: <Zap className="w-5 h-5" />
  }
}

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-black/80 border border-white/20 rounded-lg overflow-hidden shadow-2xl mb-8">
          <div className="bg-gray-900/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Cpu className="w-4 h-4 text-gradient" />
              <span className="text-gradient font-mono text-sm">skills.json</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              {Object.keys(skills).length} categories loaded
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gradient">$</span>
              <span className="text-gray-400 font-mono">cat skills.json</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
              <span className="text-gradient">SKILL_STACK</span>
            </h2>
            <p className="text-gray-400 font-mono">Full stack developer with a passion for creating beautiful, functional applications</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, data], index) => (
            <div 
              key={category}
              className="bg-black/80 border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="bg-gray-900/50 border-b border-white/20 px-4 py-3 flex items-center space-x-3">
                {data.icon}
                <span className="text-gradient font-mono text-sm">
                  {category.toLowerCase().replace(/\s+/g, '_')}
                </span>
              </div>

              {/* Skills Content */}
              <div className="p-4 space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-gradient font-mono text-xs">$</span>
                    <span className="text-gray-400 font-mono text-xs">ls -la {category.toLowerCase().replace(/\s+/g, '_')}/</span>
                  </div>
                  <h3 className="font-mono font-bold text-white mb-3">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded font-mono text-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
  )
}