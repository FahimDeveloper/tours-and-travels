import express from 'express'
import { userController } from '../controllers/user.controller'

const router = express.Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.post('/create-user', userController.createUser)
router.patch('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

export const userRoutes = router
