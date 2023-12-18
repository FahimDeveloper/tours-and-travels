import express from 'express'
import { routes } from '../constants/routes.constants'

const globalRoute = express.Router()

routes.forEach((router) => globalRoute.use(router.path, router.route))

export default globalRoute
