import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

// Component del button luminescente
const GlowingButton = ({ 
  text = "Trasforma Ora", 
  onClick = () => {},
  className = "",
  isMobile = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isMobile) {
    // Versione semplificata per mobile
    return (
      <button 
        onClick={onClick}
        className="block w-full text-left px-3 py-2 bg-accent text-black rounded-full font-semibold hover:bg-accent/90 transition-colors mt-2"
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative inline-flex items-center justify-center
        px-6 py-2 
        text-white
        font-semibold text-sm
        rounded-full
        border border-gray-600
        transition-all duration-300 ease-out
        hover:scale-105
        group
        overflow-hidden
        ${className}
      `}
      style={{
        backgroundColor: 'var(--midnight-blue)',
        boxShadow: isHovered 
          ? '0 0 25px rgba(163, 247, 135, 0.6), 0 20px 40px rgba(0, 0, 0, 0.3)' 
          : '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}
      style={{
        boxShadow: isHovered 
          ? '0 0 25px rgba(163, 247, 135, 0.6), 0 20px 40px rgba(0, 0, 0, 0.1)' 
          : '0 4px 12px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Sfondo animato al hover */}
      <div 
        className={`
          absolute inset-0 
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          rounded-full
        `}
        style={{
          background: 'linear-gradient(45deg, var(--accent), rgba(163, 247, 135, 0.05))'
        }}
      />
      
      {/* Effetto shimmer */}
      <div 
        className={`
          absolute inset-0 
          opacity-0 group-hover:opacity-100
          transition-all duration-700
          rounded-full
        `}
        style={{
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.7s ease',
        }}
      />
      
      {/* Bordo luminoso */}
      <div 
        className={`
          absolute inset-0 
          rounded-full
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        `}
        style={{
          background: 'linear-gradient(45deg, var(--accent), rgba(163, 247, 135, 0.8), var(--accent))',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'exclude',
          maskComposite: 'exclude',
        }}
      />
      
      {/* Testo del button */}
      <span className="relative z-10 font-semibold">
        {text}
      </span>
      
      {/* Particelle luminose */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full"
              style={{
                backgroundColor: 'var(--accent)',
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `twinkle 2s linear infinite ${i * 0.4}s`
              }}
            />
          ))}
        </div>
      )}
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0);
          }
          50% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
      `}</style>
    </button>
  );
};

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-project">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <img 
                src="/logo_final.png" 
                alt="FlowMeUp - Logo aziendale automazioni AI per PMI italiane"
                title="FlowMeUp - Soluzioni AI personalizzate per piccole e medie imprese"
                width="56"
                height="56"
                loading="eager"
                fetchPriority="high"
                className="h-11 w-auto md:h-14"
              />
              <span 
                className="text-white font-bold text-lg md:text-xl"
                style={{
                  textShadow: '0 0 10px rgba(163, 247, 135, 0.8), 0 0 20px rgba(163, 247, 135, 0.5), 0 0 30px rgba(163, 247, 135, 0.3)'
                }}
              >
                FlowMeUp
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('problem-identification')}
              className="text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.problems')}
            </button>
            <button 
              onClick={() => scrollToSection('solution-preview')}
              className="text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.solutions')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.faq')}
            </button>
          </nav>

          {/* Language Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <div>
              <GlowingButton 
                text={t('nav.cta')}
                onClick={() => scrollToSection('final-cta')}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('problem-identification')}
              className="block w-full text-left px-3 py-2 text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.problems')}
            </button>
            <button 
              onClick={() => scrollToSection('solution-preview')}
              className="block w-full text-left px-3 py-2 text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.solutions')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-primary hover:text-accent transition-colors duration-300 active:text-accent"
            >
              {t('nav.faq')}
            </button>
            
            {/* Language Toggle Mobile */}
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
            
            {/* Button mobile con effetto semplificato */}
            <GlowingButton 
              text={t('nav.cta')}
              onClick={() => scrollToSection('final-cta')}
              isMobile={true}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;