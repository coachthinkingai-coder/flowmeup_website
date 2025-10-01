import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const SolutionPreview = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="solution-preview"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="section-padding bg-primary relative overflow-hidden"
    >
      <div className="container-project">
        <div className={`max-w-6xl mx-auto animate-fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('solution.title')} <span className="text-accent">{t('solution.titleAccent')}</span>
            </h2>
          </div>

          {/* Steps Container */}
          <div className="relative">
            {/* Step 1 */}
            <div className={`flex items-start justify-between mb-20 animate-stagger ${isVisible ? 'visible' : ''}`}>
              {/* Left Content */}
              <div className="flex-1 max-w-md">
                <div className="mb-6">
                  <p className="text-accent text-sm font-semibold mb-2">{t('solution.step1.phase')}</p>
                  <h3 className="text-xl font-bold text-primary mb-4">{t('solution.step1.title')}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{t('solution.step1.description')}</p>
                </div>
              </div>

              {/* Right Media Box */}
              <div className="flex-1 max-w-md ml-8">
                <div className="relative">
                  {/* Main Container */}
                  <div className="border border-accent/30 rounded-xl h-64 overflow-hidden relative">
                    <video 
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Demo agente AI per analisi documentale e mappatura processi aziendali PMI"
                      title="Step 1: Assessment Agentistico - AI Agent analizza processi aziendali"
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(100%)' }}
                    >
                      <source src="/docs_agent.mp4" type="video/mp4" />
                      <track kind="descriptions" srclang="it" label="Agente AI analizza documenti aziendali" />
                      <p>Video dimostrativo: Agente AI che analizza e mappa i processi aziendali per PMI italiane.</p>
                    </video>
                   
                   {/* Blue gradient overlay */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-blue-500/50 to-blue-700/60 pointer-events-none mix-blend-multiply"></div>
                   
                  </div>
                  
                  {/* Connection Circle */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arc 1 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-16 mb-8">
              <svg width="200" height="60" viewBox="0 0 200 60" className="text-accent/30">
                <path
                  d="M 20 10 Q 100 50 180 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Step 2 */}
            <div className={`flex items-start justify-between mb-20 animate-stagger ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              {/* Left Media Box */}
              <div className="flex-1 max-w-md mr-8">
                <div className="relative">
                  {/* Main Container */}
                  <div className="border border-accent/30 rounded-xl h-64 overflow-hidden relative">
                    <video 
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Animazione flusso di lavoro AI personalizzato per automazione processi PMI"
                      title="Step 2: Progettazione Su Misura - Flusso automazione AI personalizzato"
                      className="w-full h-full object-contain"
                    >
                      <source src="/Flow Animation.mp4" type="video/mp4" />
                      <track kind="descriptions" srclang="it" label="Animazione progettazione flusso AI personalizzato" />
                      <p>Animazione che mostra la progettazione di flussi AI personalizzati per l'automazione dei processi aziendali.</p>
                    </video>
                  </div>
                  
                  {/* Connection Circle */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 max-w-md">
                <div className="mb-6">
                  <p className="text-accent text-sm font-semibold mb-2">{t('solution.step2.phase')}</p>
                  <h3 className="text-xl font-bold text-primary mb-4">{t('solution.step2.title')}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{t('solution.step2.description')}</p>
                </div>
              </div>
            </div>

            {/* Connecting Arc 2 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-16 mb-8">
              <svg width="200" height="60" viewBox="0 0 200 60" className="text-accent/30">
                <path
                  d="M 20 10 Q 100 50 180 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Step 3 */}
            <div className={`flex items-start justify-between animate-stagger ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              {/* Left Content */}
              <div className="flex-1 max-w-md">
                <div className="mb-6">
                  <p className="text-accent text-sm font-semibold mb-2">{t('solution.step3.phase')}</p>
                  <h3 className="text-xl font-bold text-primary mb-4">{t('solution.step3.title')}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{t('solution.step3.description')}</p>
                </div>
              </div>

              {/* Right Media Box */}
              <div className="flex-1 max-w-md ml-8">
                <div className="relative">
                  {/* Main Container */}
                  <div className="border border-accent/30 rounded-xl h-64 overflow-hidden relative">
                    <video 
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Dashboard monitoraggio performance KPI automazioni AI per PMI italiane"
                      title="Step 3: Monitoraggio Performance - Dashboard KPI e metriche AI"
                     className="w-full h-full object-contain"
                     style={{
                       minHeight: '200px'
                     }}
                    >
                      <source src="/dashboard.mp4" type="video/mp4" />
                      <track kind="descriptions" srclang="it" label="Dashboard monitoraggio KPI e performance automazioni AI" />
                      <p>Dashboard per il monitoraggio delle performance e KPI delle automazioni AI implementate.</p>
                    </video>
                    
                    {/* Blue gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/60 via-blue-500/70 to-blue-700/80 pointer-events-none mix-blend-multiply"></div>
                    
                    {/* Overlay to cover "Project Command Room" text */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent"></div>
                    <div className="absolute top-2 left-4 right-4 h-8 bg-black/60 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionPreview;