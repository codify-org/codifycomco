import React from 'react';

const LiquidityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Intraday Liquidity Pattern</h4>
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

            {/* Volume bars */}
            <div className="absolute inset-0 flex items-end justify-between">
              {[0.3, 0.8, 0.5, 0.9, 0.7, 0.4, 0.6].map((height, i) => (
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

            {/* Time markers */}
            <div className="absolute -bottom-8 inset-x-0 flex justify-between text-xs text-purple-300/70">
              <span>9:30</span>
              <span>11:00</span>
              <span>12:30</span>
              <span>14:00</span>
              <span>15:30</span>
              <span>16:00</span>
              <span>16:30</span>
            </div>
          </div>
        </div>

        {/* X-axis label */}
        <div className="text-center text-purple-300/70 text-sm mt-12">
          Trading Hours (EST)
        </div>
      </div>
    </div>
  </div>
);

export default LiquidityGraph; 