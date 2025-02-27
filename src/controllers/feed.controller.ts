import { Request, Response } from "express";
import FeedService from "../services/feed.service";

class FeedController {
  async getFeeds(req: Request, res: Response) {
    try {
      const feeds = await FeedService.getFeeds();
      res.json(feeds);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving feeds" });
    }
  }

  async addFeed(req: Request, res: Response) {
    try {
      const feed = await FeedService.addFeed(req.body);
      res.status(201).json(feed);
    } catch (error) {
      res.status(500).json({ message: "Error adding feed" });
    }
  }
}

export default new FeedController();
