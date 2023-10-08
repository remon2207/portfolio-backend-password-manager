import express from 'express'
import { prisma } from '@/utils/prisma'

export const router = express.Router()

router.route('/').get(async (_, res) => {
  const allUsers = await prisma.user.findMany()

  res.json(allUsers)
})
