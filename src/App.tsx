import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieProvider } from './contexts/CookieContext';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemIdentification from './components/ProblemIdentification';
import SolutionPreview from './components/SolutionPreview';
import TrustBuilding from './components/TrustBuilding';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import CookieBanner from './components/CookieBanner';
import CookiePreferences from './components/CookiePreferences';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <CookieProvider>
        <SEOHead />
        <StructuredData />
        <div className="min-h-screen bg-primary">
          <Header />
          <Hero />
          <ProblemIdentification />
          <SolutionPreview />
          <TrustBuilding />
          <FinalCTA />
          <FAQ />
          <Footer />
          <CookieBanner />
          <CookiePreferences />
        </div>
      </CookieProvider>
    </LanguageProvider>
  );
}

export default App;