'use client'
import { Terminal, Code, Database, Cpu, Zap } from 'lucide-react'
import CardSwap, { Card } from './CardSwap'

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
    <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-transparent border border-white/20 rounded-lg overflow-hidden mb-6 sm:mb-8">
          <div className="bg-transparent border-b border-white/20 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-gradient" />
              <span className="text-gradient font-mono text-xs sm:text-sm">skills.json</span>
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono hidden sm:block">
              {Object.keys(skills).length} categories loaded
            </div>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <span className="text-gradient text-sm sm:text-base">$</span>
              <span className="text-gray-400 font-mono text-sm sm:text-base">cat skills.json</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-2">
              <span className="text-gradient">SKILL_STACK</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm sm:text-base">Full stack developer with a passion for creating beautiful, functional applications</p>
          </div>
        </div>
      </div>

      {/* Skills Cards */}
      <div style={{ height: '400px', position: 'relative' }} className="max-w-4xl mx-auto px-4">
        <CardSwap
          width={Math.min(700, typeof window !== 'undefined' ? window.innerWidth - 40 : 700)}
          height={320}
          cardDistance={30}
          verticalDistance={40}
          delay={4000}
          pauseOnHover={true}
          easing="elastic"
        >
          {Object.entries(skills).map(([category, data], index) => (
            <Card 
              key={category}
              customClass="bg-black/40 backdrop-blur-sm border-white/20 hover:border-white/40"
            >
              {/* Category Header */}
              <div className="bg-transparent border-b border-white/20 px-4 py-3 flex items-center space-x-3">
                {data.icon}
                <span className="text-gradient font-mono text-sm">
                  {category.toLowerCase().replace(/\s+/g, '_')}
                </span>
              </div>

              {/* Skills Content */}
              <div className="p-6 space-y-4">
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
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  )
}