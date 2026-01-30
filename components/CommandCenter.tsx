'use client'
import { useState } from 'react'

const modules = {
  WHO_I_AM: {
    title: "WHO I AM",
    content: {
      name: "Hadi Malik",
      role: "Full-Stack Developer",
      location: "Remote • Global",
      status: "Available for opportunities",
      bio: "I’m a developer driven by curiosity and problem-solving. I enjoy building products from scratch, refining messy systems, and creating interfaces that feel fast, intuitive, and reliable.",
      outside_code: "Outside coding: exploring system design, building side projects, continuous learning"
    }
  },
  HOW_I_THINK: {
    title: "HOW I THINK",
    content: {
      principles: [
        "Readable code beats clever code",
        "User experience is a feature",
        "Scalability starts with architecture",
        "Learning is part of the job"
      ]
    }
  },
  HOW_I_WORK: {
    title: "HOW I WORK",
    content: {
      process: [
        "Research & Discovery → Understanding the problem deeply",
        "Design & Prototype → Wireframes, architecture, edge-case planning",
        "Develop & Test → Writing clean, maintainable code",
        "Deploy & Iterate → Continuous improvement in production"
      ]
    }
  },
  WHAT_I_USE: {
    title: "WHAT I USE",
    content: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Python", "MySQL", "APIs", "Databases"],
      tools: ["Git", "Linux", "VS Code", "Docker"]
    }
  },
  WHERE_IM_GOING: {
    title: "WHERE I’M GOING",
    content: {
      goals: [
        "Build products that matter",
        "Lead innovative tech teams",
        "Contribute to open source",
        "Mentor next-gen developers"
      ]
    }
  }
}

export default function AboutMeSection() {
  const [activeModule, setActiveModule] = useState('WHO_I_AM')

  const renderContent = () => {
    const module = modules[activeModule as keyof typeof modules]

    switch (activeModule) {
      case 'WHO_I_AM':
        const whoIAmContent = module.content as { name: string; role: string; location: string; status: string; bio: string; outside_code: string }
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-emerald-400">name:</span> {whoIAmContent.name}
              </div>
              <div>
                <span className="text-emerald-400">role:</span> {whoIAmContent.role}
              </div>
              <div>
                <span className="text-emerald-400">location:</span> {whoIAmContent.location}
              </div>
              <div>
                <span className="text-emerald-400">status:</span> {whoIAmContent.status}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-emerald-400">bio:</span>
              <p className="mt-2 text-gray-300">{whoIAmContent.bio}</p>
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              {whoIAmContent.outside_code}
            </div>
          </div>
        )
      case 'HOW_I_THINK':
        const howIThinkContent = module.content as { principles: string[] }
        return (
          <div className="space-y-3">
            {howIThinkContent.principles.map((principle, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-violet-400">▸</span>
                <span>{principle}</span>
              </div>
            ))}
          </div>
        )
      case 'HOW_I_WORK':
        const howIWorkContent = module.content as { process: string[] }
        return (
          <div className="space-y-3">
            {howIWorkContent.process.map((step, index) => (
              <div key={index} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">{String(index + 1).padStart(2, '0')}.</span>
                  <span>{step.split('→')[0].trim()}</span>
                </div>
                <div className="ml-6 text-gray-400 text-xs">{step.split('→')[1].trim()}</div>
              </div>
            ))}
          </div>
        )
      case 'WHAT_I_USE':
        const whatIUseContent = module.content as { frontend: string[]; backend: string[]; tools: string[] }
        return (
          <div className="space-y-4">
            <div>
              <span className="text-emerald-400">Interfaces:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {whatIUseContent.frontend.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-emerald-400">Systems:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {whatIUseContent.backend.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-emerald-400">Environment:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {whatIUseContent.tools.map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-violet-500/20 text-violet-300 rounded text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      case 'WHERE_IM_GOING':
        const whereImGoingContent = module.content as { goals: string[] }
        return (
          <div className="space-y-3">
            {whereImGoingContent.goals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-emerald-400">→</span>
                <span>{goal}</span>
              </div>
            ))}
            <div className="mt-6 text-emerald-400 font-mono">
              status.next → open to collaborations & opportunities
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-black/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        {/* <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m Hadi — a full-stack developer who enjoys turning complex problems into
            clean, scalable digital solutions. I care deeply about how software is built,
            how it feels to use, and how well it scales in the real world.
          </p>
        </div> */}

        {/* Command Center */}
        <div className="bg-black/80 border border-emerald-500/30 rounded-lg overflow-hidden shadow-2xl relative max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="bg-gray-900/50 border-b border-emerald-500/30 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400 font-mono text-lg">HADI.dev</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-mono">
              system.status: online
            </div>
          </div>

          <div className="flex min-h-[500px]">
            {/* Navigation */}
            <div className="w-1/3 bg-gray-900/30 border-r border-emerald-500/20 p-8">
              <div className="space-y-2">
                {Object.keys(modules).map((module) => (
                  <button
                    key={module}
                    onClick={() => setActiveModule(module)}
                    className={`w-full text-left px-4 py-3 rounded font-mono text-base transition-all duration-200 ${
                      activeModule === module
                        ? 'bg-emerald-500/20 text-emerald-300 border-l-2 border-emerald-400'
                        : 'text-gray-400 hover:text-emerald-300 hover:bg-emerald-500/10'
                    }`}
                  >
                    ▸ {modules[module as keyof typeof modules].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="flex-1 p-8">
              <div className="mb-6">
                <h3 className="text-emerald-400 font-mono text-xl mb-3">
                  {modules[activeModule as keyof typeof modules].title}
                </h3>
                <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              </div>
              
              <div className="font-mono text-lg leading-relaxed">
                {renderContent()}
              </div>

              {/* Footer CTA */}
              <div className="mt-8 text-gray-500 font-mono text-lg flex items-center">
                <span className="text-emerald-400 text-lg">$</span>
                <span className="ml-3 animate-pulse">hire hadi ▌</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional scanline animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-[scanline_3s_linear_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
