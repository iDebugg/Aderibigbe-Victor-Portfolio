export default function SiteHeader({ booking = false }) {
  return <>
    <header className="site-header">
      <a className="brand" href="/">Victor Aderibigbe<sup>™</sup></a>
      <a className="availability" href={booking ? '#booking' : '/get-started/'}><span />Available for frontend opportunities! Let’s talk</a>
      <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu"><span>Menu</span><i aria-hidden="true"><b /><b /><b /><b /></i></button>
    </header>
    <nav id="site-menu" className="menu-panel" aria-label="Main navigation" aria-hidden="true" inert>
      <button className="menu-close" type="button">Close</button>
      <a href="/">Home</a><a href="/about/">About me</a><a href="/testimonials/">Experience</a><a href="/get-started/">Contact</a>
    </nav>
    <nav className="fallback-nav shell" aria-label="Main navigation"><a href="/">Home</a><a href="/about/">About me</a><a href="/testimonials/">Experience</a><a href="/get-started/">Contact</a></nav>
  </>;
}
