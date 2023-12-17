import { Request, Response } from 'express'
import { BookingServices } from '../services/booking.services'

const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body
    const result = await BookingServices.createBookingIntoDB(bookingData)
    res.status(200).json({
      success: true,
      message: 'Booking created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Booking create failed',
      error: error,
    })
  }
}

const getAllBookings = async (req: Request, res: Response) => {
  try {
    const result = await BookingServices.getAllBookingsFromDB()
    res.status(200).json({
      success: true,
      message: 'All bookings successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bookings retrieved failed',
      error: error,
    })
  }
}

const getSingleBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await BookingServices.getSingleBookingFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Booking successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Booking retrieved failed',
      error: error,
    })
  }
}

const updateBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await BookingServices.updateBookingIntoDB(id, data)
    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Booking updated failed',
      error: error,
    })
  }
}

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await BookingServices.deleteBookingFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Booking deleted failed',
      error: error,
    })
  }
}

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
}
