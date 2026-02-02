import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://atharva-awate.dev'),
  title: 'Atharva Awate | Software Engineer & Full-Stack Developer',
  description: 'Portfolio of Atharva Awate - A passionate software engineer specializing in full-stack development, scalable systems, and clean architecture.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Atharva Awate' }],
  creator: 'Atharva Awate',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atharva-awate.dev',
    siteName: 'Atharva Awate Portfolio',
    title: 'Atharva Awate | Software Engineer & Full-Stack Developer',
    description: 'Portfolio of Atharva Awate - A passionate software engineer specializing in full-stack development, scalable systems, and clean architecture.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Awate | Software Engineer & Full-Stack Developer',
    description: 'Portfolio of Atharva Awate - A passionate software engineer specializing in full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-950 text-dark-100 antialiased">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
