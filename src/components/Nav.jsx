import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { 
    faGithub, 
    faInstagram, 
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"; 

const socials = [
    { 
        icon: faLinkedin, 
        url: "https://www.linkedin.com/in/ignacio-guerra-torres-409a22337/", 
    },
    { 
        icon: faInstagram, 
        url: "https://www.instagram.com/chis_zuzunaga/", 
    }, 
    { 
      icon: faGithub, 
      url: "https://github.com/ChisZuzunaga", 
    }
]; 

const Nav = () => { 
    const [menuOpen, setMenuOpen] = useState(false);    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return ( 
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <p className="text-2xl md:text-4xl font-bold">Chis Zuzunaga</p>
            </a>

            <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`nav-links ${menuOpen ? "visible" : ""}`} >
                <ul>
                    <li>
                        <a href="/" className="text-base md:text-lg font-regular">About</a>
                    </li>
                    <li>
                        <a href="/" className="text-base md:text-lg font-regular">Portfolio</a>
                    </li>
                    <li>
                        <a href="/" className="text-base md:text-lg font-regular">Contact</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        {socials.map(({ icon, url }) => ( 
                        <a 
                            key={url} 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        > 
                            <FontAwesomeIcon icon={icon} size="2x" key={url} className="socials-logos" /> 
                        </a> 
                        ))} 
                    </li>
                </ul>
            </div>
        </nav>
    );
}; 

export default Nav; 