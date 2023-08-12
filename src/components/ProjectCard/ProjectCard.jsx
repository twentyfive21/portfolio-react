function ProjectCard({project}) {
  return (
    <section>
    <a href={project.url}> 
    <img src={project.img}  />
    </a>  
    <h3>{project.name}</h3>
    <p>{project.category}</p> 
    </section>
  )
}

export default ProjectCard