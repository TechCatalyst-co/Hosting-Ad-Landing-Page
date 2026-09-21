import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import TechCatalystLogo from './TechCatalystLogo';

interface NavbarProps {
  onClaimClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClaimClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]'
          : 'bg-white border-b border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo Container */}
          <a
            href="#"
            className="flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23448D] rounded-lg p-1"
            aria-label="TechCatalyst Home"
          >
            <TechCatalystLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#0F172A]">
            <a
              href="#features"
              onClick={(e) => handleScrollTo(e, 'features')}
              className="hover:text-[#1E50BC] transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, 'pricing')}
              className="hover:text-[#1E50BC] transition-colors"
            >
              Hosting Plan
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScrollTo(e, 'faq')}
              className="hover:text-[#1E50BC] transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Primary Header CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#23448D]" />
              <span>Zero Upfront Build Fee</span>
            </div>
            <a
              href="#claim-form"
              onClick={(e) => {
                handleScrollTo(e, 'claim-form');
                if (onClaimClick) onClaimClick();
              }}
              id="header-cta-button"
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
            >
              <span>Claim Your Free Site</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#claim-form"
              onClick={(e) => handleScrollTo(e, 'claim-form')}
              className="bg-[#F59E0B] text-[#0F172A] text-xs font-bold px-3 py-2 rounded-lg"
            >
              Claim Free Site
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:text-[#23448D] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#features"
            onClick={(e) => handleScrollTo(e, 'features')}
            className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#23448D]"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScrollTo(e, 'pricing')}
            className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#23448D]"
          >
            Hosting Plan
          </a>
          <a
            href="#faq"
            onClick={(e) => handleScrollTo(e, 'faq')}
            className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#23448D]"
          >
            FAQ
          </a>
          <div className="pt-2 border-t border-[#E2E8F0]">
            <a
              href="#claim-form"
              onClick={(e) => {
                handleScrollTo(e, 'claim-form');
                if (onClaimClick) onClaimClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#23448D] hover:bg-[#1E50BC] text-white font-bold py-3 px-4 rounded-lg shadow-sm"
            >
              <span>Claim Your Free Site Build</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
