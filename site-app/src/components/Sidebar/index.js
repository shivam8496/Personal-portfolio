import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
   return(
    <div className="nav-bar">
        <Link className="logo" to='/'>
        <img src={logoS} alt="Logo" />
        <img src={logoSubtitle} alt="slobodon" className="sub-logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome}  color="#4d4d4e" />
            </NavLink>

            <NavLink activeclassname="active" className="about-link" to="/about"    >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="contact-link" to="/contact"    >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
            <li>
            <a href="https://www.linkedin.com/in/shivam-singh-646896217/" target="_blank"
            rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> 
            </a>
            </li>
            
            <li>
            <a href="https://github.com/shivam8496" target="_blank"
            rel="noreferrer"> <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> 
            </a>
            </li>

            <li>
            <a href="https://twitter.com/sshivam__ssingh?t=verV86sgb-dxLaPwFbjAVw&s=08 " target="_blank"
            rel="noreferrer"> <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" /> 
            </a>
            </li>

            <li>
            <a href="https://www.instagram.com/sshivam__ssingh/" target="_blank"
            rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" /> 
            </a>
            </li>
        </ul>
    </div>
)
} 


export default Sidebar;

