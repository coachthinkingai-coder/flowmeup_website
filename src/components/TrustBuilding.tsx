import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBuilding = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const trustElements = [
    {
      icon: {
        src: "/Develop Ita.png",
        alt: "Sviluppo Italia - Expertise PMI italiane automazioni AI",
        title: "Competenza specifica nel mercato PMI italiano"
      },
      title: t('trust.1.title'),
      description: t('trust.1.description')
    },
    {
      icon: {
        src: "/sistemiEsistenti.jpg",
        alt: "Integrazione sistemi esistenti - Zero rivoluzioni inutili",
        title: "Integrazione seamless con sistemi aziendali esistenti"
      },
      title: t('trust.2.title'),
      description: t('trust.2.description')
    },
    {
      icon: {
        src: "/metricheRisultati.jpg", 
        alt: "Metriche e risultati misurabili - KPI automazioni AI",
        title: "Monitoraggio KPI e risultati quantificabili"
      },
      title: t('trust.3.title'),
      description: t('trust.3.description')
    }
  ];

  return (
    <section
      id="trust-building"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="section-padding bg-primary"
    >
      <div className="container-project">
        <div className={`max-w-5xl mx-auto animate-fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {t('trust.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trustElements.map((element, index) => (
              <div 
                key={index}
                className={`relative p-8 text-center rounded-2xl animate-stagger overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 group cursor-pointer ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Background image overlay */}
                {index === 0 ? (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ 
                        backgroundImage: `url(${element.icon.src})`,
                        filter: 'grayscale(100%) brightness(0.7)'
                      }}
                      role="img"
                      aria-label={element.icon.alt}
                      title={element.icon.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/65 group-hover:from-blue-800/90 group-hover:via-blue-700/80 group-hover:to-blue-600/70 transition-all duration-500" />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
                  </>
                ) : (
                  index === 1 ? (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ 
                          backgroundImage: `url(${element.icon.src})`,
                          filter: 'grayscale(100%) brightness(0.7)'
                        }}
                        role="img"
                        aria-label={element.icon.alt}
                        title={element.icon.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/65 group-hover:from-blue-800/90 group-hover:via-blue-700/80 group-hover:to-blue-600/70 transition-all duration-500" />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
                    </>
                  ) : (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ 
                          backgroundImage: `url(${element.icon.src})`,
                          filter: 'grayscale(100%) brightness(0.7)'
                        }}
                        role="img"
                        aria-label={element.icon.alt}
                        title={element.icon.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/65 group-hover:from-blue-800/90 group-hover:via-blue-700/80 group-hover:to-blue-600/70 transition-all duration-500" />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-500" />
                    </>
                  )
                )}
                
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-accent/50 shadow-[0_0_20px_rgba(163,247,135,0.3)]"></div>
                </div>
                
                <h3 
                  className="text-lg font-semibold mb-3 relative z-10 transition-all duration-300 group-hover:text-shadow-glow"
                  style={{ color: '#a3f787' }}
                >
                  {element.title}
                </h3>
               <p className="text-sm relative z-10 transition-all duration-300 text-white">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilding;