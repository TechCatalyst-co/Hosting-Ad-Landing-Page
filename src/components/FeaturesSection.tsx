import React from 'react';
import { Zap, ShieldCheck, RefreshCw, FileEdit, Users, Globe2, ArrowUpRight } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('claim-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  const features = [
    {
      id: 'feature-hosting',
      title: 'Ultra-Fast Cloud Hosting',
      stat: '99.9% Uptime Guarantee',
      description:
        'Next-generation high-speed cloud infrastructure with continuous speed optimization for instantaneous page loads that turn casual visitors into paying customers.',
      icon: Zap,
      highlight: 'Ultra-Fast Loading',
    },
    {
      id: 'feature-backups',
      title: 'Daily Backups & SSL Security',
      stat: '256-Bit SSL Encryption',
      description:
        'Automated daily cloud backups and military-grade SSL certificates pre-installed. Your business data and customer transactions remain safe and fully recoverable.',
      icon: ShieldCheck,
      highlight: 'Auto-Restores',
    },
    {
      id: 'feature-patches',
      title: 'Continuous Security Patches',
      stat: 'Proactive Threat Shield',
      description:
        'We monitor vulnerabilities 24/7 and deploy core software and plugin patches automatically so your website is never exposed to malware or exploits.',
      icon: RefreshCw,
      highlight: 'Zero-Maintenance',
    },
    {
      id: 'feature-content',
      title: 'Ongoing Content Updates',
      stat: 'Unlimited Routine Edits',
      description:
        'Need to update your phone number, swap a photo, add a testimonial, or change seasonal pricing? Send a quick email and our team implements it for you.',
      icon: FileEdit,
      highlight: 'Done-For-You',
    },
    {
      id: 'feature-crm',
      title: 'TechCatalyst LeadHub CRM',
      stat: 'Instant Lead Notification',
      description:
        'Every inquiry from your custom site flows directly into your unified LeadHub dashboard. Track customer statuses, send SMS/email alerts, and close deals faster.',
      icon: Users,
      highlight: 'Built-in Lead Engine',
    },
    {
      id: 'feature-redlatina',
      title: 'Premium RedLatina.us Listing',
      stat: 'Enhanced Local Visibility',
      description:
        'Your business receives a verified, prominent showcase on RedLatina.us, delivering trusted local referral traffic and valuable regional SEO power.',
      icon: Globe2,
      highlight: 'Exclusive Network',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23448D]/10 text-[#23448D] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Built for High Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Everything Your Business Needs to Grow Online
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just build your site—we power your entire online presence with continuous updates, enterprise hosting, and automated lead capture.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={feature.id}
                className="group relative bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#23448D]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Highlight Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] group-hover:bg-[#23448D] group-hover:border-[#23448D] flex items-center justify-center text-[#23448D] group-hover:text-white transition-all duration-200 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-200/70 text-slate-700 group-hover:bg-[#23448D]/10 group-hover:text-[#23448D] transition-colors">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title & Stat */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1.5 group-hover:text-[#23448D] transition-colors">
                    {feature.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#1E50BC] mb-3 flex items-center gap-1">
                    <span>{feature.stat}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Card Footer Micro-indicator */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Included with hosting</span>
                  <a
                    href="#claim-form"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToForm();
                    }}
                    title={`Claim free build with ${feature.title}`}
                    aria-label={`Claim free build with ${feature.title}`}
                    className="p-1.5 -mr-1.5 rounded-lg text-slate-400 hover:text-[#23448D] hover:bg-[#23448D]/10 active:scale-95 transition-all group-hover:text-[#23448D] cursor-pointer inline-flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
