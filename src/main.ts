import 'dotenv/config'
import { router as users } from '@/users'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors({ origin: process.env.APP_URL }))

app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT)
}

export const viteNodeApp = app
