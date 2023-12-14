import { Schema } from 'mongoose'

export interface IBooking {
  tour: Schema.Types.ObjectId
  user: Schema.Types.ObjectId
  status: string
}
