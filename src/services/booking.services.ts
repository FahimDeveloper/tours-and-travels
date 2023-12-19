/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'
import BookingModel from '../models/booking.model'
import TourModel from '../models/tour.model'

const createBookingIntoDB = async (data: IBooking): Promise<IBooking> => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    const booking = await BookingModel.create([data], { session })
    if (!booking) {
      throw new Error('Booking could not be created')
    }
    const tour = await TourModel.findByIdAndUpdate(booking[0].tour, {
      $inc: { availableSeats: -booking[0].bookedSlots },
    })
    if (!tour) {
      throw new Error('Booking could not be created')
    }
    await session.commitTransaction()
    await session.endSession()
    return booking[0]
  } catch (error: any) {
    await session.abortTransaction()
    await session.endSession()
    throw new Error(error)
  }
}

const getAllBookingsFromDB = async (): Promise<Array<IBooking>> => {
  const result = await BookingModel.find()
  return result
}

const getSingleBookingFromDB = async (id: string): Promise<IBooking | null> => {
  const result = await BookingModel.findById(id)
  return result
}

const getAllBookingsOfAUserFromDB = async (
  id: string,
): Promise<IBooking[] | null> => {
  const result = await BookingModel.find({ user: id })
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
  getAllBookingsOfAUserFromDB,
}
