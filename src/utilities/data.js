import cooking from '../assets/projects/cooking.png'
import lgl from '../assets/projects/lgl.png'
import list from '../assets/projects/list.png'
import nasa from '../assets/projects/nasa.png'
import polar from '../assets/projects/polar.png'
import insta from '../assets/projects/insta.png'
import music from '../assets/projects/music.png'
import bakery from '../assets/projects/bakery.png'

// 1140 x 813 
const data = [
    { 
        key: 0,
        name: 'Instagram',
        category: 'Fullstack', 
        img: insta,
        url: 'https://instagram-vite.netlify.app/'
    },
    { 
        key: 1,
        name: 'Music Player',
        category: 'Fullstack', 
        img: music,
        url: 'https://thereactmusicplayer.netlify.app/'
    },
    { 
        key: 2,
        name: 'Polaroid Palette',
        category: 'React', 
        img: polar,
        url: 'https://polaroidpalette.netlify.app'
    },
    { 
        key: 3,
        name: 'Tous Les Jours',
        category: 'Javascript', 
        img: bakery,
        url: 'https://tous-les-jours.netlify.app/'
    },
    {
        key: 4,
        name: 'Nasa Astronomy',
        category: 'Javascript', 
        img: nasa,
        url: 'https://explore-astronomy.netlify.app/'
    },
    {
        key: 5,
        name: 'LGL',
        category: 'HTML & CSS', 
        img: lgl,
        url: 'https://lglbyevan.com/' 
    },
    {
        key: 6,
        name: 'To-do List',
        category: 'Javascript', 
        img: list,
        url: 'https://todolistbytina.netlify.app/' 
    },
    {
        key:7,
        name: 'Sweet Berries',
        category: 'HTML & CSS', 
        img: cooking,
        url: 'https://sweetberries.netlify.app/' 
    },
]

export default data