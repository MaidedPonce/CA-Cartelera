const express = require('express')

const { movieControllers } = require('../../../controllers')

module.exports = dependencies => {
  const router = express.Router()
  const { getMovieById, getAllMovies, addMovies } = movieControllers(dependencies)
  router.route('/').get(getAllMovies)
  router.route('/:id').get(getMovieById)
  router.route('/').post(addMovies)
  return router
}
