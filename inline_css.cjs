const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const assetsDir = path.join(distDir, 'assets');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir) || !fs.existsSync(indexHtmlPath)) {
    console.error('Build directory or index.html not found. Run vite build first.');
    process.exit(1);
}

// Find the main CSS file
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(file => file.startsWith('index-') && file.endsWith('.css'));

if (!cssFile) {
    console.error('Main CSS file not found in assets.');
    process.exit(1);
}

const cssPath = path.join(assetsDir, cssFile);
const cssContent = fs.readFileSync(cssPath, 'utf-8');

// Read index.html
let htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// Find the link tag for the CSS
// Vite generates: <link rel="stylesheet" crossorigin href="/assets/index-HASH.css">
const linkRegex = new RegExp(`<link[^>]*href=["']\/assets\/${cssFile}["'][^>]*>`, 'i');

if (linkRegex.test(htmlContent)) {
    // Replace link with style tag
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = htmlContent.replace(linkRegex, styleTag);

    // Write updated HTML
    fs.writeFileSync(indexHtmlPath, htmlContent);
    console.log(`Successfully inlined ${cssFile} into index.html`);
} else {
    console.warn('CSS link tag not found in index.html. Maybe it is already inlined?');
}
