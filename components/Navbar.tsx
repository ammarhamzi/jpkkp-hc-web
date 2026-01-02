import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Utama', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Carta Organisasi', path: '/structure' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b-4 border-jpkkRed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-3 group">
              {/* Logo Component */}
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-stone-50 border border-stone-200 shadow-sm">
                 <Logo className="w-full h-full text-jpkkRed" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-jpkkRed text-2xl leading-tight tracking-wide">
                  JPKKP
                </span>
                <span className="font-sans text-xs font-bold text-stone-600 tracking-widest uppercase">
                  Hulu Chuchoh
                </span>
              </div>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors duration-200 uppercase tracking-wide ${
                    isActive
                      ? 'text-jpkkRed border-b-2 border-jpkkRed pb-1'
                      : 'text-stone-600 hover:text-jpkkRed'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-jpkkRed hover:bg-jpkkDarkRed text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-jpkkRed hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jpkkRed"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-stone-100 text-jpkkRed'
                      : 'text-stone-700 hover:text-jpkkRed hover:bg-stone-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <a 
              href="https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-jpkkRed text-white px-4 py-3 rounded-md font-medium hover:bg-jpkkDarkRed transition-colors"
            >
              Facebook Rasmi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;