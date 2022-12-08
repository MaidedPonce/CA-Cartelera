const { Movie } = require('../core/entity')
//const { moviesRepositories } 
module.exports = dependencies => {
    const { moviesRepositories } = dependencies
    if(!moviesRepositories) {
        throw new Error("The movies repository should exist in dependencies")
    }
}