import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Eric Zhou, a software engineer passionate about systems and robotics.',
}

export default function AboutPage() {
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
              I'm a software engineer and final-year student at the University of New South Wales
              (UNSW), studying Software Engineering with a focus on distributed systems and
              competitive robotics.
            </p>
            <p>
              From a young age, I've been fascinated by how things work—whether it's the elegant
              algorithms that power the internet, the coordinated behaviors of robot teams, or the
              infrastructure behind applications millions use daily. This curiosity has driven me to
              deeply understand systems from first principles, rather than just assembling existing pieces.
            </p>
            <p>
              My engineering journey has been shaped by working on complex problems in robotics,
              contributing to open source projects, and building tools that solve real problems.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-6 text-white/70">
            <div>
              <h3 className="font-semibold text-white mb-2">RoboCup SSL Team Strategy Lead</h3>
              <p>
                Led the strategy and AI development for our university's RoboCup SSL (Small Size
                League) team. Designed real-time decision-making systems, coordinated multi-robot
                behavior, and competed at international competitions. This experience taught me how
                to ship code under extreme time pressure and debug complex distributed systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Open Source Contributions</h3>
              <p>
                Active contributor to several open source projects focusing on systems programming
                and developer tooling. I believe in the power of open source to move the industry
                forward and in building tools that other engineers can learn from and benefit from.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Hackathon Achievements</h3>
              <p>
                Multiple hackathon wins and top placements for projects spanning distributed
                systems, robotics integrations, and full-stack applications. These experiences
                reinforced my ability to ship quickly and work under pressure.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.3}>
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'Rust', 'C++', 'Go', 'JavaScript'].map((lang) => (
                  <span
                    key={lang}
                    className="text-sm bg-white/5 border border-white/10 rounded px-3 py-1 text-white/70"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Tools & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js',
                  'React',
                  'Node.js',
                  'PostgreSQL',
                  'Docker',
                  'Kubernetes',
                  'ROS2',
                  'Git',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-sm bg-white/5 border border-white/10 rounded px-3 py-1 text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Areas of Focus</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <span>
                    <strong>Systems Programming:</strong> Building robust, efficient systems that
                    handle real-world constraints and high-load scenarios
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <span>
                    <strong>Distributed Systems:</strong> Consensus algorithms, state replication,
                    fault tolerance, and scalability
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <span>
                    <strong>Robotics:</strong> Multi-agent coordination, vision systems, real-time
                    control, and competition engineering
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <span>
                    <strong>Infrastructure:</strong> Deploying, monitoring, and scaling applications
                    in production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Interests */}
      <AnimatedSection delay={0.4}>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Interests</h2>
          <div className="space-y-2 text-white/70">
            <div className="flex gap-3">
              <span className="text-white/40">•</span>
              <span>Competitive robotics and multi-agent systems</span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/40">•</span>
              <span>Building and open sourcing developer tools</span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/40">•</span>
              <span>Learning about emerging technologies and paradigms</span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/40">•</span>
              <span>Coffee (probably drinking it while coding)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/40">•</span>
              <span>Bouldering and exploring new climbing gyms</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.5}>
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 mb-4">Want to work together or chat about ideas?</p>
          <a
            href="mailto:ezhou187@gmail.com"
            className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-200 rounded font-medium"
          >
            Get in Touch
          </a>
        </div>
      </AnimatedSection>
    </div>
  )
}
