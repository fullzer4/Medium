import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

function writeJson(filePath:string, data:string) {
    Deno.writeTextFileSync(filePath, JSON.stringify(data));
}

self.onmessage = async (e: { data: { url: string; filename: string; }; }) => {
  const { url, filename } = e.data

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`${url}`)

  const htmlC = await page.content()

  await browser.close()

  const $ = cheerio.load(htmlC)
  const text = await $(".vcard-fullname").text()

  writeJson(filename, text)

  self.close()
};
