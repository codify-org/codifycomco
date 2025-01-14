import SpreadMetricsArticle from '../components/articles/bid-ask/SpreadMetricsArticle.jsx';
import EssentialFunctionsArticle from '../components/articles/essential-functions/EssentialFunctionsArticle.jsx';
import GreeksArticle from '../components/articles/greeks/GreeksArticle.jsx';
import VolatilityCrushArticle from '../components/articles/greeksonearnings/VolatilityCrushArticle.jsx';
import { articles, articleTypes } from './articleMetadata.js';

export { articleTypes };

export const getArticle = (type) => {
  const metadata = articles[type];
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