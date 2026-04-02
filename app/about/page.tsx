import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Engineering student at UNSW, Team Lead at rUNSWift, and builder of systems and tools.',
}

export default function AboutPage() {
  const languages = ['TypeScript', 'JavaScript', 'Python', 'C', 'Java', 'HTML', 'CSS']
  const frameworks = ['Node.js', 'Express', 'React', 'ROS2', 'Next.js', 'Jest', 'OpenAPI/Swagger']
  const databases = ['PostgreSQL', 'Supabase', 'SQL']
  const other = ['Agile/Scrum', 'Jira', 'Git', 'Technical Documentation', 'Bilingual (English, Mandarin)']

  return (
    <div className="space-y-16 py-8 max-w-3xl">
      <AnimatedSection>
        <h1 className="text-5xl sm:text-6xl font-bold">About</h1>
      </AnimatedSection>

      {/* Background */}
      <AnimatedSection delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Background</h2>
          <div className="space-y-3 text-white/70">
            <p>
              I&apos;m a third-year Software Engineering student at the{' '}
              <span className="text-white/90">University of New South Wales (UNSW)</span>, studying
              Bachelor of Engineering (Honours). I&apos;m interested in the full stack — from building
              production APIs and real-time web systems to designing decision-making logic for
              autonomous robots.
            </p>
            <p>
              Most of my work lives at the intersection of backend engineering and systems thinking.
              I care about writing clean, tested, well-documented code that solves real problems — not
              just code that works in demos.
            </p>
            <p>
              Outside of software, I&apos;m President of the UNSW Social Golf Society and a two-time
              Unigames National gold medallist. I&apos;m also bilingual in English and Mandarin.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.2}>
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-8">

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold text-white">Team Lead (Behaviours) — rUNSWift</h3>
                <span className="text-white/40 text-sm font-mono">2025</span>
              </div>
              <p className="text-white/50 text-sm italic">UNSW · RoboCup International Robotics Competition</p>
              <div className="space-y-1.5 text-white/70 text-sm">
                <p>Led design and development of the high-level decision-making and tactical behaviour systems for autonomous humanoid robots competing at RoboCup international.</p>
                <p>Implemented behaviour logic in Python with ROS2, coordinating real-time perception, locomotion, and team strategy across multiple robots.</p>
                <p className="text-white/50 font-mono text-xs">Part of a team with a 5× World Champion history in autonomous robot soccer.</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold text-white">Student Ambassador — UNSW Engineering</h3>
                <span className="text-white/40 text-sm font-mono">2025 – Present</span>
              </div>
              <p className="text-white/70 text-sm">Represent UNSW Engineering at open days, campus tours, and outreach events; engage prospective students on course pathways and university life.</p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold text-white">President — UNSW Social Golf Society</h3>
                <span className="text-white/40 text-sm font-mono">2025 – Present</span>
              </div>
              <p className="text-white/50 text-sm italic">Vice President (External), 2024–2025</p>
              <div className="space-y-1.5 text-white/70 text-sm">
                <p>Oversee operations, sponsorship negotiations, and event planning for one of UNSW&apos;s largest sports societies; manage a committee of 10+ and a Discord community.</p>
                <p>Secured external sponsorships and partnerships with local golf venues and equipment suppliers.</p>
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.3}>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-semibold text-white">University of New South Wales</h3>
                <p className="text-white/50 text-sm">Bachelor of Engineering (Honours) — Software Engineering</p>
              </div>
              <span className="text-white/40 text-sm font-mono">2023 – Present</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-white">Knox Grammar School</h3>
              <span className="text-white/40 text-sm font-mono">2021 – 2022</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.35}>
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="space-y-4">
            {[
              { label: 'Languages', items: languages },
              { label: 'Frameworks & Tools', items: frameworks },
              { label: 'Databases', items: databases },
              { label: 'Other', items: other },
            ].map(({ label, items }) => (
              <div key={label}>
                <h3 className="font-semibold text-white/80 text-sm mb-2">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm bg-white/5 border border-white/10 rounded px-3 py-1 text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Awards */}
      <AnimatedSection delay={0.4}>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Awards</h2>
          <div className="space-y-2 text-white/70">
            {[
              { year: '2024', title: 'Gold Medal (Individual) — Unigames Nationals Golf' },
              { year: '2023', title: 'Gold Medal (Team) — Unigames Nationals Golf' },
              { year: '2019', title: 'Chinese Language Prize — Sydney Grammar School' },
            ].map(({ year, title }) => (
              <div key={year + title} className="flex gap-4">
                <span className="text-white/30 font-mono text-sm w-10 shrink-0">{year}</span>
                <span className="text-sm">{title}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.5}>
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 mb-4">Want to work together or chat about ideas?</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:ezhou187@gmail.com"
              className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-200 rounded font-medium"
            >
              Get in Touch
            </a>
            <a
              href="/eric-zhou-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white/30 hover:border-white/60 text-white/80 hover:text-white transition-all duration-200 rounded font-medium"
            >
              Download Resume ↓
            </a>
            <a
              href="https://linkedin.com/in/eric-zhou-a09898337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white/30 hover:border-white/60 text-white/80 hover:text-white transition-all duration-200 rounded font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
