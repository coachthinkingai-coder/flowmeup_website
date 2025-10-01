import { CookieConsentData, CookiePreferences, DEFAULT_COOKIE_PREFERENCES, COOKIE_CONSENT_VERSION } from '../types/cookies';

const COOKIE_CONSENT_KEY = 'flowmeup_cookie_consent';

export class CookieManager {
  static setConsentData(preferences: CookiePreferences): void {
    const consentData: CookieConsentData = {
      hasConsented: true,
      preferences,
      consentDate: new Date().toISOString(),
      version: COOKIE_CONSENT_VERSION,
    };

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    
    // Set actual cookies based on preferences
    this.applyCookiePreferences(preferences);
  }

  static getConsentData(): CookieConsentData | null {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) return null;
      
      const data: CookieConsentData = JSON.parse(stored);
      
      // Check if consent is still valid (version check)
      if (data.version !== COOKIE_CONSENT_VERSION) {
        this.clearConsentData();
        return null;
      }
      
      return data;
    } catch {
      return null;
    }
  }

  static hasValidConsent(): boolean {
    const consentData = this.getConsentData();
    return consentData?.hasConsented === true;
  }

  static getPreferences(): CookiePreferences {
    const consentData = this.getConsentData();
    return consentData?.preferences || DEFAULT_COOKIE_PREFERENCES;
  }

  static clearConsentData(): void {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    this.clearAllCookies();
  }

  private static applyCookiePreferences(preferences: CookiePreferences): void {
    // Set necessary cookies (always allowed)
    this.setCookie('flowmeup_session', 'active', 30);
    
    if (preferences.analytics) {
      // Set analytics cookies
      this.setCookie('flowmeup_analytics', 'enabled', 365);
      // Initialize analytics tracking here
      this.initializeAnalytics();
    } else {
      this.deleteCookie('flowmeup_analytics');
    }

    if (preferences.marketing) {
      // Set marketing cookies
      this.setCookie('flowmeup_marketing', 'enabled', 365);
      // Initialize marketing tracking here
      this.initializeMarketing();
    } else {
      this.deleteCookie('flowmeup_marketing');
    }

    if (preferences.functional) {
      // Set functional cookies
      this.setCookie('flowmeup_functional', 'enabled', 365);
    } else {
      this.deleteCookie('flowmeup_functional');
    }
  }

  private static setCookie(name: string, value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  private static deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  private static clearAllCookies(): void {
    const cookies = ['flowmeup_analytics', 'flowmeup_marketing', 'flowmeup_functional'];
    cookies.forEach(cookie => this.deleteCookie(cookie));
  }

  private static initializeAnalytics(): void {
    // Initialize Google Analytics or other analytics tools
    console.log('Analytics initialized');
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }

  private static initializeMarketing(): void {
    // Initialize marketing tools (Facebook Pixel, etc.)
    console.log('Marketing tools initialized');
    
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  }
}