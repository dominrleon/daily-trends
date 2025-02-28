import puppeteer from "puppeteer";

export abstract class BaseScraper {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  protected async launchBrowser() {
    return await puppeteer.launch({ headless: true });
  }

  abstract scrape(): Promise<{ title: string; url: string }[]>;
}
