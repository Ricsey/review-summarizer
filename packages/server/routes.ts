import express, { type Request, type Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Hello World!' })
})

export default router
