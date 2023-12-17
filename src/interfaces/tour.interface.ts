import { Model } from 'mongoose'

export interface ITour {
  name: string
  durationHours: number
  ratingAverage: number
  ratingQuantity: number
  price: number
  imageCover: string
  images: string[]
  startDates: Date[]
  startLocations: string
  locations: string[]
  slug: string
}

export interface ITourMethodsProp {
  nearestStartDate: Date | null
  estimatedEndDate: Date | null
}

export interface ITourMethods {
  getNextNearestStartDateAndEndDate(): ITourMethodsProp
}

export type TTourModel = Model<ITour, Record<string, never>, ITourMethods>
