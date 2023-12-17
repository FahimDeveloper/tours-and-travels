import { IBooking } from '../interfaces/booking.interface'
import BookingModel from '../models/booking.model'

const createBookingIntoDB = async (data: IBooking): Promise<IBooking> => {
  const result = await BookingModel.create(data)
  return result
}

const getAllBookingsFromDB = async (): Promise<Array<IBooking>> => {
  const result = await BookingModel.find()
  return result
}

const getSingleBookingFromDB = async (id: string): Promise<IBooking | null> => {
  const result = await BookingModel.findById(id)
  return result
}

const updateBookingIntoDB = async (
  id: string,
  data: Partial<IBooking>,
): Promise<IBooking | null> => {
  const result = await BookingModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteBookingFromDB = async (id: string): Promise<IBooking | null> => {
  const result = await BookingModel.findOneAndDelete({ _id: id })
  return result
}

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getSingleBookingFromDB,
  updateBookingIntoDB,
  deleteBookingFromDB,
}
