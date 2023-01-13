const getMovieById = require('./getMovieById.controller')

module.exports = dependencies => {
    return {
        getMovieById: getMovieController(dependencies)
    }
}