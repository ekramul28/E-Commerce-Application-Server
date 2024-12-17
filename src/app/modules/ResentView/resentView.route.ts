import express from "express";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { ResentViewController } from "./resentView.controller";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.CUSTOMER),
  ResentViewController.createResentView
);
router.get("/", auth(UserRole.CUSTOMER), ResentViewController.getResentView);
router.delete(
  "/",
  auth(UserRole.CUSTOMER),
  ResentViewController.deleteResentView
);

export const resentViewRoutes = router;
