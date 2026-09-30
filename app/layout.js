import './globals.css';
import Script from 'next/script';

const siteUrl = 'https://developer-project-starter.vonnewmandevs.chatgpt.site';
const description = 'Frontend developer Aderibigbe Victor builds responsive React, Next.js and TypeScript products for healthcare, fintech, blockchain, e-commerce and education.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Aderibigbe Victor | Frontend Developer', template: '%s | Aderibigbe Victor' },
  description,
  keywords: ['Aderibigbe Victor', 'frontend developer', 'React developer', 'Next.js developer', 'TypeScript developer', 'web developer Nigeria', 'responsive web development', 'frontend engineer'],
  authors: [{ name: 'Aderibigbe Victor Ademola', url: siteUrl }],
  creator: 'Aderibigbe Victor Ademola',
  publisher: 'Aderibigbe Victor Ademola',
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/assets/victor-aderibigbe.jpg', type: 'image/jpeg' }],
    shortcut: '/assets/victor-aderibigbe.jpg',
    apple: '/assets/victor-aderibigbe.jpg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Aderibigbe Victor Portfolio',
    title: 'Aderibigbe Victor | Frontend Developer',
    description,
    images: [{ url: '/assets/victor-aderibigbe.jpg', width: 928, height: 1152, alt: 'Aderibigbe Victor Ademola' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aderibigbe Victor | Frontend Developer',
    description,
    creator: '@theguyvictor_23',
    images: ['/assets/victor-aderibigbe.jpg']
  },
  category: 'technology'
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aderibigbe Victor Ademola',
  url: siteUrl,
  image: `${siteUrl}/assets/victor-aderibigbe.jpg`,
  jobTitle: 'Frontend Developer',
  description,
  email: 'mailto:aderibigbevictor79@gmail.com',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Federal University Oye-Ekiti' },
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Development', 'Responsive Web Design', 'API Integration'],
  sameAs: ['https://github.com/iDebugg', 'https://www.linkedin.com/in/victor-aderibigbe-a5a9b2279', 'https://x.com/theguyvictor_23']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
