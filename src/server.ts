import mongoose from 'mongoose'
import app from './app'
import config from './config'

const port = config.port

const dbConnection = async () => {
  try {
    await mongoose.connect(`${config.database_url}`)
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
dbConnection()
