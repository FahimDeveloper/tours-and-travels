import { Request, Response } from 'express'
import { TourServices } from '../services/tour.services'

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const result = await TourServices.createTourIntoDB(tourData)
    res.status(200).json({
      success: true,
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Tour create failed',
      error: error,
    })
  }
}

const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await TourServices.getAllToursFromDB()
    res.status(200).json({
      success: true,
      message: 'All tours successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Tours retrieved failed',
      error: error,
    })
  }
}

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await TourServices.getSingleTourFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Tour successfully retrieved',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Tour retrieved failed',
      error: error,
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await TourServices.updateTourIntoDB(id, data)
    res.status(200).json({
      success: true,
      message: 'Tour updated successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Tour updated failed',
      error: error,
    })
  }
}

const deleteTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await TourServices.deleteTourFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Tour deleted successfully',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Tour deleted failed',
      error: error,
    })
  }
}

const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await TourServices.getNextSchedule(id)
    res.status(200).json({
      success: true,
      message: 'Nearest Schedule fatched successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Nearest Schedule fatched failed',
      error: error,
    })
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
