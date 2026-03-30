'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LabItem } from '@/lib/lab'

export default function LabCard(item: LabItem) {
  const Component = item.link ? 'a' : 'div'

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Component
        {...(item.link && {
          href: item.link,
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        className={`block border border-white/10 rounded-lg p-5 hover:border-white/40 transition-colors h-full ${
          item.link ? 'cursor-pointer' : ''
        }`}
      >
        <h3 className="font-semibold text-base mb-2">{item.title}</h3>
        <p className="text-white/60 text-sm mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-white/5 border border-white/10 rounded px-2 py-1 text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </Component>
    </motion.div>
  )
}
