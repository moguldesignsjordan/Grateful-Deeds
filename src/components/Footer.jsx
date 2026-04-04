import React from 'react';
import { Link } from 'react-router-dom';
import MogulLogo from '../assets/MogulLogo.png';

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10 px-8 border-t border-gray-900">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-green-500 italic">Grateful Deeds Inc.</h3>
        <p className="text-gray-400 text-sm leading-relaxed">Turning gratitude into action across the Dominican Republic and the Philippines.</p>
      </div>
      <div>
        <h4 className="font-bold text-xs uppercase tracking-widest text-gray-600 mb-6">Contact</h4>
        <p className="text-gray-400">info@gratefuldeedsinc.org</p>
        <p className="text-gray-500 mt-2 italic">"Small Acts. Big Impact."</p>
      </div>
      <div>
        <h4 className="font-bold text-xs uppercase tracking-widest text-gray-600 mb-6">Follow</h4>
        <div className="flex gap-4 text-gray-400">
          <span className="hover:text-green-500 cursor-pointer transition">Instagram</span>
          <span className="hover:text-green-500 cursor-pointer transition">Facebook</span>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-gray-600 text-xs">© 2026 Grateful Deeds Inc. All rights reserved.</p>
      
      {/* THE MOGUL CREDIT LINE */}
      <div className="flex items-center gap-3">
        <span className="text-gray-700 text-xs flex items-center gap-1.5">Created with <span className="text-red-500 text-lg">♥</span> by</span>
        <Link 
          to="https://moguldesignagency.com" 
          target="_blank"
          className="border border-gray-800 bg-black rounded-full px-5 py-2 flex items-center gap-3 hover:border-green-600 transition group"
        >
          <img src={MogulLogo} alt="Mogul" className="h-5 w-auto" />
          <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition">Mogul Design Agency</span>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;