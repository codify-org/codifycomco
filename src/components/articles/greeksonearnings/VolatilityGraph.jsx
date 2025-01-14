import React from 'react';

const VolatilityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Implied Volatility Around Earnings</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High IV</span>
            <span>Medium IV</span>
            <span>Low IV</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* IV curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Pre-earnings IV buildup */}
              <path
                d="M0,50 C10,45 20,35 40,20 S60,10 80,50 S90,60 100,55"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* Earnings announcement point */}
              <circle cx="80" cy="50" r="3" className="fill-pink-500" />

              {/* Vertical line at earnings */}
              <line 
                x1="80" 
                y1="0" 
                x2="80" 
                y2="100" 
                className="stroke-pink-500/20" 
                strokeWidth="1" 
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

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>-5 Days</span>
              <span>-3 Days</span>
              <span>-1 Day</span>
              <span>Earnings</span>
              <span>+1 Day</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Implied Volatility</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">Earnings Event</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VolatilityGraph; 