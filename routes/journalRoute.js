const express = require("express");
const { getJournals, postJournal } = require("../services/journalService");
const router = express.Router();

router.get('/', getJournals)
router.post('/', postJournal)

module.exports = router

