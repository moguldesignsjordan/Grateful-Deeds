import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO */}
      <section className="relative h-[85vh] flex items-center bg-black text-white px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
           <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              Small Acts.<br/><span className="text-green-500 italic">Big Impact.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-xl font-light">
              We turn gratitude into action for underserved communities in the Philippines and the Dominican Republic.
            </p>
            <Link to="/donate" className="bg-green-600 hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-bold">
          <div><div className="text-3xl">100%</div><div className="text-xs text-gray-500 uppercase tracking-widest">Impact</div></div>
          <div><div className="text-3xl text-green-700">02</div><div className="text-xs text-gray-500 uppercase tracking-widest">Regions</div></div>
          <div><div className="text-3xl">500+</div><div className="text-xs text-gray-500 uppercase tracking-widest">Families</div></div>
          <div><div className="text-3xl text-green-700">50+</div><div className="text-xs text-gray-500 uppercase tracking-widest">Volunteers</div></div>
        </div>
      </section>

      {/* 3. IMPACT CARDS */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl h-[450px]">
            <img src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="DR" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold">Dominican Republic</h3>
              <p className="text-gray-300 mt-2">Providing essential resources and community uplift.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl h-[450px]">
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Philippines" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold">Philippines</h3>
              <p className="text-gray-300 mt-2">Educational support and brighter futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-black rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-400 mb-8">Get updates on our latest deeds directly to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="flex-grow bg-gray-900 border border-gray-800 rounded-full px-6 py-4 focus:outline-none focus:border-green-600 transition" />
            <button className="bg-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-500 transition">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;