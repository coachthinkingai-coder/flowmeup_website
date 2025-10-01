import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookiePreferences, DEFAULT_COOKIE_PREFERENCES } from '../types/cookies';
import { CookieManager } from '../utils/cookieManager';

interface CookieContextType {
  showBanner: boolean;
  showPreferences: boolean;
  preferences: CookiePreferences;
  acceptAll: () => void;
  acceptNecessary: () => void;
  updatePreferences: (prefs: CookiePreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  closeBanner: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);

  useEffect(() => {
    // Check if user has already consented
    const hasConsent = CookieManager.hasValidConsent();
    
    if (!hasConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Load existing preferences
      const existingPrefs = CookieManager.getPreferences();
      setPreferences(existingPrefs);
    }
  }, []);

  const acceptAll = () => {
    const allAcceptedPrefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    CookieManager.setConsentData(allAcceptedPrefs);
    setPreferences(allAcceptedPrefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptNecessary = () => {
    CookieManager.setConsentData(DEFAULT_COOKIE_PREFERENCES);
    setPreferences(DEFAULT_COOKIE_PREFERENCES);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const updatePreferences = (prefs: CookiePreferences) => {
    CookieManager.setConsentData(prefs);
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <CookieContext.Provider
      value={{
        showBanner,
        showPreferences,
        preferences,
        acceptAll,
        acceptNecessary,
        updatePreferences,
        openPreferences,
        closePreferences,
        closeBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};