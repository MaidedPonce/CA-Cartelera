const mongoose = require('mongoose')
const entityMovie = 'Movie'

const Movie = mongoose.models[entityMovie];

const repository = () => {
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