/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITour } from '../interfaces/tour.interface'
import TourModel from '../models/tour.model'

const createTourIntoDB = async (data: ITour): Promise<ITour> => {
  const result = await TourModel.create(data)
  return result
}

const getAllToursFromDB = async (): Promise<Array<ITour>> => {
  const result = await TourModel.find()
  return result
}

const getSingleTourFromDB = async (id: string): Promise<ITour | null> => {
  const result = await TourModel.findById(id).populate('reviews')
  return result
}

const updateTourIntoDB = async (
  id: string,
  data: Partial<ITour>,
): Promise<ITour | null> => {
  const result = await TourModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteTourFromDB = async (id: string): Promise<ITour | null> => {
  const result = await TourModel.findOneAndDelete({ _id: id })
  return result
}

const getNextSchedule = async (id: string): Promise<any> => {
  const result = await TourModel.findById(id)
  const nextSchedule = result?.getNextNearestStartDateAndEndDate()
  return { result, nextSchedule }
}

export const TourServices = {
  createTourIntoDB,
  getAllToursFromDB,
  getSingleTourFromDB,
  updateTourIntoDB,
  deleteTourFromDB,
  getNextSchedule,
}
