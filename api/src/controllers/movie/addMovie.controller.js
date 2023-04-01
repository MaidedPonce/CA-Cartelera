const { Response } = require("../../../frameworks/common/Response")


module.exports = dependencies => {
    const { useCases: { movie: { addMovieUseCase } } } = dependencies
    const addMovieByIdFunction = async (req, res, next) => {
        try {
            const body = req.body
            console.log(body)
            const addMovieByIdFunction = addMovieUseCase(dependencies)
            const response = await addMovieByIdFunction.execute(body)
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

    return addMovieByIdFunction
}