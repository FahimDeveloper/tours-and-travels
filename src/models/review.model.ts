import { Schema, model } from 'mongoose'
import { IReview, IReviewModel } from '../interfaces/review.interface'
import TourModel from './tour.model'

const reviewSchema = new Schema<IReview, IReviewModel>(
  {
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
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
  },
  { timestamps: true },
)

reviewSchema.index({ tour: 1, user: 1 }, { unique: true })

reviewSchema.statics.calcAverageRatings = async function (
  tourId: Schema.Types.ObjectId,
) {
  const stats = await this.aggregate([
    { $match: { tour: tourId } },
    {
      $group: {
        _id: '$tour',
        numberOfRatings: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ])
  if (stats.length > 0) {
    await TourModel.findByIdAndUpdate(tourId, {
      ratingAverage: stats[0].numberOfRatings,
      ratingQuantity: stats[0].avgRating,
    })
  }
}

const ReviewModel = model<IReview, IReviewModel>('Review', reviewSchema)

export default ReviewModel
