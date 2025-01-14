import React from 'react';

const DeltaGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Delta vs. Strike Price</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>+1.0</span>
            <span>+0.5</span>
            <span>0</span>
            <span>-0.5</span>
            <span>-1.0</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Delta curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Call Option Delta */}
              <path
                d="M0,100 C30,90 45,50 50,50 S70,10 100,0"
                className="stroke-green-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Put Option Delta */}
              <path
                d="M0,0 C30,10 45,50 50,50 S70,90 100,100"
                className="stroke-red-500"
                fill="none"
                strokeWidth="2"
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
            </svg>

            {/* Strike price markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>-20%</span>
              <span>-10%</span>
              <span>ATM</span>
              <span>+10%</span>
              <span>+20%</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-green-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Call Delta</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-red-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Put Delta</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DeltaGraph; 