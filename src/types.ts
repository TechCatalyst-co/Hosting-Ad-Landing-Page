export type PlanType = 'basic' | 'standard';

export interface IntakeFormData {
  fullName: string;
  email: string;
  phone: string;
  businessNameAndIndustry: string;
  selectedPlan: PlanType;
  websiteGoals?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface PricingPlan {
  id: PlanType;
  name: string;
  tagline: string;
  monthlyPrice: number;
  commitment: string;
  freeDeliverable: string;
  normalValue: string;
  badge?: string;
  isFeatured?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
