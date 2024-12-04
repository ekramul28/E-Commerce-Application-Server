import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryControllers } from "./Category.controller";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get("/", CategoryControllers.getAllItemCategories);

router.get("/:id", CategoryControllers.getItemCategoryById);

router.post(
  "/",
  auth(UserRole.ADMIN),
  // validateRequest(ItemCategoryValidation.createItemCategoryValidationSchema),
  CategoryControllers.createItemCategory
);

router.put(
  "/:id",
  auth(UserRole.ADMIN),
  // validateRequest(ItemCategoryValidation.updateItemCategoryValidationSchema),
  CategoryControllers.updateItemCategory
);

router.delete(
  "/:id",
  auth(UserRole.ADMIN),
  CategoryControllers.deleteItemCategory
);

export const CategoryRoutes = router;
