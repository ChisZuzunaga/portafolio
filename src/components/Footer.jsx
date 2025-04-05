import React from 'react';
import { FaChevronUp } from 'react-icons/fa'; // Importa el ícono de la flecha

const Footer = () => {
  return (
    <footer className="p-footer text-black bg-footer flex items-center justify-between relative dp-links">
      {/* Nombre a la izquierda */}
      <div className="text-lg font-light text-gray">
        &copy; Ignacio Guerra.
      </div>

      {/* Medio círculo con flecha al centro */}
      <div className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-footer cursor-pointer">
        <a href="#top">
          <FaChevronUp className="text-gray text-3xl" />
        </a>
      </div>

      {/* Lista de enlaces a la derecha */}
      <ul className="flex hd-links text-lg font-light text-gray">
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:underline pdlr-50px">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;