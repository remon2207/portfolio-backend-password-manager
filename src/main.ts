import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router as users } from './users'

const app = express()

app.use(cors({ origin: process.env.APP_URL }))

app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT)
}

export const viteNodeApp = app
