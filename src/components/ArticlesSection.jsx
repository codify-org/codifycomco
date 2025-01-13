import React, { useState } from 'react';
import ArticleModal from './articles/ArticleModal';
import SpreadMetricsArticle from './articles/bid-ask/SpreadMetricsArticle';
import EssentialFunctionsArticle from './articles/essential-functions/EssentialFunctionsArticle';

const ArticleCard = ({ article, onClick }) => (
  <button 
    onClick={onClick}
    className="block w-full text-left p-6 rounded-xl bg-purple-900/5 border border-purple-900/10 hover:bg-purple-900/10 transition-all duration-300 backdrop-blur-sm group"
  >
    <h3 className="text-xl font-semibold text-purple-100 mb-3 group-hover:text-white transition-colors">
      {article.title}
    </h3>
    <p className="text-gray-400 mb-4">{article.description}</p>
    <div className="flex items-center text-sm text-purple-300">
      <span>{article.readTime} min read</span>
      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </button>
);

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const bidAskArticles = [
    EssentialFunctionsArticle,
    SpreadMetricsArticle
  ];

  const greekArticles = [
    {
      title: "Essential Options Greeks Explained",
      description: "A comprehensive guide to Delta, Gamma, Theta, Vega, and Rho - understanding your position's risk exposure.",
      readTime: 7,
      content: "Coming soon..."
    },
    {
      title: "Dynamic Greek Hedging Strategies",
      description: "Learn how to actively manage your portfolio's Greek exposures and implement effective hedging techniques.",
      readTime: 10,
      content: "Coming soon..."
    }
  ];

  return (
    <section id="articles" className="relative py-16 bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 relative">
            <img
              src="/logo-transparent.png"
              alt="Codify Logo"
              className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Educational Resources</h2>
          <p className="text-xl text-gray-400">Deepen your understanding of market mechanics and risk management</p>
        </div>

        {/* Bid-Ask Spread Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-purple-100 mb-8">Bid-Ask Spread Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bidAskArticles.map((article, index) => (
              <ArticleCard 
                key={index} 
                article={article} 
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
        </div>

        {/* Greek Exposure Articles */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-100 mb-8">Greek Exposure Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {greekArticles.map((article, index) => (
              <ArticleCard 
                key={index} 
                article={article}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
};

export default ArticlesSection; 