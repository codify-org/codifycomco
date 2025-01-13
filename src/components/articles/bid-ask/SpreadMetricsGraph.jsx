import React from 'react';

const SpreadMetricsGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Spread Metrics Over Time</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>Wide</span>
            <span>Medium</span>
            <span>Tight</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Spread curve */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="spreadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area under the curve */}
              <path
                d="M0,50 C10,50 20,60 30,70 S40,80 50,85 S60,40 70,30 S80,20 100,30 V100 H0 Z"
                fill="url(#spreadGradient)"
              />
              {/* Main curve */}
              <path
                d="M0,50 C10,50 20,60 30,70 S40,80 50,85 S60,40 70,30 S80,20 100,30"
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
              {/* Key points */}
              <circle cx="30" cy="70" r="3" className="fill-purple-500/70" />
              <circle cx="50" cy="85" r="4" className="fill-red-500" />
              <circle cx="70" cy="30" r="3" className="fill-purple-500/70" />
            </svg>

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between">
              <div className="flex-1 text-left">
                <div className="text-xs text-purple-300/70">Pre-Earnings</div>
                <div className="text-xs text-purple-300/50 mt-1">Building Uncertainty</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs text-red-400">Announcement</div>
                <div className="text-xs text-red-400/50 mt-1">Peak Spread</div>
              </div>
              <div className="flex-1 text-right">
                <div className="text-xs text-purple-300/70">Post-Earnings</div>
                <div className="text-xs text-purple-300/50 mt-1">Stabilization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500/70 mr-2"></div>
            <span className="text-xs text-purple-300/70">Spread Width</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Event Point</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpreadMetricsGraph; 