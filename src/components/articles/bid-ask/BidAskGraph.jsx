import React from 'react';

const BidAskGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Bid-Ask Spread Analysis</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High</span>
            <span>Medium</span>
            <span>Low</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Spread visualization */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="bidAskGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area under the curve */}
              <path
                d="M0,80 C20,80 30,20 50,20 S70,40 100,30"
                fill="url(#bidAskGradient)"
              />
              {/* Main curve */}
              <path
                d="M0,80 C20,80 30,20 50,20 S70,40 100,30"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="3"
              />
              {/* Key points */}
              <circle cx="50" cy="20" r="4" className="fill-purple-500" />
              <circle cx="25" cy="60" r="3" className="fill-purple-500/70" />
              <circle cx="75" cy="35" r="3" className="fill-purple-500/70" />
            </svg>

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>Opening</span>
              <span>Mid-Session</span>
              <span>Closing</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Spread Width</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500/70 mr-2"></div>
            <span className="text-xs text-purple-300/70">Key Points</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BidAskGraph; 