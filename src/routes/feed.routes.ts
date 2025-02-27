import { Router } from "express";
import FeedController from "../controllers/feed.controller";

const router = Router();

router.get("/", FeedController.getFeeds);
router.get("/:id", FeedController.getFeedById);
router.post("/", FeedController.addFeed);
router.put("/:id", FeedController.updateFeed);
router.delete("/:id", FeedController.deleteFeed);

export default router;