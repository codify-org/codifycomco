export const articleTypes = {
  spreadMetrics: 'spread-metrics',
  essentialFunctions: 'essential-functions',
  greeks: 'greeks',
  volatilityCrush: 'volatility-crush'
};

export const articles = {
  'spread-metrics': {
    title: 'Understanding Bid-Ask Spread Metrics',
    lastModified: '2024-03-20',
    type: 'spread-metrics'
  },
  'essential-functions': {
    title: 'Essential Functions in Options Trading',
    lastModified: '2024-03-20',
    type: 'essential-functions'
  },
  'greeks': {
    title: 'The Greeks: Understanding Options Risk Metrics',
    lastModified: '2024-03-20',
    type: 'greeks'
  },
  'volatility-crush': {
    title: 'Volatility Crush: Impact on Options During Earnings',
    lastModified: '2024-03-20',
    type: 'volatility-crush'
  }
};

export const getArticle = (type) => articles[type] || null; 