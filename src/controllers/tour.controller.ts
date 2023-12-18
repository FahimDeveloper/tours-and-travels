import { RequestHandler } from 'express'
import { TourServices } from '../services/tour.services'
import { sendSuccessResponse } from '../utils/sendSuccessResponse'

const createTour: RequestHandler = async (req, res, next) => {
  try {
    const tourData = req.body
    const result = await TourServices.createTourIntoDB(tourData)
    sendSuccessResponse(res, {
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllTours: RequestHandler = async (req, res, next) => {
  try {
    const result = await TourServices.getAllToursFromDB()
    sendSuccessResponse(res, {
      message: 'All tours successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleTour: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await TourServices.getSingleTourFromDB(id)
    sendSuccessResponse(res, {
      message: 'Tour successfully retrieved',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateTour: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await TourServices.updateTourIntoDB(id, data)
    sendSuccessResponse(res, {
      message: 'Tour updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteTour: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    await TourServices.deleteTourFromDB(id)
    sendSuccessResponse(res, {
      message: 'Tour deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}

const getNextSchedule: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await TourServices.getNextSchedule(id)
    sendSuccessResponse(res, {
      message: 'Nearest Schedule fatched successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
