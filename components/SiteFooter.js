export default function SiteFooter({ action = 'Let’s build your next product.', mail = false }) {
  return <section className="close shell">
    <div className="close-top"><a className="brand" href="/">Victor Aderibigbe<sup>™</sup></a><span><i />Available for frontend opportunities</span></div>
    <a className="display close-link" href={mail ? 'mailto:aderibigbevictor79@gmail.com' : '/get-started/'}>{action}</a>
    <footer>
      <p>Frontend development by Aderibigbe Victor</p>
      <div><a href="https://github.com/iDebugg" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/victor-aderibigbe-a5a9b2279" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/theguyvictor_23" target="_blank" rel="noreferrer">X / Twitter</a></div>
      <p>© <span id="year" /></p>
    </footer>
  </section>;
}
