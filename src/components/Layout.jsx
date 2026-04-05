import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import logos
import logoImg from '../assets/GratefulDeeds.png';
import logoWhiteImg from '../assets/GratefulDeedswht.png';
import MogulLogo from '../assets/MogulLogo.png';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/donate', label: 'Donate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              {/* Logo */}
              <img 
                src={logoImg} 
                alt="Grateful Deeds" 
                className="h-10 w-auto object-contain"
              />

            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-5 py-2 group"
              >
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled 
                    ? location.pathname === link.path ? 'text-[#0D6E3F]' : 'text-[#525252] hover:text-[#0A0A0A]'
                    : location.pathname === link.path ? 'text-white' : 'text-white/70 hover:text-white'
                }`}>
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0 left-5 right-5 h-0.5 rounded-full ${
                      isScrolled ? 'bg-[#0D6E3F]' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#0D6E3F] text-white hover:bg-[#084D2C] shadow-lg shadow-[#0D6E3F]/20'
                    : 'bg-white text-[#0A0A0A] hover:bg-white/90'
                }`}
              >
                Give Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{ 
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0
                }}
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#0A0A0A]' : 'bg-white'
                }`}
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#0A0A0A]' : 'bg-white'
                }`}
              />
              <motion.span
                animate={{ 
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0
                }}
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#0A0A0A]' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl"
            >
              <div className="p-8 pt-24">
                <nav className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 text-2xl font-display font-semibold transition-colors ${
                          location.pathname === link.path 
                            ? 'text-[#0D6E3F]' 
                            : 'text-[#262626] hover:text-[#0D6E3F]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <Link to="/donate">
                    <button className="w-full py-4 bg-[#0D6E3F] text-white rounded-2xl font-semibold hover:bg-[#084D2C] transition-colors">
                      Donate Now
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white">
        {/* Top Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Ready to make<br />
                  <span className="text-[#10B05F] italic">a difference?</span>
                </h2>
                <p className="text-[#A3A3A3] text-lg max-w-md">
                  Every donation, no matter how small, creates ripples of change across communities.
                </p>
              </div>
              <div className="flex items-center md:justify-end">
                <Link to="/donate">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 bg-white text-[#0A0A0A] px-8 py-5 rounded-full font-semibold hover:bg-[#10B05F] hover:text-white transition-all duration-300"
                  >
                    <span>Start Giving</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoWhiteImg} 
                alt="Grateful Deeds" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-semibold"></span>
            </div>
            <div className="flex items-center gap-8 text-sm text-[#737373]">
              <span>© {new Date().getFullYear()} All rights reserved</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">501(c)(3) Nonprofit Organization</span>
            </div>
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0D6E3F] transition-colors group"
                >
                  {social === 'facebook' && (
                    <svg className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mogul Credit Line */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
            <div className="flex justify-center">
              <div className="flex items-center gap-3">
                <span className="text-[#525252] text-xs flex items-center gap-1.5">
                  Created with 
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#E24B4A] text-sm"
                  >
                    ♥
                  </motion.span> 
                  by
                </span>
                <a 
                  href="https://moguldesignagency.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-3 hover:border-[#10B05F] hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10B05F]/0 via-[#10B05F]/5 to-[#10B05F]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <img src={MogulLogo} alt="Mogul" className="h-5 w-auto relative z-10" />
                  <span className="text-[#A3A3A3] text-[10px] font-bold uppercase tracking-[0.15em] group-hover:text-white transition-colors relative z-10">
                    Mogul Design Agency
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;