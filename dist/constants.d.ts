import { CaseStatus, SubscriptionTier } from './types';
export declare const COLORS: {
    readonly primary: "#8DC63F";
    readonly dark: "#2D2D2D";
    readonly background: "#F9F9F6";
    readonly danger: "#C0392B";
    readonly text: "#1A1A1A";
    readonly white: "#FFFFFF";
    readonly gray: {
        readonly 50: "#F9FAFB";
        readonly 100: "#F3F4F6";
        readonly 200: "#E5E7EB";
        readonly 300: "#D1D5DB";
        readonly 400: "#9CA3AF";
        readonly 500: "#6B7280";
        readonly 600: "#4B5563";
        readonly 700: "#374151";
        readonly 800: "#1F2937";
        readonly 900: "#111827";
    };
};
export declare const CASE_STATUS_CONFIG: Record<CaseStatus, {
    label: string;
    color: string;
    bg: string;
}>;
export declare const SUBSCRIPTION_CONFIG: Record<SubscriptionTier, {
    label: string;
    cases_limit: number;
    color: string;
}>;
export declare const DEMO_CREDENTIALS: {
    readonly lawyer: {
        readonly email: "lawyer@demo.com";
        readonly password: "demo1234";
    };
    readonly registrar: {
        readonly email: "registrar@demo.com";
        readonly password: "demo1234";
    };
    readonly admin: {
        readonly email: "admin@demo.com";
        readonly password: "demo1234";
    };
};
export declare const NIGERIA_STATES: string[];
export declare const APP_CONFIG: {
    readonly name: "Docket";
    readonly tagline: "Never Miss a Court Date";
    readonly version: "1.0.0";
    readonly sms_sender_id: "DOCKET";
    readonly support_email: "support@docket.ng";
    readonly website: "https://docket.ng";
};
//# sourceMappingURL=constants.d.ts.map