import React from 'react';
import { Cookie, Settings, X } from 'lucide-react';
import { useCookies } from '../contexts/CookieContext';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptNecessary, openPreferences, closeBanner } = useCookies();
  const { t } = useLanguage();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-t border-white/20 shadow-2xl">
      <div className="container-project py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          {/* Icon and Content */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">
                {t('cookies.banner.title')}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('cookies.banner.description')}
              </p>
              <button
                onClick={openPreferences}
                className="text-accent hover:text-accent/80 text-sm underline mt-1 inline-flex items-center gap-1"
              >
                <Settings className="w-3 h-3" />
                {t('cookies.banner.customize')}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-white border border-gray-600 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
            >
              {t('cookies.banner.necessary')}
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 bg-accent text-black rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              {t('cookies.banner.acceptAll')}
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={closeBanner}
            className="absolute top-2 right-2 lg:relative lg:top-0 lg:right-0 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;