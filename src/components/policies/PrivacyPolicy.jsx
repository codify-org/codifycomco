import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString();
  
  return `
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Privacy Policy</h2>
      <p>Last updated: ${lastUpdated}</p>
      
      <div>
        <h3 class="text-lg font-semibold">1. Information We Collect</h3>
        <p class="mt-2">We collect the following types of information to provide and improve our financial services:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Financial information (trading preferences, investment goals, risk tolerance)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Trading activity and portfolio information</li>
          <li>Authentication credentials and security preferences</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">2. How We Use Your Information</h3>
        <p class="mt-2">Your information helps us provide and improve our services:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Provide personalized financial analysis and recommendations</li>
          <li>Process and execute your trading instructions</li>
          <li>Maintain and improve platform security</li>
          <li>Comply with financial regulations and reporting requirements</li>
          <li>Send important updates and service notifications</li>
          <li>Analyze usage patterns to improve our platform</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">3. Data Sharing and Third Parties</h3>
        <p class="mt-2">We may share your information with:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Financial service providers necessary for executing trades</li>
          <li>Regulatory authorities as required by law</li>
          <li>Third-party service providers under strict confidentiality agreements</li>
          <li>Business partners with your explicit consent</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">4. Data Security</h3>
        <p class="mt-2">We employ industry-leading security measures including:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>End-to-end encryption for data transmission</li>
          <li>Multi-factor authentication</li>
          <li>Regular security audits and penetration testing</li>
          <li>Strict access controls and monitoring</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">5. Your Rights</h3>
        <p class="mt-2">You have the right to:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Access your personal data</li>
          <li>Request data correction or deletion</li>
          <li>Opt-out of marketing communications</li>
          <li>Data portability</li>
          <li>Lodge a complaint with supervisory authorities</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">6. Contact Information</h3>
        <p class="mt-2">For privacy-related inquiries, data requests, or to exercise your rights under applicable data protection laws, you can reach our Data Protection and Compliance team through the following channels:</p>
        <div class="mt-4 space-y-3">
          <div>
            <strong class="text-purple-200">Primary Contact:</strong>
            <p class="mt-1">Email: privacy@codify.com.co</p>
          </div>
          <div>
            <strong class="text-purple-200">Compliance Office:</strong>
            <p class="mt-1">Codify AI LLC</p>
            <p>1021 E Lincolnway, Suite #6656</p>
            <p>Cheyenne, Wyoming 82001</p>
            <p>United States</p>
          </div>
          <div>
            <strong class="text-purple-200">Response Time:</strong>
            <p class="mt-1">We strive to respond to all privacy-related inquiries within 48 business hours.</p>
          </div>
          <div class="mt-4">
            <p class="text-sm text-purple-200/80">For general inquiries or technical support, please use our main support channel: support@codify.com.co</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default PrivacyPolicy; 