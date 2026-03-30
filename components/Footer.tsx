import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Eric Zhou. Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors underline"
            >
              Next.js
            </a>
            .
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/CongeeZee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/congeezee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ezhou187@gmail.com"
              className="text-white/60 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
