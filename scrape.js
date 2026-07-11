const fs = require('fs');
const https = require('https');

const urls = [
  'https://vinfotech.ng/about/',
  'https://vinfotech.ng/it-technical-support/',
  'https://vinfotech.ng/pc-repair-services/',
  'https://vinfotech.ng/business-centre/',
  'https://vinfotech.ng/cac-registrations/',
  'https://vinfotech.ng/point-of-sale-system/',
  'https://vinfotech.ng/virtual-assistance/',
  'https://vinfotech.ng/computer-training/',
  'https://vinfotech.ng/website-design/',
  'https://vinfotech.ng/graphic-design/',
  'https://vinfotech.ng/laptop-sales/',
  'https://vinfotech.ng/phone-accessories/',
  'https://vinfotech.ng/pc-accessories/',
  'https://vinfotech.ng/gallery/',
  'https://vinfotech.ng/contacts/'
];

const fetchContent = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Simple extraction: get content inside <main> or the elementor container
        let cleanText = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                            .replace(/<[^>]+>/g, ' ')
                            .replace(/\s+/g, ' ')
                            .trim();
        
        // Vinfotech pages have a lot of header/footer junk. 
        // We'll try to extract what's between "HOME" and "Expertise" or similar, 
        // but just getting all text is fine for a start.
        resolve({ url, text: cleanText.substring(0, 5000) }); // Limit to 5000 chars to avoid massive file
      });
    }).on('error', reject);
  });
};

async function run() {
  const results = {};
  for (const url of urls) {
    try {
      console.log(`Fetching ${url}...`);
      const res = await fetchContent(url);
      const name = url.split('/').filter(Boolean).pop();
      results[name] = res.text;
    } catch(e) {
      console.error(`Error on ${url}:`, e.message);
    }
  }
  fs.writeFileSync('content.json', JSON.stringify(results, null, 2));
  console.log('Done!');
}

run();
