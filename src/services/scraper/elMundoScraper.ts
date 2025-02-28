import { BaseScraper } from "./baseScraper";
import puppeteer from "puppeteer";

export class ElMundoScraper extends BaseScraper {
  constructor() {
    super("https://www.elmundo.es/");
  }

  async scrape(): Promise<{ title: string; url: string }[]> {
    const browser = await this.launchBrowser();
    const page = await browser.newPage();
    await page.goto(this.url, { waitUntil: "domcontentloaded" });

    const articles = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("article a")).slice(0, 5).map((article) => ({
        title: article.textContent?.trim() || "Sin título",
        url: article.getAttribute("href") || "#",
      }));
    });

    await browser.close();
    return articles;
  }
}
