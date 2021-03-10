import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const { id } = req.body;

    const tweet = await prisma.tweet.delete({
      where: { id },
    });
  
    res.json(tweet);
    return;  
  } catch (error) {
    
  }  finally {
    await prisma.$disconnect()
  }
  
};
