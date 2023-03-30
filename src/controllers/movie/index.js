const getMovieById = require('./getMovieById.controller')
const getAllMovies = require('./getMovies.controller')
const addMovies = require('./addMovie.controller')

module.exports = dependencies => {
    return {
        getMovieById: getMovieById(dependencies),
        getAllMovies: getAllMovies(dependencies),
        addMovies: addMovies(dependencies)
    }
}