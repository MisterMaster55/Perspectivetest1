import React, { useState, useEffect } from 'react';
import { 
  Calendar, DollarSign, Megaphone, Map, User, Globe, 
  X, Check, Lock, ChevronDown, ChevronUp, Star
} from 'lucide-react';

interface FunnelOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_STEPS = 4;

export const FunnelOverlay: React.FC<FunnelOverlayProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  // Answers state
  const [goals, setGoals] = useState<string[]>([]);
  const [revenue, setRevenue] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  
  // Final form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderProgressBar = () => {
    // Only show progress for Q1-Q4
    if (step > TOTAL_STEPS) return null;
    return (
      <div className="w-full max-w-md mx-auto mb-6 text-center">
         <p className="text-green-600 font-bold text-sm uppercase tracking-wider mb-2">Question {step} of {TOTAL_STEPS}</p>
      </div>
    );
  };

  const renderFooter = () => (
    <div className="mt-12 mb-8 text-center text-xs text-gray-400 space-y-4">
      <div className="flex justify-center gap-4 underline">
        <button className="hover:text-gray-600">Terms of use</button>
        <button className="hover:text-gray-600">Privacy policy</button>
        <button className="hover:text-gray-600">Manage Cookies</button>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" className="w-4 h-4 object-contain" alt="P" style={{ filter: 'grayscale(100%)'}} /> 
        <span className="text-gray-500 font-medium">We use Perspective</span>
      </div>
    </div>
  );

  // --- STEP 1: GOALS ---
  const Step1 = () => {
    const options = [
      { id: 'appts', icon: <Calendar className="text-gray-500" size={20} />, label: "Generate appointments" },
      { id: 'customers', icon: <DollarSign className="text-gray-500" size={20} />, label: "Acquire customers" },
      { id: 'reach', icon: <Megaphone className="text-gray-500" size={20} />, label: "Gain reach" },
      { id: 'brand', icon: <Map className="text-gray-500" size={20} />, label: "Position brand" },
      { id: 'talents', icon: <User className="text-gray-500" size={20} />, label: "Recruiting talents" },
      { id: 'network', icon: <Globe className="text-gray-500" size={20} />, label: "Develop network" },
    ];

    const toggleGoal = (id: string) => {
      if (goals.includes(id)) setGoals(goals.filter(g => g !== id));
      else setGoals([...goals, id]);
    };

    return (
      <div className="max-w-md mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 leading-tight">What are your<br/>current goals?</h2>
        <div className="space-y-3">
          {options.map((opt) => {
            const isSelected = goals.includes(opt.id);
            return (
              <div 
                key={opt.id}
                onClick={() => toggleGoal(opt.id)}
                className={`flex items-center justify-between p-4 bg-white border-2 rounded-xl cursor-pointer transition-all duration-200 ${isSelected ? 'border-green-600 shadow-md' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-50 p-2 rounded-lg">{opt.icon}</div>
                  <span className="font-semibold text-gray-800">{opt.label}</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                   {isSelected && <Check size={14} className="text-white" />}
                </div>
              </div>
            );
          })}
        </div>
        <button 
          onClick={handleNext}
          disabled={goals.length === 0}
          className="w-full mt-8 bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-all"
        >
          Next Question
        </button>
      </div>
    );
  };

  // --- STEP 2: REVENUE (Filling the missing step logically) ---
  const Step2 = () => {
    const options = ["Less than $10k/mo", "$10k - $50k/mo", "$50k - $100k/mo", "$100k+/mo"];
    return (
      <div className="max-w-md mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 leading-tight">What is your current<br/>monthly revenue?</h2>
        <div className="space-y-3">
          {options.map((opt) => (
            <div 
              key={opt}
              onClick={() => { setRevenue(opt); setTimeout(handleNext, 200); }}
              className={`p-5 bg-white border-2 rounded-xl cursor-pointer transition-all duration-200 text-center font-bold text-gray-800 ${revenue === opt ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-600 hover:shadow-md'}`}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- STEP 3: ROLE (Image Cards) ---
  const Step3 = () => {
    const roles = [
      { id: 'CEO', label: 'CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { id: 'Manager', label: 'Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { id: 'Employee', label: 'Employee', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { id: 'Other', label: 'Other role', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
    ];

    return (
      <div className="max-w-md mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 leading-tight">Which position best<br/>describes your role?</h2>
        <div className="grid grid-cols-2 gap-4">
          {roles.map((r) => (
            <div 
              key={r.id}
              onClick={() => { setRole(r.id); setTimeout(handleNext, 300); }}
              className={`group relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all ${role === r.id ? 'border-green-600 ring-2 ring-green-600' : 'border-transparent hover:border-green-400'}`}
            >
               <div className="aspect-square w-full bg-gray-200">
                 <img src={r.img} alt={r.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
               </div>
               <div className={`absolute bottom-0 left-0 right-0 p-3 text-center font-bold text-white transition-colors ${role === r.id ? 'bg-green-700' : 'bg-green-600'}`}>
                 {r.label}
               </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- STEP 4: BUDGET ---
  const Step4 = () => {
    const options = [
      { label: "Less than $3,000", icon: "✨" },
      { label: "$3,000 – $6,000", icon: "⭐" },
      { label: "$6,000 – $10,000", icon: "💫" },
      { label: "More than $10,000", icon: "🌟" }
    ];
    return (
      <div className="max-w-md mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 leading-tight">What is your monthly ad<br/>budget?</h2>
        <div className="space-y-4">
          {options.map((opt) => (
            <button 
              key={opt.label}
              onClick={() => { setBudget(opt.label); setTimeout(handleNext, 200); }}
              className={`w-full p-4 rounded-lg flex items-center gap-4 text-left font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-md ${budget === opt.label ? 'bg-green-700 text-white' : 'bg-green-600 text-white'}`}
            >
               <span className="text-xl">{opt.icon}</span>
               {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // --- FINAL STEP: FORM & INFO ---
  const FinalStep = () => {
    return (
      <div className="max-w-xl mx-auto w-full px-4 pb-20">
        
        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 mb-12">
           <div className="flex justify-center mb-4">
              <Calendar className="text-green-600 w-10 h-10" />
           </div>
           <p className="text-center text-green-600 font-bold text-sm mb-2">Last step. Please only book if you are actually interested ✌️</p>
           <h2 className="text-2xl md:text-3xl font-black text-center mb-6 leading-tight">Ready to Transform Your Business? Schedule Your Free Call Now!</h2>

           <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo Booked!'); onClose(); }}>
              <div className="bg-gray-50 rounded-xl flex items-center p-3 border border-gray-200 focus-within:border-green-500 transition-colors">
                <User className="text-gray-400 ml-2" size={20} />
                <input 
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="Full name" 
                  className="bg-transparent w-full p-2 outline-none text-gray-800 placeholder-gray-400 font-medium"
                />
              </div>
              <div className="bg-gray-50 rounded-xl flex items-center p-3 border border-gray-200 focus-within:border-green-500 transition-colors">
                <div className="text-gray-400 ml-2"><span className="text-lg">@</span></div>
                <input 
                  type="email"
                  value={formEmail}
                  onChange={e => setFormEmail(e.target.value)}
                  placeholder="Email address" 
                  className="bg-transparent w-full p-2 outline-none text-gray-800 placeholder-gray-400 font-medium"
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <div className="relative flex items-center pt-1">
                  <input 
                      type="checkbox" 
                      id="modal-terms" 
                      checked={agreed} 
                      onChange={() => setAgreed(!agreed)}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-green-600 checked:bg-green-600"
                  />
                  <Check size={14} className="pointer-events-none absolute left-[2px] top-[6px] text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <label htmlFor="modal-terms" className="text-xs text-gray-500 cursor-pointer">
                    I have read and agree to the <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>.
                </label>
              </div>

              <button disabled={!agreed} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-xl py-4 rounded-xl shadow-lg transition-all">
                Proceed to choose a date
              </button>
           </form>
        </div>

        {/* As Seen In */}
        <div className="text-center mb-16">
          <p className="font-bold text-sm text-gray-900 mb-6">As seen and reported about in</p>
          <div className="flex justify-center items-center gap-8 opacity-50 grayscale">
             <span className="font-black text-xl font-serif">VOXMEDIA</span>
             <span className="font-black text-xl font-serif">TheNewYorkTimes</span>
             <span className="font-black text-xl font-serif">BUSINESS</span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <p className="text-center text-green-600 font-bold text-sm mb-2">These are your next Steps</p>
          <h3 className="text-3xl font-black text-center mb-10">Ready to Move Forward?</h3>
          
          <div className="space-y-4">
             {[
               { num: 1, title: "Schedule Your Appointment", desc: "Begin your journey by booking a convenient appointment with our team. We'll discuss your business goals." },
               { num: 2, title: "Custom Potential Analysis", desc: "Our experts perform a thorough analysis of your current LinkedIn presence and market opportunities." },
               { num: 3, title: "Free & Personal Strategy Creation", desc: "Based on our analysis, we develop a customized LinkedIn marketing strategy tailored to your objectives." }
             ].map((step) => (
               <div key={step.num} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <p className="text-center text-green-600 font-bold text-sm mb-2">Need help?</p>
          <h3 className="text-3xl font-black text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {[
              "What makes your coaching different from others?",
              "What happens during the free consultation call?",
              "Who is this consultation call for?",
              "Will I be required to sign up for your program after the call?",
              "What do I need to prepare for the consultation?",
              "How do I book my free consultation?"
            ].map((q, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center font-bold p-4 cursor-pointer list-none select-none">
                  {q}
                  <ChevronDown className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  This is a placeholder answer for the question. In a real application, you would provide detailed information here to address the user's concerns.
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-6 py-4 flex justify-between items-center">
         <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-black text-xl">
             P
         </div>
         {step <= TOTAL_STEPS && (
           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
             <X size={24} className="text-gray-500" />
           </button>
         )}
      </div>

      <div className="pt-4 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {renderProgressBar()}
        
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step > TOTAL_STEPS && <FinalStep />}

        {renderFooter()}
      </div>
    </div>
  );
};
