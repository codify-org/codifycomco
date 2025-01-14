const fs = require('fs');
const path = require('path');
const articles = require('../src/data/articles.json');

const BASE_URL = 'https://codify.com.co';

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main pages -->
  <url>
    <loc>${BASE_URL}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Articles -->
  ${articles.map(article => `
  <url>
    <loc>${BASE_URL}/article/${encodeURIComponent(article.title.toLowerCase().replace(/\s+/g, '-'))}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap(); 