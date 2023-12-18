import { IReview } from '../interfaces/review.interface'
import ReviewModel from '../models/review.model'

const createReviewIntoDB = async (data: IReview): Promise<IReview> => {
  const result = await ReviewModel.create(data)
  if (result) {
    ReviewModel.calcAverageRatings(result?.tour)
  }
  return result
}

const getAllReviewsFromDB = async (): Promise<Array<IReview>> => {
  const result = await ReviewModel.find().populate({
    path: 'user',
    select: 'name photo',
  })
  return result
}

const getSingleReviewFromDB = async (id: string): Promise<IReview | null> => {
  const result = await ReviewModel.findById(id)
  return result
}

const updateReviewIntoDB = async (
  id: string,
  data: Partial<IReview>,
): Promise<IReview | null> => {
  const result = await ReviewModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
  if (result) {
    ReviewModel.calcAverageRatings(result?.tour)
  }
  return result
}

const deleteReviewFromDB = async (id: string): Promise<IReview | null> => {
  const result = await ReviewModel.findOneAndDelete({ _id: id })
  return result
}

export const ReviewServices = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
}
