import cooking from '../assets/projects/cooking.png'
import lgl from '../assets/projects/lgl.png'
import list from '../assets/projects/list.png'
import nasa from '../assets/projects/nasa.png'
import polar from '../assets/projects/polar.png'

const data = [
    { 
    key: 1,
    name: 'Polaroid Palette',
    category: 'react', 
    img: polar,
    url: 'https://polaroidpalette.netlify.app'
    },
    {
    key: 2,
    name: 'Nasa Astronomy',
    category: 'JavaScript', 
    img: nasa,
    url: 'https://explore-astronomy.netlify.app/'
    },
    {
    key: 3,
    name: 'LGL',
    category: 'HTML & CSS', 
    img: lgl,
    url: 'https://lglbyevan.com/' 
    },
    {
    key: 4,
    name: 'To-do List',
    category: 'JavaScript', 
    img: list,
    url: 'https://todolistbytina.netlify.app/' 
    },
    {
    key:5,
    name: 'Sweet Berries',
    category: 'HTML & CSS', 
    img: cooking,
    url: 'https://sweetberries.netlify.app/' 
    },
]

export default data