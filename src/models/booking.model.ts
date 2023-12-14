import { Schema, model } from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'

const bookingSchema = new Schema<IBooking>(
  {
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const BookingModel = model<IBooking>('Booking', bookingSchema)

export default BookingModel
