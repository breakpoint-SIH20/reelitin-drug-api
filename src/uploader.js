const express = require("express");
const target = require("./models/target");
const app = require("./app");

const data = require("../targets.json");

target.insertMany(data, function (err) {
    console.log(err);
});
