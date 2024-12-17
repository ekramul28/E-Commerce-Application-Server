import { Request, Response } from "express";
import catchAsync from "../../middlewares/catchAsync";
import sendResponse from "../shared/sendResponse";
import { resentViewService } from "./resentView.service";
import httpStatus from "http-status";

const createResentView = catchAsync(async (req: Request, res: Response) => {
  const result = await resentViewService.createResentView(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "ResentView add successfully!",
    data: result,
  });
});
const getResentView = catchAsync(async (req: Request, res: Response) => {
  const result = await resentViewService.getResentView(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "ResentView Get successfully!",
    data: result,
  });
});
const deleteResentView = catchAsync(async (req: Request, res: Response) => {
  const result = await resentViewService.deleteResentView(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "deleteResentView  successfully!",
    data: result,
  });
});

export const ResentViewController = {
  createResentView,
  getResentView,
  deleteResentView,
};
