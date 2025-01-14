import React, { useEffect } from 'react';
import BidAskGraph from './articles/bid-ask/BidAskGraph';
import LiquidityGraph from './articles/bid-ask/LiquidityGraph';
import VolatilityGraph from './articles/bid-ask/VolatilityGraph';
import SpreadMetricsGraph from './articles/bid-ask/SpreadMetricsGraph';
import OrderBookGraph from './articles/bid-ask/OrderBookGraph';
import EssentialBidAskGraph from './articles/essential-functions/BidAskGraph';
import EssentialLiquidityGraph from './articles/essential-functions/LiquidityGraph';
import EssentialVolatilityGraph from './articles/essential-functions/VolatilityGraph';
import DeltaGraph from './articles/greeks/DeltaGraph';
import GammaGraph from './articles/greeks/GammaGraph';
import ThetaGraph from './articles/greeks/ThetaGraph';
import VegaGraph from './articles/greeks/VegaGraph';
import RhoGraph from './articles/greeks/RhoGraph';

const ArticleModal = ({ article, onClose }) => {
  const shareUrl = `${window.location.origin}/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`;
  
  const handleShare = async (platform) => {
    const title = `${article.title} | Codify AI Backtesting`;
    const text = article.description;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        const linkedinUrl = new URL('https://www.linkedin.com/sharing/share-offsite/');
        linkedinUrl.searchParams.append('url', shareUrl);
        linkedinUrl.searchParams.append('title', title);
        linkedinUrl.searchParams.append('summary', text);
        linkedinUrl.searchParams.append('source', 'Codify AI Backtesting');
        window.open(
          linkedinUrl.toString(),
          'LinkedInShare',
          'width=600,height=600,toolbar=0,location=0,menubar=0'
        );
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(shareUrl);
          // You might want to add a toast notification here
          console.log('URL copied to clipboard');
        } catch (err) {
          console.error('Failed to copy URL:', err);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log('ArticleModal mounted with article:', {
      title: article.title,
      description: article.description,
      readTime: article.readTime,
      contentLength: article.content?.length
    });
    if (article) {
      // Update meta tags when article is opened
      document.title = `${article.title} | Codify AI Backtesting`;
      document.querySelector('meta[name="description"]').setAttribute('content', article.content.substring(0, 160));
      document.querySelector('meta[property="og:title"]').setAttribute('content', article.title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', article.content.substring(0, 160));
      document.querySelector('meta[name="twitter:title"]').setAttribute('content', article.title);
      document.querySelector('meta[name="twitter:description"]').setAttribute('content', article.content.substring(0, 160));

      // Enhanced article structured data with FAQ
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': article.title,
        'description': article.content.substring(0, 160),
        'author': {
          '@type': 'Organization',
          'name': 'Codify AI Backtesting'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Codify AI Backtesting',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://codify.com.co/logo-1k.png'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://codify.com.co/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`
        },
        'datePublished': article.publishDate || new Date().toISOString(),
        'dateModified': article.lastModified || new Date().toISOString(),
        'hasPart': {
          '@type': 'FAQPage',
          'mainEntity': article.faqs?.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          })) || []
        }
      };

      let scriptTag = document.querySelector('#article-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'article-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(articleSchema);
    }

    // Cleanup function
    return () => {
      if (article) {
        // Restore original meta tags
        document.title = 'Codify AI Backtesting';
        document.querySelector('meta[name="description"]').setAttribute('content', 'Backtest options strategies with tick-level precision. Advanced AI-powered analysis considering liquidity risk and greeks exposures for optimal trading strategies.');
        document.querySelector('meta[property="og:title"]').setAttribute('content', 'Codify AI Backtesting');
        document.querySelector('meta[property="og:description"]').setAttribute('content', 'Backtest options strategies with tick-level precision. Advanced AI-powered analysis considering liquidity risk and greeks exposures for optimal trading strategies.');
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', 'Codify AI Backtesting');
        document.querySelector('meta[name="twitter:description"]').setAttribute('content', 'Backtest options strategies with tick-level precision. Advanced AI-powered analysis considering liquidity risk and greeks exposures for optimal trading strategies.');
        
        // Remove article schema
        const scriptTag = document.querySelector('#article-schema');
        if (scriptTag) scriptTag.remove();
      }
    };
  }, [article]);

  if (!article) return null;

  const renderShareButtons = () => (
    <div className="flex items-center space-x-4 mt-6">
      <button
        onClick={() => handleShare('twitter')}
        className="p-2 rounded-full bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
        aria-label="Share on Twitter"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="p-2 rounded-full bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </button>
      <button
        onClick={() => handleShare('copy')}
        className="p-2 rounded-full bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
        aria-label="Copy link"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );

  const renderContent = () => {
    const content = article.content;
    
    // Enhanced debug logs
    console.log('Rendering article:', {
      title: article.title,
      contentLength: content?.length,
      hasContent: !!content,
      matchesGreeks: article.title.toLowerCase().includes('essential options greeks'),
      matchesBidAsk: article.title.includes('Learning Bid-Ask Spread Metrics'),
      matchesEssential: article.title.includes('The Essential Function')
    });
    
    if (article.title.includes("Learning Bid-Ask Spread Metrics")) {
      console.log('Rendering Bid-Ask Spread article');
      const sections = content.split('\n\n');
      return (
        <article className="prose prose-lg prose-invert max-w-none">
          <section className="introduction">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(0, 3).join('\n\n') }} />
          </section>
          
          <section className="spread-metrics" aria-label="Spread Metrics Visualization">
            <SpreadMetricsGraph />
          </section>
          
          <section className="analysis">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(3, 6).join('\n\n') }} />
          </section>
          
          <section className="order-book" aria-label="Order Book Visualization">
            <OrderBookGraph />
          </section>
          
          <section className="conclusion">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(6).join('\n\n') }} />
          </section>
        </article>
      );
    }
    
    if (article.title.includes("The Essential Function")) {
      console.log('Rendering Essential Function article');
      const sections = content.split('</p>');
      return (
        <article className="prose prose-lg prose-invert max-w-none">
          <section className="introduction">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(0, 3).join('</p>') + '</p>' }} />
          </section>
          
          <section className="bid-ask-analysis" aria-label="Bid-Ask Analysis">
            <EssentialBidAskGraph />
          </section>
          
          <section className="liquidity-analysis">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(3, 5).join('</p>') + '</p>' }} />
          </section>
          
          <section className="liquidity-visualization" aria-label="Liquidity Analysis">
            <EssentialLiquidityGraph />
          </section>
          
          <section className="volatility-analysis">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(5, 8).join('</p>') + '</p>' }} />
          </section>
          
          <section className="volatility-visualization" aria-label="Volatility Analysis">
            <EssentialVolatilityGraph />
          </section>
          
          <section className="conclusion">
            <div dangerouslySetInnerHTML={{ __html: sections.slice(8).join('</p>') }} />
          </section>
        </article>
      );
    }

    if (article.title.toLowerCase().includes("essential options greeks") || article.type === "greeks") {
      console.log('Rendering Greeks article');
      return (
        <article className="prose prose-lg prose-invert max-w-none">
          {/* Logo section */}
          <section className="flex justify-center mb-12">
            <div className="w-32 h-32 relative">
              <img
                src="/logo-transparent.png"
                alt="Codify Logo"
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full"></div>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-8">
            <p className="lead text-lg text-purple-200">
              If you've ever traded options, you've likely heard people talking about "the Greeks." These Greek letters—Delta, Gamma, Theta, Vega, and Rho—quantify different types of risk and sensitivity in an options position. Understanding these Greeks can transform your trading from guesswork to a more structured and informed approach.
            </p>
          </section>

          {/* Delta section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">1. Delta: Directional Risk Measure</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Definition</h3>
                <p>
                  Delta measures how much an option's price is expected to change when the underlying asset's price moves by one unit (e.g., $1). For calls, range is 0 to +1; for puts, it is −1 to 0.
                </p>
              </div>
            </div>
            <div className="my-8">
              <DeltaGraph />
            </div>
          </section>

          {/* Gamma section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">2. Gamma: Rate of Delta Change</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Definition</h3>
                <p>
                  Gamma measures how much Delta is expected to change when the underlying price moves by one unit. High Gamma means your Delta can shift rapidly, causing potentially large P&L swings.
                </p>
              </div>
            </div>
            <div className="my-8">
              <GammaGraph />
            </div>
          </section>

          {/* Theta section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">3. Theta: Time Decay</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Definition</h3>
                <p>
                  Theta measures an option's sensitivity to the passage of time. It tells you how much value an option will lose per day, all else being equal.
                </p>
              </div>
            </div>
            <div className="my-8">
              <ThetaGraph />
            </div>
          </section>

          {/* Vega section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">4. Vega: Volatility Sensitivity</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Definition</h3>
                <p>
                  Vega measures how much an option's price will change given a 1% change in implied volatility. High Vega positions can see significant price fluctuations during volatile periods.
                </p>
              </div>
            </div>
            <div className="my-8">
              <VegaGraph />
            </div>
          </section>

          {/* Rho section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">5. Rho: Interest Rate Sensitivity</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Definition</h3>
                <p>
                  Rho measures an option's sensitivity to changes in interest rates. While often less significant for short-term trades, it becomes important for longer-dated options.
                </p>
              </div>
            </div>
            <div className="my-8">
              <RhoGraph />
            </div>
          </section>

          {/* Action Steps */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">Action Steps</h2>
            <div className="p-6 bg-purple-900/10 rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Check Your Net Delta: Sum up the Deltas to see your overall directional bias.</li>
                <li>Track Gamma Risk: Pay special attention to at-the-money or short-term options with high Gamma.</li>
                <li>Manage Theta Decay: Know whether you're net long or net short Theta.</li>
                <li>Review Vega Exposure: Keep an eye on implied volatility events.</li>
                <li>Don't Forget Rho: Consider its impact on long-dated options.</li>
              </ul>
            </div>
          </section>
        </article>
      );
    }

    console.log('Falling back to default article rendering');
    return (
      <article className="prose prose-lg prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {article.faqs && (
          <section className="faqs mt-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {article.faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="list-none cursor-pointer">
                    <h3 className="text-xl text-purple-200 font-medium inline-block">{faq.question}</h3>
                  </summary>
                  <p className="mt-3 text-purple-100/80 pl-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
    >
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal panel */}
      <div className="flex min-h-screen items-start justify-center p-4">
        <main className="relative transform overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black border border-purple-900/10 backdrop-blur-xl p-8 text-left shadow-xl transition-all sm:w-full sm:max-w-4xl mt-8 mb-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close article"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Article header */}
          <header className="border-b border-purple-900/30 pb-6 mb-6">
            <h1 id="modal-title" className="text-3xl font-semibold text-white mb-4">{article.title}</h1>
            <div className="flex items-center text-sm text-purple-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime} min read</span>
            </div>
          </header>

          {/* Article content */}
          {renderContent()}

          {/* Footer with share options */}
          <footer className="mt-8 pt-6 border-t border-purple-900/30">
            <div className="flex items-center justify-between">
              <div className="text-sm text-purple-300">
                Share this article:
              </div>
              <nav className="flex space-x-4" aria-label="Share article">
                <button
                  onClick={() => handleShare('twitter')}
                  className="text-sm text-purple-300 hover:text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="text-sm text-purple-300 hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="text-sm text-purple-300 hover:text-white transition-colors"
                  aria-label="Copy link"
                >
                  Copy Link
                </button>
              </nav>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ArticleModal; 