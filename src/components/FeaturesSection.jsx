import React, { useState } from 'react';
import BacktestingIcon from '../assets/icons/backtesting.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import MarketDataIcon from '../assets/icons/market-data.svg';
import ScannerIcon from '../assets/icons/scanner.svg';
import AnalyticsIcon from '../assets/icons/analytics.svg';
import PositionIcon from '../assets/icons/position.svg';
import Modal from './Modal';
import SignupForm from './SignupForm';

const featureDetails = {
  backtesting: {
    title: "Greek-Focused Backtesting",
    description: "Our advanced backtesting engine helps you understand the historical performance of your options strategies with a special focus on Greek exposures.",
    bullets: [
      "Validate your strategies against historical market conditions to improve win rates",
      "Analyze how Greek ratios evolve throughout the trade lifecycle",
      "Identify optimal entry and exit points based on Greek thresholds"
    ]
  },
  earnings: {
    title: "Earnings Volatility Analysis",
    description: "Make data-driven decisions around earnings events by understanding historical volatility patterns and their impact on options pricing.",
    bullets: [
      "Predict potential volatility crushes and expansions around earnings",
      "Optimize trade timing based on historical volatility patterns",
      "Identify opportunities where the market is mispricing earnings risk"
    ]
  },
  bidask: {
    title: "Bid-Ask Spread Intelligence",
    description: "Maximize your edge by understanding and optimizing around liquidity patterns and spread dynamics in the options market.",
    bullets: [
      "Reduce transaction costs by trading during optimal liquidity windows",
      "Identify opportunities where wide spreads create mispricing",
      "Track spread patterns to improve fill rates on complex orders"
    ]
  },
  scanner: {
    title: "Greek Composition Scanner",
    description: "Find the perfect trade setups by scanning the entire options chain for opportunities that match your Greek exposure preferences.",
    bullets: [
      "Quickly identify trades matching your desired Greek ratios",
      "Screen for opportunities across multiple expiration cycles",
      "Filter for specific volatility characteristics and spread conditions"
    ]
  },
  analytics: {
    title: "Volatility Risk Analysis",
    description: "Get deep insights into volatility risk across your portfolio with our advanced analytics suite.",
    bullets: [
      "Monitor real-time changes in implied volatility surfaces",
      "Track term structure evolution and spot opportunities",
      "Analyze volatility risk contribution by position"
    ]
  },
  position: {
    title: "Dynamic Position Sizing",
    description: "Optimize your position sizes based on sophisticated risk metrics and portfolio constraints.",
    bullets: [
      "Calculate optimal position sizes based on account risk parameters",
      "Balance Greek exposures across your entire portfolio",
      "Adjust position sizes dynamically as market conditions change"
    ]
  }
};

const FeatureModal = ({ feature, isOpen, onClose }) => {
  const details = featureDetails[feature];
  if (!details) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={details.title}>
      <div className="space-y-6 p-2">
        {/* Animated gradient border */}
        <div className="relative p-6 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 animate-gradient-x"></div>
          <div className="relative bg-black/90 p-6 rounded-lg">
            <p className="text-purple-100/90 leading-relaxed mb-6">
              {details.description}
            </p>
            <h4 className="text-lg font-semibold text-purple-200 mb-4">Key Benefits:</h4>
            <ul className="space-y-3">
              {details.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-purple-100/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const FeatureCard = ({ icon: Icon, title, description, featureKey }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="relative group cursor-pointer" 
        onClick={() => setShowModal(true)}
      >
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
        
        <div className="relative flex flex-col h-full p-8 bg-black bg-opacity-90 backdrop-blur-xl rounded-xl border border-purple-900/50 transform hover:-translate-y-1 transition duration-300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
              <img 
                src={Icon} 
                alt={title} 
                className="w-8 h-8 [filter:brightness(5)_saturate(0)] opacity-100 group-hover:opacity-90 transition-opacity"
                style={{ filter: 'invert(1)' }}
              />
            </div>
            <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
              {title}
            </h3>
          </div>
          <p className="text-purple-100/80 leading-relaxed">
            {description}
          </p>
          <div className="mt-4 text-sm text-purple-300 flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
            <span>Click to learn more</span>
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <FeatureModal 
        feature={featureKey} 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

const FeaturesSection = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleSignupSubmit = (formData) => {
    console.log('Signup data:', formData);
    setShowSignupModal(false);
  };

  return (
    <div id="features" className="relative bg-black py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 relative">
            <img
              src="/logo-transparent.png"
              alt="Codify Logo"
              className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
              Advanced Options Analytics Platform
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-purple-100/80">
            Master options trading with precision Greek analysis, bid-ask spread optimization, and AI-powered earnings volatility predictions
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BacktestingIcon}
            title="Greek-Focused Backtesting"
            description="Analyze historical Vega-to-Delta ratios to identify optimal setups where volatility exposure can provide a protective cushion against directional risk."
            featureKey="backtesting"
          />
          <FeatureCard
            icon={CalendarIcon}
            title="Earnings Volatility Analysis"
            description="Deep dive into historical earnings reactions with precise volatility surface analysis to identify high-probability setups for upcoming announcements."
            featureKey="earnings"
          />
          <FeatureCard
            icon={MarketDataIcon}
            title="Bid-Ask Spread Intelligence"
            description="Real-time analysis of liquidity patterns and spread dynamics to optimize entry/exit points and minimize transaction costs in your options trades."
            featureKey="bidask"
          />
          <FeatureCard
            icon={ScannerIcon}
            title="Greek Composition Scanner"
            description="Automatically identify options strategies with favorable Greek ratios, focusing on setups where Vega exposure can help offset potential Delta losses."
            featureKey="scanner"
          />
          <FeatureCard
            icon={AnalyticsIcon}
            title="Volatility Risk Analysis"
            description="Advanced analytics for measuring and visualizing Vega exposure, IV term structure, and volatility surface dynamics to better prepare for earnings events."
            featureKey="analytics"
          />
          <FeatureCard
            icon={PositionIcon}
            title="Dynamic Position Sizing"
            description="Smart position sizing recommendations based on Greek exposures, ensuring optimal risk management for your volatility-focused strategies."
            featureKey="position"
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button 
            onClick={() => setShowSignupModal(true)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
          >
            <span>Start Trading Smarter</span>
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
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
            Join our exclusive early access program and be among the first to experience AI-powered options backtesting.
          </p>
          <SignupForm onSubmit={handleSignupSubmit} />
        </div>
      </Modal>
    </div>
  );
};

export default FeaturesSection;
  