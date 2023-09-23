const mongoose = require('mongoose');

const favouritesSchema = new mongoose.Schema({
    journal: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Journal'
    }
});

const favourites = mongoose.model('Favourites', favouritesSchema);

module.exports = favourites