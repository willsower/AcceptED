import { PrismaClient } from "@prisma/client";

export default async function handle(req, res) {
  const prisma = new PrismaClient();
  const { fName, lName, email, universityCode } = req.body;

  const newUser = await prisma.user.create({
    data: {
      fname: fName,
      lname: lName,
      email: email,
      universityCode: parseInt(universityCode, 10),
      password: "temp",
    },
  });

  res.json(newUser);
}