import { Request, Response } from "express";
import FeedScraperService from "../services/feedScraper.service";

class ScraperController {
  async scrapeFeeds(req: Request, res: Response): Promise<void> {
    try {
      await FeedScraperService.scrapeAndSave();
      res.json({ message: "✅ Scraping completed and news saved." });
    } catch (error) {
      console.error("❌ Error during scraping:", error);
      res.status(500).json({ message: "❌ Error during scraping", error: error });
    }
  }
}

export default new ScraperController();
