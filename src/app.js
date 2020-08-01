const express = require("express");
require("./db/mongoose");
const drugRouter = require("./routers/drug");
const targetRouter = require("./routers/target");

const app = express();

app.use(express.json());
app.use(drugRouter);
app.use(targetRouter);

module.exports = app;
