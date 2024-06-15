const mongoose = require('mongoose')
const entityName = 'Movie'
const { schemas: { movies: moviesSchema } } = require('../../db/mongo')

const repository = () => {
    const Movie = mongoose.model(entityName, moviesSchema);
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
        },
        getAll: async () => {
            return Movie.find()
        }
    }
}

module.exports = repository()