import { Request, Response } from "express";
import FeedService from "../services/feed.service";

class FeedController {
  async getFeeds(req: Request, res: Response): Promise<void> {
    try {
      const feeds = await FeedService.getFeeds();
      res.json(feeds);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving feeds" });
    }
  }

  async getFeedById(req: Request, res: Response): Promise<void> {
    try {
      const feed = await FeedService.getFeedById(req.params.id);
      if (!feed) {
        res.status(404).json({ message: "Feed not found" });
        return;
      }
      res.json(feed);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving feed" });
    }
  }

  async addFeed(req: Request, res: Response): Promise<void> {
    try {
      const feed = await FeedService.addFeed(req.body);
      res.status(201).json(feed);
    } catch (error) {
      res.status(500).json({ message: "Error adding feed" });
    }
  }

  async updateFeed(req: Request, res: Response): Promise<void> {
    try {
      const feed = await FeedService.updateFeed(req.params.id, req.body);
      if (!feed) {
        res.status(404).json({ message: "Feed not found" });
        return;
      }
      res.json(feed);
    } catch (error) {
      res.status(500).json({ message: "Error updating feed" });
    }
  }

  async deleteFeed(req: Request, res: Response): Promise<void> {
    try {
      const feed = await FeedService.deleteFeed(req.params.id);
      if (!feed) {
        res.status(404).json({ message: "Feed not found" });
        return;
      }
      res.json({ message: "Feed deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting feed" });
    }
  }
}

export default new FeedController();
