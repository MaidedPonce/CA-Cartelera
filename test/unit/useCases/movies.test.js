const { movie: { addMovieUseCase, getMovieById } } = require('../../../src/useCases')
const { v4: uuidv4 } = require('uuid')

describe('Movie use case', () => {
    const mockMovieRepo = {
        add: jest.fn(async movie => ({
            ...movie,
            id: uuidv4()
        })),
        getById: jest.fn(async id => ({
            id,
            title: 'Scream 1', 
            description: 'lorem ipsum', 
            originalTitle: 'lorem ipsum', 
            clasification: 'B2',
            duration: '330 min'
        }))
    }

    const dependencies = {
        moviesRepository: mockMovieRepo
    }
    describe('Add movie use case', () => {
        test('Movie should be added', async () => {
            const testMovieData = {
                title: 'Scream 7', 
                description: 'lorem ipsum', 
                originalTitle: 'lorem ipsum', 
                clasification: 'B2',
                duration: '339 min'
            }
            // dependencies has got our use repositories
            const addedMovie = await addMovieUseCase(dependencies).execute(testMovieData)
    
            expect(addedMovie).toBeDefined()
            expect(addedMovie.id).toBeDefined()
            expect(addedMovie.title).toBe(testMovieData.title)
            expect(addedMovie.description).toBe(testMovieData.description)
            expect(addedMovie.originalTitle).toBe(testMovieData.originalTitle)
            expect(addedMovie.clasification).toBe(testMovieData.clasification)
            expect(addedMovie.duration).toBe(testMovieData.duration)
    
            const call = mockMovieRepo.add.mock.calls[0][0]
            expect(call.id).toBeUndefined()
            expect(call.title).toBe(testMovieData.title)
            expect(call.description).toBe(testMovieData.description)
            expect(call.originalTitle).toBe(testMovieData.originalTitle)
            expect(call.clasification).toBe(testMovieData.clasification)
            expect(call.duration).toBe(testMovieData.duration)
        })
    })

    describe('Get movie use case', () => {
        test('Movie should be returned by id', async() => {
            const fakeId = uuidv4()
            const moviedById = await getMovieById(dependencies).execute({ id: fakeId })
            expect(moviedById).toBeDefined()
            expect(moviedById.id).toBe(fakeId)
            expect(moviedById.title).toBeDefined()
            expect(moviedById.description).toBeDefined()
            expect(moviedById.originalTitle).toBeDefined()
            expect(moviedById.clasification).toBeDefined()
            expect(moviedById.duration).toBeDefined()

            const expectedId = mockMovieRepo.getById.mock.calls[0][0]
            expect(expectedId).toBe(fakeId)
        })
    })
})