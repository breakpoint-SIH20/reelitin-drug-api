const express = require("express");
require("./db/mongoose");
const drugRouter = require("./routers/drug");

const app = express();

app.use(express.json());
app.use(drugRouter);

module.exports = app;
