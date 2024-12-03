import { Prisma, Product, Shop } from "@prisma/client";
import { fileUploader } from "../../helpars/fileUploader";
import { paginationHelper } from "../../helpars/paginationHelper";
import { IFile } from "../../interfaces/file";
import { IPaginationOptions } from "../../interfaces/pagination";
import prisma from "../shared/prisma";
import { IShopFilterRequest } from "./shop.interface";
import { ShopSearchAbleFields } from "./shop.const";

const createShopIntoDB = async (req: any) => {
  const file = req.file as IFile[];

  if (file) {
    const uploadToCloudinary =
      await fileUploader.multepaleImageuploadToCloudinary(file);
    req.body.images = uploadToCloudinary;
  }
  const createdProductData = await prisma.shop.create({
    data: req.body,
  });

  return createdProductData;
};

const getShopIntoDB = async (
  params: IShopFilterRequest,
  options: IPaginationOptions
) => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  if (Object.keys(filterData).length > 0) {
    AND: Object.keys(filterData).map((key) => ({
      [key]: {
        equals: (filterData as any)[key],
      },
    }));
  }

  console.log(params);
  const andCondition: Prisma.ShopWhereInput[] = [];
  if (params.searchTerm) {
    andCondition.push({
      OR: ShopSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  const whereConditions: Prisma.ShopWhereInput = { AND: andCondition };
  const result = await prisma.shop.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });
  const total = await prisma.shop.count({
    where: whereConditions,
  });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getShopByIdFromDB = async (id: string): Promise<Shop | null> => {
  const result = await prisma.shop.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateShopFromDB = async (
  id: string,
  data: Partial<Shop>
): Promise<Shop> => {
  await prisma.shop.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.shop.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteShopFromDB = async (id: string): Promise<Shop | null> => {
  await prisma.shop.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const ShopDeletedData = await prisma.shop.delete({
    where: {
      id,
    },
  });

  return ShopDeletedData;
};

export const ShopService = {
  createShopIntoDB,
  getShopIntoDB,
  getShopByIdFromDB,
  updateShopFromDB,
  deleteShopFromDB,
};
