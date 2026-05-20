import puppeteer from 'puppeteer'
import { readFileSync, writeFileSync } from 'fs'
import { marked } from 'marked'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const markdown = readFileSync(
  '/Users/kavinsky/Documents/Obsidian/PERS/sm-kolektiv/sdd/kaname-guide.md',
  'utf-8'
)

// Strip the H1 title - we have a custom cover page
const content = markdown
  .replace(/^# Kaname.*\n/, '')
  .replace(/^\*\*The Definitive.*\*\*\n/, '')
  .replace(/^Jakub Kavinsky.*\n/, '')
  .replace(/^---\n/, '')
  .replace(/—/g, '-')

const body = marked.parse(content)

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 10.5pt;
    line-height: 1.7;
    color: #1e293b;
    background: #ffffff;
  }

  /* COVER PAGE - named page so @page coverPage { margin:0 } applies only here */
  .cover {
    page: coverPage;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 72px;
    page-break-after: always;
    background: #0f172a;
    color: #f8fafc;
  }

  .cover-eyebrow {
    font-size: 8pt;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #f59e0b;
    margin-bottom: 24px;
  }

  .cover-title {
    font-size: 72pt;
    font-weight: 800;
    letter-spacing: -4px;
    line-height: 1;
    color: #f8fafc;
    margin-bottom: 8px;
  }

  .cover-kanji {
    font-size: 42pt;
    font-weight: 300;
    color: #f59e0b;
    opacity: 0.7;
    margin-bottom: 36px;
  }

  .cover-rule {
    width: 56px;
    height: 2px;
    background: #f59e0b;
    margin-bottom: 28px;
  }

  .cover-tagline {
    font-size: 13pt;
    font-weight: 400;
    color: #94a3b8;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 56px;
  }

  .cover-meta {
    font-size: 8.5pt;
    color: #475569;
    letter-spacing: 0.5px;
  }

  /* CONTENT PAGES - @page margin handles all page margins */
  .content {
    padding: 0;
  }

  h2 {
    font-size: 18pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 48px;
    margin-bottom: 6px;
    padding-bottom: 10px;
    border-bottom: 2px solid #fde68a;
    letter-spacing: -0.5px;
  }

  h2:first-child { margin-top: 0; }

  h3 {
    font-size: 12pt;
    font-weight: 600;
    color: #b45309;
    margin-top: 28px;
    margin-bottom: 8px;
    letter-spacing: -0.2px;
  }

  h4 {
    font-size: 10.5pt;
    font-weight: 600;
    color: #1e293b;
    margin-top: 18px;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 12px;
    color: #334155;
  }

  strong {
    font-weight: 600;
    color: #1e293b;
  }

  ol, ul {
    margin: 10px 0 14px 22px;
    color: #334155;
  }

  li { margin-bottom: 5px; }

  hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 32px 0;
  }

  blockquote {
    border-left: 3px solid #f59e0b;
    padding: 12px 20px;
    margin: 16px 0;
    background: #fffbeb;
    border-radius: 0 6px 6px 0;
    color: #78350f;
    font-style: italic;
  }

  /* Cover page: full-bleed, no margins */
  @page coverPage {
    size: A4;
    margin: 0;
  }

  /* All other pages: proper margins on every page */
  @page {
    size: A4;
    margin: 56px 72px;
  }

  @media print {
    .cover { height: 297mm; }
  }

</style>
</head>
<body>

<!-- COVER -->
<div class="cover">
  <div class="cover-eyebrow">A Methodology for the AI Age</div>
  <div style="display:flex;align-items:baseline;gap:16px;margin-bottom:8px;">
    <div class="cover-title">KANAME</div>
    <div class="cover-kanji">要</div>
  </div>
  <div class="cover-rule"></div>
  <div class="cover-tagline">
    A specification-driven, flow-based methodology<br>for AI-augmented software delivery.
  </div>
  <div class="cover-meta">
    v1.0 &nbsp;&middot;&nbsp; May 2026<br>
    CC BY-SA 4.0 &nbsp;&middot;&nbsp; Free to use and share with attribution
  </div>
</div>

<!-- CONTENT -->
<div class="content">
  ${body}
</div>

</body>
</html>`

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

await page.setContent(html, { waitUntil: 'networkidle0' })

// Wait for Google Fonts to load
await new Promise(r => setTimeout(r, 2000))

const pdf = await page.pdf({
  format: 'A4',
  printBackground: true,
})

await browser.close()

const outputPath = path.join(root, 'public', 'kaname-guide.pdf')
writeFileSync(outputPath, pdf)

console.log(`PDF generated: ${outputPath} (${Math.round(pdf.length / 1024)}KB)`)
