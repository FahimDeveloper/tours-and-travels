import { Schema, model } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'

const tourSchema = new Schema<ITour>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    ratingAverage: {
      type: Number,
      required: true,
    },
    ratingQuantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageCover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    startDate: {
      type: [Date],
      required: true,
    },
    startLocation: {
      type: String,
      required: true,
    },
    locations: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
)

const TourModel = model<ITour>('Tour', tourSchema)

export default TourModel
