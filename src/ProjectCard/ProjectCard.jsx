function ProjectCard({project}) {
  return (
    <section>
    <a href={project.url}> 
    <img src={project.img}  />
    </a>  
    <h2>{project.name}</h2>
    <p>{project.category}</p> 
    </section>
  )
}

export default ProjectCard