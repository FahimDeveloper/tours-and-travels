import { Request, Response } from 'express'
import { ReviewServices } from '../services/review.services'

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const result = await ReviewServices.createReviewIntoDB(reviewData)
    res.status(200).json({
      success: true,
      message: 'Review created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Review create failed',
      error: error,
    })
  }
}

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReviewsFromDB()
    res.status(200).json({
      success: true,
      message: 'All reviews successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Reviews retrieved failed',
      error: error,
    })
  }
}

const getSingleReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await ReviewServices.getSingleReviewFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Review successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Review retrieved failed',
      error: error,
    })
  }
}

const updateReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await ReviewServices.updateReviewIntoDB(id, data)
    res.status(200).json({
      success: true,
      message: 'Review updated successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Review updated failed',
      error: error,
    })
  }
}

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await ReviewServices.deleteReviewFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Review deleted failed',
      error: error,
    })
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
