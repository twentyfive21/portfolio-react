function ProjectCard({project}) {
  return (
    <a href={project.url}>
    <section>
    <img src={project.img}  />
    <h3>{project.name}</h3>
    <p>{project.category}</p> 
    </section>
    </a>
  )
}

export default ProjectCard