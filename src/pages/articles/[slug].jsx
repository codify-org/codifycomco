import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useArticles } from '../../components/articles/ArticlesContext';
import BidAskGraph from '../../components/articles/bid-ask/BidAskGraph';
import LiquidityGraph from '../../components/articles/bid-ask/LiquidityGraph';
import VolatilityGraph from '../../components/articles/bid-ask/VolatilityGraph';
import SpreadMetricsGraph from '../../components/articles/bid-ask/SpreadMetricsGraph';
import OrderBookGraph from '../../components/articles/bid-ask/OrderBookGraph';
import EssentialBidAskGraph from '../../components/articles/essential-functions/BidAskGraph';
import EssentialLiquidityGraph from '../../components/articles/essential-functions/LiquidityGraph';
import EssentialVolatilityGraph from '../../components/articles/essential-functions/VolatilityGraph';
import DeltaGraph from '../../components/articles/greeks/DeltaGraph';
import GammaGraph from '../../components/articles/greeks/GammaGraph';
import ThetaGraph from '../../components/articles/greeks/ThetaGraph';
import VegaGraph from '../../components/articles/greeks/VegaGraph';
import RhoGraph from '../../components/articles/greeks/RhoGraph';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { articles } = useArticles();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!articles || !Array.isArray(articles)) {
      console.error('Articles not available:', articles);
      setIsLoading(false);
      return;
    }

    // Find the article based on the URL slug
    const foundArticle = articles.find(a => 
      a && a.title && a.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    console.log('Found article:', foundArticle);

    if (foundArticle) {
      setArticle(foundArticle);
      // Update meta tags
      document.title = `${foundArticle.title} | Codify AI Backtesting`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', foundArticle.content.substring(0, 160));
      
      // Update Open Graph meta tags
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', foundArticle.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', foundArticle.content.substring(0, 160));
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
      document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'article');
      document.querySelector('meta[property="og:site_name"]')?.setAttribute('content', 'Codify AI Backtesting');
      
      // Update LinkedIn specific meta tags
      document.querySelector('meta[property="linkedin:title"]')?.setAttribute('content', foundArticle.title) ||
        createMetaTag('property', 'linkedin:title', foundArticle.title);
      document.querySelector('meta[property="linkedin:description"]')?.setAttribute('content', foundArticle.content.substring(0, 160)) ||
        createMetaTag('property', 'linkedin:description', foundArticle.content.substring(0, 160));
      document.querySelector('meta[property="linkedin:image"]')?.setAttribute('content', 'https://codify.com.co/logo-1k.png') ||
        createMetaTag('property', 'linkedin:image', 'https://codify.com.co/logo-1k.png');
      
      // Update Twitter meta tags
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', foundArticle.title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', foundArticle.content.substring(0, 160));

      // Add article schema
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': foundArticle.title,
        'description': foundArticle.content.substring(0, 160),
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
          '@id': `https://codify.com.co/article/${slug}`
        },
        'datePublished': foundArticle.publishDate || new Date().toISOString(),
        'dateModified': foundArticle.lastModified || new Date().toISOString()
      };

      let scriptTag = document.querySelector('#article-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'article-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(articleSchema);
    } else {
      console.error('Article not found for slug:', slug);
    }

    setIsLoading(false);

    // Cleanup
    return () => {
      document.title = 'Codify AI Backtesting';
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Backtest options strategies with tick-level precision. Advanced AI-powered analysis considering liquidity risk and greeks exposures for optimal trading strategies.');
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Codify AI Backtesting');
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Backtest options strategies with tick-level precision. Advanced AI-powered analysis considering liquidity risk and greeks exposures for optimal trading strategies.');
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Codify AI Backtesting');
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', 'Backtest options strategies with tick-level precision. Advanced AI-powered analysis considering liquidity risk and greeks exposures for optimal trading strategies.');
      
      const scriptTag = document.querySelector('#article-schema');
      if (scriptTag) scriptTag.remove();
    };
  }, [slug, articles, navigate]);

  const renderContent = () => {
    if (!article) return null;

    const content = article.content;
    
    if (article.title.includes("Learning Bid-Ask Spread Metrics")) {
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
                <p>Delta measures how much an option's price is expected to change when the underlying asset's price moves by one unit (e.g., $1). For calls, range is 0 to +1; for puts, it is −1 to 0.</p>
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
                <p>Gamma measures how much Delta is expected to change when the underlying price moves by one unit. High Gamma means your Delta can shift rapidly, causing potentially large P&L swings.</p>
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
                <p>Theta represents the rate at which an option's value decays with time. It's typically negative for long options and positive for short options.</p>
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
                <p>Vega measures how much an option's price changes when implied volatility changes by 1%. Long options have positive Vega, benefiting from volatility increases.</p>
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
                <p>Rho represents the change in option value for a 1% change in interest rates. It's most significant for long-dated options.</p>
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-semibold mb-4">Article Not Found</h1>
          <p className="text-purple-100/80 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-purple-900/20 hover:bg-purple-900/40 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article header */}
        <header className="border-b border-purple-900/30 pb-6 mb-6">
          <h1 className="text-3xl font-semibold text-white mb-4">{article.title}</h1>
          <div className="flex items-center text-sm text-purple-300">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{article.readTime} min read</span>
          </div>
        </header>

        {/* Article content */}
        {renderContent()}

        {/* Back to home button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-purple-900/20 hover:bg-purple-900/40 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

const createMetaTag = (attributeName, attributeValue, content) => {
  const meta = document.createElement('meta');
  meta.setAttribute(attributeName, attributeValue);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
};

export default ArticlePage; 