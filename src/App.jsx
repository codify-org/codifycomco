import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ArticlesSection from './components/ArticlesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PolicyModalProvider } from './components/policies/PolicyModal';
import { ArticlesProvider } from './components/articles/ArticlesContext';
import ArticlePage from './pages/articles/[slug]';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <ArticlesSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <PolicyModalProvider>
        <ArticlesProvider>
          <div className="min-h-screen bg-black text-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
            </Routes>
          </div>
        </ArticlesProvider>
      </PolicyModalProvider>
    </Router>
  );
}

export default App;
