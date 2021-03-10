import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const tweets = await prisma.tweet.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: { select: { username: true, id: true } } },
    });
    res.json(tweets);
  } catch (error) {
    
  } finally {
    await prisma.$disconnect()
  }

};
