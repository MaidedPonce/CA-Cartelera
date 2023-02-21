const { inMemory: inMemoryDB } = require('../../db/index')

const { v4: uuidv4 } = require('uuid')

module.exports = {
    add: async (movie) => {
        if(!movie.id) {
            movie.id = uuidv4()
        }
        inMemoryDB.movies.push(movie)
        return movie
    },
    update: async (movie) => {
        const index = inMemoryDB.movies.findIndex(item => item.id === movie.id)
        if(index >= 0) {
            inMemoryDB.movies[index] = movie
            return inMemoryDB.movies[index]
        }
        return null
    },
    delete: async(movie) => {
        const index = inMemoryDB.movies.findIndex(item => item.id === movie.id)
        if(index >= 0) {
            inMemoryDB.movies.splice(index, 1)
            return movie
        }
        return null
    },
    getById: async (id) => {
        return inMemoryDB.movies.find(item => item.id === id)
    } 
}