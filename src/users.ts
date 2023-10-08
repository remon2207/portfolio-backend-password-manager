import express from 'express'
import { prisma } from '@/utils/prisma'

export const router = express.Router()

router.route('/').get(async (_, res) => {
  const allUsers = await prisma.user.findMany()

  res.json(allUsers)
})

router.route('/:id').get(async (req, res) => {
  const id = Math.trunc(Number(req.params.id))

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    })

    res.json(user)
  } catch {
    const error = {
      title: 'ユーザーが見つかりませんでした',
      code: 500,
    }
    res.status(500).json(error)
  }
})
