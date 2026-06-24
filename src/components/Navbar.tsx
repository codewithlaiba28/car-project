"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Models', href: '#models' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <div className={`fixed z-50 transition-all duration-500 ease-in-out w-full flex justify-center ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'} ${scrolled ? 'top-6 px-4 md:px-8' : 'top-0'}`}>
      <nav
        className={`transition-all duration-500 w-full ${
          scrolled 
            ? 'max-w-5xl bg-black/40 backdrop-blur-xl py-4 px-6 md:px-8 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'max-w-full bg-transparent py-6 px-6 md:px-12'
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-primary font-bold text-2xl tracking-tighter flex gap-1">
              <div className="w-1.5 h-6 bg-primary transform skew-x-[-20deg]"></div>
              <div className="w-1.5 h-6 bg-primary transform skew-x-[-20deg]"></div>
              <div className="w-1.5 h-6 bg-primary transform skew-x-[-20deg]"></div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg py-6 flex flex-col items-center gap-6 md:hidden border border-white/10 ${scrolled ? 'mt-4 rounded-2xl' : 'border-t-0'}`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-gray-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </div>
  );
}
