const fs = require('fs');
try {
    const report = JSON.parse(fs.readFileSync('lighthouse-mobile-v2.json', 'utf8'));

    const categories = report.categories;
    const audits = report.audits;

    console.log('--- lighthouse-mobile-report ---');
    console.log(`Performance Score: ${categories.performance.score * 100}`);

    const metrics = [
        'first-contentful-paint',
        'largest-contentful-paint',
        'total-blocking-time',
        'cumulative-layout-shift',
        'speed-index',
        'interactive'
    ];

    metrics.forEach(metric => {
        if (audits[metric]) {
            console.log(`${audits[metric].title}: ${audits[metric].displayValue}`);
        }
    });
    console.log('-------------------------------');
} catch (e) {
    console.error("Error reading or parsing lighthouse-mobile.json:", e.message);
}
