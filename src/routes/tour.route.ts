import express from 'express'
import { tourController } from '../controllers/tour.controller'

const router = express.Router()

router.get('/', tourController.getAllTours)
router.post('/create-tour', tourController.createTour)
router.get('/:id', tourController.getSingleTour)
router.get('/:id/next-schedule', tourController.getNextSchedule)
router.patch('/update/:id', tourController.updateTour)
router.delete('/delete/:id', tourController.deleteTour)

export const tourRoutes = router
