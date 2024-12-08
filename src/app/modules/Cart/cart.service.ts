import { Cart, Customer, Order } from "@prisma/client";
import prisma from "../shared/prisma";

interface OrderData {
  customerId: string;
  productId: string;
  quantity: number;
}

const createCartIntoDB = async (orderData: OrderData) => {
  const { customerId, productId, quantity } = orderData;

  // Ensure the product exists
  const product = await prisma.product.findFirstOrThrow({
    where: {
      id: productId,
    },
  });

  // Check if the cart already exists for the user
  let cart;
  cart = await prisma.cart.findUnique({
    where: { customerId },
    include: { items: true },
  });

  if (!cart) {
    // Create a new cart for the user if it doesn't exist
    cart = await prisma.cart.create({
      data: {
        customerId,
      },
      include: { items: true },
    });
  }

  // Check if the product is already in the cart
  const existingCartItem = cart?.items.find(
    (item) => item.productId === productId
  );

  if (existingCartItem) {
    // Update the quantity of the existing cart item
    await prisma.cartItem.update({
      where: { id: existingCartItem.id },
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
    });
  } else {
    // Add the product to the cart as a new CartItem
    await prisma.cartItem.create({
      data: {
        productId,
        cartId: cart.id,
        quantity,
      },
    });
  }

  return prisma.cart.findUnique({
    where: { customerId },
    include: {
      items: {
        include: { product: true },
      },
    },
  });
};

const getCartByCustomerIdFromDB = async (
  CustomerId: string
): Promise<Cart[]> => {
  const result = await prisma.cart.findMany({
    where: {
      customerId: CustomerId,
    },
    include: {
      items: true,
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};
const getCartByVendorIdFromDB = async (vendorId: string): Promise<Order[]> => {
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

  return result;
};

const deleteCartByCustomerFromDB = async (
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

export const CartService = {
  createCartIntoDB,
  getCartByVendorIdFromDB,
  deleteCartByCustomerFromDB,
};
