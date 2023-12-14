import { IUser } from '../interfaces/user.interface'
import UserModel from '../models/user.model'

const createUserIntoDB = async (data: IUser): Promise<IUser> => {
  const result = await UserModel.create(data)
  return result
}

const getAllUsersFromDB = async (): Promise<Array<IUser>> => {
  const result = await UserModel.find()
  return result
}

const getSingleUserFromDB = async (id: string): Promise<IUser | null> => {
  const result = await UserModel.findById(id)
  return result
}

const updateUserIntoDB = async (
  id: string,
  data: Partial<IUser>,
): Promise<IUser | null> => {
  const result = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteUserFromDB = async (id: string): Promise<IUser | null> => {
  const result = await UserModel.findOneAndDelete({ _id: id })
  return result
}

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
}
