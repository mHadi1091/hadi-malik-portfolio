'use client'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Terminal } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/20 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
            <Terminal className="w-6 h-6 text-gradient" />
            <div className="text-xl font-mono font-bold text-gradient hover:scale-105 transition-transform duration-300">
              HADI.dev
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-3 py-2 text-sm font-mono transition-all duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-white bg-white/10 border border-white/20 rounded' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                ▸ {item.toUpperCase()}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/mhadi1091" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 hover:scale-110">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-hadi-0a6144290/" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}