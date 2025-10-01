import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('it')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'it'
            ? 'bg-accent text-black'
            : 'text-primary hover:text-accent border border-gray-600 hover:border-accent'
        }`}
      >
        IT
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-accent text-black'
            : 'text-primary hover:text-accent border border-gray-600 hover:border-accent'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;