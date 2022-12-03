const moviesRespository = require('../../../src/infra/repositories/inMemory')
const { Movie } = require('../../../src/core/entity/index')

describe('Movies repository', () => {
    test('New movie should be added and returned', async() => {
        const testMovie = new Movie({ title: 'Scream 1', description: 'lorem ipsum', originalTitle: 'lorem ipsum', clasification: 'B2', duration: '339 min' })
        const movieAdded = await moviesRespository.moviesRepository.add(testMovie)
        expect(movieAdded).toBeDefined()
        expect(movieAdded.title).toBe(testMovie.title)
    })
    test('New movie should be deleted', async() => {})
    test('New movie should be updated', async() => {})
})