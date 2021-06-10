import { PrismaClient } from "@prisma/client";

export default async function handle(req, res) {
  const prisma = new PrismaClient();
  const { fName, lName, email, universityCode, educationConsultant } = req.body;

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

  // They are a student
  if (educationConsultant == false) {
    const newStudent = await prisma.student.create({
      data: {
        user: newUser,
      }
    })
  // They are a education consultant
  } else {
    const newEducationConsultant = await prisma.educationConsultant.create({
      data: {
        user: newUser,
      }
    })
  }
}