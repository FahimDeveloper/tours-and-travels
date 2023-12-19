import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsyncFn = (fun: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fun(req, res, next)).catch((error) => next(error))
  }
}

export default catchAsyncFn
