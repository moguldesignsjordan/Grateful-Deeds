import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import ALL local images at the top
import heroImg from '../assets/3.jpeg';
import drImg from '../assets/gd2.jpeg';  // Dominican Republic image
import phImg from '../assets/gd1.jpeg';  // Philippines image

// Animated counter component
const AnimatedCounter = ({ value, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

// Section reveal animation wrapper
const RevealSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const impactAreas = [
    {
      country: 'Dominican Republic',
      description: 'Providing essential resources, nutrition programs, and community development initiatives.',
      image: drImg,
      stats: '250+ Families',
      color: 'from-amber-500/80'
    },
    {
      country: 'Philippines',
      description: 'Educational support, school supplies, and scholarship programs for underprivileged youth.',
      image: phImg,
      stats: '300+ Students',
      color: 'from-emerald-500/80'
    }
  ];

  const stats = [
    { value: '100', suffix: '%', label: 'Transparency', description: 'of funds go directly to programs' },
    { value: '2', suffix: '', label: 'Countries', description: 'Philippines & Dominican Republic' },
    { value: '500', suffix: '+', label: 'Families', description: 'served and counting' },
    { value: '50', suffix: '+', label: 'Volunteers', description: 'making change happen' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          style={{ y: heroImageY, scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-10" />
          <img 
            src={heroImg} 
            className="w-full h-full object-cover" 
            alt="Children smiling" 
          />
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#10B05F]/20 rounded-full blur-[100px] z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8B923]/10 rounded-full blur-[120px] z-10" />

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 max-w-6xl mx-auto px-6 md:px-8 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-[#10B05F] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">501(c)(3) Nonprofit Organization</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95] tracking-tight"
          >
            Small Acts.
            <br />
            <span className="text-[#10B05F] italic font-medium">Big Impact.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We turn gratitude into action for underserved communities 
            in the Philippines and the Dominican Republic.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-[#0D6E3F] hover:bg-[#10B05F] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl shadow-[#0D6E3F]/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Donate Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 text-white/90 hover:text-white px-8 py-4 rounded-full font-medium border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Learn Our Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ STATS MARQUEE ============ */}
      <section className="py-8 bg-[#0A0A0A] overflow-hidden">
        <div className="flex items-center whitespace-nowrap marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {stats.map((stat, j) => (
                <div key={j} className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl font-bold text-white font-display">
                    {stat.value}<span className="text-[#10B05F]">{stat.suffix}</span>
                  </span>
                  <div className="text-left">
                    <div className="text-white/90 text-sm font-semibold">{stat.label}</div>
                    <div className="text-white/50 text-xs">{stat.description}</div>
                  </div>
                  <span className="ml-8 text-white/20">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ MISSION STATEMENT ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#0D6E3F]" />
              <span className="text-[#0D6E3F] text-xs font-bold uppercase tracking-[0.2em]">Our Mission</span>
            </div>
          </RevealSection>
          
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] leading-[1.1] mb-8">
              We believe every child deserves a chance to 
              <span className="text-[#0D6E3F] italic"> grow, learn, </span>
              and 
              <span className="text-[#0D6E3F] italic"> dream</span>—regardless of where they come from.
            </h2>
          </RevealSection>
          
          <RevealSection className="max-w-3xl">
            <p className="text-xl text-[#525252] leading-relaxed font-light">
              Through compassion, service, and community partnerships, Grateful Deeds Inc. 
              works to bring meaningful change to underserved communities. Every donation, 
              every volunteer hour, every act of kindness creates ripples of transformation.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ============ IMPACT AREAS ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-[#0D6E3F] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Where We Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A]">Our Impact Areas</h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {impactAreas.map((area, i) => (
              <RevealSection key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl h-[500px] md:h-[600px] cursor-pointer"
                >
                  {/* Image */}
                  <motion.img 
                    src={area.image} 
                    className="absolute inset-0 w-full h-full object-cover img-zoom" 
                    alt={area.country}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${area.color} via-black/50 to-transparent`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0.8, y: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Stats Badge */}
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-white text-sm font-semibold">{area.stats}</span>
                      </div>
                      
                      <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{area.country}</h3>
                      <p className="text-white/80 text-lg leading-relaxed max-w-md">{area.description}</p>
                      
                      {/* Learn More Link */}
                      <div className="mt-6 flex items-center gap-3 text-white group-hover:gap-5 transition-all">
                        <span className="font-semibold">Explore Impact</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D6E3F]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8B923]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <RevealSection className="text-center mb-20">
            <span className="text-[#10B05F] text-xs font-bold uppercase tracking-[0.2em] block mb-4">The Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">How Your Gift Helps</h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: '01', title: 'You Donate', desc: 'Your contribution goes directly to our programs with 100% transparency.' },
              { step: '02', title: 'We Distribute', desc: 'Our local teams identify families and communities with the greatest need.' },
              { step: '03', title: 'Lives Transform', desc: 'Children receive education, families receive support, communities thrive.' }
            ].map((item, i) => (
              <RevealSection key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  {/* Connector Line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
                  )}
                  
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-2xl bg-[#0D6E3F] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <span className="font-display text-2xl font-bold">{item.step}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>

          {/* CTA */}
          <RevealSection className="text-center mt-16">
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#0A0A0A] hover:bg-[#10B05F] hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Start Your Impact Today
              </motion.button>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <RevealSection>
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-black/5 relative overflow-hidden">
              {/* Decorative shape */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0D6E3F]/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E8B923]/10 rounded-full" />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0D6E3F]/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#0D6E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Join Our Journey</h2>
                <p className="text-[#525252] mb-10 max-w-lg mx-auto">
                  Get inspiring stories of impact and updates on our latest initiatives delivered to your inbox.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow px-6 py-4 bg-[#F5F5F5] rounded-full border border-transparent focus:border-[#0D6E3F] focus:outline-none focus:ring-2 focus:ring-[#0D6E3F]/20 transition-all"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="bg-[#0D6E3F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#084D2C] transition-colors shadow-lg shadow-[#0D6E3F]/20"
                    >
                      Subscribe
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 text-[#0D6E3F] font-semibold"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thank you for subscribing!</span>
                  </motion.div>
                )}

                <p className="text-xs text-[#A3A3A3] mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Home;