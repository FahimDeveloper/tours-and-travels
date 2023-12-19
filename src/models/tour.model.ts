import { Schema, model } from 'mongoose'
import { ITour, ITourMethods, TTourModel } from '../interfaces/tour.interface'
import slugify from 'slugify'

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    durationHours: {
      type: Number,
      required: true,
    },
    ratingAverage: {
      type: Number,
      required: true,
    },
    availableSeats: {
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
    startDates: {
      type: [Date],
      required: true,
    },
    startLocations: {
      type: String,
      required: true,
    },
    locations: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

tourSchema.virtual('durationDays').get(function () {
  return this.durationHours / 24
})

tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
})

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

tourSchema.methods.getNextNearestStartDateAndEndDate = function () {
  const today = new Date()
  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today
  })

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())

  const nearestStartDate = futureDates[0]
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  )
  return {
    nearestStartDate,
    estimatedEndDate,
  }
}

const TourModel = model<ITour, TTourModel>('Tour', tourSchema)

export default TourModel
