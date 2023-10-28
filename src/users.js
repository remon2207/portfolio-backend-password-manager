import { prisma } from '@/utils/prisma'
import express from 'express'
import type { RequestBody } from '@/types/express'

export const router = express.Router()

router
  .route('/')
  .get(async (_, res) => {
    const allUsers = await prisma.user.findMany()

    res.json(allUsers)
  })
  .post(async (req: RequestBody, res) => {
    const { name, email } = req.body

    try {
      await prisma.user.create({
        data: {
          name,
          email,
        },
      })

      const message = {
        title: 'ユーザーを作成しました',
        code: 201,
      }

      res.status(201).json(message)
    } catch {
      const error = {
        title: 'ユーザー作成に失敗しました',
        code: 500,
      }

      res.status(500).json(error)
    }
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
