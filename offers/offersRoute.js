const express = require('express')

const _a_c = require('./offersController')
//const {checkUserPresentMiddle} = require('../controllers/auth/checkPresent')


const _r = express.Router()
_r.get('/getAllOffers' , _a_c.getAllOffers)
_r.post('/addOffer' , _a_c.addOffer)

module.exports = _r