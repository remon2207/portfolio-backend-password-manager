import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.create({
    data: {
      name: 'name',
      email: 'email@gmail.com',
      PasswordInfo: {
        create: {
          service: 'サービス',
          email: '',
          name: '',
          password: '',
          isTwoFactor: false,
        },
      },
    },
  })
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
