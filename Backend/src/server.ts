import { Logger } from './configuration/logger'
import { serverPort } from './configuration/settings'
import AllowedHeadersMiddleware from './configuration/middlewares/allowedHeadersMiddleware'
import MongoConnection from './configuration/dbConnections/mongoConnection'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import corsOptions from './configuration/middlewares/corsMidleware'
import dotenv from 'dotenv'
import errorHandler from './configuration/middlewares/errorHandler/error-handler'
import express from 'express'
import helmet from 'helmet'
import loginRoutes from './basic-auth/routes/basic-auth-routes'
import morgan from 'morgan'

const app = express()
dotenv.config()

//Db
const mongo = new MongoConnection()

//middleware's
app.use(morgan('dev'))
app.use(bodyParser.json()) // to allow json capabilities
app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(helmet())
app.use(AllowedHeadersMiddleware)
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

//endpoints
app.use('/api/authentication', loginRoutes)

//Global error handler
app.use(errorHandler)

//start
const port = serverPort()
app.listen(port, async () => {
  await mongo.mongooseConnectDB()
  Logger.info(`Server running on port ${port}`)
})
