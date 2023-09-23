const favouritesModel = require('../models/favouritesModel')
const journalModel = require('../models/journalModel')

const addToFavourites = async (req, res) => {
  const id = req.params.id
  try {
    // Find the journal by ID
    const journal = await journalModel.findById(id)
    if (!journal) {
      return res.status(404).send('Journal cannot be found')
    }

    // Check if the journal is already in favorites
    const favoriteJournal = await favouritesModel.findOne({ journal: id })

    if (favoriteJournal) {
      // Remove the journal from favorites
      await favouritesModel.deleteOne({ journal: id })
      return res
        .status(200)
        .send('Journal removed from favourites successfully')
    }

    // Add the journal to favorites
    await favouritesModel.create({ journal: journal._id })
    return res.status(200).send('Journal added to favourites successfully')
  } catch (error) {
    console.error('Error:', error)
    return res
      .status(500)
      .send('Failed to add/remove journal to/from favourites')
  }
}


const getFavourites = async (req, res) => {
  try {
    const favourites = await favouritesModel.find({}).populate('journal')
    return res.status(200).json(favourites)
  } catch (error) {
    return res.status(500).send('Failed to get favourite')
  }
}

module.exports = {
  addToFavourites,
  getFavourites
}
