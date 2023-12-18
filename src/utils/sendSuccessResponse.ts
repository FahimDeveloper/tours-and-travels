import { Response } from 'express'

type TSuccessResponse<T> = {
  message: string
  data?: T | T[] | null
}

export const sendSuccessResponse = <T>(
  res: Response,
  data: TSuccessResponse<T>,
) => {
  res.status(200).json({
    success: false,
    message: data.message,
    data: data.data,
  })
}
