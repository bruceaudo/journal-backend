const express = require('express')
const router = express.Router()
const {addToFavourites,getFavourites}=require("../services/favouritesService")

router.post('/:id', addToFavourites)
router.get('/', getFavourites)


module.exports = router