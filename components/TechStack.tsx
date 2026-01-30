import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiLinux, SiGit, SiMysql } from 'react-icons/si';
import { Terminal, Database } from 'lucide-react';

const techLogos = [
  { node: <SiReact className="text-blue-400" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-cyan-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-500" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-yellow-400" />, title: "Python", href: "https://python.org" },
  { node: <SiLinux className="text-yellow-500" />, title: "Linux", href: "https://linux.org" },
  { node: <SiGit className="text-orange-500" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiMysql className="text-blue-500" />, title: "MySQL", href: "https://mysql.com" },
  { node: <Database className="text-gray-400" />, title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
];

export default function TechStack() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Terminal Header */}
        <div className="bg-black/80 border border-white/20 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-gray-900/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Terminal className="w-4 h-4 text-gradient" />
              <span className="text-gradient font-mono text-sm">tech_stack.loop</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              {techLogos.length} technologies loaded
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gradient">$</span>
              <span className="text-gray-400 font-mono">./run_tech_loop.sh</span>
            </div>
            
            <div className="h-20">
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={48}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology stack"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}