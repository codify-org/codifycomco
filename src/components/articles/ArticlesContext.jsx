import React, { createContext, useContext } from 'react';
import SpreadMetricsArticle from './bid-ask/SpreadMetricsArticle';
import EssentialFunctionsArticle from './essential-functions/EssentialFunctionsArticle';
import GreeksArticle from './greeks/GreeksArticle';
import VolatilityCrushArticle from './greeksonearnings/VolatilityCrushArticle';
import { articles as articlesMetadata } from '../../data/articleMetadata';

const ArticlesContext = createContext();

export const getArticle = (type) => {
  const metadata = articlesMetadata[type];
  if (!metadata) return null;

  let component;
  switch (type) {
    case 'spread-metrics':
      component = SpreadMetricsArticle;
      break;
    case 'essential-functions':
      component = EssentialFunctionsArticle;
      break;
    case 'greeks':
      component = GreeksArticle;
      break;
    case 'volatility-crush':
      component = VolatilityCrushArticle;
      break;
    default:
      return null;
  }

  return { ...metadata, ...component };
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