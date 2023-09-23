const journalModel = require("../models/journalModel.js")
const favouritesModel = require("../models/favouritesModel.js")

const getJournals = async (req, res) =>
{
    try {
        const journals = await journalModel.find({}).sort({createdAt: -1})
        res.status(200).json(journals)
    } catch (error) {
        res.status(500).send("Failed to retrieve journals")
    }
};

const getJournal = async (req, res) =>
{
    const id = req.params.id
    try {
        const journal = await journalModel.find({_id:id})
        res.status(200).json(journal)
    } catch (error) {
        res.status(500).send("Failed to retrieve journal")
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
        await journalModel.create(body)
        res.status(201).send("Journal created successfully")
    } catch (error)
    {
        res.status(500).send("Failed to create new journal")
    }
}



module.exports = {
    getJournals,
    postJournal,
    getJournal,
}