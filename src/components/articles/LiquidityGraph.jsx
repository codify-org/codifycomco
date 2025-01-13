import React from 'react';

const LiquidityGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Intraday Liquidity Pattern</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Volume Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High Vol</span>
            <span>Med Vol</span>
            <span>Low Vol</span>
          </div>

          {/* Main Chart */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Bars Container */}
            <div className="absolute inset-x-0 bottom-0 top-4 flex items-end justify-between space-x-1">
              {[
                { height: 0.8, time: '9:30' },
                { height: 0.6, time: '11:00' },
                { height: 0.4, time: '12:30' },
                { height: 0.5, time: '14:00' },
                { height: 0.7, time: '15:30' },
                { height: 0.9, time: '16:00' }
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500/20 via-purple-400/30 to-purple-300/40 rounded-t-lg transition-all duration-300 hover:from-purple-500/30 hover:via-purple-400/40 hover:to-purple-300/50"
                    style={{ height: `${bar.height * 100}%` }}
                  />
                  <div className="absolute bottom-0 translate-y-6 text-xs text-purple-300/70">
                    {bar.time}
                  </div>
                </div>
              ))}
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