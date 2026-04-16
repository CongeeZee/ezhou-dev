'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import AnimatedSection from '@/components/AnimatedSection'
import { getFeaturedProjects } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="space-y-3">
          {/* Availability badge — first thing a recruiter sees */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 border border-white/10 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            Open to opportunities · Sydney, AU
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-tight">
            Eric Zhou
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-white/60 text-lg sm:text-xl max-w-2xl">
          Software Engineering student at{' '}
          <span className="text-white/80">UNSW</span>. Building production APIs, autonomous
          robotics systems, and real-time web apps. Team Lead at rUNSWift — 5× World Champions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 border border-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-200 rounded font-medium"
          >
            View Projects
          </Link>
          <a
            href="https://linkedin.com/in/eric-zhou-a09898337"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/30 hover:border-white/60 text-white/80 hover:text-white transition-all duration-200 rounded font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/CongeeZee"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/30 hover:border-white/60 text-white/80 hover:text-white transition-all duration-200 rounded font-medium"
          >
            GitHub
          </a>
          <a
            href="/eric-zhou-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/30 hover:border-white/60 text-white/80 hover:text-white transition-all duration-200 rounded font-medium"
          >
            Resume ↓
          </a>
        </motion.div>
      </motion.section>

      {/* Featured Projects Section */}
      <AnimatedSection delay={0.2}>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Selected Work</h2>
            <p className="text-white/60">Projects that shaped my engineering journey</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project, idx) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
          >
            View all projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.3}>
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <div className="space-y-3 text-white/70 max-w-2xl">
            <p>
              I'm a Software Engineering student at UNSW with a focus on backend systems and
              robotics. I've shipped production APIs with full test coverage, led the behaviours
              sub-team for a 5× World Champion robot soccer team, and built real-time multiplayer
              platforms from scratch.
            </p>
            <p>
              Outside of engineering, I'm President of the UNSW Social Golf Society and a two-time
              Unigames National gold medallist in golf.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-block text-white hover:text-white/80 transition-colors underline"
          >
            Learn more →
          </Link>
        </div>
      </AnimatedSection>

      {/* Navigation Links */}
      <AnimatedSection delay={0.4}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/projects"
            className="border border-white/10 rounded-lg p-8 hover:border-white/40 hover:bg-white/2 transition-all group text-center sm:text-left"
          >
            <h3 className="font-semibold text-lg group-hover:text-white transition-colors">
              Projects →
            </h3>
            <p className="text-white/60 text-sm mt-2">View my complete project portfolio</p>
          </Link>

          <Link
            href="/about"
            className="border border-white/10 rounded-lg p-8 hover:border-white/40 hover:bg-white/2 transition-all group text-center sm:text-left"
          >
            <h3 className="font-semibold text-lg group-hover:text-white transition-colors">
              About →
            </h3>
            <p className="text-white/60 text-sm mt-2">Background, experience, and skills</p>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
