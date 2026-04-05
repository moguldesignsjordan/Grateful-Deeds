import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../assets/GratefulDeeds.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const activeLink = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <img src={logo} alt="Grateful Deeds" className="h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:brightness-110" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-green-600 ${
                  activeLink(link.path) ? 'text-green-700' : 'text-black'
                }`}
              >
                {link.name}
                {activeLink(link.path) && <motion.div layoutId="nav-underline" className="h-0.5 bg-green-600 mt-1" />}
              </Link>
            ))}
            <Link to="/donate" className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center gap-2">
              <Heart size={14} className="fill-current text-green-500" />
              Donate
            </Link>
          </div>

          <button className="md:hidden p-2 text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-gray-100 overflow-hidden">
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`text-2xl font-black ${activeLink(link.path) ? 'text-green-600' : 'text-black'}`}>
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setIsOpen(false)} className="w-full bg-green-600 text-white py-5 rounded-2xl text-center font-bold text-lg">
                Support Our Mission
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;