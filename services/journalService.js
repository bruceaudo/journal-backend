const journalModel = require("../models/journalModel.js")

const getJournals = async (req, res) =>
{
    try {
        const journals = await journalModel.find({})
        res.status(200).json(journals)
    } catch (error) {
        res.status(500).send("Failed to retrieve journals")
    }
};

const postJournal = async (req, res) =>
{
    const body = req.body
    if (body.title === "" || body.details === "")
    {
        res.status(400).send("Title/Details cannot be empty")
    }

    try {
        const newJournal = await journalModel.create(body)
        res.status(201).send("Journal created successfully")
    } catch (error)
    {
        res.status(500).send("Failed to create new journal")
    }
}


module.exports = {
    getJournals,
    postJournal,
}