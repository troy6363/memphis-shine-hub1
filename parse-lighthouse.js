const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-mobile.json', 'utf8'));

const categories = report.categories;
const audits = report.audits;

console.log('--- lighthouse-mobile-report ---');
console.log(`Performance Score: ${categories.performance.score * 100}`);
console.log(`First Contentful Paint: ${audits['first-contentful-paint'].displayValue}`);
console.log(`Largest Contentful Paint: ${audits['largest-contentful-paint'].displayValue}`);
console.log(`Total Blocking Time: ${audits['total-blocking-time'].displayValue}`);
console.log(`Cumulative Layout Shift: ${audits['cumulative-layout-shift'].displayValue}`);
console.log(`Speed Index: ${audits['speed-index'].displayValue}`);
console.log('-------------------------------');
