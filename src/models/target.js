const mongoose = require("mongoose");
const targetJSON = require("./json/target-model.json");

const targetInfo = new mongoose.Schema(targetJSON);

const target = mongoose.model("TargetInfo", targetInfo, "targetinfo");

module.exports = target;
