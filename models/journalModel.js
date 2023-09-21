const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    details: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const journal = mongoose.model('Journal', journalSchema);

module.exports = journal