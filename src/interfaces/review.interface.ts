/* eslint-disable no-unused-vars */
import { Model, Schema } from 'mongoose'

export interface IReview {
  review: string
  rating: number
  tour: Schema.Types.ObjectId
  user: Schema.Types.ObjectId
}

export interface IReviewModel extends Model<IReview> {
  calcAverageRatings(tourId: Schema.Types.ObjectId): Promise<void>
}
