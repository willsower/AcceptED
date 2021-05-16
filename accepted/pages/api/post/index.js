import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const prisma = new PrismaClient()
  const { fullName, email, universityCode, password } = req.body;

  // seperate fullName into First name and last name at whitespace:
  const nameArray = fullName.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
  const firstName = nameArray[0];
  const LastName = nameArray[1];
  console.log(firstName);
  console.log(LastName)
  // const session = await getSession({ req })

  const newUser = await prisma.user.create({
    data: {
      fname: firstName,
      lname: LastName,
      email: email,
      universityCode: parseInt(universityCode, 10),
      password: password,
      student: {
        create: { }
      }
    },
  })
  
  res.json(newUser);
}