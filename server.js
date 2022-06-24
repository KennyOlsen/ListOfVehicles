const express = require('express');
const app = express();

//pulls in cors library and allows access across domains
const cors = require("cors");
app.use(cors());

const methodFunctions = require("./methodFunctions");

//Pulls in body-parser so requests aren't undefined
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extended: true}))


app.get("/cars", (request, response) => {
    console.log("Get cars");
    response.send("Get Cars");
});

app.get("/car", (request, response) => {
    console.log("Get car");
    response.send("Get Car");
});

app.post("/car", (request, response) => {
    console.log("Post car");
    response.send(methodFunctions.post(request.body));
});

app.delete("/car", (request, response) => {
    console.log("Delete car");
    response.send("Delete car");
});

app.put("/car", (request, response) => {
    console.log("Put car");
    response.send("Put car");
});

app.patch("/car", (request, response) => {
    console.log("Patch car");
    response.send("Patch car");
});

module.exports = app;