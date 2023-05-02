require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./frameworks/expressSpecific/routes')
const API_PREFIX = process.env.API_PREFIX || '/api/v1'
const depedencies = require('./config/dependencies')
const ErrorHandler = require('./frameworks/expressSpecific/ErrorHandler')
const { connect: connectToMongo } = require('./frameworks/db/mongo')
const path = require('path')
// swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ca cartelera is an api made it with Mongo, Express and Node',
      version: '1.0.0',
      servers: [
        {
          url: 'https://ca-cartelera.onrender.com'
        }
      ]
    }
  },
  apis: [`${path.join(__dirname, './frameworks/expressSpecific/routes/*.js')}`]
}

module.exports = {
  start: () => {
    app.use(express.json())
    app.use(
      express.urlencoded({
        extended: true
      })
    )
    app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

    app.use(API_PREFIX, routes(depedencies))
    app.use(ErrorHandler)
    app.listen(PORT, () => {
      console.log(`App is running under port ${PORT}`)
      connectToMongo()
    })
  }
}
