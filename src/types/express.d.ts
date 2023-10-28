import type { Request } from 'express'

export interface RequestBody extends Request {
  body: {
    name: string
    email: string
  }
}
