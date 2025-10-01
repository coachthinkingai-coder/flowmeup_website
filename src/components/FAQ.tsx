import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer')
    },
    {
      question: t('faq.5.question'),
      answer: t('faq.5.answer')
    },
    {
      question: t('faq.6.question'),
      answer: t('faq.6.answer')
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="section-padding bg-primary"
    >
      <div className="container-project">
        <div className={`max-w-3xl mx-auto animate-fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4" itemProp="name">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-secondary">
              {t('faq.subtitle')}
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                itemScope
                itemType="https://schema.org/Question"
                itemProp="mainEntity"
                className={`bg-elements/50 rounded-xl overflow-hidden animate-stagger ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-elements/70 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary" itemProp="name">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-secondary leading-relaxed" itemProp="text">
                      {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;