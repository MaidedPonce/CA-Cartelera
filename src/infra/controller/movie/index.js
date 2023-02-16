const getMovieById = require('./getMovieById.controller')
const getAllMovies = require('./getMovies.controller')
module.exports = dependencies => {
    return {
        getMovieById: getMovieById(dependencies),
        getAllMovies: getAllMovies(dependencies)
    }
}