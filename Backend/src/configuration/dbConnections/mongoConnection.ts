import { Logger } from '../logger'
import { mongoConnString } from '../settings'
import mongoose from 'mongoose'

class MongoConnection {
  tryTimes = 0

  mongooseConnectDB = async () => {
    mongoose.set('strictQuery', true)
    await mongoose
      .connect(mongoConnString())
      .then(() => {
        Logger.info('Mongoose connected!')
        this.tryTimes = 0
      })
      .catch((err: Error) => {
        if (this.tryTimes < 3) {
          setTimeout(() => {
            this.tryTimes += 1
            this.mongooseConnectDB()
          }, 2000)
          Logger.info(`Retrying mongoose connection ${this.tryTimes}`)
        } else {
          Logger.error('Error connecting to mongoose', err)
        }
      })
  }
}

export default MongoConnection
