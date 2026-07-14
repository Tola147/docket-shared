// ─── User & Auth ───────────────────────────────────────────────────────────────

export type UserRole = 'lawyer' | 'registrar' | 'admin';
export type SubscriptionTier = 'free' | 'basic' | 'enterprise';
export type NotificationChannel = 'in_app' | 'sms';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  nba_number?: string;
  firm?: string;
  court_id?: string;   // Only for registrars — the court they are assigned to
  role: UserRole;
  subscription_tier: SubscriptionTier;
  sms_enabled: boolean;
  created_at: string;
}

// ─── Courts & Judges ───────────────────────────────────────────────────────────

export type CourtType = 'Federal High Court' | 'State High Court' | 'Magistrate' | 'Others';

export interface Court {
  id: string;
  name: string;
  type: CourtType;
  state: string;
  created_at: string;
}

export interface Judge {
  id: string;
  court_id: string;
  name: string;
  active: boolean;
  court?: Court;
}

// ─── Cases ─────────────────────────────────────────────────────────────────────

export type CaseStatus =
  | 'Mention'
  | 'Hearing of Application'
  | 'Trial'
  | 'Report of Settlement'
  | 'Ruling'
  | 'Judgement'
  | 'Terms of Settlement'
  | 'Judgment Delivered' // terminal — concluded on the merits, appeal window running
  | 'Struck Out'         // semi-terminal — off the list, may be relisted on application
  | 'Dismissed';         // terminal — final decision, appeal window running

export interface Case {
  id: string;
  lawyer_id: string;
  case_number: string;
  title: string;
  court_id: string;
  judge_id: string;
  status: CaseStatus;
  next_date: string; // ISO date string
  notes?: string;
  created_at: string;
  court?: Court;
  judge?: Judge;
}

// ─── Court Updates ─────────────────────────────────────────────────────────────

export interface CourtUpdate {
  id: string;
  court_id: string;
  judge_id: string;
  date: string;
  reason: string;
  posted_by: string;
  created_at: string;
  court?: Court;
  judge?: Judge;
  posted_by_user?: User;
}

// ─── Notifications ─────────────────────────────────────────────────────────────

export interface Notification {
  id: string;
  user_id: string;
  case_id?: string;
  court_update_id?: string;
  message: string;
  channel: NotificationChannel;
  read: boolean;
  created_at: string;
  case?: Case;
}

// ─── Cause List ───────────────────────────────────────────────────────────────

export type CauseListSource = 'ogun_state' | 'nicn' | 'lagos_state' | 'supreme_court';

export interface CauseListEntry {
  id: string;
  source: CauseListSource;
  case_number: string;
  parties: string;
  court_name: string;
  judge_name: string | null;
  date: string | null;          // ISO date string — null for NICN entries without dates
  status: string;               // raw status as scraped from source
  court_id: string | null;      // resolved FK (null if unresolved)
  judge_id: string | null;      // resolved FK (null if unresolved)
  created_at: string;
  scraped_at: string;
  court?: Court;
  judge?: Judge;
}

// ─── Subscriptions ─────────────────────────────────────────────────────────────

export interface Subscription {
  id: string;
  user_id: string;
  tier: SubscriptionTier;
  cases_limit: number;
  start_date: string;
  end_date: string;
}

// ─── Analytics ─────────────────────────────────────────────────────────────────

export interface AnalyticsData {
  total_lawyers: number;
  total_cases: number;
  total_notifications: number;
  total_court_updates: number;
  cases_by_status: Record<CaseStatus, number>;
  lawyers_by_tier: Record<SubscriptionTier, number>;
  recent_activity: {
    date: string;
    count: number;
  }[];
}

// ─── API Response Wrappers ──────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  per_page: number;
}
