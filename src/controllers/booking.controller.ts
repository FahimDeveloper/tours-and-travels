import { RequestHandler } from 'express'
import { BookingServices } from '../services/booking.services'
import { sendSuccessResponse } from '../utils/sendSuccessResponse'

const createBooking: RequestHandler = async (req, res, next) => {
  try {
    const bookingData = req.body
    const result = await BookingServices.createBookingIntoDB(bookingData)
    sendSuccessResponse(res, {
      message: 'Booking created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllBookings: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookingServices.getAllBookingsFromDB()
    sendSuccessResponse(res, {
      message: 'All bookings successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleBooking: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await BookingServices.getSingleBookingFromDB(id)
    sendSuccessResponse(res, {
      message: 'Booking successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateBooking: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await BookingServices.updateBookingIntoDB(id, data)
    sendSuccessResponse(res, {
      message: 'Booking updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteBooking: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    await BookingServices.deleteBookingFromDB(id)
    sendSuccessResponse(res, {
      message: 'Booking deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
}
