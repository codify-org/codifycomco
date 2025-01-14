import React from 'react';

const SecurityPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString();
  
  return `
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Security Policy</h2>
      <p>Last updated: ${lastUpdated}</p>
      
      <div>
        <h3 class="text-lg font-semibold">1. Infrastructure Security</h3>
        <p class="mt-2">Our financial data infrastructure is protected by:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Military-grade encryption for all market data</li>
          <li>Multi-region redundant data centers</li>
          <li>Real-time threat monitoring and prevention</li>
          <li>Regular penetration testing by certified firms</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">2. API Security</h3>
        <p class="mt-2">API access is secured through:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>OAuth 2.0 authentication protocol</li>
          <li>Rate limiting and request throttling</li>
          <li>IP whitelisting capabilities</li>
          <li>Automated suspicious activity detection</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">3. Data Protection</h3>
        <p class="mt-2">Financial data protection measures include:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>End-to-end encryption for all trading data</li>
          <li>Secure key management system</li>
          <li>Regular security audits and compliance checks</li>
          <li>Automated backup and disaster recovery</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">4. Compliance</h3>
        <p class="mt-2">We maintain compliance with:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Financial industry security standards</li>
          <li>Data protection regulations</li>
          <li>Market data licensing requirements</li>
          <li>Regular security certifications</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">5. Incident Response</h3>
        <p class="mt-2">Our security team provides:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>24/7 security monitoring</li>
          <li>Rapid incident response and resolution</li>
          <li>Regular security status updates</li>
          <li>Transparent security incident reporting</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">6. Contact</h3>
        <p class="mt-2">Report security concerns to security@codify.com.co</p>
      </div>
    </div>
  `;
};

export default SecurityPolicy; 