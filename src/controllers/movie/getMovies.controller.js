const { Response } = require("../../frameworks/common/Response")

module.exports = dependencies => {
    const { useCase: { getMoviesUseCase }} = dependencies
    const getAllMovies = async(req, res, next) => {
        try {
            const { body } = req.body
            const getAllMovies = getMoviesUseCase(dependencies)
            const response = await getAllMovies.execute(body)
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
    return getAllMovies
}