import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import your team photos
import yismelImg from '../assets/1.jpeg';
import erickImg from '../assets/Erick.jpeg';
import sampaquitaImg from '../assets/Sampaquita.jpeg';

// Import story section image
import storyImg from '../assets/GD3.jpeg';

// Section reveal animation wrapper
const RevealSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax Image component
const ParallaxImage = ({ src, alt, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover"
      />
    </div>
  );
};

const About = () => {
  const values = [
    { 
      title: 'Compassion', 
      desc: 'We serve with empathy, kindness, and genuine care for every child and family in need.'
    },
    { 
      title: 'Gratitude', 
      desc: 'Every act of kindness matters. Gratitude guides our mission and inspires us to give back.'
    },
    { 
      title: 'Integrity', 
      desc: 'We operate with honesty, transparency, and accountability in every action and decision.'
    },
    { 
      title: 'Service', 
      desc: 'We are committed to selfless service, putting the needs of families at the center.'
    },
    { 
      title: 'Empowerment', 
      desc: 'We provide resources and opportunities that help families build stronger, brighter futures.'
    },
    { 
      title: 'Community', 
      desc: 'We believe in the power of unity and collaboration to create lasting change globally.'
    },
    { 
      title: 'Dignity', 
      desc: 'Every person deserves to be treated with fairness regardless of their circumstances.'
    }
  ];

  const team = [
    {
      name: 'Yismel Mejía Dela Rosa',
      role: 'Secretary',
      bio: 'With a strong attention to detail and a commitment to professionalism, Yismel helps facilitate effective communication within the organization and ensures that all administrative processes run smoothly.',
      img: yismelImg,
      location: 'Dominican Republic'
    },
    {
      name: 'Erickson Brioso',
      role: 'Operations Director',
      bio: 'A local leader in the Dominican Republic dedicated to ensuring every resource reaches the families who need it most. Erickson coordinates on-the-ground initiatives and community partnerships.',
      img: erickImg,
      location: 'Dominican Republic'
    },
    {
      name: 'Sampaquita Ramos',
      role: 'Program Director & CFO',
      bio: 'Sampaquita manages our educational initiatives in the Philippines, bridging the gap between local schools and global support while overseeing our financial stewardship.',
      img: sampaquitaImg,
      location: 'Philippines'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Founded with a mission to serve', desc: 'Grateful Deeds Inc. was established to bring hope to underserved communities.' },
    { year: '2021', event: 'First community programs launched', desc: 'Began educational and nutrition programs in the Philippines.' },
    { year: '2022', event: 'Expanded to Dominican Republic', desc: 'Extended our reach to serve families in the Caribbean.' },
    { year: '2023', event: '500+ families served', desc: 'Reached a milestone of helping over 500 families across both regions.' },
    { year: '2024', event: 'Growing our impact', desc: 'Continuing to expand programs and volunteer network worldwide.' }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0A0A0A] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#0D6E3F]/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8B923]/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#10B05F]" />
              <span className="text-[#10B05F] text-xs font-bold uppercase tracking-[0.25em]">About Us</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 max-w-4xl">
              Turning gratitude into 
              <span className="text-[#10B05F] italic"> meaningful action</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
              We're a team of changemakers dedicated to transforming lives 
              through compassion, service, and community.
            </p>
          </motion.div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 100V0C240 66.667 480 100 720 100C960 100 1200 66.667 1440 0V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ============ MISSION NARRATIVE ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealSection>
                <span className="text-[#0D6E3F] text-xs font-bold uppercase tracking-[0.2em] block mb-6">Our Story</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-[1.1] mb-8">
                  Small acts of kindness can 
                  <span className="text-[#0D6E3F] italic"> transform lives</span>.
                </h2>
              </RevealSection>
              
              <RevealSection delay={0.1}>
                <div className="space-y-6 text-lg text-[#525252] leading-relaxed">
                  <p>
                    Grateful Deeds Inc. was founded on a simple but powerful belief: that every child 
                    deserves a chance to grow, learn, and dream, regardless of where they come from.
                  </p>
                  <p>
                    Through compassion, service, and community partnerships, we work to bring 
                    meaningful change to underserved communities in the <strong className="text-[#0A0A0A]">Philippines</strong> and 
                    the <strong className="text-[#0A0A0A]">Dominican Republic</strong>.
                  </p>
                  <p>
                    What started as a grassroots effort has grown into a movement of dedicated 
                    volunteers and donors who believe that together, we can make a difference.
                  </p>
                </div>
              </RevealSection>
              
              <RevealSection delay={0.2} className="mt-10">
                <Link to="/donate">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#0D6E3F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#084D2C] transition-colors shadow-lg shadow-[#0D6E3F]/20"
                  >
                    Join Our Mission
                  </motion.button>
                </Link>
              </RevealSection>
            </div>
            
            <RevealSection delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src={storyImg} 
                    alt="Children learning" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl shadow-black/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#0D6E3F]/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-[#0D6E3F]">500+</div>
                      <div className="text-sm text-[#737373]">Families Served</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D6E3F]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8B923]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <RevealSection className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-[#10B05F] text-xs font-bold uppercase tracking-[0.2em] block mb-4">What We Stand For</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold">Our Core Values</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">
                These principles guide every decision we make and every life we touch.
              </p>
            </div>
            <div className="h-px w-full bg-white/10 mt-10" />
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {values.map((v, i) => (
              <RevealSection key={i} delay={i * 0.05}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-[#10B05F] font-mono text-xs">0{i + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold mb-3 group-hover:text-[#10B05F] transition-colors">{v.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-[#0D6E3F] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Our Journey</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A]">Growing Our Impact</h2>
          </RevealSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E5E5] md:-translate-x-1/2" />
            
            {timeline.map((item, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                    <span className="text-[#0D6E3F] font-display text-2xl font-bold">{item.year}</span>
                    <h4 className="text-xl font-bold text-[#0A0A0A] mt-2 mb-2">{item.event}</h4>
                    <p className="text-[#737373]">{item.desc}</p>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#0D6E3F] rounded-full -translate-x-1/2 ring-4 ring-[#FAF9F6]" />
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-[#0D6E3F] text-xs font-bold uppercase tracking-[0.2em] block mb-4">The Team</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-4">Meet the Hearts Behind the Mission</h2>
            <p className="text-[#737373] text-lg max-w-2xl mx-auto">
              Our dedicated team works tirelessly to ensure every donation creates real, lasting impact.
            </p>
          </RevealSection>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4] bg-[#F5F5F5]">
                    <motion.img 
                      src={member.img}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover" 
                      alt={member.name} 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#0D6E3F] rounded-full" />
                      <span className="text-xs font-medium text-[#0A0A0A]">{member.location}</span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h4 className="font-display text-xl font-bold text-[#0A0A0A] mb-1">{member.name}</h4>
                    <p className="text-[#0D6E3F] font-semibold text-xs uppercase tracking-[0.15em] mb-4">{member.role}</p>
                    <p className="text-[#737373] text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0D6E3F] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to be part of<br />something bigger?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Join our community of changemakers and help us transform lives, one grateful deed at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-[#0D6E3F] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
                >
                  Donate Now
                </motion.button>
              </Link>
              <a href="mailto:info@gratefuldeeds.org">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default About;