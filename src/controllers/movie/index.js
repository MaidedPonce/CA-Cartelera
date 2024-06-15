const getMovieById = require('./getMovieById.controller')
const getAllMovies = require('./getMovies.controller')
const addMovies = require('./addMovie.controller')
const getRandom = require('./getRandom.controller')

module.exports = dependencies => {
    return {
        getMovieById: getMovieById(dependencies),
        getAllMovies: getAllMovies(dependencies),
        addMovies: addMovies(dependencies),
        getRandom: getRandom(dependencies)
    }
}