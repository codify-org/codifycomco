import React from 'react';

const LiquidityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Market Liquidity Analysis</h4>
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

            {/* Liquidity visualization */}
            <div className="absolute inset-0">
              {/* Volume bars */}
              <div className="h-full flex items-end justify-between">
                {[0.3, 0.5, 0.8, 0.6, 0.9, 0.7, 0.4].map((height, i) => (
                  <div
                    key={i}
                    className="w-8 bg-gradient-to-t from-purple-500/20 to-purple-500/40 rounded-t"
                    style={{ height: `${height * 100}%` }}
                  >
                    <div 
                      className="w-full h-1 bg-purple-500"
                      style={{ opacity: height }}
                    />
                  </div>
                ))}
              </div>

              {/* Trend line */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path
                  d="M0,70 C20,60 40,20 60,30 S80,50 100,40"
                  className="stroke-purple-500"
                  fill="none"
                  strokeWidth="2"
                  strokeDasharray="4"
                />
              </svg>
            </div>

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>9:30 AM</span>
              <span>12:00 PM</span>
              <span>4:00 PM</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-8 bg-gradient-to-t from-purple-500/20 to-purple-500/40 mr-2"></div>
            <span className="text-xs text-purple-300/70">Volume</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-0 border-t-2 border-dashed border-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Trend</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LiquidityGraph; 