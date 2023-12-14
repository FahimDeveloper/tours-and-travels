import { Document, Query, Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    photo: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    userStatus: { type: String, enum: ['active', 'inactive'], required: true },
  },
  { timestamps: true },
)

userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: 'active' } })
  next()
})

const UserModel = model<IUser>('User', userSchema)

export default UserModel
