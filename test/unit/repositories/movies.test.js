const moviesRespository = require('../../../src/infra/repositories/inMemory')
const { Movie } = require('../../../src/core/entity/index')
const Chance = require('chance')
const chance = new Chance()
const { clone, cloneDeep } = require('lodash')

describe('Movies repository', () => {
    test('New movie should be added and returned', async() => {
        const testMovie = new Movie({ title: 'Scream 1', description: 'lorem ipsum', originalTitle: 'lorem ipsum', clasification: 'B2', duration: '339 min' })
        const movieAdded = await moviesRespository.moviesRepository.add(testMovie)
        expect(movieAdded).toBeDefined()
        expect(movieAdded.title).toBe(testMovie.title)
    })
    test('New movie should be deleted', async() => {
        const willBeDeletedMovie = new Movie({ title: 'Scream 1', description: 'lorem ipsum', originalTitle: 'lorem ipsum', clasification: 'B2', duration: '339 min' })
        const shouldStayMovie= new Movie({ title: 'Black Adam', description: 'lorem ipsum', originalTitle: 'lorem ipsum', clasification: 'B2', duration: '339 min' })

        const [ willBeDeletedAddedMovie, shouldStayAddedUser ] = await Promise.all([moviesRespository.moviesRepository.add(willBeDeletedMovie), moviesRespository.moviesRepository.add(shouldStayMovie)])
        expect(willBeDeletedAddedMovie).toBeDefined()
        expect(shouldStayAddedUser).toBeDefined()
        
        const deletedMovie = await moviesRespository.moviesRepository.delete(willBeDeletedAddedMovie)
        expect(deletedMovie).toEqual(willBeDeletedAddedMovie)

        const shouldBeUndefined = await moviesRespository.moviesRepository.getById(deletedMovie.id)
        expect(shouldBeUndefined).toBeUndefined()

        const shouldBeDefinedMovie = await moviesRespository.moviesRepository.getById(shouldStayAddedUser.id)
        expect(shouldBeDefinedMovie).toBeDefined()
    })
    test('New movie should be updated', async() => {
        const testMovie= new Movie({ title: 'Black Adam', description: 'lorem ipsum', originalTitle: 'lorem ipsum', clasification: 'B2', duration: '339 min' })
        const addedMovie = await moviesRespository.moviesRepository.add(testMovie)

        const clonedMovie = cloneDeep({...addedMovie, title: chance.name(), description: chance.paragraph()})
        
        const updatedMovie = await moviesRespository.moviesRepository.update(clonedMovie)

        expect(updatedMovie).toEqual(clonedMovie)
    })
})