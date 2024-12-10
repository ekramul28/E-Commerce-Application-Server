import { Customer, OrderStatus } from "@prisma/client";
import { initiatePayment, VerifyPayment } from "./payment.utils";
import prisma from "../shared/prisma";

const amrPayPayment = async (data: { totalPrice: number; user: Customer }) => {
  const result = await initiatePayment(data);
  return result;
};
const afterPaymentPageDB = async (userId: string, tnxId: string) => {
  // Assume VerifyPayment returns an object with the necessary payment details
  const paymentDetails = await VerifyPayment(tnxId);
  const paymentData = {
    customerId: userId,
    email: paymentDetails.cus_email,
    amount: parseFloat(paymentDetails.amount_original),
    payment_processor: paymentDetails.payment_processor,
    bank_trxid: paymentDetails.bank_trxid,
    pg_txnid: paymentDetails.pg_txnid,
    mer_txnid: paymentDetails.mer_txnid,
    payment_type: paymentDetails.payment_type,
  };

  if (paymentDetails.pay_status === "Successful") {
    const cart = await prisma.cart.findFirstOrThrow({
      where: {
        email: paymentDetails.cus_email,
      },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    console.log("cart", cart);

    const cartProducts = cart?.items || [];

    const orderData = cartProducts?.map((item: any) => ({
      productId: item.product.id,
      shopId: item.product.shopId,
      cardId: item.cartId,
      customerId: userId,
      paymentId: tnxId,
      status: OrderStatus.PAID,
    }));

    const payment = await prisma.$transaction(async (tr) => {
      const createPayment = tr.payment.create({ data: paymentData });

      const createOrder = tr.order.createMany({ data: orderData });

      return createPayment;
    });

    console.log("orderData", orderData);
  }

  // Return relevant payment details for further use
  return paymentDetails;
};

export const createPaymentLinkService = {
  // createPaymentLink,
  afterPaymentPageDB,
  amrPayPayment,
};
