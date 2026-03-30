import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import AnimatedSection from '@/components/AnimatedSection'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My portfolio of software projects, including systems, robotics, and web applications.',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-12 py-8">
      <AnimatedSection>
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">Projects</h1>
          <p className="text-white/60 max-w-2xl">
            A collection of projects spanning systems programming, robotics, web development, and
            various experiments. Each represents a learning opportunity and a problem I wanted to solve.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={project.slug} style={{ animationDelay: `${idx * 50}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
