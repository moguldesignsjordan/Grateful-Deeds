import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Section reveal animation wrapper
const RevealSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [step, setStep] = useState(1);
  const [selectedImpact, setSelectedImpact] = useState(null);

  const amounts = [25, 50, 100, 250];
  
  const impactLevels = [
    { 
      amount: 25, 
      title: 'School Supplies',
      description: 'Provides notebooks, pens, and supplies for one student for a semester.',
      icon: '📚',
      impact: '1 student equipped'
    },
    { 
      amount: 50, 
      title: 'Nutritious Meals',
      description: 'Feeds a family of four for two weeks with healthy, balanced meals.',
      icon: '🍱',
      impact: '1 family fed'
    },
    { 
      amount: 100, 
      title: 'Educational Program',
      description: 'Sponsors a child\'s access to after-school tutoring for one month.',
      icon: '🎓',
      impact: '1 child in program'
    },
    { 
      amount: 250, 
      title: 'Community Support',
      description: 'Provides comprehensive support to a family including food, supplies, and resources.',
      icon: '💚',
      impact: '1 family transformed'
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    const impact = impactLevels.find(i => i.amount === amount);
    setSelectedImpact(impact || null);
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
      // Find closest impact level
      const numVal = parseInt(value);
      if (numVal >= 250) setSelectedImpact(impactLevels[3]);
      else if (numVal >= 100) setSelectedImpact(impactLevels[2]);
      else if (numVal >= 50) setSelectedImpact(impactLevels[1]);
      else if (numVal >= 25) setSelectedImpact(impactLevels[0]);
      else setSelectedImpact(null);
    } else {
      setSelectedImpact(null);
    }
  };

  const currentAmount = customAmount || selectedAmount || 0;

  const testimonials = [
    {
      quote: "Grateful Deeds helped my children stay in school. We are forever thankful.",
      author: "Maria R.",
      location: "Philippines"
    },
    {
      quote: "The support we received changed our family's life. God bless everyone involved.",
      author: "Carlos M.",
      location: "Dominican Republic"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative bg-[#0A0A0A] text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D6E3F]/20 to-transparent" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D6E3F]/20 rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#10B05F] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">100% of donations go to programs</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform a Life <span className="text-[#10B05F] italic">Today</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Your generosity creates ripples of change for families in the Philippines and Dominican Republic.
            </p>
          </motion.div>
        </div>
        
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60V0C360 40 720 60 1080 40C1260 30 1380 10 1440 0V60H0Z" fill="#FAF9F6"/>
          </svg>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Donation Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <RevealSection>
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-black/5">
                  {/* Donation Type Toggle */}
                  <div className="flex bg-[#F5F5F5] rounded-full p-1 mb-10">
                    {['one-time', 'monthly'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setDonationType(type)}
                        className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all ${
                          donationType === type
                            ? 'bg-white text-[#0A0A0A] shadow-md'
                            : 'text-[#737373] hover:text-[#0A0A0A]'
                        }`}
                      >
                        {type === 'one-time' ? 'One-Time Gift' : 'Monthly Giving'}
                      </button>
                    ))}
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-10">
                    <label className="block text-sm font-semibold text-[#0A0A0A] mb-4">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {amounts.map((amount) => (
                        <motion.button
                          key={amount}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-4 px-4 rounded-xl font-bold text-lg transition-all ${
                            selectedAmount === amount
                              ? 'bg-[#0D6E3F] text-white shadow-lg shadow-[#0D6E3F]/30'
                              : 'bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]'
                          }`}
                        >
                          ${amount}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-10">
                    <label className="block text-sm font-semibold text-[#0A0A0A] mb-4">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#A3A3A3] font-bold text-xl">$</span>
                      <input
                        type="number"
                        placeholder="0"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="w-full pl-12 pr-6 py-5 bg-[#F5F5F5] rounded-xl border-2 border-transparent focus:border-[#0D6E3F] focus:bg-white focus:outline-none transition-all text-xl font-semibold"
                      />
                    </div>
                  </div>

                  {/* Impact Preview */}
                  <AnimatePresence mode="wait">
                    {selectedImpact && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-10 p-6 bg-[#0D6E3F]/5 rounded-2xl border border-[#0D6E3F]/10"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{selectedImpact.icon}</span>
                          <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-1">{selectedImpact.title}</h4>
                            <p className="text-sm text-[#525252]">{selectedImpact.description}</p>
                            <div className="mt-3 inline-flex items-center gap-2 bg-[#0D6E3F]/10 rounded-full px-3 py-1">
                              <span className="w-1.5 h-1.5 bg-[#0D6E3F] rounded-full" />
                              <span className="text-xs font-semibold text-[#0D6E3F]">{selectedImpact.impact}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Donation Summary */}
                  <div className="p-6 bg-[#F5F5F5] rounded-2xl mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#737373]">Donation Amount</span>
                      <span className="font-bold text-[#0A0A0A]">${currentAmount || 0}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#737373]">Type</span>
                      <span className="font-bold text-[#0A0A0A] capitalize">{donationType}</span>
                    </div>
                    <div className="h-px bg-[#E5E5E5] my-4" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[#0A0A0A]">Total</span>
                      <span className="font-display text-2xl font-bold text-[#0D6E3F]">
                        ${currentAmount || 0}{donationType === 'monthly' ? '/mo' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={!currentAmount}
                    className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                      currentAmount
                        ? 'bg-[#0D6E3F] text-white hover:bg-[#084D2C] shadow-xl shadow-[#0D6E3F]/20'
                        : 'bg-[#E5E5E5] text-[#A3A3A3] cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Continue to Secure Payment
                  </motion.button>

                  {/* Trust Badges */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[#A3A3A3]">
                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      SSL Encrypted
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      501(c)(3) Tax Deductible
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      100% Impact
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Impact Breakdown */}
              <RevealSection delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5">
                  <h3 className="font-bold text-[#0A0A0A] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0D6E3F]/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">💚</span>
                    </span>
                    Where Your Money Goes
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Direct Programs', percent: 85, color: 'bg-[#0D6E3F]' },
                      { label: 'Operations', percent: 10, color: 'bg-[#10B05F]' },
                      { label: 'Fundraising', percent: 5, color: 'bg-[#E8B923]' }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[#525252]">{item.label}</span>
                          <span className="font-semibold text-[#0A0A0A]">{item.percent}%</span>
                        </div>
                        <div className="h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>

              {/* Testimonials */}
              <RevealSection delay={0.2}>
                <div className="bg-[#0A0A0A] text-white rounded-2xl p-6">
                  <h3 className="font-bold mb-6 flex items-center gap-2">
                    <span className="text-lg">💬</span>
                    From Our Community
                  </h3>
                  
                  <div className="space-y-6">
                    {testimonials.map((t, i) => (
                      <div key={i} className="relative">
                        <svg className="w-8 h-8 text-[#0D6E3F]/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p className="text-white/80 text-sm italic mb-3">{t.quote}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{t.author}</span>
                          <span className="text-white/40">•</span>
                          <span className="text-white/60 text-sm">{t.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>

              {/* Contact */}
              <RevealSection delay={0.3}>
                <div className="bg-[#0D6E3F]/5 rounded-2xl p-6 border border-[#0D6E3F]/10">
                  <h3 className="font-bold text-[#0A0A0A] mb-3">Questions?</h3>
                  <p className="text-sm text-[#525252] mb-4">
                    We're here to help. Reach out to us anytime.
                  </p>
                  <a 
                    href="mailto:donate@gratefuldeeds.org"
                    className="text-[#0D6E3F] font-semibold text-sm hover:underline"
                  >
                    donate@gratefuldeeds.org
                  </a>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Levels Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
              Every Gift Makes a Difference
            </h2>
            <p className="text-[#737373] max-w-2xl mx-auto">
              See the real-world impact of your generosity at every level.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactLevels.map((level, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  onClick={() => handleAmountSelect(level.amount)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all ${
                    selectedAmount === level.amount
                      ? 'bg-[#0D6E3F] text-white shadow-xl shadow-[#0D6E3F]/20'
                      : 'bg-[#F5F5F5] hover:bg-[#E5E5E5]'
                  }`}
                >
                  <span className="text-3xl mb-4 block">{level.icon}</span>
                  <div className={`font-display text-3xl font-bold mb-2 ${
                    selectedAmount === level.amount ? 'text-white' : 'text-[#0D6E3F]'
                  }`}>
                    ${level.amount}
                  </div>
                  <h4 className={`font-bold mb-2 ${
                    selectedAmount === level.amount ? 'text-white' : 'text-[#0A0A0A]'
                  }`}>
                    {level.title}
                  </h4>
                  <p className={`text-sm ${
                    selectedAmount === level.amount ? 'text-white/80' : 'text-[#737373]'
                  }`}>
                    {level.description}
                  </p>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;