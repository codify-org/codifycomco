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

  // Initialize scroll reveal
  useScrollReveal();

  const handleSignupSubmit = (formData) => {
    console.log('Signup data:', formData);
    setShowSignupModal(false);
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 overflow-hidden section-transition">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-black">
          {/* Gradient orb effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-slow-reverse"></div>
          </div>
          
          {/* Subtle grid effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a044e10_1px,transparent_1px),linear-gradient(to_bottom,#4a044e10_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto section-transition-content">
          <div className="space-y-12 text-center">
            {/* Status badge */}
            <div className="inline-block animate-fade-in-up">
              <button 
                onClick={() => setShowAIModal(true)}
                className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 bg-opacity-10 text-purple-200 backdrop-blur-sm hover-lift cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                AI Powered Backtesting
              </button>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight animate-fade-in-up delay-100">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                Codify AI Backtesting
              </span>
              <span className="block text-3xl md:text-4xl mt-3 text-purple-200/90 font-light animate-fade-in delay-200">
                Backtest options strategies considering <br/>
                <button 
                  onClick={() => setShowGreeksModal(true)}
                  className="text-pink-300 hover:text-pink-400 transition-colors duration-300 underline decoration-dotted underline-offset-4"
                >
                  liquidity risk and greeks exposures
                </button>
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-xl text-purple-100 leading-relaxed flex flex-col gap-2 animate-fade-in-up delay-300">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 animate-fade-in-up delay-400">
              <button 
                onClick={() => setShowSignupModal(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50 hover-lift hover-glow"
              >
                Start Backtesting Now
              </button>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="w-full sm:w-auto group px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-20 transition duration-300 hover-lift"
              >
                <span>See Live Results</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats section with parallax */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-purple-800/30 animate-fade-in-up delay-500 parallax-scroll">
              <div className="reveal-on-scroll px-4">
                <div className="text-3xl font-bold text-white">1000ms</div>
                <div className="text-purple-300/80 text-sm mt-2">Tick Precision</div>
              </div>
              <div className="reveal-on-scroll delay-100 px-4">
                <div className="text-3xl font-bold text-white">4+ Years</div>
                <div className="text-purple-300/80 text-sm mt-2">Historical Data</div>
              </div>
              <div className="reveal-on-scroll delay-200 px-4">
                <div className="text-3xl font-bold text-white">99.99%</div>
                <div className="text-purple-300/80 text-sm mt-2">Uptime</div>
              </div>
              <div className="reveal-on-scroll delay-300 px-4">
                <div className="text-3xl font-bold text-white">REST</div>
                <div className="text-purple-300/80 text-sm mt-2">API Access</div>
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