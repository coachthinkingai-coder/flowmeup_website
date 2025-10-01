import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const FinalCTA = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"let-s-talk"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section 
      id="final-cta"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="section-padding bg-primary"
    >
      <div className="container-project">
        <div className={`max-w-4xl mx-auto text-center animate-fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-primary mb-8">
            {t('finalCta.title')}
          </h2>
          
          <div className="max-w-5xl mx-auto mt-12">
            <div style={{
              borderRadius: '12px',
              minHeight: '700px'
            }}>
              <Cal 
                namespace="let-s-talk"
                calLink="flowmeup/let-s-talk"
                style={{width:"110%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view"}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;