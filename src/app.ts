import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './routes/user.route'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users', userRoutes)
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to tours and travel agency!',
  })
})

export default app
