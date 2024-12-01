import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    router: "BookRoute",
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
