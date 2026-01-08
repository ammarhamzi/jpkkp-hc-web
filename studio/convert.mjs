import fs from 'fs';

const content = JSON.parse(fs.readFileSync('initialContent.json', 'utf8'));
const ndjson = content.map(doc => JSON.stringify(doc)).join('\n');
fs.writeFileSync('import.ndjson', ndjson);
console.log('Converted to NDJSON');
