import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ArticlesSection from './components/ArticlesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PolicyModalProvider } from './components/policies/PolicyModal';
import { ArticlesProvider } from './components/articles/ArticlesContext';

function App() {
  return (
    <PolicyModalProvider>
      <ArticlesProvider>
        <div className="min-h-screen bg-black text-white">
          <HeroSection />
          <FeaturesSection />
          <ArticlesSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </ArticlesProvider>
    </PolicyModalProvider>
  );
}

export default App;
