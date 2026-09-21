import React, { useState } from 'react';
import { CheckCircle2, Shield, Sparkles, Lock, ArrowRight, Clock, Award, Building, Mail, Phone, User } from 'lucide-react';
import { PlanType, IntakeFormData } from '../types';

interface HeroSectionProps {
  selectedPlan: PlanType;
  onPlanChange: (plan: PlanType) => void;
  onSubmitSuccess: (data: IntakeFormData) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedPlan,
  onPlanChange,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<Omit<IntakeFormData, 'selectedPlan'>>({
    fullName: '',
    email: '',
    phone: '',
    businessNameAndIndustry: '',
    websiteGoals: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmissionError(null);
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid business email';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = 'Please provide your direct phone number';
    }
    if (!formData.businessNameAndIndustry.trim()) {
      errors.businessNameAndIndustry = 'Please specify your business name and industry';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    const nameParts = formData.fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      token: "76c4bb0c-d69c-404f-b860-f8e35b7bfc11",
      first_name: firstName,
      last_name: lastName,
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.businessNameAndIndustry.trim(),
      message: formData.websiteGoals?.trim() || "",
      source: "Hosting Ad"
    };

    try {
      const response = await fetch('https://fmuhmqtxwvcgbeueaueg.supabase.co/functions/v1/intake-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        onSubmitSuccess({
          ...formData,
          selectedPlan,
        });
      } else {
        setIsSubmitting(false);
        setSubmissionError('Unable to submit request. Please try again or call support at (909) 675-0503.');
      }
    } catch (err) {
      console.error('Lead intake submission error:', err);
      setIsSubmitting(false);
      setSubmissionError('Network error. Please check your connection and try again or call (909) 675-0503.');
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#23448D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#1E50BC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 60% Width on Large Screens (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23448D]/10 border border-[#23448D]/20 text-[#23448D] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 w-fit">
              <Sparkles className="w-4 h-4 text-[#23448D]" />
              <span>LIMITED TIME LOCAL BUSINESS OFFER</span>
            </div>

            {/* Main Headline */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12]">
                <span className="text-[#0F172A]">Get a Custom </span>
                <span className="text-[#23448D] font-extrabold">$3,000 Website</span>{' '}
                <span className="bg-[#F59E0B] text-[#0F172A] px-2.5 py-0.5 rounded-md font-extrabold inline-block my-1">
                  Built for FREE*
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-normal text-slate-500 tracking-normal mt-1.5">
                * When You Host With Us
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              Stop paying thousands upfront. Get a high-speed, professional website, secure hosting, content updates, and LeadHub CRM integration—all in one simple hosting plan.
            </p>

            {/* Key Bullets with #23448D checkmarks */}
            <div className="space-y-4 mb-10 max-w-xl">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 p-1 rounded-full bg-[#23448D]/10 text-[#23448D] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#23448D]" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] text-base sm:text-lg">
                    Zero Upfront Build Costs
                  </span>
                  <span className="text-slate-600 ml-1.5 text-sm sm:text-base">
                    ($3,000 Upfront Value completely waived)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 p-1 rounded-full bg-[#23448D]/10 text-[#23448D] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#23448D]" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] text-base sm:text-lg">
                    Ultra-Fast Managed Cloud Hosting & Daily Backups Included
                  </span>
                  <span className="text-slate-600 block text-sm">
                    99.9% uptime, enterprise SSL encryption, continuous security patches.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 p-1 rounded-full bg-[#23448D]/10 text-[#23448D] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#23448D]" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] text-base sm:text-lg">
                    TechCatalyst LeadHub CRM Integration Out-of-the-Box
                  </span>
                  <span className="text-slate-600 block text-sm">
                    Capture leads instantly from your new site directly to your phone.
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Proof Banner */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#23448D]" />
                <span>Fast 7–14 Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#23448D]" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#23448D]" />
                <span>Dedicated Support Team</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 40% Width on Large Screens (col-span-5) */}
          <div className="lg:col-span-5">
            <div
              id="claim-form"
              className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 relative transition-all"
            >
              {isSuccess ? (
                <div className="py-12 sm:py-16 px-4 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">Thank You!</h3>
                  <p className="text-base text-slate-600 max-w-sm leading-relaxed">
                    Your request has been received. We will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Form Title & Subtitle */}
                  <div className="mb-5">
                    <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0F172A] tracking-tight mb-1">
                      Claim Your Free Website Build
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Takes less than 60 seconds. No credit card required.
                    </p>
                  </div>

                  {/* Included Free Deliverable Banner */}
                  <div className="mb-5 p-3.5 bg-[#23448D]/5 border border-[#23448D]/15 rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#23448D] text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#23448D] block">
                          Included Free Build
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] block">
                          Full Custom Website ($3000 Value)
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                      $0 Upfront
                    </span>
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Michael Rodriguez"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border ${
                        validationErrors.fullName
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E2E8F0] bg-[#F8FAFC]/50 hover:bg-white'
                      } text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#23448D] focus:border-transparent transition-all`}
                    />
                  </div>
                  {validationErrors.fullName && (
                    <p className="mt-1 text-xs text-red-600 font-medium">
                      {validationErrors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Business Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1"
                  >
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="michael@rodriguezconstruction.com"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border ${
                        validationErrors.email
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E2E8F0] bg-[#F8FAFC]/50 hover:bg-white'
                      } text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#23448D] focus:border-transparent transition-all`}
                    />
                  </div>
                  {validationErrors.email && (
                    <p className="mt-1 text-xs text-red-600 font-medium">
                      {validationErrors.email}
                    </p>
                  )}
                </div>

                {/* 3. Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 342-8901"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border ${
                        validationErrors.phone
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E2E8F0] bg-[#F8FAFC]/50 hover:bg-white'
                      } text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#23448D] focus:border-transparent transition-all`}
                    />
                  </div>
                  {validationErrors.phone && (
                    <p className="mt-1 text-xs text-red-600 font-medium">
                      {validationErrors.phone}
                    </p>
                  )}
                </div>

                {/* 4. Business Name & Industry */}
                <div>
                  <label
                    htmlFor="businessNameAndIndustry"
                    className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1"
                  >
                    Business Name & Industry <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="businessNameAndIndustry"
                      name="businessNameAndIndustry"
                      value={formData.businessNameAndIndustry}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Roofing & Contracting"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border ${
                        validationErrors.businessNameAndIndustry
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E2E8F0] bg-[#F8FAFC]/50 hover:bg-white'
                      } text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#23448D] focus:border-transparent transition-all`}
                    />
                  </div>
                  {validationErrors.businessNameAndIndustry && (
                    <p className="mt-1 text-xs text-red-600 font-medium">
                      {validationErrors.businessNameAndIndustry}
                    </p>
                  )}
                </div>

                {submissionError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium">
                    {submissionError}
                  </div>
                )}

                {/* CTA BUTTON with High-Contrast Accent #F59E0B */}
                <button
                  type="submit"
                  id="submit-claim-button"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-[#F59E0B] hover:bg-[#d97706] active:scale-[0.99] text-[#0F172A] font-extrabold text-base tracking-wide shadow-lg shadow-[#F59E0B]/20 hover:shadow-xl hover:shadow-[#F59E0B]/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 uppercase disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 text-[#0F172A]">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Securing Your Build...
                    </span>
                  ) : (
                    <>
                      <span>GET MY FREE WEBSITE BUILD</span>
                      <ArrowRight className="w-5 h-5 font-bold" />
                    </>
                  )}
                </button>

                {/* Trust Micro-copy below button */}
                <div className="pt-2 text-center">
                  <p className="text-[12px] text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                    <Lock className="w-3.5 h-3.5 text-slate-400 inline" />
                    <span>100% Secure. 12-month hosting commitment applies upon agreement.</span>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
