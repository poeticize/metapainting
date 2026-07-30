import fs from 'fs';
import path from 'path';

/**
 * MetaPainting Photo Asset Processor & Validator
 * 
 * Directory structure expected:
 * public/paintings/{slug}/
 *   - 01-design-{seq}.jpg
 *   - 02-painting-{seq}.jpg
 *   - 03-masking-{seq}.jpg
 *   - 04-collab-{seq}.jpg
 *   - 05-complete-{seq}.jpg
 *   - 06-effect-{seq}.jpg
 *   - 07-event-{seq}.jpg
 *   - thumb.jpg
 *   - thumb-alt.jpg
 */

const PUBLIC_PAINTINGS_DIR = path.resolve('public/paintings');
const CONTENT_PAINTINGS_DIR = path.resolve('src/content/paintings');

function inspectPaintingAssets() {
  if (!fs.existsSync(PUBLIC_PAINTINGS_DIR)) {
    console.error(`Public directory does not exist: ${PUBLIC_PAINTINGS_DIR}`);
    return;
  }

  const slugs = fs.readdirSync(PUBLIC_PAINTINGS_DIR).filter(item => {
    return fs.statSync(path.join(PUBLIC_PAINTINGS_DIR, item)).isDirectory();
  });

  console.log(`Found ${slugs.length} painting directories in public/paintings:\n`);

  slugs.forEach(slug => {
    const paintingDir = path.join(PUBLIC_PAINTINGS_DIR, slug);
    const files = fs.readdirSync(paintingDir);

    const phasesCount = {
      design: files.filter(f => f.startsWith('01-design')).length,
      painting: files.filter(f => f.startsWith('02-painting')).length,
      masking: files.filter(f => f.startsWith('03-masking')).length,
      collab: files.filter(f => f.startsWith('04-collab')).length,
      complete: files.filter(f => f.startsWith('05-complete')).length,
      effect: files.filter(f => f.startsWith('06-effect')).length,
      event: files.filter(f => f.startsWith('07-event')).length,
      thumb: files.includes('thumb.jpg'),
      thumbAlt: files.includes('thumb-alt.jpg')
    };

    console.log(`Painting: [${slug}]`);
    console.log(`  - Underpainting photos: ${phasesCount.painting}`);
    console.log(`  - Masking photos:       ${phasesCount.masking}`);
    console.log(`  - Crowd Collab photos:  ${phasesCount.collab}`);
    console.log(`  - Complete photos:      ${phasesCount.complete}`);
    console.log(`  - UV/Effect photos:     ${phasesCount.effect}`);
    console.log(`  - Thumbnail present:    ${phasesCount.thumb ? 'YES' : 'NO'}`);
    console.log(`  - Total raw files:      ${files.length}`);
    console.log('--------------------------------------------------');
  });
}

inspectPaintingAssets();
