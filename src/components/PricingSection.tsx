import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PlanType } from '../types';

interface PricingSectionProps {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
}) => {
  const handleClaim = () => {
    onSelectPlan('standard');
    const formElement = document.getElementById('claim-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23448D]/10 text-[#23448D] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Full-Service Custom Build & Hosting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Everything Your Website Needs. Zero Upfront Build Fee.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your full custom 3–5 page website ($3,000 value) is built completely free with your 12-month hosting agreement.
          </p>
        </div>

        {/* Featured Showcase Package Card */}
        <div className="max-w-3xl mx-auto">
          <div
            id="plan-standard-card"
            className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#23448D] shadow-2xl transition-all duration-200"
          >
            {/* Top Ribbon Badge */}
            <div className="absolute -top-4 right-8 bg-[#23448D] text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>ALL-INCLUSIVE PACKAGE</span>
            </div>

            {/* Plan Header Info */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#23448D] bg-[#23448D]/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
                  Custom Website & Managed Hosting Plan
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  High-Performance Business Web Solution
                </h3>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#23448D]" />
                  12-Month Hosting Agreement
                </span>
              </div>
            </div>

            {/* Free Deliverable Callout Box */}
            <div className="p-5 rounded-2xl bg-[#23448D] text-white shadow-lg mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block mb-0.5">
                    Included Free Deliverable:
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-white block">
                    FREE Custom 3–5 Page Website Layout
                  </span>
                  <p className="text-xs text-blue-200 mt-1">
                    Custom designed, mobile responsive, and tuned for lead generation.
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block">
                    Upfront Value
                  </span>
                  <span className="text-xl font-extrabold text-white line-through opacity-80 block">
                    $3,000
                  </span>
                  <span className="text-xs font-bold text-emerald-300 uppercase bg-emerald-950/40 px-2 py-0.5 rounded">
                    100% Free Build
                  </span>
                </div>
              </div>
            </div>

            {/* What's Included Feature Grid */}
            <div className="mb-8">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#23448D] mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#23448D]" />
                <span>Everything Included In Your Plan:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  '3 to 5 Multi-Page Custom Website Layout',
                  'Ultra-Fast Managed Cloud Hosting (99.9% Uptime)',
                  'Enterprise SSL Security Certificate',
                  'Automated Daily Backups & Cloud Storage',
                  'Continuous Security Patches & Threat Shield',
                  'Ongoing Content, Copy & Image Updates',
                  'TechCatalyst LeadHub CRM Integration',
                  'Premium Business Listing on RedLatina.us',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/70">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[#23448D] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                id="select-standard-plan-button"
                onClick={handleClaim}
                className="w-full py-4 px-6 rounded-xl bg-[#f49e0b] hover:bg-[#d97706] text-black font-extrabold text-base shadow-xl shadow-[#f49e0b]/25 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Claim Your Free $3,000 Website Build</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
              <div className="text-center mt-3">
                <span className="text-xs text-slate-500 font-medium">
                  Zero upfront build fees • 12-month hosting agreement applies
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
