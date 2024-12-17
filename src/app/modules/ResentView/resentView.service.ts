import prisma from "../shared/prisma";

const createResentView = async (req: any) => {
  const { userId, productId } = req.body;

  const newRecentView = await prisma.recentView.create({
    data: {
      userId,
      productId,
    },
  });
  return newRecentView;
};
const getResentView = async (req: any) => {
  const { userId } = req.params;

  const recentViews = await prisma.recentView.findMany({
    where: { userId },
    include: {
      product: true,
    },
  });
  return recentViews;
};
const deleteResentView = async (req: any) => {
  const { id } = req.params;

  await prisma.recentView.delete({
    where: { id },
  });

  return null;
};

export const resentViewService = {
  createResentView,
  getResentView,
  deleteResentView,
};
