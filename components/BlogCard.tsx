'use client'

import Link from 'next/link'
import { PostMeta } from '@/lib/blog'

interface BlogCardProps extends PostMeta {}

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${slug}`}>
      <div className="border-b border-white/10 py-6 hover:bg-white/2 transition-colors cursor-pointer">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-semibold text-lg group-hover:text-white transition-colors">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-4 mb-3 text-sm text-white/60">
          <time dateTime={date}>{formattedDate}</time>
          <span>{readingTime}</span>
        </div>
        <p className="text-white/60 text-sm">{excerpt}</p>
      </div>
    </Link>
  )
}
