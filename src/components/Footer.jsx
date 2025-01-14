import React from 'react';
import { usePolicyModal } from './policies/PolicyModal';

const CodifyBacktestingIcon = () => (
  <svg className="w-5 h-5 group-hover:text-purple-100" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 group-hover:text-purple-100" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  const { openModal } = usePolicyModal();

  return (
    <footer className="relative bg-black" role="contentinfo">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 backdrop-blur-sm p-6 rounded-xl bg-purple-900/5 border border-purple-900/10">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Codify AI LLC</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-purple-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>1021 E Lincolnway, Suite #6656</p>
                  <p>Cheyenne, Wyoming 82001</p>
                  <p>USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@codify.com.co" className="hover:text-purple-100 transition-colors">
                  support@codify.com.co
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm p-6 rounded-xl bg-purple-900/5 border border-purple-900/10">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#features" 
                    className="hover:text-purple-100 transition-colors flex items-center space-x-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="hover:text-purple-100 transition-colors flex items-center space-x-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="hover:text-purple-100 transition-colors flex items-center space-x-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/docs" 
                    className="hover:text-purple-100 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/blog" 
                    className="hover:text-purple-100 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="backdrop-blur-sm p-6 rounded-xl bg-purple-900/5 border border-purple-900/10">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Connect</h3>
            <nav aria-label="Social media links">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://x.com/AiBacktesting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                    aria-label="Follow us on Twitter"
                  >
                    <CodifyBacktestingIcon />
                    <span>AiBacktesting</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/codifycapital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/codify-aibacktesting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                    aria-label="Follow us on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Memorable Phrase with enhanced styling */}
        <div className="mt-16 pt-12 pb-8 border-t border-purple-900/50 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
          <blockquote className="relative">
            <p className="font-['Precious'] text-2xl md:text-3xl text-white/90 leading-relaxed px-4 py-2">
              "In Every Market Moment Lies an Opportunity."
            </p>
            <footer className="font-['Precious'] text-xl text-purple-300/80 mt-5 mb-12">
              - The Xodify Ai Team -
            </footer>
          </blockquote>
          
          {/* Logo at bottom */}
          <div className="flex justify-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group"
              aria-label="Back to top"
            >
              <img 
                src="/logo-transparent.png" 
                alt="Codify AI Logo" 
                className="w-16 h-16 opacity-60 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300"
                loading="lazy"
                width="64"
                height="64"
              />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-purple-900/30">
          <nav className="flex flex-wrap justify-center gap-8 text-sm text-purple-300/60" aria-label="Legal">
            <button 
              onClick={() => {
                console.log('Opening Privacy Policy');
                openModal({ 
                  title: 'Privacy Policy',
                  type: 'privacy'
                });
              }}
              className="hover:text-purple-100 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => {
                console.log('Opening Terms of Service');
                openModal({ 
                  title: 'Terms of Service',
                  type: 'terms'
                });
              }}
              className="hover:text-purple-100 transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => {
                console.log('Opening Security Policy');
                openModal({ 
                  title: 'Security',
                  type: 'security'
                });
              }}
              className="hover:text-purple-100 transition-colors"
            >
              Security
            </button>
          </nav>
          <p className="mt-8 text-center text-sm text-purple-300/60">
            © {new Date().getFullYear()} Codify AI LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 