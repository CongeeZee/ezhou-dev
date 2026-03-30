import type { Metadata } from 'next'
import LabCard from '@/components/LabCard'
import AnimatedSection from '@/components/AnimatedSection'
import { labItems } from '@/lib/lab'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Experiments, prototypes, and half-baked ideas exploring new technologies.',
}

export default function LabPage() {
  return (
    <div className="space-y-12 py-8">
      <AnimatedSection>
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">Lab</h1>
          <p className="text-white/60 max-w-2xl">
            A collection of experiments, prototypes, and ideas I've been exploring. These projects
            are smaller in scope but often tackle interesting problems or explore new technologies.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labItems.map((item, idx) => (
            <div key={item.title} style={{ animationDelay: `${idx * 50}ms` }}>
              <LabCard {...item} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
