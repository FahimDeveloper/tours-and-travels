import { Schema, model } from 'mongoose'
import { IReview } from '../interfaces/review.interface'

const reviewSchema = new Schema<IReview>(
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

const ReviewModel = model<IReview>('Review', reviewSchema)

export default ReviewModel
