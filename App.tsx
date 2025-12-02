import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { VideoPlayer } from './components/VideoPlayer';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { FloatingAIChat } from './components/FloatingAIChat';
import { FunnelOverlay } from './components/FunnelOverlay';

const BENEFITS = [
  {
    bold: "Discover exactly how our framework can scale your business",
    text: "to the next level."
  },
  {
    bold: "Get a personalized strategy",
    text: "built specifically for your brand's growth and success."
  },
  {
    bold: "Leverage proven methods",
    text: "to consistently outperform industry benchmarks."
  },
  {
    bold: "Access expert insights",
    text: "and guidance to optimize your results at every stage."
  }
];

function App() {
  const [showFunnel, setShowFunnel] = useState(false);

  const openFunnel = () => {
    setShowFunnel(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Funnel Overlay */}
      <FunnelOverlay isOpen={showFunnel} onClose={() => setShowFunnel(false)} />

      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-xs md:text-sm font-medium tracking-wide">
        Start Scaling Today • Limited Spots Available for Q4
      </div>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center">
        
        {/* Header Logo */}
        <div className="mb-8 md:mb-12">
           <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-black text-2xl">
             P
           </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center leading-[1.1] mb-6 max-w-5xl">
          How we got Agency Clients <span className="underline decoration-4 decoration-gray-300 underline-offset-8">worth $1.5M</span> with $15k in ad spend (video)
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 text-center mb-10 max-w-2xl font-medium">
          Turn your 7-Figure Agency into 8. Build a Killer In-House Team at 8 Figures.
        </p>

        {/* Video VSL */}
        <div className="w-full max-w-4xl mb-12">
          <VideoPlayer />
        </div>

        {/* Primary CTA */}
        <button 
          onClick={openFunnel}
          className="w-full max-w-2xl bg-black text-white text-xl md:text-2xl font-bold py-6 px-8 rounded-xl shadow-2xl hover:bg-gray-900 hover:scale-[1.02] transition-all duration-300 mb-16"
        >
          Book Demo Call Now
        </button>

        {/* Scroll Indicator */}
        <div className="animate-bounce mb-16 text-gray-400">
           <ChevronDown size={32} />
        </div>

        {/* Sub-Headline Section */}
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Get familiar with our content & book a demo!
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A quick 45-minute call to analyze your business and give you a detailed roadmap for applying the Agency Framework.
          </p>
        </div>

        {/* Form and Benefits Section */}
        <div className="w-full max-w-lg mx-auto">
          
          {/* Note: Keeping the on-page form as an alternative, but Primary CTAs now open the funnel */}
          <BookingForm />

          <div className="mt-16 space-y-8 pl-2">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                   <div className="bg-black rounded-full p-1">
                      <CheckCircle2 size={20} className="text-white" />
                   </div>
                </div>
                <p className="text-lg text-gray-600 leading-snug">
                  <span className="font-bold text-black">{benefit.bold}</span> {benefit.text}
                </p>
              </div>
            ))}
            
            {/* Social Proof Avatars */}
            <div className="pt-8 flex flex-col items-center sm:items-start gap-3">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} className="w-12 h-12 rounded-full border-4 border-white object-cover" src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" />
                 ))}
               </div>
               <div className="flex items-center gap-2">
                 <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                 </div>
                 <span className="text-sm font-bold text-gray-500">4.9 from 200+ reviews</span>
               </div>
            </div>
          </div>

        </div>

        {/* Testimonials List */}
        <Testimonials />
        
        {/* Extra Bottom CTA added to trigger funnel from bottom card as well */}

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-100 w-full text-center text-gray-400 text-sm max-w-3xl">
           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-white font-black text-xl mx-auto mb-6">
             P
           </div>
           <p className="mb-8">Digital Success Inc. - Copyright © 2025. All Rights Reserved.</p>
           
           <div className="space-y-4 text-xs text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
             <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. NOT GOOGLE: This site is not a part of the Google website or Google Inc. Additionally, This site is NOT endorsed by Google in any way.</p>
             <p>Earnings and Revenue Figures, as Communicated by Digital Success Inc., Are Based on Personal Experiences or Those of Their Best Clients and Do Not Constitute a Guarantee or Promise. Individual results will always vary.</p>
             <p className="font-bold">Disclaimer:</p>
             <p>Digital Success Inc. is a consulting and service company for established businesses. We do not sell business opportunities for beginners or individuals.</p>
           </div>

           <div className="flex justify-center gap-4 text-xs underline mb-24">
              <a href="#" className="hover:text-gray-600">Terms of use</a>
              <a href="#" className="hover:text-gray-600">Privacy policy</a>
              <a href="#" className="hover:text-gray-600">Manage Cookies</a>
           </div>
           
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 mb-8">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500"></div>
              <span className="text-gray-500 font-medium">We use Perspective</span>
           </div>
        </footer>

      </main>
      
      {/* Floating AI Assistant */}
      <FloatingAIChat />
    </div>
  );
}

export default App;
