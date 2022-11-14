const express = require('express')
const restaurant = require('../Controllers/Restaurant')
const restaurentByLocation = require('../Controllers/location')

const routes = express.Router();

routes.get('/',restaurant.getRestaurentsData)
routes.get('/:name',restaurant.getRestaurentsDataByName)
routes.post('/filter/:pageNo',restaurant.getRestaurentsDataFilter)
routes.post('/home',restaurentByLocation.getDataBylocation)

module.exports = routes;