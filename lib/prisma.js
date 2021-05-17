// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// const prisma = PrismaClient()

if (process.env.NODE_ENV === 'production') {
  const prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  const prisma = global.prisma;
}

export default prisma;

// whereever we need to access database, we import 'prisma' instance in that file