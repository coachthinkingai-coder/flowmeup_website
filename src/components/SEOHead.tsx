import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/logo_final.png',
  url = 'https://flowmeup.me/'
}) => {
  const { language } = useLanguage();
  
  const defaultTitles = {
    it: 'FlowMeUp - Automazioni AI per PMI Italiane',
    en: 'FlowMeUp - AI Automations for Italian SMEs'
  };
  
  const defaultDescriptions = {
    it: 'Trasforma la tua PMI con soluzioni AI agentistiche personalizzate. Mappiamo i processi aziendali e configuriamo agenti AI che automatizzano le attività ripetitive.',
    en: 'Transform your SME with personalized agentic AI solutions. We map business processes and configure AI agents that automate repetitive activities.'
  };
  
  const defaultKeywords = {
    it: 'automazioni AI, PMI italiane, agenti AI, automazione processi aziendali, intelligenza artificiale per aziende, CRM automatico, email automation, workflow automation',
    en: 'AI automations, Italian SMEs, AI agents, business process automation, artificial intelligence for companies, automatic CRM, email automation, workflow automation'
  };

  const finalTitle = title || defaultTitles[language];
  const finalDescription = description || defaultDescriptions[language];
  const finalKeywords = keywords || defaultKeywords[language];

  React.useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', finalDescription);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalTitle);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', finalDescription);
    }
    
    // Update language attribute
    document.documentElement.lang = language;
    
  }, [finalTitle, finalDescription, finalKeywords, language]);

  return null; // This component doesn't render anything
};

export default SEOHead;