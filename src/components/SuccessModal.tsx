import React from 'react';
import { CheckCircle2, Calendar, FileText, Globe, X, PhoneCall, ArrowRight } from 'lucide-react';
import { IntakeFormData } from '../types';

interface SuccessModalProps {
  submissionData: IntakeFormData | null;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ submissionData, onClose }) => {
  if (!submissionData) return null;

  const planName = 'Custom Website & Managed Hosting Plan';
  const siteValue = '$3,000';
  const claimCode = `TC-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-[#0F172A] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#23448D] bg-[#23448D]/10 px-3 py-1 rounded-full">
            Claim Successfully Reserved
          </span>
          <h3 className="text-2xl font-extrabold text-[#0F172A] mt-2 tracking-tight">
            You're on the Build Schedule!
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Thank you, <span className="font-bold text-[#0F172A]">{submissionData.fullName}</span>. We've locked in your free custom website build.
          </p>
        </div>

        {/* Claim Details Card */}
        <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5 mb-6 text-xs sm:text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Claim Code:</span>
            <span className="font-mono font-bold text-[#23448D] text-sm">{claimCode}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Business Name:</span>
            <span className="font-bold text-[#0F172A]">{submissionData.businessNameAndIndustry}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Selected Hosting:</span>
            <span className="font-bold text-[#0F172A]">{planName}</span>
          </div>
          <div className="flex justify-between items-center pt-1 border-t border-slate-200">
            <span className="text-slate-500">Build Cost Waived:</span>
            <span className="font-extrabold text-emerald-600">{siteValue} FREE</span>
          </div>
        </div>

        {/* Next Steps Checklist */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            What Happens Next:
          </h4>
          
          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <div className="w-6 h-6 rounded-full bg-[#23448D]/10 text-[#23448D] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
              1
            </div>
            <div>
              <span className="font-bold text-[#0F172A]">Discovery Call:</span> Our lead designer will call you at{' '}
              <span className="font-semibold text-[#23448D]">{submissionData.phone}</span> within 24 business hours to confirm your layout requirements.
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <div className="w-6 h-6 rounded-full bg-[#23448D]/10 text-[#23448D] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
              2
            </div>
            <div>
              <span className="font-bold text-[#0F172A]">Quick Assets Intake:</span> We will email you a secure link to upload your logo, photo preferences, and service descriptions.
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <div className="w-6 h-6 rounded-full bg-[#23448D]/10 text-[#23448D] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
              3
            </div>
            <div>
              <span className="font-bold text-[#0F172A]">Live Staging Review:</span> Your custom website will be ready for review within 7–14 days.
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-xl bg-[#23448D] hover:bg-[#1E50BC] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Done & Return to Page</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};

export default SuccessModal;
