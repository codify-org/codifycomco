import React from 'react';
import VolatilityGraph from './VolatilityGraph';
import SpreadPayoffGraph from './SpreadPayoffGraph';
import VegaDeltaGraph from './VegaDeltaGraph';

const VolatilityCrushArticle = {
  title: "Selling Option Spreads Before AMC Payrolls",
  description: "Learn how to profit from volatility crush with a short-term play during earnings announcements.",
  readTime: 12,
  type: "greeksonearnings",
  content: `
    <article class="prose prose-invert max-w-none">
      <section class="flex justify-center mb-12">
        <div class="w-32 h-32 relative">
          <img
            src="/logo-transparent.png"
            alt="Codify Logo"
            class="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full"></div>
        </div>
      </section>

      <section class="mb-8">
        <p class="lead text-lg text-purple-200">
          For those who trade options, earnings season may be a whirl-pool. Particularly businesses like AMC Entertainment (AMC), which have historically shown significant price swings, stocks sometimes show a jump in implied volatility (IV) before earnings announcements.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-purple-100 mb-4">1. Why Sell Spreads Before Earnings?</h2>
        <div class="space-y-4">
          <div class="p-4 bg-purple-900/10 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-200 mb-2">Key Reasons:</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Higher implied volatility (IV) leading up to earnings</li>
              <li>Post-earnings volatility crush</li>
              <li>Potential cushion against limited movement</li>
            </ul>
          </div>
          <p>Selling inflated options, you want to gain from time decay (Theta) and a lower implied volatility (Vega). Should the stock not move significantly beyond your selected strikes, the approach can produce immediate gains.</p>
        </div>
        <div class="my-8">
          <VolatilityGraph />
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-purple-100 mb-4">2. Building the Strategy</h2>
        <div class="space-y-4">
          <div class="p-4 bg-purple-900/10 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-200 mb-2">Vertical Spread Options:</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Bear Call Spread (Neutral/Slightly Bearish)</li>
              <li>Bull Put Spread (Neutral/Slightly Bullish)</li>
              <li>Iron Condor (Neutral)</li>
            </ul>
          </div>
        </div>
        <div class="my-8">
          <SpreadPayoffGraph />
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-purple-100 mb-4">3. Understanding the Greeks</h2>
        <div class="space-y-4">
          <div class="p-4 bg-purple-900/10 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-200 mb-2">Key Greek Exposures:</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Vega: Negative exposure benefits from IV decrease</li>
              <li>Delta: Directional risk needs careful management</li>
              <li>Balance between Vega gains and Delta risk</li>
            </ul>
          </div>
        </div>
        <div class="my-8">
          <VegaDeltaGraph />
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-purple-100 mb-4">4. Potential Outcomes</h2>
        <div class="p-4 bg-purple-900/10 rounded-lg space-y-4">
          <div>
            <h3 class="text-lg font-semibold text-purple-200 mb-2">Little Motion / In-Line Earnings:</h3>
            <ul class="list-disc pl-6">
              <li>Volatility collapses next day</li>
              <li>Short spreads lose value quickly</li>
              <li>Profitable early exit possible</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-purple-200 mb-2">Moderate Favorable Movement:</h3>
            <ul class="list-disc pl-6">
              <li>Stock moves keeping strikes OTM</li>
              <li>Volatility crush enhances profits</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-purple-200 mb-2">Significant Adverse Move:</h3>
            <ul class="list-disc pl-6">
              <li>IV falls but intrinsic value increases</li>
              <li>Defined risk limits potential losses</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-purple-100 mb-4">5. Risk Management Guidelines</h2>
        <div class="p-6 bg-purple-900/10 rounded-lg">
          <ul class="list-disc pl-6 space-y-2">
            <li>Study historical earnings moves and volatility patterns</li>
            <li>Consider liquidity and bid-ask spreads around earnings</li>
            <li>Plan exit strategies for different scenarios</li>
            <li>Use defined-risk spreads instead of naked options</li>
            <li>Size positions appropriately within your portfolio</li>
          </ul>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-purple-100 mb-4">Key Takeaways</h2>
        <div class="p-6 bg-purple-900/10 rounded-lg">
          <ul class="list-disc pl-6 space-y-2">
            <li>Monitor Greeks, especially Delta and Vega</li>
            <li>Use defined-risk strategies</li>
            <li>Stay flexible and adapt to market conditions</li>
            <li>Understand volatility crush mechanics</li>
            <li>Protect against unexpected moves</li>
          </ul>
        </div>
      </section>
    </article>
  `
};

export default VolatilityCrushArticle; 