import express, { NextFunction, Request, Response } from "express";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { productController } from "./product.controller";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.ADMIN, UserRole.VENDOR),
  productController.createAdmin
);

export const productRoutes = router;
