import { PrismaClient } from "@prisma/client";

export default async function handle(req, res) {
  console.log("Line 4");
  try {
    const prisma = new PrismaClient();
    const {
      fName,
      lName,
      email,
      universityCode,
      consultantCode,
      educationConsultant,
    } = req.body;

    // Check if the user is already in the database,
    // if they are, don't let them create a new account
    const userInTable = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log("Line 22");
    if (!(userInTable == null)) {
      console.log("Userrrr err")
      return 'This email is already associated with an account';
    }

    // Check consultant code first, if code is not found
    // Return error
    if (educationConsultant) {
      // This depends on how we do it, are we going to have a table
      // Where admins can enter consultant codes?
      // Will admin just input the associated email ?
      if (consultantCode == null || consultantCode == "") {
        return 'Invalid education consultant code, contact the admin if this persists';
      }
    }

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
        },
      });
      // They are a education consultant
    } else {
      const newEducationConsultant = await prisma.educationConsultant.create({
        data: {
          user: newUser,
        },
      });
    }
  } catch (err) {
    return 'Error in creating new user';
  }
}
