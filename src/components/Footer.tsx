import React from 'react';
import TechCatalystLogo from './TechCatalystLogo';
import { Mail, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
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
            <a
              href="https://techcatalyst.co/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://techcatalyst.co/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
