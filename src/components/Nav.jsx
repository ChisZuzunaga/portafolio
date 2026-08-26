import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import usaFlag from "../assets/usa.svg"; // Bandera de USA
import spainFlag from "../assets/spain.svg"; // Bandera de España

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

const Nav = ({ onMenuToggle }) => { 
    const [menuOpen, setMenuOpen] = useState(false);    
    const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para el dropdown de idiomas
    const dropdownRef = useRef(null); // Referencia al dropdown

    const toggleMenu = () => {
        const newState = !menuOpen;
        setMenuOpen(newState);
        onMenuToggle(newState); // <--- Notificar al padre
    };

    const { i18n, t } = useTranslation(); // Hook para traducciones
    const currentLang = i18n.resolvedLanguage?.startsWith("es") ? "es" : "en";

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Cambia el idioma
        setDropdownOpen(false); // Cierra el dropdown
    };

    const languages = [
        { code: "en", name: "English", flag: usaFlag },
        { code: "es", name: "Español", flag: spainFlag },
    ];

    // Cerrar el dropdown si se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); // Cierra el dropdown
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return ( 
        <nav id="nav" className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <p className="type-title type-bold">Chis Zuzunaga</p>
            </a>

            <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`nav-links ${menuOpen ? "visible" : ""}`} >
                <ul>
                    <li>
                        <a href="/" className="type-body type-regular">{t('navbar.about')}</a>
                    </li>
                    <li>
                        <a href="/Portfolio_hero" className="type-body type-regular">{t('navbar.portfolio')}</a>
                    </li>
                    <li>
                        <a href="/Contact" className="type-body type-regular">{t('navbar.contact')}</a>
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
                    <li>
                        <div className="relative language-dropdown" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="language-trigger flex items-center gap-2"
                                aria-expanded={dropdownOpen}
                                aria-haspopup="menu"
                                aria-label={t("navbar.language")}
                            >
                                {currentLang === "en" ? (
                                    <img src={usaFlag} alt="English" className="w-6 h-6" />
                                ) : (
                                    <img src={spainFlag} alt="Español" className="w-6 h-6" />
                                )}
                                <span>{currentLang === "en" ? "English" : "Español"}</span>
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-options" role="menu">
                                    {languages.map((lang) => (
                                        <button
                                            type="button"
                                            key={lang.code}
                                            disabled={lang.code === currentLang}
                                            onClick={() => {
                                                if (lang.code !== currentLang) {
                                                    changeLanguage(lang.code);
                                                }
                                            }}
                                            className={`language-option flex items-center gap-2 ${
                                                lang.code === currentLang
                                                    ? "is-current"
                                                    : ""
                                            }`}
                                            role="menuitem"
                                        >
                                            <img src={lang.flag} alt={lang.name} className="w-6 h-6" />
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}; 

export default Nav;
