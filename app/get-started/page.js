import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Booking from '@/components/Booking';
export const metadata = {
  title: 'Book a Frontend Project Call',
  description: 'Book a 30-minute project discussion with frontend developer Aderibigbe Victor. Meeting times automatically display in your local timezone.',
  alternates: { canonical: '/get-started/' },
  openGraph: { title: 'Book a Frontend Project Call with Aderibigbe Victor', url: '/get-started/' }
};
export default function ContactPage(){return <><SiteHeader booking /><main><section className="hero shell"><h1 className="display split-reveal">Have a project in mind?</h1><div className="hero-grid reveal"><p>Let’s discuss your product, your users, and the clearest way to bring the interface to life.</p><p>Frontend development across healthcare, fintech, blockchain, e-commerce, and agritech.</p></div><Booking /></section></main><SiteFooter mail /></>}
