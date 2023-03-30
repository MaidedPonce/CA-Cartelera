const express = require('express')
const moviesRouter = require('./movies')

module.exports = dependencies => {
    const routes = express.Router()
    const movies = moviesRouter(dependencies)
    routes.use('/movies', movies)
    return routes
}