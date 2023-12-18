import { Request, Response } from 'express'

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    message: `The ${req.originalUrl} Route Not Found!`,
  })
}
