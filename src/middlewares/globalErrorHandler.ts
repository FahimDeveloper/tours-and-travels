/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

export const globarErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 400
  const message = error.message || 'Something went wrong'
  const success = error.success
  res.status(statusCode).json({
    success,
    message,
  })
}
