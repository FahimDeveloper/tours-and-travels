import { NextFunction, Request, Response } from 'express'
import { userServices } from '../services/user.services'
import { sendSuccessResponse } from '../utils/sendSuccessResponse'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const result = await userServices.createUserIntoDB(userData)
    sendSuccessResponse(res, {
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUsersFromDB()
    sendSuccessResponse(res, {
      message: 'All users successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await userServices.getSingleUserFromDB(id)
    sendSuccessResponse(res, {
      message: 'User successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await userServices.updateUserIntoDB(id, data)
    sendSuccessResponse(res, {
      message: 'User updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await userServices.deleteUserFromDB(id)
    sendSuccessResponse(res, {
      message: 'User deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
