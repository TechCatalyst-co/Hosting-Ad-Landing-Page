import React from 'react';
import { Hammer, Scale, Stethoscope, Building2, Briefcase, Wrench } from 'lucide-react';

export const TrustLogoBar: React.FC = () => {
  const industries = [
    {
      name: 'Contractors & Trades',
      icon: Hammer,
      tag: 'Roofing, HVAC, Plumbing',
    },
    {
      name: 'Legal & Law Firms',
      icon: Scale,
      tag: 'Attorneys & Counsel',
    },
    {
      name: 'Health & Wellness',
      icon: Stethoscope,
      tag: 'Clinics, Dental, Chiro',
    },
    {
      name: 'Real Estate & Rentals',
      icon: Building2,
      tag: 'Agencies & Property Mgmt',
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      tag: 'Consulting & Accounting',
    },
    {
      name: 'Auto & Field Services',
      icon: Wrench,
      tag: 'Repair & Fleet Operations',
    },
  ];

  return (
    <section id="trust-bar" className="py-12 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Text */}
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-slate-500 mb-8">
          POWERING HIGH-PERFORMANCE LOCAL BUSINESSES
        </h2>

        {/* Grayscale Industry Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {industries.map((item, index) => {
            const Icon = item.icon;
            const altTextMap: Record<string, string> = {
              'Contractors & Trades': 'Contractors, Roofing, HVAC, Plumbing Web Design Services',
              'Legal & Law Firms': 'Legal and Law Firm Website Solutions',
              'Health & Wellness': 'Healthcare, Dental, and Clinic Web Hosting',
              'Real Estate & Rentals': 'Real Estate and Property Management Websites',
              'Professional Services': 'Consulting and Accounting Business Web Design',
              'Auto & Field Services': 'Auto Repair and Field Services Website Solutions',
            };
            const altText = altTextMap[item.name] || `${item.name} Website Solutions`;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-[#E2E8F0] transition-all duration-200 w-full"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-slate-200/60 group-hover:bg-[#23448D]/10 flex items-center justify-center text-slate-500 group-hover:text-[#23448D] transition-colors mb-2"
                  role="img"
                  aria-label={altText}
                  data-alt={altText}
                >
                  <Icon className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-[#0F172A] transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustLogoBar;
