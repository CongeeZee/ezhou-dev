import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import AnimatedSection from '@/components/AnimatedSection'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical writing about software engineering, robotics, and systems design.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="space-y-12 py-8">
      <AnimatedSection>
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">Writing</h1>
          <p className="text-white/60 max-w-2xl">
            Technical articles and reflections on software engineering, robotics, and building things.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="space-y-1 max-w-2xl">
          {posts.length === 0 ? (
            <p className="text-white/60">No posts yet. Check back soon!</p>
          ) : (
            posts.map((post, idx) => (
              <div key={post.slug} style={{ animationDelay: `${idx * 50}ms` }}>
                <BlogCard {...post} />
              </div>
            ))
          )}
        </div>
      </AnimatedSection>
    </div>
  )
}
