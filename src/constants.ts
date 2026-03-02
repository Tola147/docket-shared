import { CaseStatus, SubscriptionTier } from './types';

// ─── Brand Colors ───────────────────────────────────────────────────────────────

export const COLORS = {
  primary: '#8DC63F',
  dark: '#2D2D2D',
  background: '#F9F9F6',
  danger: '#C0392B',
  text: '#1A1A1A',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
} as const;

// ─── Case Status Config ─────────────────────────────────────────────────────────

export const CASE_STATUS_CONFIG: Record<CaseStatus, { label: string; color: string; bg: string }> = {
  Mention: { label: 'Mention', color: '#1D4ED8', bg: '#DBEAFE' },
  'Hearing of Application': { label: 'Hearing of Application', color: '#7C3AED', bg: '#EDE9FE' },
  Trial: { label: 'Trial', color: '#D97706', bg: '#FEF3C7' },
  'Report of Settlement': { label: 'Report of Settlement', color: '#0F766E', bg: '#CCFBF1' },
  Ruling: { label: 'Ruling', color: '#B45309', bg: '#FEF9C3' },
  Judgement: { label: 'Judgement', color: '#166534', bg: '#DCFCE7' },
  'Terms of Settlement': { label: 'Terms of Settlement', color: '#0E7490', bg: '#CFFAFE' },
};

// ─── Subscription Tiers ─────────────────────────────────────────────────────────

export const SUBSCRIPTION_CONFIG: Record<SubscriptionTier, { label: string; cases_limit: number; color: string }> = {
  free: { label: 'Free', cases_limit: 5, color: '#6B7280' },
  basic: { label: 'Basic', cases_limit: 50, color: '#2563EB' },
  enterprise: { label: 'Enterprise', cases_limit: 999, color: '#8DC63F' },
};

// ─── Demo Credentials ───────────────────────────────────────────────────────────

export const DEMO_CREDENTIALS = {
  lawyer: { email: 'lawyer@demo.com', password: 'demo1234' },
  registrar: { email: 'registrar@demo.com', password: 'demo1234' },
  admin: { email: 'admin@demo.com', password: 'demo1234' },
} as const;

// ─── Nigeria States ─────────────────────────────────────────────────────────────

export const NIGERIA_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
  'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo',
  'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa',
  'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
  'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
];

// ─── App Config ─────────────────────────────────────────────────────────────────

export const APP_CONFIG = {
  name: 'Docket',
  tagline: 'Never Miss a Court Date',
  version: '1.0.0',
  sms_sender_id: 'DOCKET',
  support_email: 'support@docket.ng',
  website: 'https://docket.ng',
} as const;
