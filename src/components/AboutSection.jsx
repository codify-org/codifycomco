import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className="relative bg-black py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
              About Us
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-purple-100/80">
            Built by traders, for traders - revolutionizing options analytics with precision, depth, and clarity.
          </p>
        </div>

        {/* Storytelling Paragraph */}
        <div className="text-center mb-16">
          <p className="max-w-3xl mx-auto text-lg text-purple-100/80 leading-relaxed">
            We understand the challenges you face in the options market. Every tick matters, every spread impacts your P&L, and each Greek component can make or break a strategy. Born from countless hours of trading and analyzing market inefficiencies, Codify AI emerged as the solution we wished we had. We've experienced the frustration of incomplete data, the anxiety of uncertain volatility exposure, and the complexity of managing multiple Greek risks. That's why we've built a platform that doesn't just show you the numbers - it reveals the stories behind them.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-200">Our Mission</h3>
            <p className="text-purple-100/80 leading-relaxed">
              To empower options traders with tools that transform complexity into clarity. We're committed to providing you with institutional-grade analytics that consider every aspect of your trades - from granular bid-ask dynamics to sophisticated Greek decomposition. Because we believe that better insights lead to better trading decisions.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-200">Our Vision</h3>
            <p className="text-purple-100/80 leading-relaxed">
              We envision a trading world where uncertainty is replaced with understanding, where risk is managed with precision, and where every trader has access to the insights they need to thrive. Through advanced AI and deep market analysis, we're building that future - one strategy, one trade, one breakthrough at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 