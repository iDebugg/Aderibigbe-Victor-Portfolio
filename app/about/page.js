import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
export const metadata = {
  title: 'About',
  description: 'Meet Aderibigbe Victor, a frontend developer and Mechatronics Engineering graduate experienced in React, Next.js, TypeScript, product interfaces and technical support.',
  alternates: { canonical: '/about/' },
  openGraph: { title: 'About Aderibigbe Victor', url: '/about/' }
};
export default function AboutPage(){return <><SiteHeader /><main><section className="about-hero shell"><h1 className="display split-reveal">Hey! I’m Aderibigbe Victor</h1><div className="about-copy reveal"><p>I’m a frontend developer and Mechatronics Engineering graduate building responsive interfaces for healthcare, fintech, blockchain, e-commerce, and agritech products.</p><p>I use React, Next.js, and TypeScript to translate Figma designs into maintainable components, integrate APIs, and create product experiences that work clearly across devices.</p><p>My background in technical support, documentation, training, and mentoring helps me communicate well with users and teams while solving practical problems.</p></div></section><section className="experience shell"><h2 className="display split-reveal">Engineering meets product craft.</h2><div className="about-facts reveal"><article><span>Education</span><h3>B.Eng. Mechatronics Engineering</h3><p>Federal University Oye-Ekiti · 2019—2024</p></article><article><span>Certification</span><h3>Frontend Development</h3><p>SQI College of ICT</p></article><article><span>Languages</span><h3>English &amp; Yoruba</h3><p>Fluent English · Native Yoruba</p></article></div></section></main><SiteFooter /></>}
