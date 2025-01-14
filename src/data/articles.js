import SpreadMetricsArticle from '../components/articles/bid-ask/SpreadMetricsArticle.js';
import EssentialFunctionsArticle from '../components/articles/essential-functions/EssentialFunctionsArticle.js';
import GreeksArticle from '../components/articles/greeks/GreeksArticle.js';
import VolatilityCrushArticle from '../components/articles/greeksonearnings/VolatilityCrushArticle.js';

export const articleTypes = {
  spreadMetrics: 'spread-metrics',
  essentialFunctions: 'essential-functions',
  greeks: 'greeks',
  volatilityCrush: 'volatility-crush'
};

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