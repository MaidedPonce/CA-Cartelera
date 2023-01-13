

module.exports = dependencies => {

    const { useCases: { getMovieByIdUseCase } } = dependencies
    const getMovieById = async (req, res, next) => {
        try {
            const { query = {} } = req
            const { id } = query
            const getMovieById = getMovieByIdUseCase(dependencies)
            const response = await getMovieById.execute(id)
        } catch (error) {
            next(error)
        }
    }

    return getMovieById
}