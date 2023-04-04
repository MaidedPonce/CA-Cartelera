const express = require('express')

const { movieControllers } = require('../../../controllers')

module.exports = dependencies => {
  const router = express.Router()
  const { getMovieById, getAllMovies, addMovies } =
    movieControllers(dependencies)

  /**
   * @swagger
   *  components:
   *   schemas:
   *      Movie:
   *          type: object
   *          properties:
   *              title:
   *                  type: string
   *                  description: Title of the movie
   *              description:
   *                  type: string
   *                  description: Description of the movie
   *              originalTitle:
   *                  type: string
   *                  description: Original title of the movie
   *              clasification:
   *                  type: string
   *                  description: Clasification of the movie
   *              duration:
   *                  type: string
   *                  description: Duration of the movie
   *          required:
   *              - title
   *              - description
   *              - originalTitle
   *              - clasification
   *              - duration
   *          example:
   *              title: Crepusculo
   *              description: 'Bella Swan se va a vivir con su padre, al pueblo de Forks, donde conoce a Edward, un atractivo y misterioso chico con un gran secreto: es un vampiro. Pero la familia del chico guarda una peculiaridad: no se alimenta de sangre humana.'
   *              originalTitle: Crepusculo
   *              clasification: Romance/Fantasía
   *              duration: 2h 2m
   */

  /**
   * @swagger
   * /api/v1/movies:
   * get:
   *   summary: return all movies
   *   tags: [Movie]
   *   responses:
   *       200:
   *           description: all movies
   *           content:
   *               application/json:
   *                   schema:
   *                      type: array
   *                      items:
   *                       $ref: '#/components/schemasMovie'
   */
  router.route('/').get(getAllMovies)
  router.route('/:id').get(getMovieById)
  router.route('/').post(addMovies)
  return router
}
