import { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPost } from '@/lib/blog'
import { ArrowLeft } from 'lucide-react'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

const mdxComponents = {
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-white">{children}</h3>
  ),
  p: ({ children }: any) => <p className="mb-4 text-white/80 leading-relaxed">{children}</p>,
  a: ({ href, children }: any) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-white underline hover:text-white/80 transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }: any) => <li className="text-white/80">{children}</li>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-white/20 pl-4 my-4 italic text-white/70">
      {children}
    </blockquote>
  ),
  code: ({ children }: any) => (
    <code className="bg-white/5 px-2 py-1 rounded text-sm font-mono text-white/90">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 overflow-x-auto">
      {children}
    </pre>
  ),
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-white hover:text-white/80 underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="space-y-8 py-8">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Blog
      </Link>

      {/* Article Header */}
      <article className="space-y-4 max-w-2xl">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-white/5 border border-white/10 rounded px-2 py-1 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* MDX Content */}
      <div className="prose prose-invert max-w-2xl">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm as any],
              rehypePlugins: [rehypeHighlight as any],
            },
          }}
        />
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-8 max-w-2xl">
        <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
          ← Back to all posts
        </Link>
      </div>
    </div>
  )
}
