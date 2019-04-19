
const express = require('express');
const {find, insert} = require('./games-helper.js');
const db = require('./data/dbConfig');
const router = express.Router(); 


// GET GAMES ENDPOINT

router.get('/', (req, res) => {
    find()
    .then( games => {
            res.status(200)
            .json(games)
        })
    .catch(error => {
        res.status(500)
        .json({
            message: `Rain on the parade! We cannot give you any games because of ${error}`
        })
    })
})

// POST GAMES ENDPOINT

router.post('/', async (req, res) => {
    try {
        const postGame = await db('games').insert(req.body);
        if (postGame) {res.status(201)
        .json(postGame) 
        } else {
            res.status(422)
            .json({ message: 'did not provide everything needed'})
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Sorry. We cannot add your game because of ${error}`
        })
    }
})

module.exports = router;