import React from 'react';

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

export default VolatilityGraph; 