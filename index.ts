import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: "Alan",
      email: "alntruong@gmail.com",      
      password: "123",      
    }
  })

  const allUser = await prisma.user.findMany()

  console.dir(allUser, { depth: null })
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })