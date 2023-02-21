const { Response } = require("../../frameworks/common/Response")


module.exports = dependencies => {

    const { useCases: { getMovieByIdUseCase } } = dependencies
    const getMovieById = async (req, res, next) => {
        try {
            const { id } = req.query
            const getMovieById = getMovieByIdUseCase(dependencies)
            const response = await getMovieById.execute(id)
            res.json(new Response({
                status: true, 
                error: false, 
                content: response
            }))
            next()
        } catch (error) {
            next(error)
        }
    }

    return getMovieById
}