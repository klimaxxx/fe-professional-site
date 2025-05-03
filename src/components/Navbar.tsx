import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1117] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-[#2F81F7] font-mono font-bold text-xl">
              <span className="text-[#C9D1D9]">&gt;</span> kelton.lima
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavItem onClick={() => scrollToSection('home')} label="Início" />
              <NavItem onClick={() => scrollToSection('skills')} label="Habilidades" />
              <NavItem onClick={() => scrollToSection('projects')} label="Projetos" />
              <NavItem onClick={() => scrollToSection('contact')} label="Contato" />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#C9D1D9] hover:text-[#2F81F7] transition-colors duration-200"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#161B22] shadow-lg">
          <MobileNavItem onClick={() => scrollToSection('home')} label="Início" />
          <MobileNavItem onClick={() => scrollToSection('skills')} label="Habilidades" />
          <MobileNavItem onClick={() => scrollToSection('projects')} label="Projetos" />
          <MobileNavItem onClick={() => scrollToSection('contact')} label="Contato" />
        </div>
      </div>
    </nav>
  );
};

type NavItemProps = {
  onClick: () => void;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="text-[#C9D1D9] hover:text-[#2F81F7] font-medium transition-colors duration-200"
  >
    {label}
  </button>
);

const MobileNavItem: React.FC<NavItemProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-[#C9D1D9] hover:bg-[#0D1117] hover:text-[#2F81F7] w-full text-left transition-colors duration-200"
  >
    {label}
  </button>
);

export default Navbar;