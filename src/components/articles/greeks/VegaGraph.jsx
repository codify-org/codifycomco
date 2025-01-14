import React from 'react';

const VegaGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Vega vs. Strike Price</h4>
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

            {/* Vega curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* High IV Environment */}
              <path
                d="M0,80 Q25,70 45,20 T50,0 T55,20 T75,70 T100,80"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Low IV Environment */}
              <path
                d="M0,90 Q25,85 45,60 T50,50 T55,60 T75,85 T100,90"
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
              <circle cx="50" cy="0" r="3" className="fill-purple-500" />
              <circle cx="50" cy="50" r="3" className="fill-purple-300" />
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
            <span className="text-xs text-purple-300/70">High IV</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 border-t-2 border-dashed border-purple-300 mr-2"></div>
            <span className="text-xs text-purple-300/70">Low IV</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VegaGraph; 