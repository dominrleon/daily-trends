import mongoose, { Schema, Document } from "mongoose";

export interface IFeed extends Document {
  title: string;
  url: string;
  source: string; 
  publishedAt: Date;
  createdAt: Date;
}

const FeedSchema: Schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  source: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFeed>("Feed", FeedSchema);
