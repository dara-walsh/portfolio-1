#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, 'public', 'images', 'DW_Logo1small.svg');
const publicDir = path.join(__dirname, 'public');

const sizes = [
  { file: 'favicon-16x16.png', size: '16x16' },
  { file: 'favicon-32x32.png', size: '32x32' },
  { file: 'favicon-192x192.png', size: '192x192' },
  { file: 'apple-touch-icon.png', size: '180x180' },
  { file: 'android-chrome-192x192.png', size: '192x192' },
  { file: 'android-chrome-512x512.png', size: '512x512' },
  { file: 'favicon-512x512.png', size: '512x512' }
];

console.log('Converting SVG logo to favicons...\n');

sizes.forEach(({ file, size }) => {
  const outputPath = path.join(publicDir, file);
  const command = `npx svgexport "${svgPath}" "${outputPath}" ${size}`;
  
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✓ Created ${file} (${size})`);
  } catch (error) {
    console.error(`✗ Failed to create ${file}`);
  }
});

// Create favicon.ico from the largest PNG
console.log('\nGenerating favicon.ico...');
try {
  const iconPath = path.join(publicDir, 'favicon-32x32.png');
  const icoPath = path.join(publicDir, 'favicon.ico');
  // Use convert if available, otherwise use a different method
  execSync(`npx png-to-ico "${iconPath}" -o "${icoPath}"`, { stdio: 'inherit' });
  console.log('✓ Created favicon.ico');
} catch (error) {
  console.log('Note: favicon.ico creation may require additional tools. The PNG favicons are the most important.');
}

console.log('\n✓ Favicon generation complete!');
