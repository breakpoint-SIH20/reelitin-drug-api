const mongoose = require("mongoose");

const connectionString = "mongodb+srv://zulu:zulu@reelitin.5jxp1.mongodb.net/reelitin";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
