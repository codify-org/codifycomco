import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import SignupForm from './SignupForm';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * HeroSection component - Main landing section of the website
 * Displays the primary call-to-action, signup modal and demo features
 */
const HeroSection = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showGreeksModal, setShowGreeksModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize scroll reveal
  useScrollReveal();

  useEffect(() => {
    // Remove delay, set visible immediately
    setIsVisible(true);
  }, []);

  const handleSignupSubmit = (formData) => {
    console.log('Signup data:', formData);
    setShowSignupModal(false);
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 overflow-hidden section-transition">
        {/* Background layers with lower z-indices */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0, playbackRate: 0.5 }}
            onLoadedMetadata={(e) => {
              e.target.playbackRate = 1;
            }}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" style={{ zIndex: 1 }}></div>
          
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-slow-reverse"></div>
          </div>
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a044e10_1px,transparent_1px),linear-gradient(to_bottom,#4a044e10_1px,transparent_1px)] bg-[size:14px_24px]" style={{ zIndex: 3 }}></div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20" style={{ zIndex: 4 }}></div>
        </div>

        {/* Main content with higher z-index */}
        <div className="relative max-w-7xl mx-auto section-transition-content" style={{ zIndex: 10 }}>
          <div className="space-y-12 text-center">
            {/* Status badge */}
            <button 
              onClick={() => setShowAIModal(true)}
              className="relative inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100/20 text-purple-100 backdrop-blur-sm hover:bg-purple-100/30 transition-all duration-300 cursor-pointer group"
              style={{ zIndex: 20 }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
              AI Powered Backtesting
              <span className="absolute -right-1 -top-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"></span>
            </button>

            {/* Mobile Logo - only visible on small screens */}
            <div className="relative w-20 h-20 mx-auto mt-6 mb-2 md:hidden">
              <img
                src="/logo-transparent.png"
                alt="Codify AI Logo"
                className={`w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all duration-1000 ease-out transform hover:scale-110 ${
                  isVisible ? 'opacity-90' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full"></div>
            </div>

            {/* Main heading with gradient text */}
            <div className="space-y-4">
              <h1 className="space-y-6 relative" style={{ zIndex: 20 }}>
                <span 
                  className={`block text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-pink-100 transition-all duration-1000 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Codify AI Backtesting
                </span>
                <span 
                  className={`block text-3xl md:text-4xl text-purple-100 font-light transition-all duration-1000 delay-300 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Backtest options strategies considering <br/>
                  <button 
                    onClick={() => setShowGreeksModal(true)}
                    className="relative group text-pink-200 hover:text-pink-100 transition-colors duration-300 underline decoration-dotted underline-offset-4"
                    style={{ zIndex: 20 }}
                  >
                    <span className="text-purple-300">liquidity</span> risk and <span className="text-pink-300">greeks</span> exposures
                  </button>
                </span>
              </h1>

              {/* Description */}
              <p className={`relative max-w-2xl mx-auto text-xl text-purple-50 leading-relaxed transition-all duration-1000 delay-500 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {/* Blurred backdrop with softer border and shadow */}
                <span className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl -z-10 
                  border border-white/5 shadow-[0_0_200px_rgba(255,255,255,0.07)]"></span>
                {/* Adding padding and making the container relative */}
                <span className="relative block p-10">
                  Find optimal setups to trigger daily stock option trades
                  <span className="font-semibold text-pink-200"> with to the second bid-ask granularity</span>.
                  Leverage
                  <span className="font-semibold text-purple-200"> Deeper precision </span>
                  to enter and exit Multi-leg Options Strategies on
                <span className="font-semibold text-pink-300">  economic and corporates </span>events 

                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`relative flex flex-row justify-center items-center gap-6 mt-8 transition-all duration-1000 delay-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ zIndex: 20 }}>
              <button 
                onClick={() => setShowSignupModal(true)}
                className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] group"
              >
                Start Backtesting Now
                <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              {/* Desktop Logo - only visible on medium screens and up */}
              <div className="relative w-16 h-16 mx-4 hidden md:block">
                <img
                  src="/logo-transparent.png"
                  alt="Codify AI Logo"
                  className={`w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all duration-1000 ease-out transform hover:scale-110 ${
                    isVisible ? 'opacity-90' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full"></div>
              </div>

              <button 
                onClick={() => setShowDemoModal(true)}
                className="group relative px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10"
              >
                <span>Live Trading Results</span>
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="absolute -right-1 -top-1 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></span>
              </button>
            </div>

            {/* Stats section - Moving it up and enhancing visibility */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 mt-8 border-t border-purple-400/30 transition-all duration-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="px-4">
                <div className="text-4xl font-bold text-white animate-fade-in">1000ms</div>
                <div className="text-purple-100 text-sm mt-2 font-medium">Tick Precision</div>
              </div>
              <div className="px-4">
                <div className="text-4xl font-bold text-white animate-fade-in">4+ Years</div>
                <div className="text-purple-100 text-sm mt-2 font-medium">Historical Data</div>
              </div>
              <div className="px-4">
                <div className="text-4xl font-bold text-white animate-fade-in">99.99%</div>
                <div className="text-purple-100 text-sm mt-2 font-medium">Uptime</div>
              </div>
              <div className="px-4">
                <div className="text-4xl font-bold text-white animate-fade-in">REST</div>
                <div className="text-purple-100 text-sm mt-2 font-medium">API Access</div>
              </div>
            </div>

            {/* Add helper text that fades in */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-purple-200/70 text-sm opacity-0 transition-opacity duration-500 hover:opacity-100">
              Click elements to learn more
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

      {/* AI Explanation Modal */}
      <Modal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
        title="AI-Powered Backtesting"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-200">How AI Enhances Your Trading</h3>
            <div className="space-y-4 text-purple-100">
              <p>
                Our AI system analyzes complex market dynamics through:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold text-pink-300">Greek Analysis:</span> Real-time monitoring of Delta, Gamma, Theta, and Vega exposures to optimize position sizing and risk management.
                </li>
                <li>
                  <span className="font-semibold text-purple-300">Bid-Ask Spread Analysis:</span> Tick-by-tick liquidity assessment to ensure realistic entry and exit points.
                </li>
                <li>
                  <span className="font-semibold text-pink-300">Setup Optimization:</span> Pattern recognition to identify high-probability trading opportunities based on historical data.
                </li>
                <li>
                  <span className="font-semibold text-purple-300">Trigger Refinement:</span> Machine learning algorithms that help fine-tune your entry and exit triggers for maximum effectiveness.
                </li>
              </ul>
              <p className="text-sm italic mt-4">
                Our AI doesn't just backtest - it learns from market microstructure to help you build more robust trading strategies.
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Greeks Explanation Modal */}
      <Modal
        isOpen={showGreeksModal}
        onClose={() => setShowGreeksModal(false)}
        title="Understanding Option Greeks"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-200">The Power of Greeks in Options Trading</h3>
            <div className="space-y-6 text-purple-100">
              <p className="italic">
                Greeks are essential risk measures that help traders understand and manage their options positions during various market conditions and events.
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-900/50">
                  <h4 className="text-pink-300 font-semibold mb-2">Delta (Δ)</h4>
                  <p>Measures directional risk and hedge ratios</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Critical during earnings announcements</li>
                    <li>Key for managing options portfolio exposures</li>
                    <li>Essential for directional trading strategies</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-900/50">
                  <h4 className="text-purple-300 font-semibold mb-2">Gamma (Γ)</h4>
                  <p>Rate of change in Delta</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Crucial during high-volatility events</li>
                    <li>Important for options near expiration</li>
                    <li>Key risk measure for market makers</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-900/50">
                  <h4 className="text-pink-300 font-semibold mb-2">Theta (Θ)</h4>
                  <p>Time decay measurement</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Essential for income strategies</li>
                    <li>Critical for premium selling</li>
                    <li>Important during low volatility periods</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-900/50">
                  <h4 className="text-purple-300 font-semibold mb-2">Vega (ν)</h4>
                  <p>Volatility sensitivity</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Key during earnings and economic events</li>
                    <li>Essential for volatility trading strategies</li>
                    <li>Critical for managing vega risk exposure</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-purple-200 mb-2">Event-Driven Trading</h4>
                <p className="text-sm">
                  During corporate events (earnings, mergers) and economic announcements (FOMC, CPI), understanding Greek exposures becomes crucial as they help:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Predict and manage potential position impacts</li>
                  <li>Optimize entry and exit timing</li>
                  <li>Balance risk/reward ratios effectively</li>
                  <li>Structure more robust trading strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeroSection;