const mongoose = require('mongoose')
const entityMovie = 'Movie'

const { movie: movieSchema } = require('../../db/mongo')

const repository = () => {
    
    const Movie = mongoose.model(entityMovie, movieSchema)


    return {
        add: async (movie) => {
            const mongoObject = new Movie(movie)
            return mongoObject.save()
        },
        getById: async (id) => {
            return Movie.findOne({
                _id: id,
                deletedAt: {
                    $exists: false
                }
            })
        } 
    }
}

module.exports = repository()