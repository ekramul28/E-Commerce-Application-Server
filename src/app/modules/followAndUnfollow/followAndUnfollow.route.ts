import express from "express";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { followAndUnFollowController } from "./followAndUnfollow.controller";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.CUSTOMER),
  followAndUnFollowController.followShop
);
router.post(
  "/unFollow",
  auth(UserRole.CUSTOMER),
  followAndUnFollowController.UnFollowShop
);
router.get("/", followAndUnFollowController.followCount);
router.get(
  "/isFollow",
  auth(UserRole.CUSTOMER),
  followAndUnFollowController.isFollow
);
export const followRoutes = router;
