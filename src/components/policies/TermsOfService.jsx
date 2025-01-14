import React from 'react';

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString();
  
  return `
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Terms of Service</h2>
      <p>Last updated: ${lastUpdated}</p>
      
      <div>
        <h3 class="text-lg font-semibold">1. Service Description</h3>
        <p class="mt-2">Codify AI provides advanced options market analysis, backtesting tools, and financial data services. Our platform is designed for professional traders, financial institutions, and sophisticated investors.</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold">2. Data and Analysis Disclaimer</h3>
        <p class="mt-2">While we strive for accuracy in our financial data and analysis:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Historical performance does not guarantee future results</li>
          <li>Backtesting results are simulated and may not reflect actual market conditions</li>
          <li>Options trading involves substantial risk of loss</li>
          <li>Users should verify all data and conduct their own due diligence</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">3. API Usage and Rate Limits</h3>
        <p class="mt-2">API access is subject to rate limits and fair usage policies. Users must not:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Share or redistribute API credentials</li>
          <li>Exceed allocated API request quotas</li>
          <li>Scrape or bulk download market data</li>
          <li>Reverse engineer our analytics algorithms</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">4. Compliance Requirements</h3>
        <p class="mt-2">Users must comply with all applicable financial regulations and:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Maintain accurate trading records</li>
          <li>Report suspicious market activity</li>
          <li>Respect market data licensing agreements</li>
          <li>Follow proper risk management practices</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">5. Service Modifications</h3>
        <p class="mt-2">We reserve the right to modify our services, including:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Updating pricing and service tiers</li>
          <li>Modifying API endpoints and features</li>
          <li>Adjusting data retention policies</li>
          <li>Changing supported financial instruments</li>
        </ul>
      </div>
    </div>
  `;
};

export default TermsOfService; 