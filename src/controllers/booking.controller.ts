import { BookingServices } from '../services/booking.services'
import catchAsyncFn from '../utils/catchAsyncFn'
import { sendSuccessResponse } from '../utils/sendSuccessResponse'

const createBooking = catchAsyncFn(async (req, res) => {
  const bookingData = req.body
  const result = await BookingServices.createBookingIntoDB(bookingData)
  sendSuccessResponse(res, {
    message: 'Booking created successfully',
    data: result,
  })
})

const getAllBookings = catchAsyncFn(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB()
  sendSuccessResponse(res, {
    message: 'All bookings successfully retrieved',
    data: result,
  })
})

const getSingleBooking = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  const result = await BookingServices.getSingleBookingFromDB(id)
  sendSuccessResponse(res, {
    message: 'Booking successfully retrieved',
    data: result,
  })
})

const getAllBookingsOfAUser = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  const result = await BookingServices.getAllBookingsOfAUserFromDB(id)
  sendSuccessResponse(res, {
    message: 'Booking successfully retrieved',
    data: result,
  })
})

const updateBooking = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const result = await BookingServices.updateBookingIntoDB(id, data)
  sendSuccessResponse(res, {
    message: 'Booking updated successfully',
    data: result,
  })
})

const deleteBooking = catchAsyncFn(async (req, res) => {
  const { id } = req.params
  await BookingServices.deleteBookingFromDB(id)
  sendSuccessResponse(res, {
    message: 'Booking deleted successfully',
  })
})

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  getAllBookingsOfAUser,
  updateBooking,
  deleteBooking,
}
