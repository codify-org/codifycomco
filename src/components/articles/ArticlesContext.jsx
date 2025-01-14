import React, { createContext, useContext } from 'react';
import SpreadMetricsArticle from './bid-ask/SpreadMetricsArticle';
import EssentialFunctionsArticle from './essential-functions/EssentialFunctionsArticle';
import GreeksArticle from './greeks/GreeksArticle';
import VolatilityCrushArticle from './greeksonearnings/VolatilityCrushArticle';

const ArticlesContext = createContext();

export const getArticle = (type) => {
  switch (type) {
    case 'spread-metrics':
      return { ...SpreadMetricsArticle, type };
    case 'essential-functions':
      return { ...EssentialFunctionsArticle, type };
    case 'greeks':
      return { ...GreeksArticle, type };
    case 'volatility-crush':
      return { ...VolatilityCrushArticle, type };
    default:
      return null;
  }
};

export const ArticlesProvider = ({ children }) => {
  const articles = [
    getArticle('spread-metrics'),
    getArticle('essential-functions'),
    getArticle('greeks'),
    getArticle('volatility-crush')
  ];

  const getArticleContent = (type) => getArticle(type);

  return (
    <ArticlesContext.Provider value={{ articles, getArticleContent }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within an ArticlesProvider');
  }
  return context;
};

export const articleTypes = {
  spreadMetrics: 'spread-metrics',
  essentialFunctions: 'essential-functions',
  greeks: 'greeks',
  volatilityCrush: 'volatility-crush'
};

export default ArticlesContext; 