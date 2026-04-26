import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className=" mx-auto px-4 py-4 sm:px-6 lg:px-10 lg:pr-16">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick('home')}>
            <img
              src="/images/header-logo.png"
              alt="logo"
              className="w-80"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleNavClick(item.page)}
                  className={`cursor-pointer px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                    currentPage === item.page
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}>
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block">
            <Button
              size="lg"
              className="bg-[#005d81] hover:bg-[#0c729b] text-lg text-white px-6 py-6 cursor-pointer"
              onClick={() => handleNavClick('contact')}>
              Start Project
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="size-7" />
              ) : (
                <Menu className="size-7" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`cursor-pointer block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}>
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full bg-[#18B6F6] hover:bg-[#E6B456] text-gray-900 px-6 h-12 cursor-pointer"
                  onClick={() => handleNavClick('contact')}>
                  Start Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}