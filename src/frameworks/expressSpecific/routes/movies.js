const express = require('express')

const { movieControllers } = require('../../../controllers')

module.exports = dependencies => {
    const router = express.Router()
    const { getMovieById, getAllMovies } = movieControllers(dependencies)

    router.route('/').get(getAllMovies)
    router.route('/:id').get(getMovieById)

    return router
}