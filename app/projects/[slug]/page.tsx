import { Metadata } from 'next'
import Link from 'next/link'
import { projects, getProjectBySlug } from '@/lib/projects'
import { ArrowLeft } from 'lucide-react'

export const dynamicParams = false

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-white hover:text-white/80 underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-12 py-8">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-3">{project.title}</h1>
          <p className="text-white/60 text-xl max-w-2xl">{project.tagline}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm font-mono bg-white/5 border border-white/10 rounded px-3 py-1 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white transition-all rounded"
            >
              GitHub Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white hover:bg-white hover:text-[#0a0a0a] transition-all rounded font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Demo Placeholder */}
      <div className="w-full aspect-video border border-white/10 rounded-lg bg-white/2 flex items-center justify-center">
        <p className="text-white/60">Demo coming soon</p>
      </div>

      {/* Content Sections */}
      <div className="max-w-3xl space-y-12">
        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-white/70 leading-relaxed">{project.overview}</p>
        </section>

        {/* Architecture */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Architecture</h2>
          <p className="text-white/70 leading-relaxed">{project.architecture}</p>
        </section>

        {/* Key Challenges */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Key Challenges</h2>
          <ul className="space-y-2">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="text-white/70 leading-relaxed flex gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What I Learned */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">What I Learned</h2>
          <ul className="space-y-2">
            {project.learned.map((item, idx) => (
              <li key={idx} className="text-white/70 leading-relaxed flex gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Improvements */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Future Improvements</h2>
          <ul className="space-y-2">
            {project.future.map((item, idx) => (
              <li key={idx} className="text-white/70 leading-relaxed flex gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
