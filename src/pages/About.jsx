import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORT your team photos here
import yismelImg from '../assets/1.jpeg';
import erickImg from '../assets/Erick.jpeg';
import sampaquitaImg from '../assets/Sampaquita.jpeg';

const About = () => {
  const values = [
    { title: "Compassion", desc: "We serve with empathy, kindness, and genuine care for every child and family in need." },
    { title: "Gratitude", desc: "We believe every act of kindness matters. Gratitude guides our mission and inspires us to give back." },
    { title: "Integrity", desc: "We operate with honesty, transparency, and accountability in every action and decision." },
    { title: "Service", desc: "We are committed to selfless service, putting the needs of families at the center." },
    { title: "Empowerment", desc: "We provide resources and opportunities that help families build stronger, brighter futures." },
    { title: "Community", desc: "We believe in the power of unity and collaboration to create lasting change globally." },
    { title: "Respect & Dignity", desc: "Every person deserves to be treated with dignity and fairness regardless of their circumstances." }
  ];

  const team = [
    {
      name: "Yismel Mejía Dela Rosa",
      role: "Secretary",
      bio: "With a strong attention to detail and a commitment to professionalism, Yismel helps facilitate effective communication within the organization and ensures that all administrative processes run smoothly.",
      img: yismelImg // Use the variable
    },
    {
      name: "Erickson Brioso",
      role: "Operations Director",
      bio: "A local leader in the Dominican Republic dedicated to ensuring every resource reaches the families who need it most.",
      img: erickImg // Use the variable
    },
    {
      name: "Sampaquita Ramos",
      role: "Program Director/Chief Financial Officer",
      bio: "Sampaquita manages our educational initiatives in the Philippines, bridging the gap between local schools and global support.",
      img: sampaquitaImg // Use the variable
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. NARRATIVE SECTION */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-green-600 font-bold uppercase tracking-widest text-[10px] mb-4"
          >
            Our Mission
          </motion.h2>
          <h3 className="text-4xl md:text-6xl font-black text-black mb-10 leading-tight tracking-tighter">
            Small acts of kindness can <span className="text-green-600 italic">transform lives</span>.
          </h3>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              Grateful Deeds Inc. was founded on a simple but powerful belief: that every child deserves a chance to grow, learn, and dream, regardless of where they come from.
            </p>
            <p>
              Through compassion, service, and community partnerships, we work to bring meaningful change to underserved communities in the <strong>Philippines</strong> and the <strong>Dominican Republic</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES SECTION */}
      <section className="py-32 px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl font-black tracking-tighter mb-4">Our Core Values</h2>
            <div className="h-1.5 w-16 bg-green-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-gray-800 pl-6 group"
              >
                <span className="text-green-500 font-mono text-xs mb-3 block group-hover:translate-x-1 transition-transform">0{i + 1}</span>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM SECTION */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Meet Our Team</h2>
              <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-xs">The hearts behind the mission</p>
            </div>
            <div className="h-px flex-grow bg-gray-100 mx-8 hidden md:block mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/5] bg-gray-100">
                  <img 
                    src={member.img} 
                    className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" 
                    alt={member.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-bold text-black tracking-tight">{member.name}</h4>
                <p className="text-green-600 font-bold uppercase tracking-[0.2em] text-[10px] mt-2 mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;