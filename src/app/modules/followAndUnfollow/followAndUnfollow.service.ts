import prisma from "../shared/prisma";

const followShop = async (req: any) => {
  const { customerId, shopId } = req.body;
  const result = await prisma.shop.update({
    where: { id: shopId },
    data: {
      followers: {
        connect: { id: customerId },
      },
    },
  });
  return result;
};
const UnFollowShop = async (req: any) => {
  const { customerId, shopId } = req.body;
  const result = await prisma.shop.update({
    where: { id: shopId },
    data: {
      followers: {
        disconnect: { id: customerId },
      },
    },
  });
  return result;
};
const followCount = async (req: any) => {
  const { shopId } = req.params;

  const shop = await prisma.shop.findUnique({
    where: { id: shopId },
    include: { followers: true },
  });

  const allCount = { count: shop?.followers.length };
  return allCount;
};
const isFollow = async (req: any) => {
  const { customerId, shopId } = req.body;

  const shop = await prisma.shop.findFirst({
    where: {
      id: shopId,
      followers: {
        some: { id: customerId },
      },
    },
  });

  const isFollow = { isFollowing: !!shop };
  return isFollow;
};

export const followAndUnFollowService = {
  followShop,
  UnFollowShop,
  followCount,
  isFollow,
};
