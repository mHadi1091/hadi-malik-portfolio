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
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-black/80 border border-white/20 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-gray-900/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Terminal className="w-4 h-4 text-gradient" />
              <span className="text-gradient font-mono text-sm">contact.sh</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              ready for collaboration
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-gradient">$</span>
                <span className="text-gray-400 font-mono">./start_collaboration.sh</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono">
                <span className="text-gradient">LET'S_WORK_TOGETHER</span>
              </h2>
              <p className="text-gray-400 font-mono">Have a project in mind? Let's create something amazing</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-gradient text-xs">$</span>
                    <label className="text-gradient text-sm">name:</label>
                  </div>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 font-mono"
                    placeholder="your_name"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-gradient text-xs">$</span>
                    <label className="text-gradient text-sm">email:</label>
                  </div>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 font-mono"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gradient text-xs">$</span>
                  <label className="text-gradient text-sm">subject:</label>
                </div>
                <input 
                  name="subject"
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 font-mono"
                  placeholder="project_inquiry"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gradient text-xs">$</span>
                  <label className="text-gradient text-sm">message:</label>
                </div>
                <textarea 
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none font-mono"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 font-mono"
              >
                <Send className="w-4 h-4" />
                <span>▸ SEND_EMAIL</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-gradient">$</span>
                <span className="text-gray-400 font-mono">ls -la social_links/</span>
              </div>
              <div className="flex items-center justify-center gap-6">
                <a href="mailto:mhadimalik2004@gmail.com" 
                  className="p-3 bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://github.com/mhadi1091" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-hadi-0a6144290/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}