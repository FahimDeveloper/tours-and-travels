import express from 'express'
import { bookingController } from '../controllers/booking.controller'

const router = express.Router()

router.get('/', bookingController.getAllBookings)
router.post('/create-tour', bookingController.createBooking)
router.get('/:id', bookingController.getSingleBooking)
router.patch('/update/:id', bookingController.updateBooking)
router.delete('/delete/:id', bookingController.deleteBooking)

export const bookingRoutes = router
