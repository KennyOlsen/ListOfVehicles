const mongoose = require("mongoose");

const db = mongoose.connection;

function connect(user, password, host, port, db) {
    // mongodb:// is like https://          string to find mongo database
    const connectionString = `mongodb+srv://kennyOlsen:kenny)LSEN123@cluster0.ywnlx6p.mongodb.net/?retryWrites=true&w=majority`;

    //Connects to mongo using specified url, object makes connection backwards compatable
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

db.once("connecting", () => {
    console.log("Connecting to MongoDB");
});

db.once("connected", () => {
    console.log("Connected to MongoDB");
});

db.once("open", () => {
    console.log("Open Connection to MongoDB");

    callback();
});

db.once("error", () => {
    console.log("Error connecting to MongoDB");
});


//export functions

module.exports = {
    connect: connect
}