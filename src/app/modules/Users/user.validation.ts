import { UserStatus } from "@prisma/client";
import { z } from "zod";

const createUser = z.object({
  id: z.string().uuid().optional(), // Prisma will auto-generate
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  profilePhoto: z.string().url("Invalid URL format").optional(),
  contactNumber: z.string().optional().nullable(),
  status: z.enum(["ACTIVE", "BLOCKED", "DELETED"]).default("ACTIVE"),
  role: z.enum(["CUSTOMER", "VENDOR", "ADMIN"]),
  orders: z.array(z.string()).optional(), // Assuming order IDs are strings
  reviews: z.array(z.string()).optional(), // Assuming review IDs are strings
  cart: z.string().optional().nullable(), // Assuming cart ID is a string
  vendor: z.string().optional().nullable(), // Assuming vendor ID is a string
  admin: z.string().optional().nullable(), // Assuming admin ID is a string
  followedShops: z.array(z.string()).optional(), // Assuming shop IDs are strings
  recentView: z.array(z.string()).optional(), // Assuming recent view IDs are strings
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

const createVendor = z.object({
  password: z.string({
    required_error: "Password is required",
  }),
  vendor: z.object({
    name: z.string({
      required_error: "Name is required!",
    }),
    email: z.string({
      required_error: "Email is required!",
    }),
    contactNumber: z.string({
      required_error: "Contact Number is required!",
    }),
  }),
});

const createAdmin = z.object({
  password: z.string({
    required_error: "Password is required",
  }),
  admin: z.object({
    name: z.string({
      required_error: "Name is required!",
    }),
    email: z.string({
      required_error: "Email is required!",
    }),
    contactNumber: z.string({
      required_error: "Contact Number is required!",
    }),
  }),
});

const updateStatus = z.object({
  body: z.object({
    status: z.enum([UserStatus.ACTIVE, UserStatus.BLOCKED, UserStatus.DELETED]),
  }),
});

export const userValidation = {
  createAdmin,
  createVendor,
  createUser,
  updateStatus,
};
