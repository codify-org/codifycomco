import React, { useState } from 'react';
import Modal from './Modal';
import SignupForm from './SignupForm';

/**
 * HeroSection component - Main landing section of the website
 * Displays the primary call-to-action, signup modal and demo features
 */
const HeroSection = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleSignupSubmit = (formData) => {
    // Here you would typically send the data to your backend
    console.log('Signup data:', formData);
    setShowSignupModal(false);
    // Show success message or redirect
  };

  return (
    <>
      <div className="hero relative overflow-hidden">
        {/* Background with gradient and noise effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="space-y-12 text-center">
            {/* Status badge */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 bg-opacity-10 text-purple-200 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                AI-Powered Market Data [Production]
              </span>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-white">
                Codify AI Backtesting
              </span>
              <span className="block text-3xl md:text-4xl mt-3 text-purple-200 font-light">
                Backtest options strategies considering liquidity risk and greek exposures
              </span>
            </h1>

            {/* Description with better messaging for pro traders */}
            <p className="max-w-2xl mx-auto text-xl text-purple-100 leading-relaxed flex flex-col gap-2">
              <span>
                Find optimal setups to trigger daily stock option strategies
                <span className="font-semibold text-pink-300"> with to the tick bid-ask granularity</span>.
              </span>
              <span>
                Leverage
                <span className="font-semibold text-purple-300"> Deeper precision </span>
                to optimize your day to day trading strategies.
              </span>
            </p>

            {/* CTA Buttons with modern styling */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <button 
                onClick={() => setShowSignupModal(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
              >
                Start Backtesting Now
              </button>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="w-full sm:w-auto group px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-20 transition duration-300"
              >
                <span>See Live Results</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-12 border-t border-purple-800">
              <div>
                <div className="text-3xl font-bold text-white">1000ms</div>
                <div className="text-purple-300 text-sm">Tick Precision</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4+ Years</div>
                <div className="text-purple-300 text-sm">Historical Data</div>
              </div>
              <div>

                <div className="text-3xl font-bold text-white">99.99%</div>
                <div className="text-purple-300 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">REST</div>
                <div className="text-purple-300 text-sm">API Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <Modal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        title="Get Early Access"
      >
        <div className="space-y-4">
          <p className="text-purple-100">
            Join our exclusive early access program to be among rhe first ones to run your ideas on state of the art options backtesting.
          </p>
          <SignupForm onSubmit={handleSignupSubmit} />
        </div>
      </Modal>

      {/* Demo Modal */}
      <Modal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        title="Live Trading Results"
      >
        <div className="space-y-6">
          <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-900/50">
            <h4 className="text-xl font-semibold text-purple-200 mb-2">Sample Strategy: Earnings Volatility Crush</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-purple-100">Win Rate</span>
                <span className="text-green-400 font-semibold">78.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-100">Avg. Return</span>
                <span className="text-green-400 font-semibold">32.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-100">Sharpe Ratio</span>
                <span className="text-green-400 font-semibold">2.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-100">Max Drawdown</span>
                <span className="text-pink-400 font-semibold">-15.2%</span>
              </div>
            </div>
          </div>
          <p className="text-purple-100">
            These results are based on historical data from Jan 2021 to Dec 2024, using our backtesting engine.
          </p>
          <button
            onClick={() => {
              setShowDemoModal(false);
              setShowSignupModal(true);
            }}
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
          >
            Get Started Now
          </button>
        </div>
      </Modal>
    </>
  );
};

export default HeroSection;