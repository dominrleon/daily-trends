import FeedRepository from "../repositories/feed.repository";
import { IFeed } from "../models/feed.model";

class FeedService {
  async getFeeds(): Promise<IFeed[]> {
    return await FeedRepository.getAllFeeds();
  }

  async getFeedById(id: string): Promise<IFeed | null> {
    return await FeedRepository.getFeedById(id);
  }

  async addFeed(feedData: IFeed): Promise<IFeed> {
    return await FeedRepository.createFeed(feedData);
  }

  async updateFeed(id: string, feedData: Partial<IFeed>): Promise<IFeed | null> {
    return await FeedRepository.updateFeed(id, feedData);
  }

  async deleteFeed(id: string): Promise<IFeed | null> {
    return await FeedRepository.deleteFeed(id);
  }
}

export default new FeedService();
