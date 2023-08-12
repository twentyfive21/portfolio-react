function ProjectCard({project}) {
  return (
    <section>
    <a href={project.url}> 
    <img src={project.img}  />
    </a>  
    <p>{project.name}</p>
    <p>{project.category}</p> 
    </section>
  )
}

export default ProjectCard