export default function ProjectCard({ number, tone, title, description, tags, href, year, image }) {
  if (image) return <article className={`project-card has-media ${tone}`}>
    <div className="project-copy">
      <div className="project-number">{number}</div>
      <div><h3>{title}</h3><ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
      <p>{description}</p>
      {href ? <a href={href} target="_blank" rel="noreferrer">View project</a> : <span>{year}</span>}
    </div>
    <figure className="project-media"><img src={image} alt={`${title} website interface`} loading="lazy" /></figure>
  </article>;

  return <article className={`project-card ${tone}`}>
    <div className="project-number">{number}</div>
    <div><h3>{title}</h3><p>{description}</p><ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
    {href ? <a href={href} target="_blank" rel="noreferrer">View project</a> : <span>{year}</span>}
  </article>;
}
