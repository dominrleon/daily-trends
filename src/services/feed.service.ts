import FeedRepository from "../repositories/feed.repository";
import { IFeed } from "../models/feed.model";

class FeedService {
  async getFeeds(): Promise<IFeed[]> {
    return await FeedRepository.getAllFeeds();
  }

  async addFeed(feedData: IFeed): Promise<IFeed> {
    return await FeedRepository.createFeed(feedData);
  }
}

export default new FeedService();
