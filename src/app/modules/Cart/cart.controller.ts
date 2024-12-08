import { Request, Response } from "express";
import catchAsync from "../../middlewares/catchAsync";
import sendResponse from "../shared/sendResponse";
import { CartService } from "./cart.service";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.createCartIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Created successfully!",
    data: result,
  });
});
const getCartByCustomer = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const customer = req.user;
    const result = await CartService.getCartByCustomerIdFromDB(customer?.email);
    console.log("cartU", result);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " cart get successfully!",
      data: result,
    });
  }
);
const getOrderByVendor = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.getCartByVendorIdFromDB(req.body.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "vendor order get successfully!",
    data: result,
  });
});
const deleteCartByCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.deleteCartByCustomerFromDB(req.body.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete successfully!",
    data: result,
  });
});

export const CartController = {
  createOrder,
  getOrderByVendor,
  getCartByCustomer,
  deleteCartByCustomer,
};
