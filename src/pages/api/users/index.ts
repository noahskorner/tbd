import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

export default handler;
