const mongoose = require('mongoose')
const drugJSON = require('./json/drug-model.json')

const drugInfo = new mongoose.Schema(drugJSON)

const Drug = mongoose.model('DrugInfo', drugInfo, "druginfo")

module.exports = Drug