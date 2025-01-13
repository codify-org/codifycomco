import React from 'react';

const OrderBookGraph = () => (
  <div className="relative h-80 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Order Book Depth Visualization</h4>
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative h-48">
          {/* Volume Scale */}
          <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-purple-300/70">
            <span>High</span>
            <span>Medium</span>
            <span>Low</span>
          </div>

          {/* Main Chart */}
          <div className="relative ml-20 h-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-t border-purple-900/20 w-full" />
              ))}
            </div>

            {/* Order Book Visualization */}
            <div className="absolute inset-0 flex items-center">
              {/* Bid Side */}
              <div className="flex-1 h-full flex flex-col-reverse justify-start space-y-reverse space-y-1">
                {[0.8, 0.6, 0.4, 0.3, 0.2].map((height, i) => (
                  <div
                    key={`bid-${i}`}
                    className="w-full bg-gradient-to-r from-red-500/30 to-transparent rounded-l"
                    style={{ height: `${height * 20}%` }}
                  />
                ))}
              </div>
              
              {/* Center Line */}
              <div className="w-0.5 h-full bg-purple-500/30" />
              
              {/* Ask Side */}
              <div className="flex-1 h-full flex flex-col-reverse justify-start space-y-reverse space-y-1">
                {[0.7, 0.5, 0.3, 0.2, 0.1].map((height, i) => (
                  <div
                    key={`ask-${i}`}
                    className="w-full bg-gradient-to-l from-green-500/30 to-transparent rounded-r"
                    style={{ height: `${height * 20}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Price Labels */}
            <div className="absolute -bottom-16 inset-x-0 flex justify-between">
              <div className="flex-1 text-left">
                <div className="text-xs text-red-400">Bid Side</div>
                <div className="text-xs text-red-400/50 mt-1">Depth</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs text-purple-300">Current Price</div>
                <div className="text-xs text-purple-300/50 mt-1">$150.00</div>
              </div>
              <div className="flex-1 text-right">
                <div className="text-xs text-green-400">Ask Side</div>
                <div className="text-xs text-green-400/50 mt-1">Depth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mt-20">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500/70 mr-2"></div>
            <span className="text-xs text-purple-300/70">Bid Orders</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500/70 mr-2"></div>
            <span className="text-xs text-purple-300/70">Ask Orders</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderBookGraph; 