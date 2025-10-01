import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const ChevronIcon = () => (
  <img 
    src="/chevron-thick.png" 
    alt="Icona freccia - Indicatore problema PMI risolto con AI"
    title="Problema identificato - Soluzione automazione AI disponibile"
    width="32" 
    height="32"
    loading="lazy"
    decoding="async"
    className="flex-shrink-0"
  />
);

const ProblemIdentification = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const problems = [
    t('problems.1'),
    t('problems.2'),
    t('problems.3'),
    t('problems.4')
  ];

  return (
    <section 
      id="problem-identification"
      itemScope
      itemType="https://schema.org/ItemList"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="section-padding bg-primary"
    >
      <div className="container-project">
        <div className={`max-w-4xl mx-auto animate-fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-primary text-center mb-12" itemProp="name">
            {t('problems.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
                className={`bg-elements/30 p-6 rounded-xl animate-fade-in-left ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.3}s` }}
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div className="flex items-start gap-3">
                  <ChevronIcon />
                  <p className="text-primary leading-relaxed flex-1 italic" itemProp="name">
                    "{problem}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemIdentification;