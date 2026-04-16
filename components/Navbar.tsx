'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg tracking-tight hover:text-white/80 transition-colors"
          >
            ezhou.dev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-[#ffffff]'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/CongeeZee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/eric-zhou-a09898337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="pt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-2 py-2 text-sm transition-colors rounded ${
                    isActive(link.href)
                      ? 'text-[#ffffff] bg-white/5'
                      : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/CongeeZee"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2 text-sm text-white/60 hover:text-white/90 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/eric-zhou-a09898337"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2 text-sm text-white/60 hover:text-white/90 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
