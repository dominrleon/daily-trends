import Feed, { IFeed } from "../models/feed.model";

class FeedRepository {
  async getAllFeeds(): Promise<IFeed[]> {
    return await Feed.find();
  }

  async getFeedById(id: string): Promise<IFeed | null> {
    return await Feed.findById(id);
  }

  async createFeed(feedData: IFeed): Promise<IFeed> {
    return await Feed.create(feedData);
  }

  async updateFeed(id: string, feedData: Partial<IFeed>): Promise<IFeed | null> {
    return await Feed.findByIdAndUpdate(id, feedData, { new: true });
  }

  async deleteFeed(id: string): Promise<IFeed | null> {
    return await Feed.findByIdAndDelete(id);
  }
}

export default new FeedRepository();
