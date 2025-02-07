const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');
const glob = require('glob');
const { z } = require('zod');

// Configuration
const markdownDir = '../src/content/docs'; // Directory where markdown files are located

// Zod schema for frontmatter validation
const frontmatterSchema = z.object({
  title: z.string(),
  draft: z.boolean().optional().default(false),
  date: z.date().default(new Date()),
  releaseDate: z.date().optional(),
  type: z.union([
    z.literal("Article"),
    z.literal("Release Note"),
    z.literal("Release Notes"),
  ]).default("Article"),
  releaseType: z
    .union([
      z.literal("Power Automate"),
      z.literal("Power Apps"),
      z.literal("PowerApps"),
      z.literal("BC"),
      z.literal("Google Play"),
    ])
    .default("BC"),
  platformType: z
    .union([
      z.literal("Power Automate"),
      z.literal("Power Apps"),
      z.literal("PowerApps"),
      z.literal("BC"),
      z.literal("Google Play"),
    ])
    .optional(),
  typeOfRelease: z
    .union([
      z.literal("Stability"),
      z.literal("Feature"),
      z.literal("Platform"),
      z.literal("Initial"),
    ])
    .optional(),
  releaseKind: z
    .union([
      z.literal("Stability"),
      z.literal("Feature"),
      z.literal("Platform"),
      z.literal("Initial"),
    ])
    .optional(),
});

// Function to validate frontmatter
function validateFrontmatter(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter } = matter(fileContent);

  try {
    frontmatterSchema.parse(frontmatter);
  } catch (error) {
    if (filePath.includes('_EAM_KB')) return false;

    console.log(`Frontmatter error in ${filePath}:`);
    console.error(error.errors.map(e => e.message).join(', '));
    return false;
  }

  return true;
}

// Function to validate links and images
async function validateLinks(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // const linkRegex = /\!\[[^\]]*\]\(([^\)]+)\)|\[[^\]]*\]\(([^\)]+)\)/g;
  const linkRegex = /\!\[[^\]]*\]\(([^\)]+)\)/g;
  let match;
  const brokenLinks = [];

  while ((match = linkRegex.exec(fileContent)) !== null) {
    const url = match[1] || match[2];
    if (!url.startsWith('http')) {
      const localPath = path.resolve(path.dirname(filePath), url);
      if (!fs.existsSync(localPath)) {
        brokenLinks.push(url);
      }
    }
  }

  if (brokenLinks.length > 0) {
    if (filePath.includes('_EAM_KB')) return false;

    console.log(`Broken links in ${filePath}:`);
    console.error(brokenLinks.join('\n- '));
    return false;
  }
  return true;
}

// Main function to validate markdown files
async function validateMarkdownFiles() {
  const files = glob.sync(`${markdownDir}/**/*.md`);
  let allValid = true;

  for (const file of files) {
    // console.log(`Validating ${file}...`);
    const isFrontmatterValid = validateFrontmatter(file);
    const areLinksValid = await validateLinks(file);

    if (!isFrontmatterValid || !areLinksValid) {
      allValid = false;
    }
  }

  if (allValid) {
    console.log('All markdown files are valid!');
  } else {
    console.error('Some markdown files have errors.');
  }
}

// Run the validator
validateMarkdownFiles();