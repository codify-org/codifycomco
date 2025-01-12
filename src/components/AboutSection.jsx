import React, { useState } from 'react';

const missionVisionDetails = {
  mission: {
    title: "Our Mission",
    description: "To empower options traders with tools that transform complexity into clarity. We're committed to providing you with institutional-grade analytics that consider every aspect of your trades.",
    bullets: [
      "Democratize access to institutional-grade options analytics",
      "Simplify complex Greek relationships for better decision making",
      "Provide real-time, actionable insights for optimal trade execution"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
      </svg>
    )
  },
  vision: {
    title: "Our Vision",
    description: "We envision a trading world where uncertainty is replaced with understanding, where risk is managed with precision, and where every trader has access to the insights they need to thrive.",
    bullets: [
      "Create the most sophisticated yet intuitive options analytics platform",
      "Lead innovation in AI-powered market analysis and prediction",
      "Build a community of successful, data-driven options traders"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    )
  }
};

const DetailModal = ({ type, isOpen, onClose }) => {
  const details = missionVisionDetails[type];
  if (!details) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative w-full max-w-2xl transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="relative bg-black/90 rounded-2xl overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 animate-gradient-x"></div>
          
          <div className="relative p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  {details.icon}
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  {details.title}
                </h3>
              </div>
              <button 
                onClick={onClose} 
                className="text-purple-200/80 hover:text-purple-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-purple-100/90 leading-relaxed">
                {details.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-200">Key Objectives:</h4>
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
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [showMissionModal, setShowMissionModal] = useState(false);
  const [showVisionModal, setShowVisionModal] = useState(false);

  return (
    <div id="about" className="relative bg-black py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-24">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/logo-transparent.png" 
              alt="Codify AI Logo" 
              className="w-32 h-32 mx-auto opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 animate-gradient">
              About Us
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-purple-100/80 mt-8">
            Built by traders, for traders - revolutionizing options analytics with precision, depth, and clarity.
          </p>
        </div>

        {/* Storytelling Paragraph with Card Effect */}
        <div className="relative mb-24 p-8 rounded-2xl bg-gradient-to-b from-purple-900/10 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <p className="text-lg text-purple-100/90 leading-relaxed">
            We understand the challenges you face in the options market. Every tick matters, every spread impacts your P&L, and each Greek component can make or break a strategy. Born from countless hours of trading and analyzing market inefficiencies, Codify AI emerged as the solution we wished we had. We've experienced the frustration of incomplete data, the anxiety of uncertain volatility exposure, and the complexity of managing multiple Greek risks. That's why we've built a platform that doesn't just show you the numbers - it reveals the stories behind them.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div 
            className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:from-purple-900/30 cursor-pointer"
            onClick={() => setShowMissionModal(true)}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                {missionVisionDetails.mission.icon}
              </div>
              <h3 className="text-2xl font-semibold text-purple-200 ml-4">Our Mission</h3>
            </div>
            <p className="text-purple-100/80 leading-relaxed">
              To empower options traders with tools that transform complexity into clarity. We're committed to providing you with institutional-grade analytics that consider every aspect of your trades - from granular bid-ask dynamics to sophisticated Greek decomposition.
            </p>
          </div>

          {/* Vision */}
          <div 
            className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:from-purple-900/30 cursor-pointer"
            onClick={() => setShowVisionModal(true)}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                {missionVisionDetails.vision.icon}
              </div>
              <h3 className="text-2xl font-semibold text-purple-200 ml-4">Our Vision</h3>
            </div>
            <p className="text-purple-100/80 leading-relaxed">
              We envision a trading world where uncertainty is replaced with understanding, where risk is managed with precision, and where every trader has access to the insights they need to thrive. Through advanced AI and deep market analysis, we're building that future.
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DetailModal 
        type="mission"
        isOpen={showMissionModal}
        onClose={() => setShowMissionModal(false)}
      />
      <DetailModal 
        type="vision"
        isOpen={showVisionModal}
        onClose={() => setShowVisionModal(false)}
      />
    </div>
  );
};

export default AboutSection; 