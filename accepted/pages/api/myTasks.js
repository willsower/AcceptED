import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const tasks = await prisma.tasks.create({ data: JSON.parse(body) });
    res.json(tasks);
  }
}