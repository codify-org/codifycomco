import React from 'react';

const RhoGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Rho vs. Strike Price</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>+0.10</span>
            <span>+0.05</span>
            <span>0.00</span>
            <span>-0.05</span>
            <span>-0.10</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Rho curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Long-term Call */}
              <path
                d="M0,80 C30,70 45,30 50,20 S70,0 100,0"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Short-term Call */}
              <path
                d="M0,60 C30,55 45,45 50,40 S70,30 100,30"
                className="stroke-purple-300"
                fill="none"
                strokeWidth="2"
                strokeDasharray="4"
              />

              {/* Center line */}
              <line 
                x1="50" 
                y1="0" 
                x2="50" 
                y2="100" 
                className="stroke-purple-500/40" 
                strokeWidth="1" 
                strokeDasharray="4"
              />

              {/* Key points */}
              <circle cx="50" cy="20" r="3" className="fill-purple-500" />
              <circle cx="50" cy="40" r="3" className="fill-purple-300" />
            </svg>

            {/* Strike price markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>Deep ITM</span>
              <span>ITM</span>
              <span>ATM</span>
              <span>OTM</span>
              <span>Deep OTM</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Long-term</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 border-t-2 border-dashed border-purple-300 mr-2"></div>
            <span className="text-xs text-purple-300/70">Short-term</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RhoGraph; 