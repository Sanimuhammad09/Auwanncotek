const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('content.json', 'utf8'));

const pagesDir = path.join(__dirname, 'src', 'pages');

const cleanText = (text) => {
  // Try to remove the navbar text which appears at the start of every page
  const keyword = "Graphic Design PRODUCTS Laptop Sales Phone Accessories PC Accessories GALLERY CONTACTS";
  let content = text;
  if (text.includes(keyword)) {
    content = text.split(keyword).pop();
  }
  return content.trim().replace(/"/g, '&quot;');
};

const formatTitle = (key) => {
  return key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

for (const key in data) {
  const content = cleanText(data[key]);
  const title = formatTitle(key);
  
  // Create paragraphs
  const paragraphs = content.split(/\.\s+/).map(p => p.trim() + '.').filter(p => p.length > 5);

  const componentCode = `import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ${key.replace(/-/g, '')}Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1, paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
              ${title}
            </h1>
            <div style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8 }}>
              ${paragraphs.slice(0, 8).map(p => `<p style={{ marginBottom: '1.5rem' }}>${p}</p>`).join('\n              ')}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
`;

  fs.writeFileSync(path.join(pagesDir, `${key}.tsx`), componentCode);
}
console.log('Pages generated!');
