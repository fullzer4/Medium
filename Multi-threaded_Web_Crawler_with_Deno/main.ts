import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://github.com/fullzer4");
await page.screenshot({ path: "example.png" });

await browser.close();
