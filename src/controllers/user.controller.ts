import { Request, Response } from 'express'
import { userServices } from '../services/user.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userServices.createUserIntoDB(userData)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User create failed',
      error: error,
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB()
    res.status(200).json({
      success: true,
      message: 'All users successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Users retrieved failed',
      error: error,
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await userServices.getSingleUserFromDB(id)
    res.status(200).json({
      success: true,
      message: 'User successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User retrieved failed',
      error: error,
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await userServices.updateUserIntoDB(id, data)
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User updated failed',
      error: error,
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await userServices.deleteUserFromDB(id)
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User deleted failed',
      error: error,
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
