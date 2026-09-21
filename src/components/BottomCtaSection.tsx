import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const BottomCtaSection: React.FC = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('claim-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // highlight the form
      formElement.classList.add('ring-4', 'ring-[#F59E0B]/50');
      setTimeout(() => {
        formElement.classList.remove('ring-4', 'ring-[#F59E0B]/50');
      }, 1500);
    }
  };

  return (
    <section
      id="final-cta"
      className="relative py-20 lg:py-24 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Subtle radial glow background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#23448D]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1E50BC]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Claim Your Build in 60 Seconds</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-5">
          Ready for a Professional Website Without the Upfront Price Tag?
        </h2>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Claim your custom site build today. Fast launch, zero upfront build fee, and ongoing hosting and care for your business.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#claim-form"
            onClick={handleScrollToForm}
            id="bottom-claim-cta-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] active:scale-[0.98] text-[#0F172A] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-[#F59E0B]/20 transition-all duration-150 uppercase tracking-wide cursor-pointer"
          >
            <span>Claim Your Free Site Build Now</span>
            <ArrowRight className="w-5 h-5 font-bold" />
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            No credit card required upfront
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            12-month hosting commitment
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Full lead capture CRM included
          </span>
        </div>

      </div>
    </section>
  );
};

export default BottomCtaSection;
