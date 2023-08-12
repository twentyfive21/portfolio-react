import {useState, useEffect} from 'react'
import './Work.css'
import data from '../../utilities/data'
import ProjectCard from '../../ProjectCard/ProjectCard';


function Work() {
  // setting state to store users choice in filter 
const [selection, setSelection] = useState('');
// getting value from the selection
const userChoice = e => {setSelection(e.target.innerText)}
// filtering through the data with selection
const selectionData = data.filter(project => project.category == selection)
// sets the selection to all when page loads 
useEffect(
  () => {
   setSelection('All')
  },[]
)

  return (
    <div className='work-container'>
      <h1>My Work</h1>
     <div className='filter-container'>
      <p onClick={userChoice}>All</p>
      <p onClick={userChoice}>React</p>
      <p onClick={userChoice}>Javascript</p>
      <p onClick={userChoice}>HTML & CSS</p>
    </div>
    <div className='projects-container'>
      {
        selection == 'All' ?
        data.map(project => <ProjectCard project={project} key={project.key}/>)
        :
        selectionData.map(project => <ProjectCard project={project} key={project.key}/>)
      }
    </div>
    </div>
  )
}

export default Work