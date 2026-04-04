import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('50');

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-8">
      <div className="max-w-xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-black/5">
        <h2 className="text-3xl font-bold text-center mb-2">Transform a Life</h2>
        <p className="text-gray-500 text-center mb-10">Select an amount to contribute to our mission.</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {['25', '50', '100'].map((val) => (
            <button 
              key={val}
              onClick={() => setAmount(val)}
              className={`py-4 rounded-xl font-bold border-2 transition ${amount === val ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
            >
              ${val}
            </button>
          ))}
        </div>

        <div className="relative mb-8">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
          <input 
            type="number" 
            placeholder="Custom Amount" 
            className="w-full pl-10 pr-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:border-green-500"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-black/10">
          Continue to Secure Payment
        </button>
      </div>
    </div>
  );
};

export default Donate;