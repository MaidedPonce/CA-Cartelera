const { Response } = require("../../frameworks/common/Response")


module.exports = dependencies => {
    const { useCases: { movie: { getMovieById } } } = dependencies
    const getMovieByIdFunction = async (req, res, next) => {
        try {
            const { id } = req.query
            const getMovieByIdFunction = getMovieById(dependencies)
            const response = await getMovieByIdFunction.execute(id)
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

    return getMovieByIdFunction
}