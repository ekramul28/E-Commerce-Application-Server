import { fileUploader } from "../../helpars/fileUploader";
import { IFile } from "../../interfaces/file";
import prisma from "../shared/prisma";

const createProduct = async (req: any) => {
  const file = req.file as IFile[];
  if (file) {
    const uploadToCloudinary =
      await fileUploader.multepaleImageuploadToCloudinary(file);
    req.body.images = uploadToCloudinary;
  }

  const createdProductData = await prisma.product.create({
    data: req.body,
  });

  return createdProductData;
};

export const ProductService = {
  createProduct,
};
