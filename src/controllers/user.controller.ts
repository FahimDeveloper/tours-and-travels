import { userServices } from '../services/user.services'
import { sendSuccessResponse } from '../utils/sendSuccessResponse'
import catchAsyncFn from '../utils/catchAsyncFn'

const createUser = catchAsyncFn(async (req, res) => {
  const userData = req.body
  const result = await userServices.createUserIntoDB(userData)
  sendSuccessResponse(res, {
    message: 'User created successfully',
    data: result,
  })
})

const getAllUsers = catchAsyncFn(async (req, res) => {
  const result = await userServices.getAllUsersFromDB()
  sendSuccessResponse(res, {
    message: 'All users successfully retrieved',
    data: result,
  })
})

const getSingleUser = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  const result = await userServices.getSingleUserFromDB(id)
  sendSuccessResponse(res, {
    message: 'User successfully retrieved',
    data: result,
  })
})

const updateUser = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const result = await userServices.updateUserIntoDB(id, data)
  sendSuccessResponse(res, {
    message: 'User updated successfully',
    data: result,
  })
})

const deleteUser = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  await userServices.deleteUserFromDB(id)
  sendSuccessResponse(res, {
    message: 'User deleted successfully',
  })
})

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
