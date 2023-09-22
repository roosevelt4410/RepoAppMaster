import React, { useState, useRef } from 'react';
import { NavbarToggler } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faThLarge, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null); // Definir el tipo de referencia

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.blur(); // Utilizar el método blur en una referencia válida
    }
  };

  const handleBlur = () => {
    if (isSearchExpanded) {
      setIsSearchExpanded(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-empresa-rojo via-empresa-verde to-empresa-rojo p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <NavbarToggler onClick={toggleNavbar} className="text-white md:hidden">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </NavbarToggler>
          <img
            src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0042/7987/Bancoomeva_personas__productos_y_virtual.png?1615358533"
            alt="Logo" className="h-16 mr-4"
          />
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="space-x-4 md:flex items-center">
            <li>
              <a
                href="/home"
                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-green-800 hover:bg-black"
              >
                <FontAwesomeIcon icon={faChartBar} className="fa-lg" />
              </a>
            </li>
            <li>
              <a
                href="/apps"
                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-green-800 hover:bg-black"
              >
                <FontAwesomeIcon icon={faThLarge} className="fa-lg" />
              </a>
            </li>
          </ul>
          <div className="relative ml-4">
            <button
              onClick={handleButtonClick}
              className={`bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-empresa-verde transition-all ${
                isSearchExpanded ? 'w-48' : 'w-32'
              } hover:w-48 hover:scale-105`}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={`mr-2 text-gray-500 ${isSearchExpanded ? 'ml-2' : ''}`}
              />
            </button>
            {isSearchExpanded && (
              <input
                type="text"
                placeholder="Buscar Aplicación..."
                className="absolute right-0 top-0 w-full bg-white text-gray-800 placeholder-gray-500 border-none outline-none focus:outline-none py-2 px-4 rounded-full shadow-md"
                ref={searchInputRef}
                onBlur={handleBlur}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





