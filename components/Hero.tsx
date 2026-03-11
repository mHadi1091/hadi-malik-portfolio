'use client'
import { Terminal, Code, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10">
          {/* Terminal Window */}
          <div className="bg-transparent border border-white/20 rounded-lg overflow-hidden max-w-6xl mx-auto">
            {/* Terminal Header */}
            <div className="bg-transparent border-b border-white/20 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-gradient" />
                <span className="text-gradient font-mono text-xs sm:text-sm">terminal</span>
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-mono hidden sm:block">
                session.active: true
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 sm:p-8 md:p-12 font-mono space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-gradient text-sm sm:text-base md:text-lg">$</span>
                <span className="text-gray-400 text-sm sm:text-base md:text-lg">whoami</span>
              </div>
              <div className="pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                <div className="text-sm sm:text-base md:text-lg"><span className="text-gradient">name:</span> Hadi Malik</div>
                <div className="text-sm sm:text-base md:text-lg"><span className="text-gradient">role:</span> Full-Stack Developer & AI Enthusiast</div>
                <div className="text-sm sm:text-base md:text-lg"><span className="text-gradient">status:</span> Available for opportunities</div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-8">
                <span className="text-gradient text-sm sm:text-base md:text-lg">$</span>
                <span className="text-gray-400 text-sm sm:text-base md:text-lg">cat mission.txt</span>
              </div>
              <div className="pl-4 sm:pl-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                Building scalable, high-performance digital products using modern web technologies and AI-driven solutions.
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-8">
                <span className="text-gradient text-sm sm:text-base md:text-lg">$</span>
                <span className="text-gray-400 text-sm sm:text-base md:text-lg">ls -la skills/</span>
              </div>
              <div className="pl-4 sm:pl-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gradient" />
                  <span className="text-sm sm:text-base md:text-lg">React</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gradient" />
                  <span className="text-sm sm:text-base md:text-lg">Next.js</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gradient" />
                  <span className="text-sm sm:text-base md:text-lg">TypeScript</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gradient" />
                  <span className="text-sm sm:text-base md:text-lg">AI/ML</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-8">
                <span className="text-gradient text-sm sm:text-base md:text-lg">$</span>
                <span className="text-gray-400 text-sm sm:text-base md:text-lg">./start_collaboration.sh</span>
              </div>
              <div className="pl-4 sm:pl-6 flex flex-wrap gap-3 sm:gap-6 mt-4 sm:mt-6">
                <a href="#projects" 
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg">
                  ▸ VIEW_PROJECTS
                </a>
                <a href="#contact"
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded transition-all duration-300 text-sm sm:text-base md:text-lg">
                  ▸ CONTACT_ME
                </a>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
                <span className="text-gradient animate-pulse text-sm sm:text-base md:text-lg">$</span>
                <span className="text-gray-500 animate-pulse text-sm sm:text-base md:text-lg">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}