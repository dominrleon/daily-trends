import { ElPaisScraper } from "./scraper/elPaisScraper";
import { ElMundoScraper } from "./scraper/elMundoScraper";
import FeedRepository from "../repositories/feed.repository";
import { IFeedInput } from "../models/feed.model";

class FeedScraperService {
  private elPaisScraper = new ElPaisScraper();
  private elMundoScraper = new ElMundoScraper();

  async scrapeAndSave(): Promise<void> {
    console.log("🔍 Scraping news...");

    const [elPaisNews, elMundoNews] = await Promise.all([
      this.elPaisScraper.scrape(),
      this.elMundoScraper.scrape(),
    ]);

    // Definir el tipo explícitamente
    const allNews: IFeedInput[] = [
      ...elPaisNews.map((news): IFeedInput => ({
        title: news.title,
        url: news.url.startsWith("http") ? news.url : `https://elpais.com${news.url}`,
        source: "El País",
        publishedAt: new Date(),
        createdAt: new Date(),
      })),
      ...elMundoNews.map((news): IFeedInput => ({
        title: news.title,
        url: news.url.startsWith("http") ? news.url : `https://www.elmundo.es${news.url}`,
        source: "El Mundo",
        publishedAt: new Date(),
        createdAt: new Date(),
      })),
    ];

    // Guardar en la base de datos con el tipo correcto
    await Promise.all(
      allNews.map(async (news) => {
        await FeedRepository.createFeed(news);
      })
    );

    console.log("✅ News saved to database!");
  }
}

export default new FeedScraperService();
