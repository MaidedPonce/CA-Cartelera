const { Response } = require("../../frameworks/common/Response")

module.exports = dependencies => {
    const { useCases: { movie: { getAllMovies } } } = dependencies
    const getRandomController = async(req, res, next) => {
        try {
            // const { body } = req.body
            const getRandomController = getAllMovies(dependencies)
            const response = await getRandomController.execute()
            const shuffled = [...response].sort(() => 0.5 - Math.random());
            const randomMovies = shuffled.slice(0, 5);

            res.json(new Response({
                status: true, 
                error: false, 
                content: randomMovies
            }))
            next()
        } catch (error) {
            next(error)
        }
    }
    return getRandomController
}