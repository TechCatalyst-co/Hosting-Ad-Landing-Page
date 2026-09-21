/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustLogoBar from './components/TrustLogoBar';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BottomCtaSection from './components/BottomCtaSection';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import { PlanType, IntakeFormData } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('standard');
  const [submittedData, setSubmittedData] = useState<IntakeFormData | null>(null);

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const handleFormSuccess = (data: IntakeFormData) => {
    setSubmittedData(data);
  };

  const handleCloseModal = () => {
    setSubmittedData(null);
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('claim-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#23448D] selection:text-white">
      {/* 1. NAVIGATION BAR */}
      <Navbar onClaimClick={handleScrollToForm} />

      {/* MAIN CONTENT REGION */}
      <main className="flex-grow">
        {/* 2. HERO SECTION (Split Grid: 60% Left / 40% Right with Lead Intake Form) */}
        <HeroSection
          selectedPlan={selectedPlan}
          onPlanChange={handlePlanChange}
          onSubmitSuccess={handleFormSuccess}
        />

        {/* 3. LOGO BAR / TRUST ANCHOR */}
        <TrustLogoBar />

        {/* 4. INCLUDED PLATFORM FEATURES (3x2 Grid) */}
        <FeaturesSection />

        {/* 5. PLAN & TIER COMPARISON CARDS (Basic & Standard) */}
        <PricingSection
          selectedPlan={selectedPlan}
          onSelectPlan={handlePlanChange}
        />


        {/* 7. FINAL BOTTOM CTA BANNER */}
        <BottomCtaSection />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* Interactive Form Submission Confirmation Modal */}
      <SuccessModal
        submissionData={submittedData}
        onClose={handleCloseModal}
      />
    </div>
  );
}
