export const articleTypes = {
  spreadMetrics: 'spread-metrics',
  essentialFunctions: 'essential-functions',
  greeks: 'greeks',
  volatilityCrush: 'volatility-crush'
};

export const articles = {
  'spread-metrics': {
    title: 'Understanding Bid-Ask Spread Metrics',
    slug: 'understanding-bid-ask-spread-metrics',
    lastModified: '2024-03-20',
    type: 'spread-metrics'
  },
  'essential-functions': {
    title: 'Essential Functions in Options Trading',
    slug: 'essential-functions-in-options-trading',
    lastModified: '2024-03-20',
    type: 'essential-functions'
  },
  'greeks': {
    title: 'The Greeks: Understanding Options Risk Metrics',
    slug: 'the-greeks-understanding-options-risk-metrics',
    lastModified: '2024-03-20',
    type: 'greeks'
  },
  'volatility-crush': {
    title: 'Volatility Crush: Impact on Options During Earnings',
    slug: 'volatility-crush-impact-on-options-during-earnings',
    lastModified: '2024-03-20',
    type: 'volatility-crush'
  }
};

export const getArticle = (type) => articles[type] || null; 