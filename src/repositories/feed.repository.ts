import Feed, { IFeed } from "../models/feed.model";

class FeedRepository {
  async getAllFeeds(): Promise<IFeed[]> {
    return await Feed.find();
  }

  async createFeed(feedData: IFeed): Promise<IFeed> {
    return await Feed.create(feedData);
  }
}

export default new FeedRepository();
