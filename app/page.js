import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  { number:'01', tone:'project-dark', title:'ToroAccess', description:'Blockchain developer platform with SDK documentation, wallet interfaces, event ticketing, and Toronet RPC integrations.', tags:['React','SDK docs','Web3'], href:'https://toroaccess.com', image:'/assets/projects/toroaccess.jpg' },
  { number:'02', tone:'project-paper', title:'Medeet', description:'Hospital management dashboards covering staff activity, patients, payments, appointments, and clinical workflows.', tags:['Healthcare','Dashboards','Responsive UI'], href:'https://admin.medeet.com/', image:'/assets/projects/medeet.jpg' },
  { number:'03', tone:'project-blue', title:'PalmBloc', description:'Mobile-first stablecoin deposit and QR/SMS transfer interfaces with Flutterwave, M-Pesa, and Chipper integrations.', tags:['Fintech','Payments','Localisation'], year:'2025' },
  { number:'04', tone:'project-warm', title:'Luxe Autos', description:'React and TypeScript interfaces with interactive Three.js vehicle visualisations translated from Figma.', tags:['Three.js','TypeScript','Figma'], year:'2023' },
  { number:'05', tone:'project-green', title:'Tizmine Farms', description:'Order-placement experiences with geolocation support and reusable TypeScript component patterns.', tags:['Agritech','Geolocation','TypeScript'], href:'https://www.tizminefarms.com/', image:'/assets/projects/tizmine-farms.jpg' },
  { number:'06', tone:'project-violet', title:'Doc2Video', description:'Document-to-video software that converts PDF, PowerPoint, and Word files into lesson series or concise explainer videos.', tags:['EdTech','Document processing','Video generation'], href:'https://doc2video.vonnewmansystems.com/', image:'/assets/projects/doc2video.jpg' },
  { number:'07', tone:'project-sand', title:'Atlas CMS & LMS', description:'A content management system for connected learning platforms, enabling teams to upload courses, edit pathways, and publish updates to LMS frontends.', tags:['CMS','LMS','Course management'], href:'https://atlas.vonnewmanlearning.com/', image:'/assets/projects/atlas.jpg' }
];

export default function HomePage() {
  return <><SiteHeader /><main id="top">
    <section className="home-hero shell">
      <div className="home-hero-grid"><figure className="profile-portrait reveal"><img src="/assets/victor-aderibigbe.jpg" alt="Aderibigbe Victor Ademola" /></figure><h1 className="display split-reveal">Your frontend design &amp; development partner</h1></div>
      <div className="hero-bottom reveal"><p>Frontend development for product teams ready to turn complex ideas into responsive, accessible, and dependable interfaces.</p><p>React, Next.js, TypeScript, API integrations, and reusable component systems.</p><a className="round-link" href="/get-started/">Start a project</a></div>
    </section>
    <section className="projects shell" id="projects"><div className="section-head"><h2 className="display split-reveal">Completed projects</h2><a href="/testimonials/">View experience</a></div><div className="project-stack">{projects.map(project => <ProjectCard key={project.number} {...project} />)}</div></section>
    <section className="services shell"><h2 className="display split-reveal">What I do</h2><div className="service-list">
      <details open><summary>Frontend development<span>+</span></summary><p>Production interfaces built with React, Next.js, TypeScript, HTML, CSS, Tailwind, and Bootstrap.</p></details>
      <details><summary>Figma implementation<span>+</span></summary><p>Responsive, accessible interfaces translated from design files into reusable components and polished interaction systems.</p></details>
      <details><summary>API &amp; payment integrations<span>+</span></summary><p>REST APIs, Axios, Toronet RPC, Flutterwave, M-Pesa, Chipper, and product-specific data flows.</p></details>
      <details><summary>Support &amp; documentation<span>+</span></summary><p>Debugging, technical documentation, user support, developer mentoring, and maintainable handoff.</p></details>
    </div></section>
    <section className="experience shell"><h2 className="display split-reveal">I build, support, and ship across industries.</h2><p className="section-copy reveal">Experience spanning healthcare, fintech, blockchain, e-commerce, agritech, consulting, technical support, and training.</p><div className="ticker" aria-hidden="true"><div>REACT · NEXT.JS · TYPESCRIPT · FIGMA · THREE.JS · REST APIS · REACT · NEXT.JS · TYPESCRIPT · FIGMA · THREE.JS · REST APIS ·</div></div><div className="role-grid"><article><span>2025—2026</span><h3>Lead Frontend Developer</h3><p>Von Newman Consulting</p></article><article><span>2025</span><h3>Lead Frontend / SDK Developer</h3><p>ToroAccess</p></article><article><span>2025—2026</span><h3>Freelance Frontend Developer</h3><p>Medeet, PalmBloc, Doc2Video, Atlas, Tizmine Farms</p></article></div><a className="text-link" href="/testimonials/">Explore full experience</a></section>
    <section className="faq shell"><h2 className="display split-reveal">Your questions, answered</h2><div className="faq-grid"><a className="round-link" href="/get-started/">Book a project call</a><div className="service-list"><details><summary>What kind of frontend work do you take on?<span>+</span></summary><p>Product interfaces, dashboards, landing pages, design-system components, API integrations, and existing-app improvements.</p></details><details><summary>Do you work from Figma?<span>+</span></summary><p>Yes. I translate Figma designs into responsive, accessible interfaces and reusable components.</p></details><details><summary>Can you integrate APIs and payments?<span>+</span></summary><p>Yes. My experience includes REST APIs, blockchain RPC endpoints, Flutterwave, M-Pesa, and Chipper.</p></details><details><summary>Are you available remotely?<span>+</span></summary><p>Yes. I am open to remote full-time, contract, and paid internship opportunities.</p></details></div></div></section>
  </main><SiteFooter /></>;
}
