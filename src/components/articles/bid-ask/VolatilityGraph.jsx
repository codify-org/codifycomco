import React from 'react';

const VolatilityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Volatility Analysis</h4>
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

            {/* Volatility visualization */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Background gradient */}
              <defs>
                <linearGradient id="volatilityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Volatility bands */}
              <path
                d="M0,30 C10,40 30,10 50,50 S70,20 100,40"
                className="stroke-purple-500/30"
                fill="none"
                strokeWidth="20"
              />
              
              {/* Main volatility line */}
              <path
                d="M0,30 C10,40 30,10 50,50 S70,20 100,40"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
              />

              {/* Volatility spikes */}
              {[20, 40, 60, 80].map((x, i) => (
                <line
                  key={i}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="100"
                  className="stroke-purple-500/10"
                  strokeWidth="2"
                />
              ))}

              {/* Key points */}
              <circle cx="30" cy="10" r="3" className="fill-purple-500" />
              <circle cx="50" cy="50" r="3" className="fill-purple-500" />
              <circle cx="70" cy="20" r="3" className="fill-purple-500" />
            </svg>

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>Pre-Market</span>
              <span>Market Hours</span>
              <span>After Hours</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-6 h-3 bg-purple-500/30 mr-2"></div>
            <span className="text-xs text-purple-300/70">Volatility Band</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Key Events</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VolatilityGraph; 