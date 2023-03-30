const { Response } = require("../../frameworks/common/Response")

module.exports = dependencies => {
    const { useCases: { movie: { getAllMovies } } } = dependencies
    const getAllMoviesController = async(req, res, next) => {
        try {
            // const { body } = req.body
            const getAllMoviesController = getAllMovies(dependencies)
            const response = await getAllMoviesController.execute()
            console.log('response:', response)

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
    return getAllMoviesController
}