import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="container-project py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonna 1: Info Azienda + Copyright */}
          <div className="space-y-6">
            {/* Logo e Nome */}
            <div className="flex items-center gap-2">
              <img 
                src="/logo_final.png" 
                alt="FlowMeUp - Logo aziendale automazioni AI per PMI italiane"
                title="FlowMeUp - Soluzioni AI personalizzate per piccole e medie imprese"
                width="40"
                height="40"
                loading="lazy"
                className="h-10 w-auto"
              />
              <span 
                className="text-white font-bold text-lg"
                style={{
                  textShadow: '0 0 10px rgba(163, 247, 135, 0.8), 0 0 20px rgba(163, 247, 135, 0.5)'
                }}
              >
                FlowMeUp
              </span>
            </div>

            {/* Descrizione */}
            <p className="text-secondary text-sm leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Copyright */}
            <div className="text-secondary text-sm">
              <p>© 2025 FlowMeUp</p>
              <p className="mt-1">{t('footer.rights')}</p>
            </div>

            {/* Info Legali */}
            <div className="text-secondary text-xs space-y-1">
              <p>P.IVA/Codice Fiscale: 2594606213</p>
              <p>{t('footer.headquarters')}: Odessa, Ucraina</p>
            </div>
          </div>

          {/* Colonna 2: Link Utili + Legali */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">
              {t('footer.navigation.title')}
            </h3>
            
            {/* Navigazione Secondaria */}
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                {t('footer.navigation.about')}
              </button>
              <button
                onClick={() => scrollToSection('problem-identification')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                {t('footer.navigation.problems')}
              </button>
              <button
                onClick={() => scrollToSection('solution-preview')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                {t('footer.navigation.solutions')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                FAQ
              </button>
            </div>

            {/* Link Legali */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-white font-medium text-sm mb-3">
                {t('footer.legal.title')}
              </h4>
              <div className="space-y-2">
                <a
                  href="/privacy-policy.html"
                  className="block text-secondary hover:text-accent transition-colors text-sm"
                >
                  {t('footer.legal.privacy')}
                </a>
                <a
                  href="/terms-conditions.html"
                  className="block text-secondary hover:text-accent transition-colors text-sm"
                >
                  {t('footer.legal.terms')}
                </a>
              </div>
            </div>
          </div>

          {/* Colonna 3: Contatti */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">
              {t('footer.contact.title')}
            </h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div>
                <h4 className="text-white font-medium text-sm mb-1">
                  {t('footer.contact.email')}
                </h4>
                <a
                  href="mailto:connect@flowmeup.me"
                  className="text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  connect@flowmeup.me
                </a>
              </div>

              {/* CTA Contatto */}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('final-cta')}
                  className="bg-accent text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  {t('footer.contact.cta')}
                </button>
              </div>
            </div>

            {/* Info Aggiuntive */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-secondary text-xs leading-relaxed">
                {t('footer.contact.info')}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-xs">
              {t('footer.bottom.compliance')}
            </p>
            <p className="text-secondary text-xs">
              {t('footer.bottom.made')} ❤️ {t('footer.bottom.for')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;