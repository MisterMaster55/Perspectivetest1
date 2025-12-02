import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Bauer",
    role: "Agency SaaS Founder",
    image: "https://picsum.photos/100/100?random=1",
    quote: "Niels is the #1 Affiliate at SMM Worldwide for a long time now. Thats a testament to the adspend and revenue he is pushing through our platform."
  },
  {
    id: 2,
    name: "Regina Henriks",
    role: "\"Queen of Ads\"",
    image: "https://picsum.photos/100/100?random=2",
    quote: "It's insane how Niels Team is scaling those Agencies. He is doing awesome things in this space. Thanks for speaking at my event."
  },
  {
    id: 3,
    name: "Olivia Dents",
    role: "NNW Framework",
    image: "https://picsum.photos/100/100?random=3",
    quote: "He is crushing the german market with Agency Consulting. Highly recommended for anyone stuck at 7 figures."
  },
  {
    id: 4,
    name: "Nick Montana",
    role: "Tiktok Specialist",
    image: "https://picsum.photos/100/100?random=4",
    quote: "Niels is a Stud. One of the strongest Case Studies I ever saw. If you want results, this is it."
  },
  {
    id: 5,
    name: "Sarah Mond",
    role: "Climate Positive Agency",
    image: "https://picsum.photos/100/100?random=5",
    quote: "I personally know no one who is doing levels like Niels on Youtube Ads in Germany."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto mt-16">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Trusted and recommended by industry leaders worldwide
        </h2>
        <p className="text-gray-500 text-lg">
          Explore how our approach can elevate your business.
        </p>
      </div>

      {TESTIMONIALS.map((t) => (
        <div key={t.id} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-transform hover:scale-[1.01] duration-300">
           <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
             <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
           </div>
           <h3 className="font-bold text-lg">{t.name}</h3>
           <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">{t.role}</p>
           <p className="text-gray-800 leading-relaxed italic">"{t.quote}"</p>
        </div>
      ))}

      {/* Final Call to Action Card in List */}
      <div className="bg-gradient-to-b from-gray-100 to-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center mt-4">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
             <img src="https://picsum.photos/100/100?random=99" alt="CEO" className="w-full h-full object-cover" />
           </div>
          <p className="text-xs font-bold text-gray-600 mb-2">Niels Clementality, CEO Digital Success Inc.</p>
          <h3 className="text-2xl font-black mb-4">Turn your 7-Figure Brand into 8 – Build a Killer In-House Team</h3>
          <p className="mb-6 text-gray-600">Take the first step toward scaling your business — book your demo today!</p>
          <button onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth'})} className="bg-black text-white text-lg font-bold py-4 px-8 rounded-lg w-full shadow-xl hover:bg-gray-900 transition-colors">
            Book Demo Call Now
          </button>
      </div>
    </div>
  );
};