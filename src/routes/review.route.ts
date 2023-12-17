import express from 'express'
import { reviewController } from '../controllers/review.controller'

const router = express.Router()

router.get('/', reviewController.getAllReviews)
router.post('/create-review', reviewController.createReview)
router.get('/:id', reviewController.getSingleReview)
router.patch('/update/:id', reviewController.updateReview)
router.delete('/delete/:id', reviewController.deleteReview)

export const reviewRoutes = router
