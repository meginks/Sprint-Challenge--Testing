const server = require('./server.js');
const request = require('supertest');
const db = require('../data/dbConfig.js');

describe('server.js', () => {
    it('should set up testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})


// TESTS FOR GET GAMES ENDPOINT
describe('GET endpoint for games', () => {
    it('should return a 200 when passing', () => {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })

    it('should return JSON', async () => {
        const res = await request(server).get('/')
        expect(res.type).toBe('application/JSON')
    })

    it('should return list of games', async () => {
        const res = await request(server).get('/')
    })

})




// TESTS FOR POST GAMES ENDPOINT 
describe('POST endpoint for games', () => {
    it('should insert the provided games into games db', async () => {
        await db.insert({ name: 'chess'})
        await db.insert({name: 'checkers'}) 

        const games = await db('games'); 
        expect(games).toHaveLength(2); 
    }) 

    it('should insert the provided game into the db', async () => {
      let game = await db.insert({ name: 'hopscotch'}) 
      expect (game.name).toBe('hopscotch')

      game = await db.insert({ name: 'badminton'})
      expect('game.name').toBe('badminton')
    })
})