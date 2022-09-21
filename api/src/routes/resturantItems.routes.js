const express = require('express')
const router = express.Router()
const resturantItemController = require('../controllers/resturantItems.controller');

// Retrieve all resturantItems
router.get('/', resturantItemController.findAll);

// Create a new resturantItem
router.post('/', resturantItemController.create);

// Retrieve a single resturantItem with id
router.get('/:id', resturantItemController.findById);

// Update a resturantItem with id
router.put('/:id', resturantItemController.update);

// Delete a resturantItem with id
router.delete('/:id', resturantItemController.delete);

module.exports = router