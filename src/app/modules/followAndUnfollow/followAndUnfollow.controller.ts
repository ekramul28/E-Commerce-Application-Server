import { Request, Response } from "express";
import catchAsync from "../../middlewares/catchAsync";
import sendResponse from "../shared/sendResponse";
import pick from "../shared/pick";
import { followAndUnFollowService } from "./followAndUnfollow.service";
import httpStatus from "http-status";

const followShop = catchAsync(async (req: Request, res: Response) => {
  const result = await followAndUnFollowService.followShop(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "follow successfully!",
    data: result,
  });
});
const UnFollowShop = catchAsync(async (req: Request, res: Response) => {
  const result = await followAndUnFollowService.UnFollowShop(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "UnFollow successfully!",
    data: result,
  });
});
const followCount = catchAsync(async (req: Request, res: Response) => {
  const result = await followAndUnFollowService.followCount(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "followCount get successfully!",
    data: result,
  });
});
const isFollow = catchAsync(async (req: Request, res: Response) => {
  const result = await followAndUnFollowService.isFollow(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "isFollow get successfully!",
    data: result,
  });
});

export const followAndUnFollowController = {
  followShop,
  UnFollowShop,
  followCount,
  isFollow,
};
