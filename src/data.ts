import { Testimonial, PricingPlan, FAQItem, FeatureCard } from './types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael R.',
    role: 'Growth Lead',
    company: 'Convert',
    quote: 'We had over 120 signups in the first week using the page Velocity designed. It gave us the confidence to pitch investors and start testing the product. Big win for us.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    isFeatured: false,
  },
  {
    id: '2',
    name: 'Jason L.',
    role: 'Founder',
    company: 'LaunchGrid',
    quote: 'Velocity completely changed the game for us. We sent over a rough layout and they returned a stunning landing page that actually converted. Fast turnaround and no confusion.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Emily B.',
    role: 'SaaS Founder',
    company: 'LoopFlow',
    quote: 'We used to overthink our site way too much. Velocity helped us simplify everything into a clear message with a beautiful layout. The process was smooth and surprisingly fast.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    isFeatured: false,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: '$1080',
    period: 'USD',
    description: 'Perfect for early-stage validation and clean, fast deployments.',
    features: [
      'Single-page layout design',
      'Streamlined modern layout',
      'Standard 5-7 business day delivery',
      'Figma source files included',
      'Production deployment setup',
      'Responsive design (Mobile + Desktop)'
    ],
    ctaText: 'Choose this plan',
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: '$2800',
    period: 'USD',
    description: 'Our most popular plan. Advanced motion design and custom copy.',
    features: [
      'Premium multi-section landing page',
      'Custom luxury motion graphics',
      'Priority 4-5 business day delivery',
      'Figma & React codebase files',
      'High-converting copywriting',
      'SEO & Speed performance audit',
      '1 Month of post-launch adjustments',
      'Active interactive visual mockup'
    ],
    isPopular: true,
    ctaText: 'Choose this plan',
  },
  {
    id: 'scale',
    name: 'Velocity+ Plan',
    price: '$4020',
    period: 'USD',
    description: 'The ultimate design system for high-growth SaaS and AI startups.',
    features: [
      'Ultimate custom landing system',
      'Complex interactive SVG dashboards',
      'VIP 3-4 business day delivery',
      'Complete production React codebase',
      'Premium custom graphics & assets',
      'Strict Speed & Accessibility audit',
      '3 Months priority support',
      'Dedicated Slack channel setup'
    ],
    ctaText: 'Choose this plan',
  },
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to deliver my landing page?',
    answer: 'We typically deliver your landing page within 5 to 7 business days, depending on the plan you choose. If you\'re on the Velocity+ plan, you\'ll get priority delivery in just 3 to 4 days—perfect if you\'re moving fast and need to go live sooner.',
  },
  {
    id: 'faq-2',
    question: 'What if I don\'t like the design?',
    answer: 'We work iteratively with constant updates. On higher tiers, you receive iterative feedback cycles to ensure you absolutely fall in love with the layout. We won\'t build something we aren\'t proud of.',
  },
  {
    id: 'faq-3',
    question: 'Can I request revisions after delivery?',
    answer: 'Yes! We support ongoing post-launch maintenance, updates, and optimization packages so your site continues to scale smoothly with your user growth.',
  },
  {
    id: 'faq-4',
    question: 'Do you help with copywriting too?',
    answer: 'Absolutely. We write concise, conversion-focused headlines, benefit statements, and call-to-actions tailored specifically to your product\'s unique value proposition.',
  },
  {
    id: 'faq-5',
    question: 'Is development included in the pricing?',
    answer: 'Yes, we handle the complete design in Figma and custom development in clean, high-performance React & Tailwind, along with motion configurations. It\'s a complete done-for-you solution.',
  },
];
