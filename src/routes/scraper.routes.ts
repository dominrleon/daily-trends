import { Router } from "express";
import ScraperController from "../controllers/scraper.controller";

const router = Router();

router.get("/scrape", ScraperController.scrapeFeeds);

export default router;
