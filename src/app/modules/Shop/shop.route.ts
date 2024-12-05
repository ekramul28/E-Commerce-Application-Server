import express, { NextFunction, Request, Response } from "express";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../helpars/fileUploader";
import { ShopController } from "./shop.controller";
import { ShopValidation } from "./shop.validation";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.VENDOR),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = ShopValidation.createShop.parse(JSON.parse(req.body.data));
    return ShopController.createShop(req, res, next);
  }
);
router.get("/", auth(UserRole.ADMIN), ShopController.getShop);
router.get(
  "/:id",
  auth(UserRole.ADMIN, UserRole.VENDOR),
  ShopController.getShopById
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN, UserRole.VENDOR),
  // validateRequest(update),
  ShopController.updateShop
);
router.delete(
  "/:id",
  auth(UserRole.ADMIN, UserRole.VENDOR),
  ShopController.deleteShop
);
export const shopRoutes = router;
