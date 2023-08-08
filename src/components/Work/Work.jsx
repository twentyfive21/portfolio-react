import {useState, useEffect} from 'react'
import './Work.css'
import data from '../../utilities/data'


function Work() {
const [selection, setSelection] = useState('');
const userChoice = e => {setSelection(e.target.innerText)}

const selectionData = data.filter(project => project.category == selection)

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
        data.map(project => <img src={project.img} key={project.key} />)
        :
        selectionData.map(project => <img src={project.img} key={project.key} />)
      }
    </div>
    </div>
  )
}

export default Work