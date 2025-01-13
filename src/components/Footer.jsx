import React from 'react';

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
  return (
    <footer className="relative bg-black">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 backdrop-blur-sm p-6 rounded-xl bg-purple-900/5 border border-purple-900/10">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Codify AI LLC</h3>
            <address className="not-italic">
              1021 E Lincolnway, Suite #6656<br />
              Cheyenne, Wyoming 82001<br />
              USA
            </address>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm p-6 rounded-xl bg-purple-900/5 border border-purple-900/10">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="hover:text-purple-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-purple-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-purple-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="backdrop-blur-sm p-6 rounded-xl bg-purple-900/5 border border-purple-900/10">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://x.com/CodifyBacktesting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                >
                  <CodifyBacktestingIcon />
                  <span>CodifyBacktesting</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/codifycapital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Memorable Phrase with enhanced styling */}
        <div className="mt-16 pt-12 pb-8 border-t border-purple-900/50 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
          <p className="relative font-['Great_Vibes'] text-2xl md:text-02xl text-white/90 leading-relaxed px-4 py-2">
            "In Every Market Moment Lies an Opportunity."
          </p>
          <p className="relative font-['Great_Vibes'] text-lg text-purple-300/80 mt-5 mb-12">- The Codify Ai team -</p>
          
          {/* Logo at bottom */}
          <div className="flex justify-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group"
            >
              <img 
                src="/logo-transparent.png" 
                alt="Codify AI Logo" 
                className="w-16 h-16 opacity-60 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 