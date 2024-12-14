import { Customer, Order, OrderStatus } from "@prisma/client";
import prisma from "../shared/prisma";

const createOrderIntoDB = async (orderData: any) => {
  // Ensure the product exists
  await prisma.product.findFirstOrThrow({
    where: {
      id: orderData.productId,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    // Create the order
    const createdOrder = await transactionClient.order.create({
      data: orderData,
    });

    // Find the customer
    const customer = await transactionClient.customer.findFirstOrThrow({
      where: {
        id: orderData.customerId,
      },
      select: { orders: true },
    });

    // Update the customer's orders
    await transactionClient.customer.update({
      where: {
        id: orderData.customerId,
      },
      data: {
        orders: {
          connect: { id: createdOrder.id }, // Connect the new order to the customer
        },
      },
    });

    return createdOrder;
  });

  return result;
};

const getOrdersByVendorIdFromDB = async (
  vendorId: string
): Promise<Order[]> => {
  const result = await prisma.order.findMany({
    where: {
      product: {
        shop: {
          vendorId: vendorId,
        },
      },
    },
    include: {
      product: {
        select: {
          name: true,
          price: true,
          images: true,
        },
      },
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
          profilePhoto: true,
        },
      },
    },
  });

  return result;
};
const getOrdersByCustomerIdFromDB = async (
  customerId: string
): Promise<Order[]> => {
  console.log({ customerId });
  const result = await prisma.order.findMany({
    where: {
      customerId: customerId,
    },
    include: {
      product: {
        select: {
          name: true,
          price: true,
          images: true,
        },
      },
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  console.log("gettt", result);
  return result;
};

const updateOrderByVendorFromDB = async (
  id: string,
  status: OrderStatus
): Promise<Order | null> => {
  const updatedOrder = await prisma.order.update({
    where: { id },
    data: {
      status: status || undefined, // Update only if provided
    },
  });

  return updatedOrder;
};
const deleteOrderByCustomerFromDB = async (
  id: string
): Promise<Order | null> => {
  // Ensure the order exists
  const order = await prisma.order.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      customer: true, // Fetch associated customer if needed
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    // Delete the order
    const deletedOrder = await transactionClient.order.delete({
      where: {
        id,
      },
    });

    // Optionally, you can do something with the customer if needed.
    // For example, return the customer after deleting the order.
    return deletedOrder;
  });

  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getOrdersByVendorIdFromDB,
  getOrdersByCustomerIdFromDB,
  deleteOrderByCustomerFromDB,
  updateOrderByVendorFromDB,
};
