import React from 'react';

const SpreadPayoffGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Option Spread Payoff Diagrams</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>+Max Profit</span>
            <span>Break Even</span>
            <span>-Max Loss</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Payoff curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Bear Call Spread */}
              <path
                d="M0,20 L40,20 L60,80 L100,80"
                className="stroke-red-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Bull Put Spread */}
              <path
                d="M0,80 L40,80 L60,20 L100,20"
                className="stroke-green-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Iron Condor */}
              <path
                d="M0,50 L30,50 L40,20 L60,20 L70,50 L100,50"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
                strokeDasharray="4"
              />

              {/* Center line */}
              <line 
                x1="0" 
                y1="50" 
                x2="100" 
                y2="50" 
                className="stroke-purple-500/20" 
                strokeWidth="1" 
                strokeDasharray="4"
              />
            </svg>

            {/* Price markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>Lower Strike</span>
              <span>Break Even</span>
              <span>Current Price</span>
              <span>Break Even</span>
              <span>Upper Strike</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-red-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Bear Call Spread</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-green-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Bull Put Spread</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Iron Condor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpreadPayoffGraph; 