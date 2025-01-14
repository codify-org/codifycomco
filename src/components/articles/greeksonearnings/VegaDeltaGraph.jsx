import React from 'react';

const VegaDeltaGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Vega vs Delta Risk Profile</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High Risk</span>
            <span>Medium Risk</span>
            <span>Low Risk</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Risk curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Vega Risk */}
              <path
                d="M0,80 Q25,70 50,20 T100,80"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Delta Risk */}
              <path
                d="M0,20 Q25,30 50,80 T100,20"
                className="stroke-pink-500"
                fill="none"
                strokeWidth="2"
              />

              {/* Optimal Trading Zone */}
              <path
                d="M30,50 L70,50"
                className="stroke-green-500"
                strokeWidth="4"
                strokeLinecap="round"
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

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>Pre-Earnings</span>
              <span>Setup Entry</span>
              <span>Earnings</span>
              <span>Exit Window</span>
              <span>Post-Earnings</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Vega Risk</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-pink-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Delta Risk</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-green-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Optimal Zone</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VegaDeltaGraph; 