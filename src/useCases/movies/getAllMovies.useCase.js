module.exports = dependencies => {
    const { moviesRepository } = dependencies
    if(!moviesRepository) {
        throw new Error('The movies repository should be exist')
    }
    const execute = () => {
        return moviesRepository.getAll()
    }
    return {
        execute
    }
}