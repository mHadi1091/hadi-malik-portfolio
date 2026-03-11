'use client'
import { useState } from 'react'
import { Mail, Github, Linkedin, Terminal, Send } from 'lucide-react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    const mailtoLink = `mailto:mhadimalik2004@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-transparent border border-white/20 rounded-lg overflow-hidden">
          <div className="bg-transparent border-b border-white/20 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-gradient" />
              <span className="text-gradient font-mono text-xs sm:text-sm">contact.sh</span>
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono hidden sm:block">
              ready for collaboration
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-gradient text-sm sm:text-base">$</span>
                <span className="text-gray-400 font-mono text-sm sm:text-base">./start_collaboration.sh</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
                <span className="text-gradient">LET'S_WORK_TOGETHER</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm sm:text-base">Have a project in mind? Let's create something amazing</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-gradient text-xs">$</span>
                    <label className="text-gradient text-xs sm:text-sm">name:</label>
                  </div>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 font-mono text-sm sm:text-base"
                    placeholder="your_name"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-gradient text-xs">$</span>
                    <label className="text-gradient text-xs sm:text-sm">email:</label>
                  </div>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 font-mono text-sm sm:text-base"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gradient text-xs">$</span>
                  <label className="text-gradient text-xs sm:text-sm">subject:</label>
                </div>
                <input 
                  name="subject"
                  type="text" 
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 font-mono text-sm sm:text-base"
                  placeholder="project_inquiry"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gradient text-xs">$</span>
                  <label className="text-gradient text-xs sm:text-sm">message:</label>
                </div>
                <textarea 
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none font-mono text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 font-mono text-sm sm:text-base"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>▸ SEND_EMAIL</span>
              </button>
            </form>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <span className="text-gradient text-sm sm:text-base">$</span>
                <span className="text-gray-400 font-mono text-sm sm:text-base">ls -la social_links/</span>
              </div>
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <a href="mailto:mhadimalik2004@gmail.com" 
                  className="p-2 sm:p-3 bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://github.com/mhadi1091" target="_blank" rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-hadi-0a6144290/" target="_blank" rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}