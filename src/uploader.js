const express = require('express')
const Drug = require('./models/drug')
const app = require('./app')

const data = require('./data.json')

Drug.insertMany(data, function(err) {
    console.log(err)
});
