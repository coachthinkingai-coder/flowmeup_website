import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const AnimatedCounter = ({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(currentStep * increment, target));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-white font-bold">
      {prefix}{Math.round(count)}{suffix}
    </span>
  );
};

const Hero = () => {
  const { t, language } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const scrollToCallSection = () => {
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="min-h-screen bg-primary relative overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video di sfondo che mostra flussi di automazione AI per PMI italiane"
          title="Animazione AI Flow - Visualizzazione processi automatizzati"
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/aiFlow.mp4" type="video/mp4" />
          <track kind="descriptions" srclang="it" label="Descrizione video AI Flow" />
          <p>Il tuo browser non supporta i video HTML5. Questo video mostra l'animazione dei flussi di automazione AI per PMI.</p>
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-blue-900/40 to-blue-800/30"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-elements rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-elements rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-elements rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-elements rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container-project section-padding pt-20 pb-12 relative z-20">
        <div className="flex items-center justify-center min-h-screen">
          {/* Left Column - Content */}
          <div className={`space-y-8 animate-fade-in-left ${isVisible ? 'visible' : ''} text-center max-w-4xl`}>
            <div className="element-spacing">
              <h1 className="text-headline text-primary leading-tight">
                {language === 'it' ? (
                  <>
                    <span style={{ color: '#a3f787' }}>{t('hero.title.automazioni')}</span>{' '}
                    <span style={{ color: '#a3f787' }}>{t('hero.title.ai')}</span>{' '}
                    {t('hero.title.rest')}
                  </>
                ) : (
                  <>
                    <span style={{ color: '#a3f787' }}>{t('hero.title.automations')}</span>{' '}
                    {t('hero.title.rest')}
                  </>
                )}
              </h1>
              <h2 className="text-subheading text-secondary mt-6" itemProp="description">
                {t('hero.subtitle')}
              </h2>
            </div>
            

            
            {/* Social Proof */}
            {/*}
            <div className="bg-elements/50 backdrop-blur-sm rounded-lg p-6 border border-elements">
              <p className="text-sm text-secondary mb-2">Risultati reali:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-accent">
                  <AnimatedCounter target={90} suffix="%" /> riduzione tempi operativi
                </span>
                <span className="text-secondary">Qualità incrementata</span>
                <span className="text-secondary">KPI misurabili</span>
              </div>
            </div> */}

            {/* Primary CTA */}
            <div className="element-spacing">
              <button 
                onClick={scrollToCallSection}
                className="bg-accent text-black px-8 py-4 rounded-full text-cta hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;