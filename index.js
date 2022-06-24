const express = require('express');
const app = express();\

//pulls in cors library and allows access across domains
const cors = require("cors");
app.use(cors());


app.get("/cars", (request, response) => {
    console.log("Get cars");
});

app.get("/car", (request, response) => {
    console.log("Get car");
});

app.post("/car", (request, response) => {
    console.log("Post car");
});


app.delete("/car", (request, response) => {
    console.log("Delete car");
});

app.put("/car", (request, response) => {
    console.log("Put car");
});

app.patch("/car", (request, response) => {
    console.log("Patch car");
});