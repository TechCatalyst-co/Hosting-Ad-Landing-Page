import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How can you build a site for free?',
      answer:
        'We partner with local businesses long-term. Instead of charging a large $3,000 upfront fee, we invest in your build and support your business through our ongoing hosting and infrastructure agreement.',
    },
    {
      id: 'faq-2',
      question: 'What is the commitment period?',
      answer:
        'Our hosting and management agreement requires a 12-month commitment to cover the initial design and development costs of your website.',
    },
    {
      id: 'faq-3',
      question: 'What is TechCatalyst LeadHub CRM?',
      answer:
        'LeadHub CRM connects directly to your website forms to instantly store, organize, and notify you of new customer inquiries so you never miss a lead.',
    },
    {
      id: 'faq-4',
      question: 'What is included with the RedLatina.us listing?',
      answer:
        'Your business receives a featured business listing on RedLatina.us, driving additional local traffic and high-authority local SEO value to your company.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23448D]/10 text-[#23448D] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about our free website build and hosting model.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#23448D]/30 bg-[#F8FAFC] shadow-sm'
                    : 'border-[#E2E8F0] bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23448D]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#23448D] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional inquiry note */}
        <div className="mt-10 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            Have a custom request or need e-commerce capabilities?{' '}
            <a
              href="#claim-form"
              aria-label="Scroll to intake form to claim free website build"
              className="text-[#23448D] font-bold underline hover:text-[#1E50BC]"
            >
              Fill out the intake form
            </a>{' '}
            and our team will tailor a solution for your business.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
