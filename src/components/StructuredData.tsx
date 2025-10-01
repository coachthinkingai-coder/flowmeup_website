import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StructuredData = () => {
  const { language, t } = useLanguage();

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "FAQ - Automazioni AI per PMI Italiane",
    "description": "Domande frequenti sui servizi di automazione AI di FlowMeUp per PMI italiane",
    "inLanguage": language,
    "about": {
      "@type": "Thing",
      "name": "Automazioni AI PMI",
      "description": "Servizi di automazione AI per piccole e medie imprese italiane"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('faq.1.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.1.answer')
        }
      },
      {
        "@type": "Question", 
        "name": t('faq.2.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.2.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.3.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.3.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.4.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.4.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.5.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.5.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.6.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.6.answer')
        }
      }
    ]
  };

  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": language === 'it' ? "Come implementare automazioni AI nella tua PMI" : "How to implement AI automations in your SME",
    "description": language === 'it' ? "Guida completa di FlowMeUp per implementare automazioni AI personalizzate nella tua PMI italiana. Processo in 3 step: assessment agentistico, progettazione su misura, monitoraggio performance." : "Complete FlowMeUp guide to implement personalized AI automations in your Italian SME. 3-step process: agentic assessment, custom design, performance monitoring.",
    "image": "https://jazzy-jelly-56b65d.netlify.app/logo_final.png",
    "author": {
      "@type": "Organization",
      "name": "FlowMeUp",
      "url": "https://flowmeup.me"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowMeUp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jazzy-jelly-56b65d.netlify.app/logo_final.png"
      }
    },
    "datePublished": "2024-12-20",
    "dateModified": "2025-01-04",
    "totalTime": "PT30M",
    "performTime": "PT30M",
    "prepTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "yield": "Sistema di automazione AI funzionante",
    "keywords": "automazioni AI, PMI italiane, agenti AI, implementazione AI, FlowMeUp",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": language === 'it' ? "Sistemi aziendali esistenti" : "Existing business systems"
      },
      {
        "@type": "HowToSupply", 
        "name": language === 'it' ? "Processi da automatizzare" : "Processes to automate"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": t('solution.step1.title'),
        "text": t('solution.step1.description'),
        "image": "https://jazzy-jelly-56b65d.netlify.app/docs_agent.mp4",
        "video": {
          "@type": "VideoObject",
          "name": "Assessment Agentistico - Analisi processi AI",
          "description": "Video dimostrativo dell'agente AI che analizza e mappa i processi aziendali per PMI italiane",
          "contentUrl": "https://flowmeup.me/docs_agent.mp4",
          "thumbnailUrl": "https://flowmeup.me/logo_final.png",
          "uploadDate": "2024-12-20"
        }
      },
      {
        "@type": "HowToStep",
        "name": t('solution.step2.title'),
        "text": t('solution.step2.description'),
        "image": "https://jazzy-jelly-56b65d.netlify.app/Flow Animation.mp4",
        "video": {
          "@type": "VideoObject",
          "name": "Progettazione Su Misura - Flusso AI personalizzato",
          "description": "Animazione che mostra la progettazione di flussi AI personalizzati per l'automazione dei processi aziendali",
          "contentUrl": "https://flowmeup.me/Flow Animation.mp4",
          "thumbnailUrl": "https://flowmeup.me/logo_final.png",
          "uploadDate": "2024-12-20"
        }
      },
      {
        "@type": "HowToStep",
        "name": t('solution.step3.title'),
        "text": t('solution.step3.description'),
        "image": "https://jazzy-jelly-56b65d.netlify.app/dashboard.mp4",
        "video": {
          "@type": "VideoObject",
          "name": "Monitoraggio Performance - Dashboard KPI AI",
          "description": "Dashboard per il monitoraggio delle performance e KPI delle automazioni AI implementate per PMI",
          "contentUrl": "https://flowmeup.me/dashboard.mp4",
          "thumbnailUrl": "https://flowmeup.me/logo_final.png",
          "uploadDate": "2024-12-20"
        }
      }
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "name": "Navigazione FlowMeUp",
    "description": "Percorso di navigazione del sito FlowMeUp per automazioni AI PMI",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "FlowMeUp - Automazioni AI PMI",
        "item": "https://jazzy-jelly-56b65d.netlify.app/",
        "description": "Homepage FlowMeUp - Automazioni AI per PMI italiane"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'it' ? "Automazioni AI" : "AI Automations",
        "item": "https://jazzy-jelly-56b65d.netlify.app/#solution-preview",
        "description": language === 'it' ? "Soluzioni di automazione AI per PMI" : "AI automation solutions for SMEs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "FAQ",
        "item": "https://jazzy-jelly-56b65d.netlify.app/#faq",
        "description": language === 'it' ? "Domande frequenti automazioni AI" : "AI automation frequently asked questions"
      }
    ]
  };

  // Nuovo structured data per AI search engines
  const aiSearchStructuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": language === 'it' ? "FlowMeUp: Automazioni AI che Funzionano per le PMI Italiane" : "FlowMeUp: AI Automations that Work for Italian SMEs",
    "description": language === 'it' ? "FlowMeUp è la piattaforma leader per automazioni AI dedicate alle PMI italiane. Agenti AI coordinati che eliminano il 50% delle attività ripetitive, si integrano con sistemi esistenti e garantiscono risultati misurabili. Consulenza gratuita e implementazione senza bloccare la produzione." : "FlowMeUp is the leading platform for AI automations dedicated to Italian SMEs. Coordinated AI agents that eliminate 50% of repetitive activities, integrate with existing systems and guarantee measurable results. Free consultation and implementation without blocking production.",
    "author": {
      "@type": "Organization",
      "name": "FlowMeUp",
      "url": "https://flowmeup.me",
      "description": "Specialisti in automazioni AI per PMI italiane"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowMeUp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jazzy-jelly-56b65d.netlify.app/logo_final.png"
      }
    },
    "datePublished": "2024-12-20",
    "dateModified": "2025-01-04",
    "mainEntityOfPage": "https://flowmeup.me",
    "image": "https://jazzy-jelly-56b65d.netlify.app/logo_final.png",
    "keywords": "FlowMeUp, automazioni AI, PMI italiane, agenti AI coordinati, automazione processi, intelligenza artificiale aziende, workflow automation, CRM automation, email automation, consulenza AI gratuita",
    "about": [
      {
        "@type": "Thing",
        "name": "Automazioni AI per PMI",
        "description": "Soluzioni di automazione AI specificamente progettate per piccole e medie imprese italiane"
      },
      {
        "@type": "Thing", 
        "name": "Agenti AI Coordinati",
        "description": "Sistemi di intelligenza artificiale che lavorano insieme per automatizzare processi aziendali complessi"
      },
      {
        "@type": "Thing",
        "name": "Integrazione Sistemi Esistenti",
        "description": "Capacità di integrarsi perfettamente con software e sistemi aziendali già in uso"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiSearchStructuredData)
        }}
      />
    </>
  );
};

export default StructuredData;