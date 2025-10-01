export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentData {
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentDate: string;
  version: string;
}

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
};

export const COOKIE_CONSENT_VERSION = '1.0';