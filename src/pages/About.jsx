import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // THREE TEAM MEMBERS (Removing Jordan)
  const team = [
    {
      name: "Maria Santos",
      role: "Executive Director",
      bio: "With over 15 years in international development, Maria leads our strategic vision across the Caribbean and Southeast Asia.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
    },
    {
      name: "Papo",
      role: "Operations Director",
      bio: "A local leader in the Dominican Republic dedicated to ensuring every resource reaches the families who need it most.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800"
    },
    {
      name: "Elena Reyes",
      role: "Program Coordinator",
      bio: "Elena manages our educational initiatives in the Philippines, bridging the gap between local schools and global support.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800"
    }
  ];

  const values = [
    { title: "Compassion", desc: "We serve with empathy, kindness, and genuine care for every child and family in need." },
    { title: "Gratitude", desc: "We believe every act of kindness matters. Gratitude guides our mission and inspires us to give back." },
    { title: "Integrity", desc: "We operate with honesty, transparency, and accountability in every action and decision." },
    { title: "Service", desc: "We are committed to selfless service, putting the needs of children and families at the center." },
    { title: "Empowerment", desc: "We provide resources and opportunities that help families build stronger, brighter futures." },
    { title: "Community", desc: "We believe in the power of unity and collaboration to create lasting change globally." },
    { title: "Respect & Dignity", desc: "Every person deserves to be treated with dignity and fairness regardless of their circumstances." }
  ];

  return (
    <div className="bg-white">
      {/* 1. NARRATIVE SECTION */}
      <section className="py-24 px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-green-600 font-bold uppercase tracking-widest text-xs mb-4"
          >
            Our Story
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-black text-black mb-10 leading-tight tracking-tighter">
            Small acts of kindness can <span className="text-green-600 italic underline decoration-gray-200 underline-offset-8">transform lives</span>.
          </h3>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              Grateful Deeds Inc. was founded on a simple but powerful belief: that every child deserves a chance to grow, learn, and dream, regardless of their origin. 
            </p>
            <p>
              Through compassion, service, and community partnerships, we work to bring meaningful change to underserved communities in the <strong>Philippines</strong> and the <strong>Dominican Republic</strong>. From educational support to uplifting families during difficult times, our mission is rooted in the idea that gratitude should inspire action.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TEAM SECTION (3 PEOPLE) */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-black tracking-tighter">Meet Our Team</h2>
            <p className="text-gray-500 mt-2 font-medium">The hearts and hands behind our global initiatives.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/5] shadow-xl shadow-black/5">
                  <img 
                    src={member.img} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                    alt={member.name} 
                  />
                </div>
                <h4 className="text-2xl font-bold text-black">{member.name}</h4>
                <p className="text-green-700 font-bold uppercase tracking-widest text-[10px] mt-1 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-24 px-8 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter">Our Core Values</h2>
            <div className="h-1 w-12 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-l border-gray-800 pl-6"
              >
                <span className="text-green-500 font-mono text-xs mb-2 block">0{i + 1}</span>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;