import { Request, Response } from "express";
import catchAsync from "../../middlewares/catchAsync";
import sendResponse from "../shared/sendResponse";
import { OrderService } from "./order.service";
import httpStatus from "http-status";
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrderIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Created successfully!",
    data: result,
  });
});
const getOrderByVendor = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getOrdersByVendorIdFromDB(req.body.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "vendor order get successfully!",
    data: result,
  });
});
const getOrderByCustomerId = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await OrderService.getOrdersByCustomerIdFromDB(id);
  console.log("inside con", result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "order get successfully!",
    data: result,
  });
});
const deleteOrderByCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.deleteOrderByCustomerFromDB(req.body.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Delete successfully!",
      data: result,
    });
  }
);
const updateOrderByVendor = catchAsync(async (req: Request, res: Response) => {
  const { orderId, status } = req.body;
  const result = await OrderService.updateOrderByVendorFromDB(orderId, status);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update successfully!",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getOrderByVendor,
  getOrderByCustomerId,
  deleteOrderByCustomer,
  updateOrderByVendor,
};
