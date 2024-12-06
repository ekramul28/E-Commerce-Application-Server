import { z } from "zod";

const createShop = z.object({
  name: z.string({
    required_error: "Name is required!",
  }),
  description: z.string({
    required_error: "description is required!",
  }),
  vendorId: z.string({
    required_error: "vendorId is required!",
  }),
  logo: z
    .string({
      required_error: "logo is required!",
    })
    .optional(),
});

export const ShopValidation = {
  createShop,
};
