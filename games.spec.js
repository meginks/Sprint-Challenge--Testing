const db = require('./data/dbConfig.js');
const games = require('./games.js');
const request = require('supertest');


describe('games', () => {
    afterEach(async () => {
        await db('games').truncate()
    })

    describe('insert/post req', () => {
        it('should insert games into DB', async () => {
            await db('games').insert({ title: 'chess', genre: 'boardgame', year: 1200})
            await db('games').insert({title: 'checkers', genre: 'boardgame', year: 200}) 

            const games = await db('games'); 
            expect(games).toHaveLength(2);  
        })
        it('should insert the provided game into the db',       async () => {
         let game = await db('games').insert({ title: 'hopscotch', genre: 'playground', year: 1700}) 
        expect(game).toEqual([1])

         game = await db('games').insert({ title: 'badminton', genre: 'court', year: 1800})
        expect(game).toEqual([2])
        })

        it('should return error if there is no entry', async () => {
            const errorGame = await db('games').insert({ }) 

            expect(errorGame).toReturn('res.status(500)');
        })
    })
    describe('GET endpoint for games', () => {
   
    it('should return games', () => {
                const response =  request(games).get('/')
                expect(response.status).toEqual(200);
            })
    
    it('should return games as an array of objects', () => {
            const response = request(games).get('/')
        expect(res.body).toBe(Array);
    })        

    it('should render empty array if there are no games', () => {
        const response = request(games).get('/')
        if (!res.body) {
            return expect(res.body).toBe([]);
        }
    })
    
        })
        
    
    })

// TESTS FOR POST GAMES ENDPOINT 
// describe('POST endpoint for games', () => {
//     it('should insert the provided games into games db', async () => {
//         await db('games').insert({ title: 'chess', genre: 'boardgame', year: 1200})
//         await db('games').insert({name: 'checkers', genre: 'boardgame', year: 200}) 

//         const games = await db('games'); 
//         expect(games).toHaveLength(2); 
//     }) 

//     it('should insert the provided game into the db', async () => {
//       let game = await db('games').insert({ title: 'hopscotch', genre: 'playground', year: 1700}) 
//       expect (game.title).toBe('hopscotch')
//       expect(game.genre)

//       game = await db('games').insert({ title: 'badminton', genre: 'court', year: 1800})
//       expect(game.title).toBe('badminton')
//       expect(game.genre).toBe('court')
//       expect(game.year).toBe(1800)
//     })
// })
