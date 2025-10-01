import React, { useState } from 'react';
import { X, Shield, BarChart3, Target, Settings } from 'lucide-react';
import { useCookies } from '../contexts/CookieContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CookiePreferences as CookiePrefsType } from '../types/cookies';

const CookiePreferences = () => {
  const { showPreferences, preferences, updatePreferences, closePreferences } = useCookies();
  const { t } = useLanguage();
  const [localPrefs, setLocalPrefs] = useState<CookiePrefsType>(preferences);

  if (!showPreferences) return null;

  const handleToggle = (category: keyof CookiePrefsType) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    
    setLocalPrefs(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    updatePreferences(localPrefs);
  };

  const cookieCategories = [
    {
      key: 'necessary' as keyof CookiePrefsType,
      icon: Shield,
      title: t('cookies.preferences.necessary.title'),
      description: t('cookies.preferences.necessary.description'),
      required: true,
    },
    {
      key: 'analytics' as keyof CookiePrefsType,
      icon: BarChart3,
      title: t('cookies.preferences.analytics.title'),
      description: t('cookies.preferences.analytics.description'),
      required: false,
    },
    {
      key: 'marketing' as keyof CookiePrefsType,
      icon: Target,
      title: t('cookies.preferences.marketing.title'),
      description: t('cookies.preferences.marketing.description'),
      required: false,
    },
    {
      key: 'functional' as keyof CookiePrefsType,
      icon: Settings,
      title: t('cookies.preferences.functional.title'),
      description: t('cookies.preferences.functional.description'),
      required: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-primary border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">
            {t('cookies.preferences.title')}
          </h2>
          <button
            onClick={closePreferences}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            {t('cookies.preferences.description')}
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {cookieCategories.map((category) => {
              const Icon = category.icon;
              const isEnabled = localPrefs[category.key];
              
              return (
                <div
                  key={category.key}
                  className="bg-elements/30 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">
                            {category.title}
                          </h3>
                          {category.required && (
                            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                              {t('cookies.preferences.required')}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => handleToggle(category.key)}
                      disabled={category.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${
                        isEnabled
                          ? 'bg-accent'
                          : 'bg-gray-600'
                      } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-white/10">
            <button
              onClick={closePreferences}
              className="px-4 py-2 text-white border border-gray-600 rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              {t('cookies.preferences.cancel')}
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-accent text-black rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              {t('cookies.preferences.save')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;