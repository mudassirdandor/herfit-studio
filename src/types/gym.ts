export interface GymIdentity {
  name: string;
  tagline: string;
  city: string;
  address: string;
  addressShort: string;
  mapUrl?: string;
  womenOnlySummary: string;
}

export interface GymContact {
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappDefaultTrialMessage: string;
  whatsappInquiryMessage: string;
  email?: string;
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export interface GymHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  summary: string;
  ladiesOnlyPolicy: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroBadge {
  title: string;
  subtitle: string;
}

export interface HeroSectionConfig {
  kicker: string;
  titlePrefix: string;
  titleEmphasis: string;
  titleSuffix: string;
  lead: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  stats: HeroStat[];
  badge: HeroBadge;
  imageAlt: string;
}

export interface TrustPoint {
  id: string;
  icon: 'privacy' | 'trainers' | 'hours' | 'whatsapp';
  title: string;
  description: string;
}

export interface BenefitItem {
  id: string;
  icon: 'shield' | 'target' | 'heart' | 'wallet';
  title: string;
  description: string;
  featured?: boolean;
  tag?: string;
  highlights?: string[];
}

export interface BenefitsSectionConfig {
  kicker: string;
  title: string;
  description: string;
  items: BenefitItem[];
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  scheduleBadge: string;
  description: string;
  imagePath?: string;
  imageAlt?: string;
  featured?: boolean;
  intensity?: 'Gentle' | 'Moderate' | 'High Energy';
  highlights?: string[];
}

export interface ProgramsSectionConfig {
  kicker: string;
  title: string;
  description: string;
  trialCtaText: string;
  trialCtaSubtext: string;
  items: ProgramItem[];
}

export interface ScheduleClass {
  time: string;
  title: string;
  instructor: string;
  level: string;
  tagColor?: string;
}

export interface ScheduleConfig {
  kicker: string;
  title: string;
  description: string;
  days: Record<string, ScheduleClass[]>;
  note: string;
}

export interface TimingSlot {
  label: string;
  time: string;
  tag?: string;
}

export interface TimingsConfig {
  kicker: string;
  title: string;
  slots: TimingSlot[];
  policyNote: string;
  locationTitle: string;
  locationDescription: string;
  mapUrl: string;
  mapButtonText: string;
}

export interface BmiConfig {
  title: string;
  description: string;
  disclaimer: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  popular?: boolean;
  popularBadge?: string;
  features: PricingFeature[];
}

export interface PricingConfig {
  kicker: string;
  title: string;
  admissionFeeNotice: string;
  discountNote: string;
  plans: PricingPlan[];
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  avatarLetter: string;
  avatarBg: string;
}

export interface TrainersConfig {
  kicker: string;
  title: string;
  description: string;
  trainers: TrainerProfile[];
}

export interface ReviewItem {
  id: string;
  name: string;
  roleTag: string;
  avatarLetter: string;
  avatarColor: string;
  rating: number;
  comment: string;
}

export interface ReviewsConfig {
  kicker: string;
  title: string;
  googleRating: string;
  reviewsCount: string;
  reviews: ReviewItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FaqConfig {
  kicker: string;
  title: string;
  faqs: FaqItem[];
}

export interface BookingConfig {
  title: string;
  description: string;
  whatsappNotice: string;
  responseTimeNotice: string;
  goals: string[];
  timeSlots: string[];
}

export interface GymConfig {
  identity: GymIdentity;
  contact: GymContact;
  hours: GymHours;
  navigation: NavItem[];
  hero: HeroSectionConfig;
  trustPoints: TrustPoint[];
  benefits: BenefitsSectionConfig;
  programs: ProgramsSectionConfig;
  schedule: ScheduleConfig;
  timings: TimingsConfig;
  bmi: BmiConfig;
  pricing: PricingConfig;
  trainers: TrainersConfig;
  reviews: ReviewsConfig;
  faq: FaqConfig;
  booking: BookingConfig;
}
