import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './App.css';

const PreviewBanner = () => (
  <div className="fixed top-0 right-0 m-4 px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full shadow-lg z-50 flex items-center space-x-1">
    <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
    <span>Preview Environment</span>
  </div>
);

const App = () => {
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    console.log('Current hostname:', hostname);
    const isPreviewHost = hostname === 'vercel.codify.com.co' || 
                         hostname === 'localhost' ||
                         hostname.includes('vercel.app') ||
                         hostname.startsWith('preview');
    console.log('Is preview?', isPreviewHost);
    setIsPreview(isPreviewHost);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black">
      {isPreview && <PreviewBanner />}
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;
