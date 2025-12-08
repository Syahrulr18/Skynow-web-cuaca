import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo Utama.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Peta', path: '/map' },
    { label: 'Kamus', path: '/dictionary' },
    { label: 'Kuis', path: '/quiz' },
    { label: 'Activities', path: '/activities' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={handleNavClick}>
            <img src={logo} alt="Skynow" className="h-8 sm:h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white transition-all duration-300 text-base lg:text-lg font-medium hover:text-white/90 ${
                  location.pathname === item.path 
                    ? 'font-bold border-b-2 border-white' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-xl border-t border-white/20 animate-fade-in">
          <div className="px-4 py-4 space-y-1 z-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`block px-4 py-3 rounded-lg text-white transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-white/20 font-bold'
                    : 'hover:bg-white/10 opacity-80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
