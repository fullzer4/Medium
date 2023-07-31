import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

function writeJson(filePath:string, o:any) {
    Deno.writeTextFileSync(filePath, JSON.stringify(o));
}

self.onmessage = async (e) => {
  const { url } = e.data

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`${url}`)

  const htmlC = await page.content()

  await browser.close()

  const $ = cheerio.load(htmlC)
  const text = await $(".vcard-fullname").text()

  await writeJson("./test.json", text)

  self.close()
};
