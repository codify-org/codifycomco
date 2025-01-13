import React from 'react';
import BidAskGraph from './bid-ask/BidAskGraph';
import LiquidityGraph from './bid-ask/LiquidityGraph';
import VolatilityGraph from './bid-ask/VolatilityGraph';
import SpreadMetricsGraph from './bid-ask/SpreadMetricsGraph';
import OrderBookGraph from './bid-ask/OrderBookGraph';
import EssentialBidAskGraph from './essential-functions/BidAskGraph';
import EssentialLiquidityGraph from './essential-functions/LiquidityGraph';
import EssentialVolatilityGraph from './essential-functions/VolatilityGraph';

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  const renderContent = () => {
    const content = article.content;
    
    if (article.title.includes("Learning Bid-Ask Spread Metrics")) {
      const sections = content.split('\n\n');
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sections.slice(0, 3).join('\n\n') }} />
          <SpreadMetricsGraph />
          <div dangerouslySetInnerHTML={{ __html: sections.slice(3, 6).join('\n\n') }} />
          <OrderBookGraph />
          <div dangerouslySetInnerHTML={{ __html: sections.slice(6).join('\n\n') }} />
        </>
      );
    }
    
    if (article.title.includes("The Essential Function")) {
      const sections = content.split('</p>');
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sections.slice(0, 3).join('</p>') + '</p>' }} />
          <EssentialBidAskGraph />
          <div dangerouslySetInnerHTML={{ __html: sections.slice(3, 5).join('</p>') + '</p>' }} />
          <EssentialLiquidityGraph />
          <div dangerouslySetInnerHTML={{ __html: sections.slice(5, 8).join('</p>') + '</p>' }} />
          <EssentialVolatilityGraph />
          <div dangerouslySetInnerHTML={{ __html: sections.slice(8).join('</p>') }} />
        </>
      );
    }

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      {/* Modal panel */}
      <div className="flex min-h-screen items-start justify-center p-4">
        <div className="relative transform overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black border border-purple-900/10 backdrop-blur-xl p-8 text-left shadow-xl transition-all sm:w-full sm:max-w-4xl mt-8 mb-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Article header */}
          <div className="border-b border-purple-900/30 pb-6 mb-6">
            <h2 className="text-3xl font-semibold text-white mb-4">{article.title}</h2>
            <div className="flex items-center text-sm text-purple-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime} min read</span>
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {renderContent()}
          </div>

          {/* Footer with share options */}
          <div className="mt-8 pt-6 border-t border-purple-900/30">
            <div className="flex items-center justify-between">
              <div className="text-sm text-purple-300">
                Share this article:
              </div>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Email'].map((platform) => (
                  <button
                    key={platform}
                    className="text-sm text-purple-300 hover:text-white transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal; 