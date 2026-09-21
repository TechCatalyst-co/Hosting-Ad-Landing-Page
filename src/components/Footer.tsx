import React, { useState } from 'react';
import TechCatalystLogo from './TechCatalystLogo';
import { Mail, Phone, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer id="main-footer" className="bg-[#0F172A] text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <TechCatalystLogo variant="white" size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering local business owners with high-speed, conversion-focused websites, managed cloud hosting, and integrated LeadHub CRM software.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#23448D]" />
              <span>Certified Cloud Hosting Partner & Lead Hub Provider</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Platform Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Hosting & Offer Tiers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#claim-form" className="hover:text-white transition-colors">
                  Claim Free Website Build
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support & Inquiries
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="mailto:info@techcatalyst.co"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  info@techcatalyst.co
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="tel:9096750503"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  (909) 675-0503
                </a>
              </div>
              <p className="text-xs text-slate-500 pt-2">
                Mon–Fri: 9:00 AM – 5:00 PM PST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} TechCatalyst. All rights reserved. Built for local business growth.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Modal for Privacy / Terms */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white text-[#0F172A] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-sm text-slate-600 space-y-3 max-h-80 overflow-y-auto pr-2">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    At TechCatalyst, we respect your privacy. All contact information submitted through our intake forms is strictly used to evaluate your website requirements, coordinate your build, and manage your hosting account.
                  </p>
                  <p>
                    We never sell, rent, or trade your personal or business data to third-party advertisers. All lead data routed through LeadHub CRM is encrypted and isolated to your account.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The Free Website Build offer is provided in conjunction with a minimum 12-month commitment to our Hosting & Management agreement.
                  </p>
                  <p>
                    Site design and development commences upon verification of business credentials and intake review. Routine maintenance, security updates, and daily backups are maintained throughout the active subscription term.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="bg-[#23448D] hover:bg-[#1E50BC] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
