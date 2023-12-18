import { RequestHandler } from 'express'
import { ReviewServices } from '../services/review.services'
import { sendSuccessResponse } from '../utils/sendSuccessResponse'

const createReview: RequestHandler = async (req, res, next) => {
  try {
    const reviewData = req.body
    const result = await ReviewServices.createReviewIntoDB(reviewData)
    sendSuccessResponse(res, {
      message: 'Review created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllReviews: RequestHandler = async (req, res, next) => {
  try {
    const result = await ReviewServices.getAllReviewsFromDB()
    sendSuccessResponse(res, {
      message: 'All reviews successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleReview: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await ReviewServices.getSingleReviewFromDB(id)
    sendSuccessResponse(res, {
      message: 'Review successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateReview: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await ReviewServices.updateReviewIntoDB(id, data)
    sendSuccessResponse(res, {
      message: 'Review updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteReview: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    await ReviewServices.deleteReviewFromDB(id)
    sendSuccessResponse(res, {
      message: 'Review deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
