import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './routes/user.route'
import { tourRoutes } from './routes/tour.route'
import { reviewRoutes } from './routes/review.route'
import { bookingRoutes } from './routes/booking.route'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/tours', tourRoutes)
app.use('/api/v1/reviews', reviewRoutes)
app.use('/api/v1/bookings', bookingRoutes)
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to tours and travel agency!',
  })
})

export default app
