import React, { useState } from 'react';
import { CalendarDays, User, Mail, Check, Lock } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div id="booking-form" className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 w-full max-w-lg mx-auto relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-black"></div>

      <div className="text-center mb-8 mt-2">
        <div className="mx-auto bg-gray-100 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
          <CalendarDays className="text-black" size={24} />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Add details and choose a date</p>
        <h3 className="text-2xl md:text-3xl font-black leading-tight">Save your Slot for a Personalized Demo</h3>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="text-gray-400 group-focus-within:text-black transition-colors" size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Your name" 
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-black rounded-xl outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="text-gray-400 group-focus-within:text-black transition-colors" size={20} />
          </div>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-black rounded-xl outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="flex items-start gap-3 py-2">
           <div className="relative flex items-center">
             <input 
                type="checkbox" 
                id="terms" 
                checked={agreed} 
                onChange={() => setAgreed(!agreed)}
                className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all checked:border-black checked:bg-black"
             />
             <Check size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
           </div>
           <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer select-none">
              I have read and agree to the <span className="underline text-gray-800">Terms of Use</span> and <span className="underline text-gray-800">Privacy Policy</span>.
           </label>
        </div>

        <button className="w-full bg-black hover:bg-gray-800 text-white font-bold text-lg py-5 px-6 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
           Submit and choose date
        </button>
        
        <div className="flex justify-center items-center gap-2 text-xs text-gray-400 pt-2">
            <Lock size={12} />
            <span>Your information is secure</span>
        </div>
      </form>
    </div>
  );
};