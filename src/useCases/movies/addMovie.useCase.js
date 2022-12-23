const { Movie } = require('../../entity/index')

module.exports = dependencies => {
    const { moviesRepository } = dependencies;
    if(!moviesRepository) {
        throw new Error('The movies repository should be exist')
    }
    
    const execute = ({ title, description, originalTitle, clasification, duration }) => {
        const movie = new Movie({ title, description, originalTitle, clasification, duration })
        return moviesRepository.add(movie)
    }
    return {
        execute
    }
}
