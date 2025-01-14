import React from 'react';

const ThetaGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Theta Decay Over Time</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Y-axis Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>0.00</span>
            <span>-0.02</span>
            <span>-0.04</span>
            <span>-0.06</span>
            <span>-0.08</span>
          </div>

          {/* Main Chart Area */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Theta curves */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* ATM Option */}
              <path
                d="M0,20 C30,25 60,40 100,100"
                className="stroke-purple-500"
                fill="none"
                strokeWidth="2"
              />
              
              {/* ITM Option */}
              <path
                d="M0,40 C30,45 60,60 100,100"
                className="stroke-green-500"
                fill="none"
                strokeWidth="2"
                strokeDasharray="4"
              />
              
              {/* OTM Option */}
              <path
                d="M0,10 C30,15 60,30 100,100"
                className="stroke-red-500"
                fill="none"
                strokeWidth="2"
                strokeDasharray="4"
              />
            </svg>

            {/* Time markers */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>60 Days</span>
              <span>45 Days</span>
              <span>30 Days</span>
              <span>15 Days</span>
              <span>Expiry</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-0.5 bg-purple-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">ATM</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 border-t-2 border-dashed border-green-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">ITM</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 border-t-2 border-dashed border-red-500 mr-2"></div>
            <span className="text-xs text-purple-300/70">OTM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ThetaGraph; 