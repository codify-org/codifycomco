import React from 'react';

const BidAskGraph = () => (
  <div className="relative h-64 bg-gradient-to-b from-purple-900/10 to-black/30 rounded-lg p-6 mb-8 border border-purple-900/20">
    <h4 className="text-purple-100 font-semibold mb-4">Bid-Ask Spread Visualization</h4>
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="relative h-40">
          {/* Price Scale */}
          <div className="absolute left-0 inset-y-0 w-12 flex flex-col justify-between text-xs text-purple-300/70">
            <span>$11.00</span>
            <span>$10.75</span>
            <span>$10.50</span>
            <span>$10.25</span>
            <span>$10.00</span>
          </div>
          {/* Main Visualization */}
          <div className="absolute inset-x-16 inset-y-0">
            {/* Center line */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/50 to-purple-500/20"></div>
            {/* Bid Side */}
            <div className="absolute left-1/4 -translate-x-1/2 top-0 bottom-0 flex flex-col items-center justify-center">
              <div className="w-2 h-32 bg-gradient-to-t from-red-500/10 to-red-500/30 rounded-full"></div>
              <div className="w-24 h-16 flex flex-col items-center">
                <span className="text-red-400 font-semibold mt-2">Bid</span>
                <span className="text-sm text-red-400/70">$10.50</span>
              </div>
            </div>
            {/* Ask Side */}
            <div className="absolute right-1/4 translate-x-1/2 top-0 bottom-0 flex flex-col items-center justify-center">
              <div className="w-2 h-32 bg-gradient-to-t from-green-500/10 to-green-500/30 rounded-full"></div>
              <div className="w-24 h-16 flex flex-col items-center">
                <span className="text-green-400 font-semibold mt-2">Ask</span>
                <span className="text-sm text-green-400/70">$10.80</span>
              </div>
            </div>
            {/* Spread Indicator */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="text-purple-300/90 text-sm font-medium bg-purple-900/30 px-3 py-1 rounded-full">
                Spread: $0.30
              </div>
              <div className="text-purple-300/50 text-xs mt-2">2.8% of Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BidAskGraph; 