import React from 'react';

const BidAskGraph = () => (
  <div className="relative h-64 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Bid-Ask Spread Visualization</h4>
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="relative h-40">
          {/* Price Scale */}
          <div className="absolute left-0 inset-y-0 w-12 flex flex-col justify-between text-xs text-purple-300/70">
            <span>$11.00</span>
            <span>$10.75</span>
            <span>$10.50</span>
            <span>$10.25</span>
            <span>$10.00</span>
          </div>
          {/* Main Visualization */}
          <div className="absolute inset-x-16 inset-y-0">
            {/* Center line */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/50 to-purple-500/20"></div>
            {/* Bid Side */}
            <div className="absolute left-1/4 -translate-x-1/2 top-0 bottom-0 flex flex-col items-center justify-center">
              <div className="w-2 h-32 bg-gradient-to-t from-red-500/10 to-red-500/30 rounded-full"></div>
              <div className="w-24 h-16 flex flex-col items-center">
                <span className="text-red-400 font-semibold mt-2">Bid</span>
                <span className="text-sm text-red-400/70">$10.50</span>
              </div>
            </div>
            {/* Ask Side */}
            <div className="absolute right-1/4 translate-x-1/2 top-0 bottom-0 flex flex-col items-center justify-center">
              <div className="w-2 h-32 bg-gradient-to-t from-green-500/10 to-green-500/30 rounded-full"></div>
              <div className="w-24 h-16 flex flex-col items-center">
                <span className="text-green-400 font-semibold mt-2">Ask</span>
                <span className="text-sm text-green-400/70">$10.80</span>
              </div>
            </div>
            {/* Spread Indicator */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="text-purple-300/90 text-sm font-medium bg-purple-900/30 px-3 py-1 rounded-full">
                Spread: $0.30
              </div>
              <div className="text-purple-300/50 text-xs mt-2">2.8% of Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LiquidityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Intraday Liquidity Pattern</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Volume Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High Vol</span>
            <span>Med Vol</span>
            <span>Low Vol</span>
          </div>

          {/* Main Chart */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Bars Container */}
            <div className="absolute inset-x-0 bottom-0 top-4 flex items-end justify-between space-x-1">
              {[
                { height: 0.8, time: '9:30' },
                { height: 0.6, time: '11:00' },
                { height: 0.4, time: '12:30' },
                { height: 0.5, time: '14:00' },
                { height: 0.7, time: '15:30' },
                { height: 0.9, time: '16:00' }
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500/20 via-purple-400/30 to-purple-300/40 rounded-t-lg transition-all duration-300 hover:from-purple-500/30 hover:via-purple-400/40 hover:to-purple-300/50"
                    style={{ height: `${bar.height * 100}%` }}
                  />
                  <div className="absolute bottom-0 translate-y-6 text-xs text-purple-300/70">
                    {bar.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* X-axis label */}
        <div className="text-center text-purple-300/70 text-sm mt-12">
          Trading Hours (EST)
        </div>
      </div>
    </div>
  </div>
);

const VolatilityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Volatility Around Earnings</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High Vol</span>
            <span>Med Vol</span>
            <span>Low Vol</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Volatility curve */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="volatilityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area under the curve */}
              <path
                d="M0,75 C15,75 30,60 45,40 S50,30 50,30 S51,85 55,85 S70,85 100,80 V100 H0 Z"
                fill="url(#volatilityGradient)"
              />
              {/* Main curve */}
              <path
                d="M0,75 C15,75 30,60 45,40 S50,30 50,30 S51,85 55,85 S70,85 100,80"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="3"
              />
              {/* Earnings announcement line */}
              <line 
                x1="50" 
                y1="0" 
                x2="50" 
                y2="100" 
                className="stroke-red-500/40" 
                strokeWidth="2" 
                strokeDasharray="4"
              />
              {/* Points */}
              <circle cx="45" cy="40" r="3" className="fill-purple-500/70" />
              <circle cx="50" cy="30" r="4" className="fill-red-500" />
              <circle cx="55" cy="85" r="3" className="fill-purple-500/70" />
              <circle cx="80" cy="82" r="3" className="fill-purple-500/70" />
            </svg>

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between">
              <div className="flex-1 text-left">
                <div className="text-xs text-purple-300/70">Pre-Earnings</div>
                <div className="text-xs text-purple-300/50 mt-1">-2 Days</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs text-red-400">Announcement</div>
                <div className="text-xs text-red-400/50 mt-1">Event</div>
              </div>
              <div className="flex-1 text-right">
                <div className="text-xs text-purple-300/70">Post-Earnings</div>
                <div className="text-xs text-purple-300/50 mt-1">+2 Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500/70 mr-2"></div>
            <span className="text-xs text-purple-300/70">Volatility Level</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Earnings Event</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  const formatContent = (content) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      // Check if it's a heading
      if (section.match(/^(Why|What|The|Final|Real-World|Techniques)/i)) {
        return (
          <h3 key={index} className="text-xl font-semibold text-purple-100 mt-8 mb-4">
            {section}
          </h3>
        );
      }
      // Check if it's a numbered point or lettered point
      if (section.match(/^\d+\.|^[A-Z]\./)) {
        return (
          <div key={index} className="ml-6 mb-4 bg-purple-900/5 p-4 rounded-lg border border-purple-900/10">
            <p className="text-gray-300">{section}</p>
          </div>
        );
      }
      // Regular paragraph
      return (
        <p key={index} className="text-gray-300 mb-4 leading-relaxed">
          {section}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      {/* Modal panel */}
      <div className="flex min-h-screen items-start justify-center p-4">
        <div className="relative transform overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black border border-purple-900/10 backdrop-blur-xl p-8 text-left shadow-xl transition-all sm:w-full sm:max-w-4xl mt-8 mb-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Article header */}
          <div className="border-b border-purple-900/30 pb-6 mb-6">
            <h2 className="text-3xl font-semibold text-white mb-4">{article.title}</h2>
            <div className="flex items-center text-sm text-purple-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime} min read</span>
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Insert graphs for Bid-Ask articles */}
            {article.title.includes("Bid-Ask") && (
              <>
                {formatContent(article.content.split('\n\n').slice(0, 3).join('\n\n'))}
                <BidAskGraph />
                {formatContent(article.content.split('\n\n').slice(3, 5).join('\n\n'))}
                <LiquidityGraph />
                {formatContent(article.content.split('\n\n').slice(5, 8).join('\n\n'))}
                <VolatilityGraph />
                {formatContent(article.content.split('\n\n').slice(8).join('\n\n'))}
              </>
            )}
            {!article.title.includes("Bid-Ask") && formatContent(article.content)}
          </div>

          {/* Footer with share options */}
          <div className="mt-8 pt-6 border-t border-purple-900/30">
            <div className="flex items-center justify-between">
              <div className="text-sm text-purple-300">
                Share this article:
              </div>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Email'].map((platform) => (
                  <button
                    key={platform}
                    className="text-sm text-purple-300 hover:text-white transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal; 