// Runs after `astro build`: serves dist/ with Astro's preview server and uses Playwright to
//   - print /cv to dist/cv.pdf (real text, so ATS parsers and copy-paste work)
//   - screenshot /og to dist/og.png (social preview image)
// Needs a Chromium build: `npx playwright install chromium` (CI uses --with-deps).
import { stat } from "node:fs/promises";
import { preview } from "astro";
import { chromium } from "playwright";

const server = await preview({ root: process.cwd(), logLevel: "warn", server: { port: 4329 } });
const base = `http://localhost:${server.port}`;
const browser = await chromium.launch();

try {
	const page = await browser.newPage();

	await page.goto(`${base}/cv`, { waitUntil: "networkidle" });
	await page.evaluate(() => document.fonts.ready);
	await page.emulateMedia({ media: "print" });
	await page.pdf({ path: "dist/cv.pdf", preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });

	await page.setViewportSize({ width: 1200, height: 630 });
	await page.emulateMedia({ media: "screen" });
	await page.goto(`${base}/og`, { waitUntil: "networkidle" });
	await page.evaluate(() => document.fonts.ready);
	await page.locator(".card").screenshot({ path: "dist/og.png" });

	for (const file of ["dist/cv.pdf", "dist/og.png"]) {
		const { size } = await stat(file);
		console.log(`  ${file} ${(size / 1024).toFixed(0)} kB`);
	}
} finally {
	await browser.close();
	await server.stop();
}
