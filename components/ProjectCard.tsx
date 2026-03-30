'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { Project } from '@/lib/projects'

export default function ProjectCard(project: Project) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="border border-white/10 rounded-lg p-6 hover:border-white/40 transition-colors cursor-pointer h-full flex flex-col">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-3 flex-grow">
            {project.tagline}
          </p>

          {/* Impact metric — visible at a glance for recruiters */}
          {project.metric && (
            <p className="text-xs font-mono text-white/40 mb-4 border-l-2 border-white/10 pl-2">
              {project.metric}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-white/5 border border-white/10 rounded px-2 py-1 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="GitHub repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
