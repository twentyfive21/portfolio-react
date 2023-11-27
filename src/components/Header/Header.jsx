import './Header.css'
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className='header-container'>
    <Link to='home-section' spy={true} smooth={true} duration={500}>
      Home
    </Link>
    <Link to='work-section'  spy={true} smooth={true} duration={500}>
      Work
    </Link>
    <Link to='about-section'  spy={true} smooth={true} duration={500}>
      About
    </Link>
    <Link to='contact-section' spy={true} smooth={true} duration={500}>
      Contact
    </Link>
    </div>
  )
}

export default Header