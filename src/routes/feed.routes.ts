import { Router } from "express";
import FeedController from "../controllers/feed.controller";

const router = Router();

router.get("/", FeedController.getFeeds);
router.post("/", FeedController.addFeed);

export default router;
