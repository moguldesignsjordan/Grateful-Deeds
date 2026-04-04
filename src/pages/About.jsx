import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    { title: "Compassion", desc: "Empathy and genuine care for every child and family." },
    { title: "Gratitude", desc: "Gratitude guides our mission and inspires us to give back." },
    { title: "Integrity", desc: "Honesty, transparency, and accountability in every action." },
    { title: "Service", desc: "Selfless service, putting the needs of families at the center." },
    { title: "Empowerment", desc: "Providing resources to build brighter, stronger futures." },
    { title: "Community", desc: "Power of unity in the Philippines, DR, and beyond." },
    { title: "Respect & Dignity", desc: "Treating everyone with fairness regardless of circumstance." }
  ];

  return (
    <div className="bg-white">
      {/* 1. OUR STORY */}
      <section className="py-24 px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-green-600 font-bold uppercase tracking-widest text-xs mb-4">About Us</motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-10 leading-tight">
            We believe that <span className="underline decoration-green-500">every child</span> deserves a chance to grow, learn, and dream.
          </h3>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>Grateful Deeds Inc. was founded on a simple but powerful belief: small acts of kindness can transform lives. Our organization is dedicated to supporting families facing hardship, providing hope, and creating opportunities.</p>
            <p>Through compassion and community partnerships, we work to bring meaningful change to underserved communities. Our mission is rooted in the idea that gratitude should inspire action.</p>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES GRID */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div whileHover={{ y: -5 }} key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center font-bold mb-4">{i + 1}</div>
                <h4 className="font-bold text-black mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEAM MEMBERS (Moved here) */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
             <div className="group">
                <div className="aspect-square bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <img src="https://via.placeholder.com/600" className="w-full h-full object-cover grayscale transition duration-500 group-hover:grayscale-0" alt="Founder" />
                </div>
                <h4 className="text-2xl font-bold">Jordan</h4>
                <p className="text-green-600 font-bold uppercase text-xs tracking-widest mt-1">Founder / Executive Director</p>
             </div>
             <div className="group">
                <div className="aspect-square bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <img src="https://via.placeholder.com/600" className="w-full h-full object-cover grayscale transition duration-500 group-hover:grayscale-0" alt="Operations" />
                </div>
                <h4 className="text-2xl font-bold">Papo</h4>
                <p className="text-green-600 font-bold uppercase text-xs tracking-widest mt-1">Operations Director</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;