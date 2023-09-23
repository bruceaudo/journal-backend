const express = require("express");
const { getJournals, postJournal, getJournal } = require("../services/journalService");
const router = express.Router();

router.get('/', getJournals)
router.get('/:id', getJournal)
router.post('/', postJournal)


module.exports = router

