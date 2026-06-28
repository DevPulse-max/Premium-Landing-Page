export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  isFeatured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
