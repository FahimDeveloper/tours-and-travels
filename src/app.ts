import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { globarErrorHandler } from './middlewares/globalErrorHandler'
import { notFound } from './middlewares/notFound'
import globalRoute from './routes'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

// inital route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to tours and travel agency!',
  })
})

//globalRoutes
app.use('/api/v1', globalRoute)

//catch not found routes
app.use(notFound)

//global error handler
app.use(globarErrorHandler)

export default app
