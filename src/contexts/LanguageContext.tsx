import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Header
    'nav.home': 'Home',
    'nav.problems': 'Problemi',
    'nav.solutions': 'Soluzioni',
    'nav.faq': 'FAQ',
    'nav.cta': 'Prenota la tua Demo',
    
    // Hero
    'hero.title': 'Automazioni AI pensate per le PMI',
    'hero.title.automazioni': 'Automazioni',
    'hero.title.ai': 'AI',
    'hero.title.rest': 'pensate per le PMI',
    'hero.subtitle': 'Mappiamo i processi aziendali con te e configuriamo un ecosistema di agenti AI, coordinati e supervisionati, che dialogano con i tuoi reparti e automatizzano le attività ripetitive sui sistemi che usi già.',
    'hero.cta': 'Prenota la tua Demo',
    
    // Problem Identification
    'problems.title': 'Problemi tipici delle PMI che risolviamo con automazioni AI',
    'problems.1': 'Decine di email ogni giorno che richiedono sempre la stessa risposta',
    'problems.2': 'Aggiornare manualmente il CRM ti porta via più tempo che parlare coi clienti',
    'problems.3': 'Controllare scadenze e priorità richiede di aprire cinque strumenti diversi',
    'problems.4': 'Nuovi colleghi che richiedono settimane di formazione e bloccano il resto del team',
    
    // Solution Preview
    'solution.title': 'Come lo',
    'solution.titleAccent': 'facciamo?',
    'solution.step1.phase': 'STEP 1',
    'solution.step1.title': 'Assessment Agentistico',
    'solution.step1.description': 'Agenti AI Multi-Area che comunicano con i tuoi dipendenti per un\'analisi dettagliata dei processi aziendali e del modo di lavorare.',
    'solution.step2.phase': 'STEP 2',
    'solution.step2.title': 'Progettazione Su Misura',
    'solution.step2.description': 'FlowMeUp sviluppa soluzioni personalizzate, progettando modelli e sistemi AI capaci di adattarsi alle esigenze uniche della tua azienda per ottimizzare i processi e supportare i tuoi obiettivi aziendali.',
    'solution.step3.phase': 'STEP 3',
    'solution.step3.title': 'Monitoraggio Performance',
    'solution.step3.description': 'Tracciamento automatico dei KPI e insights in tempo reale. Identificazione del calo delle performance e ricezione di azioni concrete da intraprendere.',
    
    // Trust Building
    'trust.title': 'Perché le nostre automazioni AI funzionano per le PMI italiane',
    'trust.1.title': 'Parliamo la lingua delle PMI',
    'trust.1.description': 'Conosciamo le sfide di chi lavora con risorse limitate e obiettivi ambiziosi.',
    'trust.2.title': 'Zero rivoluzioni inutili',
    'trust.2.description': 'Ci integriamo nei tuoi sistemi senza costringerti a cambiare tutto.',
    'trust.3.title': 'Dati, non parole',
    'trust.3.description': 'Monitoriamo insieme le ore risparmiate e i miglioramenti nei processi.',
    
    // Final CTA
    'finalCta.title': 'Scopri come un sistema di agenti AI può eliminare metà delle tue attività ripetitive',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.subtitle': 'Le risposte alle domande più comuni sull\'automazione AI per PMI italiane',
    'faq.1.question': 'Come faccio a sapere quali processi posso automatizzare?',
    'faq.1.answer': 'Partiamo con una mappatura: individuiamo dove il lavoro si ripete, dove il tempo si spreca e ti mostriamo come un agente AI può occuparsene.',
    'faq.2.question': 'L\'AI si integra con i nostri sistemi esistenti?',
    'faq.2.answer': 'Sì. I nostri agenti AI comunicano con i software che usi già, evitando di stravolgere i tuoi sistemi o formare il team da zero.',
    'faq.3.question': 'Dobbiamo fermare la produzione durante l\'installazione?',
    'faq.3.answer': 'No. L\'implementazione è graduale: il sistema entra in funzione senza bloccare le attività quotidiane',
    'faq.4.question': 'Quanto costa e come si paga?',
    'faq.4.answer': 'Il costo dipende dal numero di processi automatizzati e dalla complessità. Offriamo abbonamenti mensili chiari e senza costi nascosti.',
    'faq.5.question': 'L\'AI può sostituire completamente il lavoro umano?',
    'faq.5.answer': 'No. Gli agenti AI eliminano attività ripetitive e di basso valore, lasciando alle persone il lavoro strategico e creativo.',
    'faq.6.question': 'I vostri sistemi sono sicuri?',
    'faq.6.answer': 'Sì. Tutte le soluzioni rispettano le normative europee sulla protezione dei dati, incluse GDPR e AI Act. Utilizziamo protocolli di sicurezza avanzati e controlli continui sugli agenti AI per garantire integrità, privacy e conformità legale.',
    
    // Cookies
    'cookies.banner.title': 'Utilizziamo i cookie per migliorare la tua esperienza',
    'cookies.banner.description': 'Utilizziamo cookie tecnici necessari per il funzionamento del sito e cookie di profilazione per offrirti contenuti personalizzati. Puoi scegliere quali categorie accettare.',
    'cookies.banner.customize': 'Personalizza le preferenze',
    'cookies.banner.necessary': 'Solo necessari',
    'cookies.banner.acceptAll': 'Accetta tutti',
    
    'cookies.preferences.title': 'Preferenze Cookie',
    'cookies.preferences.description': 'Gestisci le tue preferenze sui cookie. Puoi modificare queste impostazioni in qualsiasi momento.',
    'cookies.preferences.required': 'Richiesto',
    'cookies.preferences.save': 'Salva preferenze',
    'cookies.preferences.cancel': 'Annulla',
    
    'cookies.preferences.necessary.title': 'Cookie Tecnici Necessari',
    'cookies.preferences.necessary.description': 'Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.',
    
    'cookies.preferences.analytics.title': 'Cookie Analitici',
    'cookies.preferences.analytics.description': 'Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonima.',
    
    'cookies.preferences.marketing.title': 'Cookie di Marketing',
    'cookies.preferences.marketing.description': 'Utilizzati per tracciare i visitatori sui siti web per mostrare annunci pertinenti e coinvolgenti.',
    
    'cookies.preferences.functional.title': 'Cookie Funzionali',
    'cookies.preferences.functional.description': 'Permettono al sito di ricordare le scelte che fai per offrirti funzionalità migliorate e personalizzate.',
    
    // SEO/GEO specific content
    'seo.title': 'FlowMeUp - Automazioni AI per PMI Italiane | Agenti AI Personalizzati',
    'seo.description': 'Trasforma la tua PMI con automazioni AI su misura. Mappiamo i processi aziendali e configuriamo agenti AI coordinati che eliminano le attività ripetitive. Consulenza gratuita.',
    'seo.keywords': 'automazioni AI, PMI italiane, agenti AI, automazione processi aziendali, intelligenza artificiale aziende, CRM automatico, email automation, workflow automation, AI personalizzata',
    
    // Footer
    'footer.description': 'Automazioni AI su misura per PMI italiane. Mappiamo i processi aziendali e configuriamo agenti AI coordinati che automatizzano le attività ripetitive.',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.headquarters': 'Sede Legale',
    'footer.navigation.title': 'Navigazione',
    'footer.navigation.about': 'Chi Siamo',
    'footer.navigation.problems': 'Problemi',
    'footer.navigation.solutions': 'Soluzioni',
    'footer.legal.title': 'Informazioni Legali',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Termini e Condizioni',
    'footer.contact.title': 'Contatti',
    'footer.contact.email': 'Email',
    'footer.contact.cta': 'Prenota Demo',
    'footer.contact.info': 'Rispondiamo entro 24 ore per discutere le tue esigenze di automazione AI.',
    'footer.bottom.compliance': 'Conforme a GDPR e AI Act europeo.',
    'footer.bottom.made': 'Realizzato con',
    'footer.bottom.for': 'per le PMI italiane',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.problems': 'Problems',
    'nav.solutions': 'Solutions',
    'nav.faq': 'FAQ',
    'nav.cta': 'Book Your Demo',
    
    // Hero
    'hero.title': 'AI Automations designed for Italian SMEs',
    'hero.title.automations': 'AI Automations',
    'hero.title.ai': '',
    'hero.title.rest': 'designed for Italian SMEs',
    'hero.subtitle': 'We map business processes with you and configure an ecosystem of coordinated and supervised AI agents that communicate with your departments and automate repetitive activities on the systems you already use.',
    'hero.cta': 'Book Your Demo',
    
    // Problem Identification
    'problems.title': 'Typical SME problems we solve with AI automations',
    'problems.1': 'Dozens of emails every day that require the same response',
    'problems.2': 'Manually updating the CRM takes more time than talking to customers',
    'problems.3': 'Checking deadlines and priorities requires opening five different tools',
    'problems.4': 'New colleagues who require weeks of training and block the rest of the team',
    
    // Solution Preview
    'solution.title': 'How do we',
    'solution.titleAccent': 'do it?',
    'solution.step1.phase': 'STEP 1',
    'solution.step1.title': 'Agentic Assessment',
    'solution.step1.description': 'Multi-Area AI Agents that communicate with your employees for a detailed analysis of business processes and working methods.',
    'solution.step2.phase': 'STEP 2',
    'solution.step2.title': 'Custom Design',
    'solution.step2.description': 'FlowMeUp develops personalized solutions, designing AI models and systems capable of adapting to your company\'s unique needs to optimize processes and support your business objectives.',
    'solution.step3.phase': 'STEP 3',
    'solution.step3.title': 'Performance Monitoring',
    'solution.step3.description': 'Automatic KPI tracking and real-time insights. Identification of performance drops and receiving concrete actions to take.',
    
    // Trust Building
    'trust.title': 'Why our AI automations work for Italian SMEs',
    'trust.1.title': 'We speak the language of SMEs',
    'trust.1.description': 'We know the challenges of those who work with limited resources and ambitious goals.',
    'trust.2.title': 'Zero unnecessary revolutions',
    'trust.2.description': 'We integrate into your systems without forcing you to change everything.',
    'trust.3.title': 'Data, not words',
    'trust.3.description': 'We monitor together the hours saved and improvements in processes.',
    
    // Final CTA
    'finalCta.title': 'Discover how a system of AI agents can eliminate half of your repetitive activities',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to the most common questions about AI automation for Italian SMEs',
    'faq.1.question': 'How do I know which processes I can automate?',
    'faq.1.answer': 'We start with mapping: we identify where work repeats, where time is wasted and show you how an AI agent can take care of it.',
    'faq.2.question': 'Does AI integrate with our existing systems?',
    'faq.2.answer': 'Yes. Our AI agents communicate with the software you already use, avoiding disrupting your systems or training the team from scratch.',
    'faq.3.question': 'Do we have to stop production during installation?',
    'faq.3.answer': 'No. Implementation is gradual: the system comes into operation without blocking daily activities',
    'faq.4.question': 'How much does it cost and how do you pay?',
    'faq.4.answer': 'The cost depends on the number of automated processes and complexity. We offer clear monthly subscriptions with no hidden costs.',
    'faq.5.question': 'Can AI completely replace human work?',
    'faq.5.answer': 'No. AI agents eliminate repetitive and low-value activities, leaving strategic and creative work to people.',
    'faq.6.question': 'Are your systems secure?',
    'faq.6.answer': 'Yes. All solutions comply with European data protection regulations, including GDPR and AI Act. We use advanced security protocols and continuous controls on AI agents to ensure integrity, privacy and legal compliance.',
    
    // Cookies
    'cookies.banner.title': 'We use cookies to improve your experience',
    'cookies.banner.description': 'We use necessary technical cookies for site functionality and profiling cookies to offer you personalized content. You can choose which categories to accept.',
    'cookies.banner.customize': 'Customize preferences',
    'cookies.banner.necessary': 'Necessary only',
    'cookies.banner.acceptAll': 'Accept all',
    
    'cookies.preferences.title': 'Cookie Preferences',
    'cookies.preferences.description': 'Manage your cookie preferences. You can change these settings at any time.',
    'cookies.preferences.required': 'Required',
    'cookies.preferences.save': 'Save preferences',
    'cookies.preferences.cancel': 'Cancel',
    
    'cookies.preferences.necessary.title': 'Necessary Technical Cookies',
    'cookies.preferences.necessary.description': 'These cookies are essential for the website to function and cannot be disabled.',
    
    'cookies.preferences.analytics.title': 'Analytics Cookies',
    'cookies.preferences.analytics.description': 'Help us understand how visitors interact with the site by collecting information anonymously.',
    
    'cookies.preferences.marketing.title': 'Marketing Cookies',
    'cookies.preferences.marketing.description': 'Used to track visitors across websites to display relevant and engaging advertisements.',
    
    'cookies.preferences.functional.title': 'Functional Cookies',
    'cookies.preferences.functional.description': 'Allow the site to remember choices you make to provide enhanced and personalized features.',
    
    // SEO/GEO specific content
    'seo.title': 'FlowMeUp - AI Automations for Italian SMEs | Personalized AI Agents',
    'seo.description': 'Transform your SME with custom AI automations. We map business processes and configure coordinated AI agents that eliminate repetitive activities. Free consultation.',
    'seo.keywords': 'AI automations, Italian SMEs, AI agents, business process automation, artificial intelligence companies, automatic CRM, email automation, workflow automation, personalized AI',
    
    // Footer
    'footer.description': 'Custom AI automations for Italian SMEs. We map business processes and configure coordinated AI agents that automate repetitive activities.',
    'footer.rights': 'All rights reserved.',
    'footer.headquarters': 'Legal Headquarters',
    'footer.navigation.title': 'Navigation',
    'footer.navigation.about': 'About Us',
    'footer.navigation.problems': 'Problems',
    'footer.navigation.solutions': 'Solutions',
    'footer.legal.title': 'Legal Information',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms & Conditions',
    'footer.contact.title': 'Contact',
    'footer.contact.email': 'Email',
    'footer.contact.cta': 'Book Demo',
    'footer.contact.info': 'We respond within 24 hours to discuss your AI automation needs.',
    'footer.bottom.compliance': 'GDPR and European AI Act compliant.',
    'footer.bottom.made': 'Made with',
    'footer.bottom.for': 'for Italian SMEs',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};